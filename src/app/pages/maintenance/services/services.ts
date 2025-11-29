import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { MaintenanceService, ServiceMaintenance } from '../../service/maintenance.service';

@Component({
    selector: 'app-maintenance-services',
    standalone: true,
    imports: [CommonModule, TableModule, ToolbarModule, ButtonModule, InputTextModule, IconFieldModule, InputIconModule, FormsModule, ToastModule],
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
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search services..." />
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
            dataKey="serviceMaintenanceId"
            [(selection)]="selected"
            (selectionChange)="onSelectionChange()"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} services"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '90rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="serviceName" style="min-width:20rem">Service Name <p-sortIcon field="serviceName" /></th>
                    <th style="min-width:35rem">Description</th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.serviceMaintenanceId }}</td>
                    <td>{{ row.serviceName }}</td>
                    <td>{{ row.serviceDescription }}</td>
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
                    <td colspan="5" class="text-center py-5">No services found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class MaintenanceServicesComponent implements OnInit {
    services: ServiceMaintenance[] = [];
    filtered: ServiceMaintenance[] = [];
    selected: ServiceMaintenance[] = [];
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
        this.maintenanceService.getServiceMaintenances().subscribe({
            next: (data) => {
                this.services = data || [];
                this.filtered = [...this.services];
                this.loading = false;
            },
            error: (err) => {
                console.error('Error loading service maintenances', err);
                this.loading = false;
            }
        });
    }

    filter() {
        const q = this.searchValue.toLowerCase();
        this.filtered = this.services.filter((s) => s.serviceName.toLowerCase().includes(q) || s.serviceDescription.toLowerCase().includes(q));
    }

    onSelectionChange() {}

    openNew() {
        Swal.fire({
            title: 'New Service',
            html: `
              <input id="serviceName" class="swal2-input" placeholder="Service Name" />
              <textarea id="serviceDescription" class="swal2-textarea" placeholder="Description"></textarea>
            `,
            confirmButtonText: 'Create',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('serviceName') as HTMLInputElement).value.trim();
                const desc = (document.getElementById('serviceDescription') as HTMLTextAreaElement).value.trim();
                if (!name) {
                    Swal.showValidationMessage('Service name is required');
                    return false;
                }
                return { serviceName: name, serviceDescription: desc };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.maintenanceService.createServiceMaintenance(res.value).subscribe({
                    next: (created) => {
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Service created' });
                        this.services.push(created);
                        this.filter();
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    view(row: ServiceMaintenance) {
        Swal.fire({ title: 'Service', html: `<b>${row.serviceName}</b><br/><em>${row.serviceDescription || 'No description'}</em>` });
    }

    edit(row: ServiceMaintenance) {
        Swal.fire({
            title: 'Edit Service',
            html: `
              <input id="serviceName" class="swal2-input" value="${row.serviceName}" />
              <textarea id="serviceDescription" class="swal2-textarea">${row.serviceDescription || ''}</textarea>
            `,
            confirmButtonText: 'Update',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('serviceName') as HTMLInputElement).value.trim();
                const desc = (document.getElementById('serviceDescription') as HTMLTextAreaElement).value.trim();
                if (!name) {
                    Swal.showValidationMessage('Service name is required');
                    return false;
                }
                return { serviceName: name, serviceDescription: desc };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.maintenanceService.updateServiceMaintenance(row.serviceMaintenanceId, res.value).subscribe({
                    next: (updated) => {
                        const idx = this.services.findIndex((s) => s.serviceMaintenanceId === updated.serviceMaintenanceId);
                        if (idx > -1) this.services[idx] = updated;
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Service updated' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' })
                });
            }
        });
    }

    delete(row: ServiceMaintenance) {
        Swal.fire({
            title: 'Delete Service',
            text: `Delete "${row.serviceName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                this.maintenanceService.deleteServiceMaintenance(row.serviceMaintenanceId).subscribe({
                    next: () => {
                        this.services = this.services.filter((s) => s.serviceMaintenanceId !== row.serviceMaintenanceId);
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Service deleted' });
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
            text: `Delete ${this.selected.length} service(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                const ids = this.selected.map((s) => s.serviceMaintenanceId);
                Promise.all(ids.map((id) => this.maintenanceService.deleteServiceMaintenance(id).toPromise()))
                    .then(() => {
                        this.services = this.services.filter((s) => !ids.includes(s.serviceMaintenanceId));
                        this.selected = [];
                        this.filter();
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected services deleted' });
                    })
                    .catch(() => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Bulk delete failed' }));
            }
        });
    }

    exportCSV() {
        let csv = 'Service Name,Description,ID\n';
        this.services.forEach((s) => (csv += `${s.serviceName.replace(/,/g, ';')},${(s.serviceDescription || '').replace(/,/g, ';')},${s.serviceMaintenanceId}\n`));
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'maintenance-services.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}
