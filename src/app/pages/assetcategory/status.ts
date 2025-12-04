import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule, Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { AssetService, Status } from '../service/asset.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-status',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule],
    styleUrls: ['../../../assets/pages/_assetcategory.scss'],
    providers: [MessageService],
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
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search statuses..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="statusId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} statuses"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="statusName" style="min-width:20rem">Status <p-sortIcon field="statusName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.statusId }}</td>
                    <td>{{ row.statusName }}</td>
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
export class StatusComponent implements OnInit {
    items: Status[] = [];
    filteredItems: Status[] = [];
    selectedItems: Status[] = [];
    searchValue: string = '';
    loading: boolean = true;

    constructor(
        private messageService: MessageService,
        private assetService: AssetService
    ) {}

    ngOnInit() {
        this.loadItems();
    }

    loadItems() {
        this.loading = true;

        this.assetService.getStatuses().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                }
                this.items = data || [];
                this.filteredItems = [...this.items];
                this.loading = false;
            },
            error: (error) => {
                console.error('❌ Error loading statuses:', error);
                console.error('🚨 Error status code:', error?.status);
                console.error('💬 Error message:', error?.message);
                console.error('📝 Error details:', error?.error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load statuses: ' + (error?.error?.message || error?.message) });
                this.loading = false;
            }
        });
    }

    filter() {
        this.filteredItems = this.items.filter((item) => item.statusName?.toLowerCase().includes(this.searchValue.toLowerCase()));
    }

    onSelectionChange(event: any) {
    }

    openNewDialog() {
        Swal.fire({
            title: 'New Status',
            html: `<input type="text" id="statusName" class="swal2-input" placeholder="Status Name" />`,
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const statusName = (document.getElementById('statusName') as HTMLInputElement)?.value.trim();
                if (!statusName) {
                    Swal.showValidationMessage('Status name is required');
                    return false;
                }
                return { statusName };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.assetService.createStatus(res.value).subscribe({
                    next: (created) => {
                        this.items.push(created);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Status created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    view(item: Status) {
        Swal.fire({
            title: 'View Status',
            html: `
                <div style="text-align: left;">
                    <p><strong>Status Name:</strong> ${item.statusName}</p>
                </div>
            `,
            icon: 'info'
        });
    }

    edit(item: Status) {
        Swal.fire({
            title: 'Edit Status',
            html: `<input type="text" id="statusName" class="swal2-input" value="${item.statusName}" />`,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const statusName = (document.getElementById('statusName') as HTMLInputElement)?.value.trim();
                if (!statusName) {
                    Swal.showValidationMessage('Status name is required');
                    return false;
                }
                return { statusName };
            }
        }).then((res) => {
            if (res.isConfirmed && res.value) {
                this.assetService.updateStatus(item.statusId!, res.value).subscribe({
                    next: (updated) => {
                        const idx = this.items.findIndex((s) => s.statusId === updated.statusId);
                        if (idx > -1) this.items[idx] = updated;
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Status updated' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' })
                });
            }
        });
    }

    delete(item: Status) {
        Swal.fire({
            title: 'Delete Status',
            text: `Delete "${item.statusName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                this.assetService.deleteStatus(item.statusId!).subscribe({
                    next: () => {
                        this.items = this.items.filter((s) => s.statusId !== item.statusId);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Status deleted' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete failed' })
                });
            }
        });
    }

    deleteSelected() {
        if (!this.selectedItems?.length) return;
        Swal.fire({
            title: 'Delete Selected',
            text: `Delete ${this.selectedItems.length} status(es)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                const ids = this.selectedItems.map((s) => s.statusId!);
                Promise.all(ids.map((id) => this.assetService.deleteStatus(id).toPromise()))
                    .then(() => {
                        this.items = this.items.filter((s) => !ids.includes(s.statusId!));
                        this.filteredItems = [...this.items];
                        this.selectedItems = [];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected statuses deleted' });
                    })
                    .catch(() => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Bulk delete failed' }));
            }
        });
    }

    exportCSV() {
        let csv = 'Status Name,ID\n';
        this.items.forEach((item) => {
            csv += `${(item.statusName || '').replace(/,/g, ';')},${item.statusId}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'statuses.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}
