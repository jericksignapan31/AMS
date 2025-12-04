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
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search brands..." />
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
            dataKey="brandId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} brands"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="brandName" style="min-width:20rem">Brand <p-sortIcon field="brandName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.brandId }}</td>
                    <td>{{ row.brandName }}</td>
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
                    <td colspan="4" class="text-center py-5">No brands found</td>
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
    }

    openNewDialog() {
        Swal.fire({
            title: 'New Brand',
            html: `<input type="text" id="brandName" class="swal2-input" placeholder="Brand Name" />`,
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const brandName = (document.getElementById('brandName') as HTMLInputElement)?.value.trim();
                if (!brandName) {
                    Swal.showValidationMessage('Brand name is required');
                    return false;
                }
                return { brandName };
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                this.assetService.createBrand(result.value).subscribe({
                    next: (created) => {
                        this.items.push(created);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Brand created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    view(item: any) {
        Swal.fire({ title: 'Brand', html: `<strong>Name:</strong> ${item.brandName}`, icon: 'info' });
    }

    edit(item: any) {
        Swal.fire({
            title: 'Edit Brand',
            html: `<input type="text" id="brandName" class="swal2-input" value="${item.brandName}" />`,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const brandName = (document.getElementById('brandName') as HTMLInputElement)?.value.trim();
                if (!brandName) {
                    Swal.showValidationMessage('Brand name is required');
                    return false;
                }
                return { brandName };
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                this.assetService.updateBrand(item.brandId, result.value).subscribe({
                    next: (updated) => {
                        const idx = this.items.findIndex((b) => b.brandId === updated.brandId);
                        if (idx > -1) this.items[idx] = updated;
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Brand updated' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' })
                });
            }
        });
    }

    delete(item: any) {
        Swal.fire({
            title: 'Delete Brand',
            text: `Delete "${item.brandName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                this.assetService.deleteBrand(item.brandId).subscribe({
                    next: () => {
                        this.items = this.items.filter((b) => b.brandId !== item.brandId);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Brand deleted' });
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
            text: `Delete ${this.selectedItems.length} brand(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                const ids = this.selectedItems.map((b) => b.brandId);
                Promise.all(ids.map((id) => this.assetService.deleteBrand(id).toPromise()))
                    .then(() => {
                        this.items = this.items.filter((b) => !ids.includes(b.brandId));
                        this.filteredItems = [...this.items];
                        this.selectedItems = [];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected brands deleted' });
                    })
                    .catch(() => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Bulk delete failed' }));
            }
        });
    }

    exportCSV() {
        let csv = 'Brand Name,ID\n';
        this.items.forEach((item) => {
            csv += `${(item.brandName || '').replace(/,/g, ';')},${item.brandId}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'brands.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}
