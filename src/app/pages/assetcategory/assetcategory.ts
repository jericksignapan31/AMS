import { Component, Directive, OnInit } from '@angular/core';
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

const sharedImports = [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule];

@Directive()
abstract class AssetCategoryBase implements OnInit {
    items: any[] = [];
    filteredItems: any[] = [];
    selectedItems: any[] = [];
    searchValue: string = '';
    loading: boolean = true;
    abstract itemLabel: string;

    constructor(
        protected userService: UserService,
        protected messageService: MessageService,
        protected assetService: AssetService
    ) {}

    ngOnInit() {
        this.loadItems();
    }

    loadItems() {
        this.loading = true;
        this.items = [];
        this.filteredItems = [];
    }

    filter() {
        this.filteredItems = this.items.filter((item) => {
            const name = this.getItemName(item);
            return name?.toLowerCase().includes(this.searchValue.toLowerCase());
        });
    }

    getItemName(item: any): string {
        // Override in child classes as needed
        return item.name || item.brandName || item.locationName || item.supplierName || item.programName || item.colorName || '';
    }

    onSelectionChange(event: any) {
        console.log('Selected items:', this.selectedItems);
    }

    openNewDialog() {
        Swal.fire({
            title: 'New ' + this.itemLabel,
            html: '<input type="text" id="itemName" class="swal2-input" placeholder="' + this.itemLabel + ' Name" />',
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('itemName') as HTMLInputElement)?.value;
                if (!name) {
                    Swal.showValidationMessage(this.itemLabel + ' name is required');
                    return false;
                }
                return { name };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: this.itemLabel + ' created successfully' });
                this.loadItems();
            }
        });
    }

    view(item: any) {
        const name = this.getItemName(item);
        Swal.fire({ title: 'View ' + this.itemLabel, html: '<strong>Name:</strong> ' + name, icon: 'info' });
    }

    edit(item: any) {
        const currentName = this.getItemName(item);
        Swal.fire({
            title: 'Edit ' + this.itemLabel,
            html: '<input type="text" id="itemName" class="swal2-input" value="' + currentName + '" />',
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const name = (document.getElementById('itemName') as HTMLInputElement)?.value;
                if (!name) {
                    Swal.showValidationMessage(this.itemLabel + ' name is required');
                    return false;
                }
                return { name };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: this.itemLabel + ' updated successfully' });
                this.loadItems();
            }
        });
    }

    delete(item: any) {
        const name = this.getItemName(item);
        Swal.fire({
            title: 'Delete ' + this.itemLabel,
            text: 'Are you sure you want to delete "' + name + '"?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: this.itemLabel + ' deleted successfully' });
                this.loadItems();
            }
        });
    }

    deleteSelected() {
        if (!this.selectedItems || this.selectedItems.length === 0) return;

        Swal.fire({
            title: 'Delete Selected',
            text: 'Delete ' + this.selectedItems.length + ' item(s)?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Items deleted successfully' });
                this.loadItems();
                this.selectedItems = [];
            }
        });
    }

    exportCSV() {
        let csv = this.itemLabel + ' Name\n';
        this.items.forEach((item) => {
            const name = this.getItemName(item);
            csv += name + '\n';
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = this.itemLabel.toLowerCase() + '.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

@Component({
    selector: 'app-program',
    standalone: true,
    imports: sharedImports,
    styleUrls: ['../../../assets/pages/_assetcategory.scss'],
    providers: [MessageService],
    template: `
        <p-toast />
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Program" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNewDialog()" />
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
            [globalFilterFields]="['ProgramName']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} items"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Program Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search programs..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem"><p-tableHeaderCheckbox /></th>
                    <th pSortableColumn="programName" style="min-width: 15rem">Program Name<p-sortIcon field="programName" /></th>
                    <th pSortableColumn="description" style="min-width: 15rem">Description<p-sortIcon field="description" /></th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-item>
                <tr>
                    <td style="width: 3rem"><p-tableCheckbox [value]="item" /></td>
                    <td>{{ item.programName }}</td>
                    <td>{{ item.description }}</td>
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
                    <td colspan="4" style="text-align: center; padding: 2rem;">No items found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class ProgramComponent extends AssetCategoryBase {
    itemLabel = 'Program';

    constructor(userService: UserService, messageService: MessageService, assetService: AssetService) {
        super(userService, messageService, assetService);
    }

    override loadItems() {
        this.loading = true;
        this.assetService.getPrograms().subscribe({
            next: (data) => {
                console.log('Program API Response:', data);
                this.items = data || [];
                this.filteredItems = [...this.items];
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading programs:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load programs' });
                this.loading = false;
            }
        });
    }

    override getItemName(item: any): string {
        return item.programName || item.name || '';
    }
}

@Component({
    selector: 'app-supplier',
    standalone: true,
    imports: sharedImports,
    styleUrls: ['../../../assets/pages/_assetcategory.scss'],
    providers: [MessageService],
    template: `
        <p-toast />
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Supplier" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNewDialog()" />
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
            [globalFilterFields]="['SupplierName']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} items"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Supplier Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search suppliers..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem"><p-tableHeaderCheckbox /></th>
                    <th pSortableColumn="supplierName" style="min-width: 15rem">Supplier Name<p-sortIcon field="supplierName" /></th>
                    <th pSortableColumn="contactInfo" style="min-width: 15rem">Contact Info<p-sortIcon field="contactInfo" /></th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-item>
                <tr>
                    <td style="width: 3rem"><p-tableCheckbox [value]="item" /></td>
                    <td>{{ item.supplierName }}</td>
                    <td>{{ item.contactInfo }}</td>
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
                    <td colspan="4" style="text-align: center; padding: 2rem;">No items found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class SupplierComponent extends AssetCategoryBase {
    itemLabel = 'Supplier';

    constructor(userService: UserService, messageService: MessageService, assetService: AssetService) {
        super(userService, messageService, assetService);
    }

    override loadItems() {
        this.loading = true;
        this.assetService.getSuppliers().subscribe({
            next: (data) => {
                console.log('Supplier API Response:', data);
                this.items = data || [];
                this.filteredItems = [...this.items];
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading suppliers:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load suppliers' });
                this.loading = false;
            }
        });
    }

    override getItemName(item: any): string {
        return item.supplierName || item.name || '';
    }
}

@Component({
    selector: 'app-location',
    standalone: true,
    imports: sharedImports,
    styleUrls: ['../../../assets/pages/_assetcategory.scss'],
    providers: [MessageService],
    template: `
        <p-toast />
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Location" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNewDialog()" />
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
            [globalFilterFields]="['LocationName']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} items"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Location Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search locations..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem"><p-tableHeaderCheckbox /></th>
                    <th pSortableColumn="locationName" style="min-width: 15rem">Location Name<p-sortIcon field="locationName" /></th>
                    <th pSortableColumn="description" style="min-width: 15rem">Description<p-sortIcon field="description" /></th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-item>
                <tr>
                    <td style="width: 3rem"><p-tableCheckbox [value]="item" /></td>
                    <td>{{ item.locationName }}</td>
                    <td>{{ item.description }}</td>
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
                    <td colspan="4" style="text-align: center; padding: 2rem;">No items found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class LocationComponent extends AssetCategoryBase {
    itemLabel = 'Location';

    constructor(userService: UserService, messageService: MessageService, assetService: AssetService) {
        super(userService, messageService, assetService);
    }

    override loadItems() {
        this.loading = true;
        this.assetService.getLocations().subscribe({
            next: (data) => {
                console.log('Location API Response:', data);
                this.items = data || [];
                this.filteredItems = [...this.items];
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading locations:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load locations' });
                this.loading = false;
            }
        });
    }

    override getItemName(item: any): string {
        return item.locationName || item.name || '';
    }
}
