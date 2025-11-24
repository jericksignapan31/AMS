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
import { UserService } from '../service/user.service';
import { AssetService } from '../service/asset.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-brand',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule],
    styleUrls: ['../../../assets/pages/_assetcategory.scss'],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Brand" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNewDialog()" />
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
            [globalFilterFields]="['brandName']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            [rowHover]="true"
            dataKey="brandId"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} brands"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Brand Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search brands..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th pSortableColumn="brandName" style="min-width: 15rem">
                        Brand Name
                        <p-sortIcon field="brandName" />
                    </th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-item>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="item" />
                    </td>
                    <td>{{ item.brandName }}</td>
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
                    <td colspan="3" style="text-align: center; padding: 2rem;">No brands found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class BrandComponent implements OnInit {
    items: any[] = [];
    filteredItems: any[] = [];
    selectedItems: any[] = [];
    searchValue: string = '';
    loading: boolean = true;

    constructor(
        private userService: UserService,
        private messageService: MessageService,
        private assetService: AssetService
    ) {}

    ngOnInit() {
        this.loadItems();
    }

    loadItems() {
        this.loading = true;
        this.assetService.getBrands().subscribe({
            next: (data) => {
                console.log('Brand API Response:', data);
                this.items = data || [];
                this.filteredItems = [...this.items];
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading brands:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load brands' });
                this.loading = false;
            }
        });
    }

    filter() {
        this.filteredItems = this.items.filter((item) => item.brandName?.toLowerCase().includes(this.searchValue.toLowerCase()));
    }

    onSelectionChange(event: any) {
        console.log('Selected items:', this.selectedItems);
    }

    openNewDialog() {
        Swal.fire({
            title: 'New Brand',
            html: `
                <input type="text" id="brandName" class="swal2-input" placeholder="Brand Name" />
            `,
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('brandName') as HTMLInputElement)?.value;
                if (!name) {
                    Swal.showValidationMessage('Brand name is required');
                    return false;
                }
                return { name };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // TODO: Call API to create brand
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Brand created successfully' });
                this.loadItems();
            }
        });
    }

    view(item: any) {
        Swal.fire({
            title: 'View Brand',
            html: `<strong>Name:</strong> ${item.name}`,
            icon: 'info'
        });
    }

    edit(item: any) {
        Swal.fire({
            title: 'Edit Brand',
            html: `
                <input type="text" id="brandName" class="swal2-input" value="${item.name}" />
            `,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('brandName') as HTMLInputElement)?.value;
                if (!name) {
                    Swal.showValidationMessage('Brand name is required');
                    return false;
                }
                return { name };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // TODO: Call API to update brand
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Brand updated successfully' });
                this.loadItems();
            }
        });
    }

    delete(item: any) {
        Swal.fire({
            title: 'Delete Brand',
            text: `Are you sure you want to delete "${item.name}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // TODO: Call API to delete brand
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Brand deleted successfully' });
                this.loadItems();
            }
        });
    }

    deleteSelected() {
        if (!this.selectedItems || this.selectedItems.length === 0) return;

        Swal.fire({
            title: 'Delete Selected',
            text: `Delete ${this.selectedItems.length} brand(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // TODO: Call API to delete selected brands
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Brands deleted successfully' });
                this.loadItems();
                this.selectedItems = [];
            }
        });
    }

    exportCSV() {
        // Generate CSV
        let csv = 'Brand Name,Created Date\n';
        this.items.forEach((item) => {
            csv += `${item.name},${new Date(item.createdAt).toLocaleDateString()}\n`;
        });

        // Download
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'brands.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
