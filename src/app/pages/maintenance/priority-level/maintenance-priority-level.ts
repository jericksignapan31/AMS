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
import { MaintenanceService, PriorityLevel } from '../../service/maintenance.service';

@Component({
    selector: 'app-maintenance-priority-level',
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
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search levels..." />
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
            dataKey="priorityLevelId"
            [(selection)]="selected"
            (selectionChange)="onSelectionChange()"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} levels"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="priorityLevelName" style="min-width:20rem">Priority Level <p-sortIcon field="priorityLevelName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.priorityLevelId }}</td>
                    <td>{{ row.priorityLevelName }}</td>
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
                    <td colspan="4" class="text-center py-5">No priority levels found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class MaintenancePriorityLevelComponent implements OnInit {
    priorityLevels: PriorityLevel[] = [];
    filtered: PriorityLevel[] = [];
    selected: PriorityLevel[] = [];
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
        this.maintenanceService.getPriorityLevels().subscribe({
            next: (data) => {
                this.priorityLevels = data || [];
                this.filtered = [...this.priorityLevels];
                this.loading = false;
            },
            error: (err) => {
                console.error('Error loading priority levels', err);
                this.loading = false;
            }
        });
    }

    filter() {
        const q = this.searchValue.toLowerCase();
        this.filtered = this.priorityLevels.filter((p) => p.priorityLevelName.toLowerCase().includes(q));
    }

    onSelectionChange() {}

    openNew() {
        Swal.fire({
            title: 'New Priority Level',
            html: `<input id="plName" class="swal2-input" placeholder="Priority Level" />`,
            confirmButtonText: 'Create',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('plName') as HTMLInputElement).value.trim();
                if (!name) {
                    Swal.showValidationMessage('Priority level name is required');
                    return false;
                }
                return { priorityLevelName: name };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.maintenanceService.createPriorityLevel(res.value).subscribe({
                    next: (created) => {
                        this.priorityLevels.push(created);
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Priority level created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    view(row: PriorityLevel) {
        Swal.fire({ title: 'Priority Level', text: row.priorityLevelName });
    }

    edit(row: PriorityLevel) {
        Swal.fire({
            title: 'Edit Priority Level',
            html: `<input id="plName" class="swal2-input" value="${row.priorityLevelName}" />`,
            confirmButtonText: 'Update',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('plName') as HTMLInputElement).value.trim();
                if (!name) {
                    Swal.showValidationMessage('Priority level name is required');
                    return false;
                }
                return { priorityLevelName: name };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.maintenanceService.updatePriorityLevel(row.priorityLevelId, res.value).subscribe({
                    next: (updated) => {
                        const idx = this.priorityLevels.findIndex((p) => p.priorityLevelId === updated.priorityLevelId);
                        if (idx > -1) this.priorityLevels[idx] = updated;
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Priority level updated' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' })
                });
            }
        });
    }

    delete(row: PriorityLevel) {
        Swal.fire({
            title: 'Delete Priority Level',
            text: `Delete "${row.priorityLevelName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                this.maintenanceService.deletePriorityLevel(row.priorityLevelId).subscribe({
                    next: () => {
                        this.priorityLevels = this.priorityLevels.filter((p) => p.priorityLevelId !== row.priorityLevelId);
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Priority level deleted' });
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
            text: `Delete ${this.selected.length} level(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                const ids = this.selected.map((p) => p.priorityLevelId);
                Promise.all(ids.map((id) => this.maintenanceService.deletePriorityLevel(id).toPromise()))
                    .then(() => {
                        this.priorityLevels = this.priorityLevels.filter((p) => !ids.includes(p.priorityLevelId));
                        this.selected = [];
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected priority levels deleted' });
                    })
                    .catch(() => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Bulk delete failed' }));
            }
        });
    }

    exportCSV() {
        let csv = 'Priority Level,ID\n';
        this.priorityLevels.forEach((p) => (csv += `${p.priorityLevelName.replace(/,/g, ';')},${p.priorityLevelId}\n`));
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'priority-levels.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}
