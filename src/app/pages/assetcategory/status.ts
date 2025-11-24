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

        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Status" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNewDialog()" />
                <p-button severity="secondary" label="Delete Selected" icon="pi pi-trash" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems || !selectedItems.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [globalFilterFields]="['statusName']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} statuses"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Status Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search statuses..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th pSortableColumn="statusName" style="min-width: 15rem">
                        Status Name
                        <p-sortIcon field="statusName" />
                    </th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-item>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="item" />
                    </td>
                    <td>{{ item.statusName }}</td>
                    <td>
                        <div class="action-buttons">
                            <p-button type="button" icon="pi pi-eye" class="p-button-rounded p-button-info" (click)="view(item)" pTooltip="View" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-warning" (click)="edit(item)" pTooltip="Edit" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-trash" class="p-button-rounded p-button-danger" (click)="delete(item)" pTooltip="Delete" tooltipPosition="top"></p-button>
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" style="text-align: center; padding: 2rem;">No statuses found</td>
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
        console.log('🎯 StatusComponent initialized');
        this.loadItems();
    }

    loadItems() {
        this.loading = true;
        console.log('🔍 Starting to load statuses...');
        console.log('📡 Endpoint: GET /api/status');

        this.assetService.getStatuses().subscribe({
            next: (data) => {
                console.log('✅ Status API Response:', data);
                console.log('📊 Number of statuses loaded:', data?.length || 0);
                if (data && data.length > 0) {
                    console.log('📋 First status:', data[0]);
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
        console.log('Selected items:', this.selectedItems);
    }

    openNewDialog() {
        Swal.fire({
            title: 'New Status',
            html: `
                <div style="text-align: left;">
                    <label style="display: block; margin-bottom: 8px;">Status Name</label>
                    <input type="text" id="statusName" class="swal2-input" placeholder="Enter status name" />
                </div>
            `,
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const statusName = (document.getElementById('statusName') as HTMLInputElement)?.value;
                if (!statusName) {
                    Swal.showValidationMessage('Status name is required');
                    return false;
                }
                return { statusName };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Status created successfully' });
                this.loadItems();
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
            html: `
                <div style="text-align: left;">
                    <label style="display: block; margin-bottom: 8px;">Status Name</label>
                    <input type="text" id="statusName" class="swal2-input" value="${item.statusName || ''}" />
                </div>
            `,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const statusName = (document.getElementById('statusName') as HTMLInputElement)?.value;
                if (!statusName) {
                    Swal.showValidationMessage('Status name is required');
                    return false;
                }
                return { statusName };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Status updated successfully' });
                this.loadItems();
            }
        });
    }

    delete(item: Status) {
        Swal.fire({
            title: 'Delete Status',
            text: `Are you sure you want to delete "${item.statusName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Status deleted successfully' });
                this.loadItems();
            }
        });
    }

    deleteSelected() {
        if (!this.selectedItems || this.selectedItems.length === 0) return;

        Swal.fire({
            title: 'Delete Selected',
            text: `Delete ${this.selectedItems.length} status(es)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Statuses deleted successfully' });
                this.loadItems();
                this.selectedItems = [];
            }
        });
    }

    exportCSV() {
        let csv = 'Status Name\n';
        this.items.forEach((item) => {
            csv += `"${item.statusName}"\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'statuses.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
