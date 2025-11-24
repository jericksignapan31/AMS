import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
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
    selector: 'app-color',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule],
    styleUrls: ['../../../assets/pages/_assetcategory.scss'],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Color" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNewDialog()" />
                <p-button severity="secondary" label="Delete Selected" icon="pi pi-trash" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems || !selectedItems.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [globalFilterFields]="['colorName']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            [rowHover]="true"
            dataKey="colorId"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} colors"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Color Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search colors..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th pSortableColumn="colorName" style="min-width: 15rem">
                        Color Name
                        <p-sortIcon field="colorName" />
                    </th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-item>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="item" />
                    </td>
                    <td>{{ item.colorName }}</td>
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
                    <td colspan="3" style="text-align: center; padding: 2rem;">No colors found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class ColorComponent implements OnInit {
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
        this.assetService.getColors().subscribe({
            next: (data) => {
                console.log('Color API Response:', data);
                this.items = data || [];
                this.filteredItems = [...this.items];
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading colors:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load colors' });
                this.loading = false;
            }
        });
    }

    filter() {
        this.filteredItems = this.items.filter((item) => item.colorName?.toLowerCase().includes(this.searchValue.toLowerCase()));
    }

    onSelectionChange(event: any) {
        console.log('Selected items:', this.selectedItems);
    }

    openNewDialog() {
        Swal.fire({
            title: 'New Color',
            html: `<input type="text" id="colorName" class="swal2-input" placeholder="Color Name" />`,
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('colorName') as HTMLInputElement)?.value;
                if (!name) {
                    Swal.showValidationMessage('Color name is required');
                    return false;
                }
                return { name };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Color created successfully' });
                this.loadItems();
            }
        });
    }

    view(item: any) {
        Swal.fire({ title: 'View Color', html: `<strong>Name:</strong> ${item.name}`, icon: 'info' });
    }

    edit(item: any) {
        Swal.fire({
            title: 'Edit Color',
            html: `<input type="text" id="colorName" class="swal2-input" value="${item.name}" />`,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('colorName') as HTMLInputElement)?.value;
                if (!name) {
                    Swal.showValidationMessage('Color name is required');
                    return false;
                }
                return { name };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Color updated successfully' });
                this.loadItems();
            }
        });
    }

    delete(item: any) {
        Swal.fire({
            title: 'Delete Color',
            text: `Are you sure you want to delete "${item.name}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Color deleted successfully' });
                this.loadItems();
            }
        });
    }

    deleteSelected() {
        if (!this.selectedItems || this.selectedItems.length === 0) return;

        Swal.fire({
            title: 'Delete Selected',
            text: `Delete ${this.selectedItems.length} color(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Colors deleted successfully' });
                this.loadItems();
                this.selectedItems = [];
            }
        });
    }

    exportCSV() {
        let csv = 'Color Name,Created Date\n';
        this.items.forEach((item) => {
            csv += `${item.name},${new Date(item.createdAt).toLocaleDateString()}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'colors.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
