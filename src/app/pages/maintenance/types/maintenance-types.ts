import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { MaintenanceService, MaintenanceType } from '../../service/maintenance.service';

@Component({
    selector: 'app-maintenance-types',
    standalone: true,
    imports: [CommonModule, TableModule, ToolbarModule, InputTextModule, IconFieldModule, InputIconModule, FormsModule, ButtonModule, ToastModule],
    providers: [MessageService],
    template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selected.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search types..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filtered"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="maintenanceTypeId"
            [(selection)]="selected"
            (selectionChange)="onSelectionChange()"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} types"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="maintenanceTypeName" style="min-width:20rem">Type Name <p-sortIcon field="maintenanceTypeName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.maintenanceTypeId }}</td>qq
                    <td>{{ row.maintenanceTypeName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No maintenance types found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class MaintenanceTypesComponent implements OnInit {
    types: MaintenanceType[] = [];
    filtered: MaintenanceType[] = [];
    selected: MaintenanceType[] = [];
    loading = false;
    searchValue = '';

    constructor(
        private maintenanceService: MaintenanceService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.load();
    }

    load() {
        this.loading = true;
        this.maintenanceService.getMaintenanceTypes().subscribe({
            next: (data) => {
                this.types = data || [];
                this.filtered = [...this.types];
                this.loading = false;
            },
            error: (err) => {
                console.error('Error loading maintenance types', err);
                this.loading = false;
            }
        });
    }

    filter() {
        const q = this.searchValue.toLowerCase();
        this.filtered = this.types.filter((t) => t.maintenanceTypeName.toLowerCase().includes(q));
    }

    onSelectionChange() {}

    openNew() {
        Swal.fire({
            title: 'New Maintenance Type',
            html: `<input id="mtName" class="swal2-input" placeholder="Type Name" />`,
            confirmButtonText: 'Create',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('mtName') as HTMLInputElement).value.trim();
                if (!name) {
                    Swal.showValidationMessage('Type name is required');
                    return false;
                }
                return { maintenanceTypeName: name };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.maintenanceService.createMaintenanceType(res.value).subscribe({
                    next: (created) => {
                        this.types.push(created);
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Type created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    view(row: MaintenanceType) {
        Swal.fire({ title: 'Maintenance Type', text: row.maintenanceTypeName });
    }

    edit(row: MaintenanceType) {
        Swal.fire({
            title: 'Edit Maintenance Type',
            html: `<input id="mtName" class="swal2-input" value="${row.maintenanceTypeName}" />`,
            confirmButtonText: 'Update',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('mtName') as HTMLInputElement).value.trim();
                if (!name) {
                    Swal.showValidationMessage('Type name is required');
                    return false;
                }
                return { maintenanceTypeName: name };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.maintenanceService.updateMaintenanceType(row.maintenanceTypeId, res.value).subscribe({
                    next: (updated) => {
                        const idx = this.types.findIndex((t) => t.maintenanceTypeId === updated.maintenanceTypeId);
                        if (idx > -1) this.types[idx] = updated;
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Type updated' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' })
                });
            }
        });
    }

    delete(row: MaintenanceType) {
        Swal.fire({
            title: 'Delete Maintenance Type',
            text: `Delete "${row.maintenanceTypeName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                this.maintenanceService.deleteMaintenanceType(row.maintenanceTypeId).subscribe({
                    next: () => {
                        this.types = this.types.filter((t) => t.maintenanceTypeId !== row.maintenanceTypeId);
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Type deleted' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete failed' })
                });
            }
        });
    }

    deleteSelected() {
        if (!this.selected.length) return;
        Swal.fire({
            title: 'Delete Selected',
            text: `Delete ${this.selected.length} type(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                const ids = this.selected.map((t) => t.maintenanceTypeId);
                Promise.all(ids.map((id) => this.maintenanceService.deleteMaintenanceType(id).toPromise()))
                    .then(() => {
                        this.types = this.types.filter((t) => !ids.includes(t.maintenanceTypeId));
                        this.selected = [];
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected types deleted' });
                    })
                    .catch(() => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Bulk delete failed' }));
            }
        });
    }

    exportCSV() {
        let csv = 'Type Name,ID\n';
        this.types.forEach((t) => (csv += `${t.maintenanceTypeName.replace(/,/g, ';')},${t.maintenanceTypeId}\n`));
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'maintenance-types.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}
