import { Component, OnInit, signal, ViewChild, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AssetService } from '../../service/asset.service';
import { MaintenanceService } from '../../service/maintenance.service';
import Swal from 'sweetalert2';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'app-requestmaintenance',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule,
        TooltipModule
    ],
    styles: [],
    template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search maintenance requests..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            #dt
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="requestId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} maintenance requests"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="maintenanceName" style="min-width:20rem">Maintenance Name <p-sortIcon field="maintenanceName" /></th>
                    <th style="min-width:15rem">Status</th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.requestId }}</td>
                    <td>{{ row.maintenanceName }}</td>
                    <td><p-tag [value]="row.maintenanceStatus?.requestStatusName" /></td>
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
                    <td colspan="4" class="text-center py-5">No maintenance requests found</td>
                </tr>
            </ng-template>
        </p-table>
    `,
    providers: [MessageService, AssetService, ConfirmationService]
})
export class RequestmaintenanceComponent implements OnInit {
    @ViewChild('dt') dt!: Table;

    items: any[] = [];
    filteredItems: any[] = [];
    selectedItems: any[] = [];
    searchValue: string = '';
    loading: boolean = true;

    constructor(
        private maintenanceService: MaintenanceService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.loadItems();
    }

    loadItems() {
        this.loading = true;
        this.maintenanceService.getMaintenanceRequests?.()?.subscribe({
            next: (data: any[]) => {
                console.log('Maintenance Requests API Response:', data);
                this.items = data || [];
                this.filteredItems = [...this.items];
                this.loading = false;
            },
            error: (error: any) => {
                console.error('Error loading maintenance requests:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load maintenance requests' });
                this.loading = false;
            }
        });
    }

    filter() {
        this.filteredItems = this.items.filter((item) => item.maintenanceName?.toLowerCase().includes(this.searchValue.toLowerCase()));
    }

    onSelectionChange(event: any) {
        console.log('Selected items:', this.selectedItems);
    }

    openNewDialog() {
        Swal.fire({
            title: 'New Maintenance Request',
            html: `<input type="text" id="maintenanceName" class="swal2-input" placeholder="Maintenance Name" />`,
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const maintenanceName = (document.getElementById('maintenanceName') as HTMLInputElement)?.value.trim();
                if (!maintenanceName) {
                    Swal.showValidationMessage('Maintenance name is required');
                    return false;
                }
                return { maintenanceName };
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                this.maintenanceService.createMaintenanceRequest(result.value).subscribe({
                    next: (created) => {
                        this.items.push(created);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Maintenance request created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    view(item: any) {
        Swal.fire({ title: 'Maintenance Request', html: `<strong>Name:</strong> ${item.maintenanceName}`, icon: 'info' });
    }

    edit(item: any) {
        Swal.fire({
            title: 'Edit Maintenance Request',
            html: `<input type="text" id="maintenanceName" class="swal2-input" value="${item.maintenanceName}" />`,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const maintenanceName = (document.getElementById('maintenanceName') as HTMLInputElement)?.value.trim();
                if (!maintenanceName) {
                    Swal.showValidationMessage('Maintenance name is required');
                    return false;
                }
                return { maintenanceName };
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Maintenance request updated' });
                this.loadItems();
            }
        });
    }

    delete(item: any) {
        Swal.fire({
            title: 'Delete Maintenance Request',
            text: `Delete "${item.maintenanceName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Maintenance request deleted' });
                this.loadItems();
            }
        });
    }

    deleteSelected() {
        if (!this.selectedItems?.length) return;
        Swal.fire({
            title: 'Delete Selected',
            text: `Delete ${this.selectedItems.length} maintenance request(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected maintenance requests deleted' });
                this.loadItems();
            }
        });
    }

    exportCSV() {
        let csv = 'Maintenance Name,Status,ID\n';
        this.items.forEach((item) => {
            csv += `${(item.maintenanceName || '').replace(/,/g, ';')},${item.maintenanceStatus?.requestStatusName || 'N/A'},${item.requestId}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'maintenance-requests.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}
