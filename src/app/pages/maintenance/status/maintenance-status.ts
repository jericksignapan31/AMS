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
import { MaintenanceService, RequestStatus } from '../../service/maintenance.service';

@Component({
    selector: 'app-maintenance-status',
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
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search status..." />
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
            dataKey="requestStatusId"
            [(selection)]="selected"
            (selectionChange)="onSelectionChange()"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} statuses"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="requestStatusName" style="min-width:20rem">Status Name <p-sortIcon field="requestStatusName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.requestStatusId }}</td>
                    <td>{{ row.requestStatusName }}</td>
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
                    <td colspan="4" class="text-center py-5">No statuses found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class MaintenanceStatusComponent implements OnInit {
    statuses: RequestStatus[] = [];
    filtered: RequestStatus[] = [];
    selected: RequestStatus[] = [];
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
        this.maintenanceService.getRequestStatuses().subscribe({
            next: (data) => {
                this.statuses = data || [];
                this.filtered = [...this.statuses];
                this.loading = false;
            },
            error: (err) => {
                console.error('Error loading request statuses', err);
                this.loading = false;
            }
        });
    }

    filter() {
        const q = this.searchValue.toLowerCase();
        this.filtered = this.statuses.filter((s) => s.requestStatusName.toLowerCase().includes(q));
    }

    onSelectionChange() {}

    openNew() {
        Swal.fire({
            title: 'New Status',
            html: `<input id="statusName" class="swal2-input" placeholder="Status Name" />`,
            confirmButtonText: 'Create',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('statusName') as HTMLInputElement).value.trim();
                if (!name) {
                    Swal.showValidationMessage('Status name is required');
                    return false;
                }
                return { requestStatusName: name };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.maintenanceService.createRequestStatus(res.value).subscribe({
                    next: (created) => {
                        this.statuses.push(created);
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Status created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    view(row: RequestStatus) {
        Swal.fire({ title: 'Status', text: row.requestStatusName });
    }

    edit(row: RequestStatus) {
        Swal.fire({
            title: 'Edit Status',
            html: `<input id="statusName" class="swal2-input" value="${row.requestStatusName}" />`,
            confirmButtonText: 'Update',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('statusName') as HTMLInputElement).value.trim();
                if (!name) {
                    Swal.showValidationMessage('Status name is required');
                    return false;
                }
                return { requestStatusName: name };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.maintenanceService.updateRequestStatus(row.requestStatusId, res.value).subscribe({
                    next: (updated) => {
                        const idx = this.statuses.findIndex((s) => s.requestStatusId === updated.requestStatusId);
                        if (idx > -1) this.statuses[idx] = updated;
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Status updated' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' })
                });
            }
        });
    }

    delete(row: RequestStatus) {
        Swal.fire({
            title: 'Delete Status',
            text: `Delete "${row.requestStatusName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                this.maintenanceService.deleteRequestStatus(row.requestStatusId).subscribe({
                    next: () => {
                        this.statuses = this.statuses.filter((s) => s.requestStatusId !== row.requestStatusId);
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Status deleted' });
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
            text: `Delete ${this.selected.length} status(es)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                const ids = this.selected.map((s) => s.requestStatusId);
                Promise.all(ids.map((id) => this.maintenanceService.deleteRequestStatus(id).toPromise()))
                    .then(() => {
                        this.statuses = this.statuses.filter((s) => !ids.includes(s.requestStatusId));
                        this.selected = [];
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected statuses deleted' });
                    })
                    .catch(() => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Bulk delete failed' }));
            }
        });
    }

    exportCSV() {
        let csv = 'Status Name,ID\n';
        this.statuses.forEach((s) => (csv += `${s.requestStatusName.replace(/,/g, ';')},${s.requestStatusId}\n`));
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'maintenance-status.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}
