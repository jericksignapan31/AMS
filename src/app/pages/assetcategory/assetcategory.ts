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
    }

    openNewDialog() {}

    view(item: any) {
        const name = this.getItemName(item);
        Swal.fire({ title: 'View ' + this.itemLabel, html: '<strong>Name:</strong> ' + name, icon: 'info' });
    }

    edit(item: any) {}

    delete(item: any) {}

    deleteSelected() {}

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
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search programs..." />
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
            dataKey="programId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} programs"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="programName" style="min-width:20rem">Program <p-sortIcon field="programName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.programId }}</td>
                    <td>{{ row.programName }}</td>
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
                    <td colspan="4" class="text-center py-5">No programs found</td>
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
        return item.programName || '';
    }

    override openNewDialog() {
        Swal.fire({
            title: 'New Program',
            html: `<input id="programName" class="swal2-input" placeholder="Program Name" />
                   <textarea id="description" class="swal2-textarea" placeholder="Description"></textarea>`,
            confirmButtonText: 'Create',
            showCancelButton: true,
            preConfirm: () => {
                const programName = (document.getElementById('programName') as HTMLInputElement).value.trim();
                const description = (document.getElementById('description') as HTMLTextAreaElement).value.trim();
                if (!programName) {
                    Swal.showValidationMessage('Program name is required');
                    return false;
                }
                return { programName, description };
            }
        }).then((r) => {
            if (r.isConfirmed && r.value) {
                this.assetService.createProgram(r.value).subscribe({
                    next: (created) => {
                        this.items.push(created);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Program created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    override edit(item: any) {
        Swal.fire({
            title: 'Edit Program',
            html: `<input id="programName" class="swal2-input" value="${item.programName}" />
                   <textarea id="description" class="swal2-textarea">${item.description || ''}</textarea>`,
            confirmButtonText: 'Update',
            showCancelButton: true,
            preConfirm: () => {
                const programName = (document.getElementById('programName') as HTMLInputElement).value.trim();
                const description = (document.getElementById('description') as HTMLTextAreaElement).value.trim();
                if (!programName) {
                    Swal.showValidationMessage('Program name is required');
                    return false;
                }
                return { programName, description };
            }
        }).then((r) => {
            if (r.isConfirmed && r.value) {
                this.assetService.updateProgram(item.programId, r.value).subscribe({
                    next: (updated) => {
                        const idx = this.items.findIndex((p) => p.programId === updated.programId);
                        if (idx > -1) this.items[idx] = updated;
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Program updated' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' })
                });
            }
        });
    }

    override delete(item: any) {
        Swal.fire({ title: 'Delete Program', text: `Delete "${item.programName}"?`, icon: 'warning', showCancelButton: true, confirmButtonText: 'Delete' }).then((r) => {
            if (r.isConfirmed) {
                this.assetService.deleteProgram(item.programId).subscribe({
                    next: () => {
                        this.items = this.items.filter((p) => p.programId !== item.programId);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Program deleted' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete failed' })
                });
            }
        });
    }

    override deleteSelected() {
        if (!this.selectedItems?.length) return;
        Swal.fire({ title: 'Delete Selected', text: `Delete ${this.selectedItems.length} program(s)?`, icon: 'warning', showCancelButton: true, confirmButtonText: 'Delete' }).then((r) => {
            if (r.isConfirmed) {
                const ids = this.selectedItems.map((p) => p.programId);
                Promise.all(ids.map((id) => this.assetService.deleteProgram(id).toPromise()))
                    .then(() => {
                        this.items = this.items.filter((p) => !ids.includes(p.programId));
                        this.filteredItems = [...this.items];
                        this.selectedItems = [];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected programs deleted' });
                    })
                    .catch(() => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Bulk delete failed' }));
            }
        });
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
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search suppliers..." />
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
            dataKey="supplierId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} suppliers"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="supplierName" style="min-width:20rem">Supplier <p-sortIcon field="supplierName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.supplierId }}</td>
                    <td>{{ row.supplierName }}</td>
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
                    <td colspan="4" class="text-center py-5">No suppliers found</td>
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
        return item.supplierName || '';
    }

    override openNewDialog() {
        Swal.fire({
            title: 'New Supplier',
            html: `<input id="supplierName" class="swal2-input" placeholder="Supplier Name" />
                   <textarea id="contactInfo" class="swal2-textarea" placeholder="Contact Info"></textarea>`,
            confirmButtonText: 'Create',
            showCancelButton: true,
            preConfirm: () => {
                const supplierName = (document.getElementById('supplierName') as HTMLInputElement).value.trim();
                const contactInfo = (document.getElementById('contactInfo') as HTMLTextAreaElement).value.trim();
                if (!supplierName) {
                    Swal.showValidationMessage('Supplier name is required');
                    return false;
                }
                return { supplierName, contactInfo };
            }
        }).then((r) => {
            if (r.isConfirmed && r.value) {
                this.assetService.createSupplier(r.value).subscribe({
                    next: (created) => {
                        this.items.push(created);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Supplier created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    override edit(item: any) {
        Swal.fire({
            title: 'Edit Supplier',
            html: `<input id="supplierName" class="swal2-input" value="${item.supplierName}" />
                   <textarea id="contactInfo" class="swal2-textarea">${item.contactInfo || ''}</textarea>`,
            confirmButtonText: 'Update',
            showCancelButton: true,
            preConfirm: () => {
                const supplierName = (document.getElementById('supplierName') as HTMLInputElement).value.trim();
                const contactInfo = (document.getElementById('contactInfo') as HTMLTextAreaElement).value.trim();
                if (!supplierName) {
                    Swal.showValidationMessage('Supplier name is required');
                    return false;
                }
                return { supplierName, contactInfo };
            }
        }).then((r) => {
            if (r.isConfirmed && r.value) {
                this.assetService.updateSupplier(item.supplierId, r.value).subscribe({
                    next: (updated) => {
                        const idx = this.items.findIndex((s) => s.supplierId === updated.supplierId);
                        if (idx > -1) this.items[idx] = updated;
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Supplier updated' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' })
                });
            }
        });
    }

    override delete(item: any) {
        Swal.fire({ title: 'Delete Supplier', text: `Delete "${item.supplierName}"?`, icon: 'warning', showCancelButton: true, confirmButtonText: 'Delete' }).then((r) => {
            if (r.isConfirmed) {
                this.assetService.deleteSupplier(item.supplierId).subscribe({
                    next: () => {
                        this.items = this.items.filter((s) => s.supplierId !== item.supplierId);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Supplier deleted' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete failed' })
                });
            }
        });
    }

    override deleteSelected() {
        if (!this.selectedItems?.length) return;
        Swal.fire({ title: 'Delete Selected', text: `Delete ${this.selectedItems.length} supplier(s)?`, icon: 'warning', showCancelButton: true, confirmButtonText: 'Delete' }).then((r) => {
            if (r.isConfirmed) {
                const ids = this.selectedItems.map((s) => s.supplierId);
                Promise.all(ids.map((id) => this.assetService.deleteSupplier(id).toPromise()))
                    .then(() => {
                        this.items = this.items.filter((s) => !ids.includes(s.supplierId));
                        this.filteredItems = [...this.items];
                        this.selectedItems = [];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected suppliers deleted' });
                    })
                    .catch(() => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Bulk delete failed' }));
            }
        });
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
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search locations..." />
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
            dataKey="locationId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} locations"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="locationName" style="min-width:20rem">Location <p-sortIcon field="locationName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.locationId }}</td>
                    <td>{{ row.locationName }}</td>
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
                    <td colspan="4" class="text-center py-5">No locations found</td>
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
        return item.locationName || '';
    }

    override openNewDialog() {
        Swal.fire({
            title: 'New Location',
            html: `<input id="locationName" class="swal2-input" placeholder="Location Name" />
                  <textarea id="description" class="swal2-textarea" placeholder="Description"></textarea>`,
            confirmButtonText: 'Create',
            showCancelButton: true,
            preConfirm: () => {
                const locationName = (document.getElementById('locationName') as HTMLInputElement).value.trim();
                const description = (document.getElementById('description') as HTMLTextAreaElement).value.trim();
                if (!locationName) {
                    Swal.showValidationMessage('Location name is required');
                    return false;
                }
                return { locationName, description };
            }
        }).then((r) => {
            if (r.isConfirmed && r.value) {
                this.assetService.createLocation(r.value).subscribe({
                    next: (created) => {
                        this.items.push(created);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Location created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    override edit(item: any) {
        Swal.fire({
            title: 'Edit Location',
            html: `<input id="locationName" class="swal2-input" value="${item.locationName}" />
                  <textarea id="description" class="swal2-textarea">${item.description || ''}</textarea>`,
            confirmButtonText: 'Update',
            showCancelButton: true,
            preConfirm: () => {
                const locationName = (document.getElementById('locationName') as HTMLInputElement).value.trim();
                const description = (document.getElementById('description') as HTMLTextAreaElement).value.trim();
                if (!locationName) {
                    Swal.showValidationMessage('Location name is required');
                    return false;
                }
                return { locationName, description };
            }
        }).then((r) => {
            if (r.isConfirmed && r.value) {
                this.assetService.updateLocation(item.locationId, r.value).subscribe({
                    next: (updated) => {
                        const idx = this.items.findIndex((l) => l.locationId === updated.locationId);
                        if (idx > -1) this.items[idx] = updated;
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Location updated' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Update failed' })
                });
            }
        });
    }

    override delete(item: any) {
        Swal.fire({ title: 'Delete Location', text: `Delete "${item.locationName}"?`, icon: 'warning', showCancelButton: true, confirmButtonText: 'Delete' }).then((r) => {
            if (r.isConfirmed) {
                this.assetService.deleteLocation(item.locationId).subscribe({
                    next: () => {
                        this.items = this.items.filter((l) => l.locationId !== item.locationId);
                        this.filteredItems = [...this.items];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Location deleted' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete failed' })
                });
            }
        });
    }

    override deleteSelected() {
        if (!this.selectedItems?.length) return;
        Swal.fire({ title: 'Delete Selected', text: `Delete ${this.selectedItems.length} location(s)?`, icon: 'warning', showCancelButton: true, confirmButtonText: 'Delete' }).then((r) => {
            if (r.isConfirmed) {
                const ids = this.selectedItems.map((l) => l.locationId);
                Promise.all(ids.map((id) => this.assetService.deleteLocation(id).toPromise()))
                    .then(() => {
                        this.items = this.items.filter((l) => !ids.includes(l.locationId));
                        this.filteredItems = [...this.items];
                        this.selectedItems = [];
                        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected locations deleted' });
                    })
                    .catch(() => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Bulk delete failed' }));
            }
        });
    }
}
