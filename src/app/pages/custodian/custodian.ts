import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TagModule } from 'primeng/tag';
import { FileUploadModule } from 'primeng/fileupload';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AssetService, InvCustlip, Color, Brand, Asset, Program, Status, Supplier, Location } from '../service/asset.service';
import Swal from 'sweetalert2';
import { TooltipModule } from 'primeng/tooltip';

interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
    selector: 'app-custodian',
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
        FileUploadModule,
        TooltipModule
    ],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Asset" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />
                <p-button severity="secondary" label="Delete Selected" icon="pi pi-trash" outlined (onClick)="deleteSelectedInvCustlips()" [disabled]="!selectedInvCustlips || !selectedInvCustlips.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="invCustlips()"
            [rows]="10"
            [columns]="cols"
            [paginator]="true"
            [globalFilterFields]="['PropertyNo', 'AssetName', 'Category', 'Status_id']"
            responsiveLayout="stack"
            breakpoint="960px"
            [(selection)]="selectedInvCustlips"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} assets"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            styleClass="p-datatable-customers"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Custodian</h5>
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search assets..." />
                    </p-iconfield>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th pSortableColumn="PropertyNo" style="min-width: 10rem">
                        Property No
                        <p-sortIcon field="PropertyNo" />
                    </th>
                    <th pSortableColumn="AssetName" style="min-width: 15rem">
                        Asset Name
                        <p-sortIcon field="AssetName" />
                    </th>
                    <th pSortableColumn="Category" style="min-width: 10rem">
                        Category
                        <p-sortIcon field="Category" />
                    </th>
                    <th pSortableColumn="FoundCluster" style="min-width: 12rem">
                        Found Cluster
                        <p-sortIcon field="FoundCluster" />
                    </th>
                    <th pSortableColumn="IssuedTo" style="min-width: 12rem">
                        Issued To
                        <p-sortIcon field="IssuedTo" />
                    </th>
                    <th pSortableColumn="Status_id" style="min-width: 10rem">
                        Status
                        <p-sortIcon field="Status_id" />
                    </th>
                    <th pSortableColumn="DateAcquired" style="min-width: 10rem">
                        Date Acquired
                        <p-sortIcon field="DateAcquired" />
                    </th>
                    <th style="min-width: 8rem">QR Code</th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-asset>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="asset" />
                    </td>
                    <td style="width:14%; min-width:10rem;">
                        <span class="p-column-title">Property No</span>
                        {{ invCustlip.PropertyNo }}
                    </td>
                    <td style="width:14%; min-width:15rem;">
                        <span class="p-column-title">Description</span>
                        {{ invCustlip.Description }}
                    </td>
                    <td style="width:12%; min-width:8rem;">
                        <span class="p-column-title">Quantity</span>
                        {{ invCustlip.Quantity }}
                    </td>
                    <td style="width:10%; min-width:8rem;">
                        <span class="p-column-title">UoM</span>
                        {{ invCustlip.UoM }}
                    </td>
                    <td style="width:12%; min-width:10rem;">
                        <span class="p-column-title">Brand</span>
                        {{ getBrandName(invCustlip.brand_id) }}
                    </td>
                    <td style="width:12%; min-width:10rem;">
                        <span class="p-column-title">Color</span>
                        {{ getColorName(invCustlip.color_id) }}
                    </td>
                    <td style="width:14%; min-width:10rem;">
                        <span class="p-column-title">Date Acquired</span>
                        {{ invCustlip.DateAcquired }}
                    </td>
                    <td>
                        <div class="flex align-items-center gap-2">
                            <p-button icon="pi pi-pencil" [rounded]="true" [outlined]="true" (click)="editInvCustlip(invCustlip)" pTooltip="Edit InvCustlip" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteInvCustlip(invCustlip)" pTooltip="Delete InvCustlip" />
                        </div>
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-dialog [(visible)]="invCustlipDialog" [style]="{ width: '800px' }" header="InvCustlip Details" [modal]="true">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-6">
                        <label for="propertyNo" class="block font-bold mb-2">Property No</label>
                        <input type="text" pInputText id="propertyNo" [(ngModel)]="invCustlip.PropertyNo" required autofocus fluid />
                        <small class="text-red-500" *ngIf="submitted && !invCustlip.PropertyNo">Property No is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="quantity" class="block font-bold mb-2">Quantity</label>
                        <input type="number" pInputText id="quantity" [(ngModel)]="invCustlip.Quantity" required fluid />
                        <small class="text-red-500" *ngIf="submitted && !invCustlip.Quantity">Quantity is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="uom" class="block font-bold mb-2">Unit of Measure</label>
                        <input type="text" pInputText id="uom" [(ngModel)]="invCustlip.UoM" required fluid />
                        <small class="text-red-500" *ngIf="submitted && !invCustlip.UoM">Unit of Measure is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="brandId" class="block font-bold mb-2">Brand</label>
                        <p-select id="brandId" [(ngModel)]="invCustlip.brand_id" [options]="brands" optionLabel="BrandName" optionValue="brand_id" placeholder="Select a brand" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="colorId" class="block font-bold mb-2">Color</label>
                        <p-select id="colorId" [(ngModel)]="invCustlip.color_id" [options]="colors" optionLabel="Description" optionValue="color_id" placeholder="Select a color" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="dateAcquired" class="block font-bold mb-2">Date Acquired</label>
                        <input type="date" pInputText id="dateAcquired" [(ngModel)]="invCustlip.DateAcquired" fluid />
                    </div>
                    <div class="col-span-12">
                        <label for="description" class="block font-bold mb-2">Description</label>
                        <textarea id="description" pTextarea [(ngModel)]="invCustlip.Description" rows="3" required fluid></textarea>
                        <small class="text-red-500" *ngIf="submitted && !invCustlip.Description">Description is required.</small>
                    </div>
                    <div class="col-span-12">
                        <label for="specs" class="block font-bold mb-2">Specifications</label>
                        <div class="grid grid-cols-12 gap-2 mb-4 border p-4 rounded">
                            <div class="col-span-6">
                                <label for="height" class="block font-bold mb-2">Height</label>
                                <input type="text" pInputText id="height" [(ngModel)]="invCustlip.height" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="width" class="block font-bold mb-2">Width</label>
                                <input type="text" pInputText id="width" [(ngModel)]="invCustlip.width" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="package" class="block font-bold mb-2">Package</label>
                                <input type="text" pInputText id="package" [(ngModel)]="invCustlip.package" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="material" class="block font-bold mb-2">Material</label>
                                <input type="text" pInputText id="material" [(ngModel)]="invCustlip.material" fluid />
                            </div>
                        </div>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" text (click)="hideDialog()" />
                <p-button label="Save" icon="pi pi-check" (click)="saveInvCustlip()" />
            </ng-template>
        </p-dialog>

        <p-dialog [(visible)]="invCustlipDialog" [style]="{ width: '800px' }" header="InvCustlip Details" [modal]="true">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-6">
                        <label for="propertyNoInv" class="block font-bold mb-2">Property No</label>
                        <input type="text" pInputText id="propertyNoInv" [(ngModel)]="invCustlip.PropertyNo" required autofocus fluid />
                        <small class="text-red-500" *ngIf="submitted && !invCustlip.PropertyNo">Property No is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="quantity" class="block font-bold mb-2">Quantity</label>
                        <input type="number" pInputText id="quantity" [(ngModel)]="invCustlip.Quantity" required fluid />
                        <small class="text-red-500" *ngIf="submitted && !invCustlip.Quantity">Quantity is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="uom" class="block font-bold mb-2">Unit of Measure</label>
                        <input type="text" pInputText id="uom" [(ngModel)]="invCustlip.UoM" required fluid />
                        <small class="text-red-500" *ngIf="submitted && !invCustlip.UoM">Unit of Measure is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="colorId" class="block font-bold mb-2">Color</label>
                        <p-select id="colorId" [(ngModel)]="invCustlip.color_id" [options]="colors" optionLabel="Description" optionValue="color_id" placeholder="Select a color" fluid> </p-select>
                    </div>
                    <div class="col-span-12">
                        <label for="description" class="block font-bold mb-2">Description</label>
                        <textarea id="description" pTextarea [(ngModel)]="invCustlip.Description" rows="3" fluid required></textarea>
                        <small class="text-red-500" *ngIf="submitted && !invCustlip.Description">Description is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="brandId" class="block font-bold mb-2">Brand</label>
                        <p-select id="brandId" [(ngModel)]="invCustlip.brand_id" [options]="brands" optionLabel="BrandName" optionValue="brand_id" placeholder="Select a brand" fluid> </p-select>
                    </div>
                    <div class="col-span-6">
                        <label for="height" class="block font-bold mb-2">Height</label>
                        <input type="number" pInputText id="height" [(ngModel)]="invCustlip.height" step="0.01" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="width" class="block font-bold mb-2">Width</label>
                        <input type="number" pInputText id="width" [(ngModel)]="invCustlip.width" step="0.01" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="package" class="block font-bold mb-2">Package</label>
                        <input type="text" pInputText id="package" [(ngModel)]="invCustlip.package" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="material" class="block font-bold mb-2">Material</label>
                        <input type="text" pInputText id="material" [(ngModel)]="invCustlip.material" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="invNo" class="block font-bold mb-2">Inventory No</label>
                        <input type="text" pInputText id="invNo" [(ngModel)]="invCustlip.InvNo" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="dateAcquiredInv" class="block font-bold mb-2">Date Acquired</label>
                        <input type="date" pInputText id="dateAcquiredInv" [(ngModel)]="invCustlip.DateAcquired" fluid />
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" text (click)="hideDialog()" />
                <p-button label="Save" icon="pi pi-check" (click)="saveInvCustlip()" />
            </ng-template>
        </p-dialog>

        <p-confirmdialog [style]="{ width: '450px' }" />
    `,
    providers: [MessageService, AssetService, ConfirmationService]
})
export class CustodianComponent implements OnInit {
    invCustlipDialog: boolean = false;

    invCustlips = signal<InvCustlip[]>([]);

    invCustlip: InvCustlip = {};

    selectedInvCustlips: InvCustlip[] | null = null;

    submitted: boolean = false;

    statuses: any[] = [];
    categories: any[] = [];
    activeOptions: any[] = [];

    // Reference data for dropdowns
    colors: Color[] = [];
    brands: Brand[] = [];

    @ViewChild('dt') dt!: Table;

    exportColumns!: ExportColumn[];

    cols!: Column[];

    constructor(
        private assetService: AssetService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    exportCSV() {
        this.dt.exportCSV();
    }

    ngOnInit() {
        this.loadInvCustlips();
        this.loadReferenceData();

        this.cols = [
            { field: 'PropertyNo', header: 'Property No' },
            { field: 'InvNo', header: 'Invoice No' },
            { field: 'Description', header: 'Description' },
            { field: 'Quantity', header: 'Quantity' },
            { field: 'UoM', header: 'Unit' },
            { field: 'brand_id', header: 'Brand' },
            { field: 'color_id', header: 'Color' },
            { field: 'DateAcquired', header: 'Date Acquired' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    loadInvCustlips() {
        this.assetService.getInvCustlips().subscribe({
            next: (data) => {
                this.invCustlips.set(data);
            },
            error: (error) => {
                console.error('Error loading InvCustlips:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to load InvCustlips. Please try again.',
                    confirmButtonColor: '#EF4444'
                });
            }
        });
    }

    initializeDropdowns() {
        this.statuses = [
            { label: 'ACTIVE', value: 'ACTIVE' },
            { label: 'MAINTENANCE', value: 'MAINTENANCE' },
            { label: 'DISPOSED', value: 'DISPOSED' },
            { label: 'LOST', value: 'LOST' }
        ];

        this.categories = [
            { label: 'IT Equipment', value: 'IT Equipment' },
            { label: 'Furniture', value: 'Furniture' },
            { label: 'Vehicle', value: 'Vehicle' },
            { label: 'Office Supplies', value: 'Office Supplies' },
            { label: 'Tools', value: 'Tools' }
        ];

        this.activeOptions = [
            { label: 'Yes', value: 'Y' },
            { label: 'No', value: 'N' }
        ];

        // Load reference data from API
        this.loadReferenceData();

        this.cols = [
            { field: 'PropertyNo', header: 'Property No' },
            { field: 'InvNo', header: 'Invoice No' },
            { field: 'Description', header: 'Description' },
            { field: 'Quantity', header: 'Quantity' },
            { field: 'UoM', header: 'Unit' },
            { field: 'brand_id', header: 'Brand' },
            { field: 'color_id', header: 'Color' },
            { field: 'DateAcquired', header: 'Date Acquired' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    loadReferenceData() {
        // Load colors
        this.assetService.getColors().subscribe({
            next: (data) => {
                this.colors = data;
            },
            error: (error) => {
                console.error('Error loading colors:', error);
            }
        });

        // Load brands
        this.assetService.getBrands().subscribe({
            next: (data) => {
                this.brands = data;
            },
            error: (error) => {
                console.error('Error loading brands:', error);
            }
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    openNew() {
        this.invCustlip = {
            specs: {}
        };
        this.submitted = false;
        this.invCustlipDialog = true;
    }

    editInvCustlip(invCustlip: InvCustlip) {
        this.invCustlip = { ...invCustlip };
        if (!this.invCustlip.specs) {
            this.invCustlip.specs = {};
        }
        this.invCustlipDialog = true;
    }

    deleteSelectedInvCustlips() {
        if (!this.selectedInvCustlips || this.selectedInvCustlips.length === 0) return;

        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected InvCustlips?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const deletePromises = this.selectedInvCustlips!.map((item) => this.assetService.deleteInvCustlip(item.inv_custlip_id!).toPromise());

                Promise.all(deletePromises)
                    .then(() => {
                        this.loadInvCustlips();
                        this.selectedInvCustlips = null;
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'InvCustlips deleted successfully',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    })
                    .catch((error) => {
                        console.error('Error deleting InvCustlips:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to delete InvCustlips. Please try again.',
                            confirmButtonColor: '#EF4444'
                        });
                    });
            }
        });
    }

    hideDialog() {
        this.invCustlipDialog = false;
        this.submitted = false;
    }

    deleteInvCustlip(invCustlip: InvCustlip) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + invCustlip.Description + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.assetService.deleteInvCustlip(invCustlip.inv_custlip_id!).subscribe({
                    next: () => {
                        this.loadInvCustlips();
                        this.invCustlip = { specs: {} };
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'InvCustlip deleted successfully',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    },
                    error: (error) => {
                        console.error('Error deleting InvCustlip:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to delete InvCustlip. Please try again.',
                            confirmButtonColor: '#EF4444'
                        });
                    }
                });
            }
        });
    }

    generatePropertyNo(): string {
        const prefix = 'PROP';
        const timestamp = new Date().getTime().toString().slice(-6);
        return prefix + timestamp;
    }

    getBrandName(brandId?: string | number): string {
        if (!brandId) return '';
        const brand = this.brands.find((b: Brand) => b.brand_id === String(brandId));
        return brand?.BrandName || '';
    }

    getColorName(colorId?: string | number): string {
        if (!colorId) return '';
        const color = this.colors.find((c: Color) => c.color_id === String(colorId));
        return color?.Description || '';
    }

    generateQrCode(): string {
        const timestamp = new Date().getTime().toString();
        const random = Math.random().toString(36).substring(2, 8).toUpperCase();
        return 'QR' + random + timestamp.slice(-4);
    }

    getStatusSeverity(status: string) {
        switch (status) {
            case 'ACTIVE':
                return 'success';
            case 'MAINTENANCE':
                return 'warn';
            case 'DISPOSED':
                return 'danger';
            case 'LOST':
                return 'danger';
            default:
                return 'info';
        }
    }

    saveInvCustlip() {
        this.submitted = true;

        if (!this.invCustlip.PropertyNo?.trim() || !this.invCustlip.Description?.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Property No and Description are required fields.',
                confirmButtonColor: '#3B82F6'
            });
            return;
        }

        // Generate PropertyNo if creating new record
        if (!this.invCustlip.inv_custlip_id) {
            this.invCustlip.PropertyNo = this.generatePropertyNo();
        }

        const saveOperation = this.invCustlip.inv_custlip_id ? this.assetService.updateInvCustlip(this.invCustlip.inv_custlip_id, this.invCustlip) : this.assetService.createInvCustlip(this.invCustlip);

        saveOperation.subscribe({
            next: () => {
                this.loadInvCustlips();
                this.invCustlipDialog = false;
                this.invCustlip = { specs: {} };
                this.submitted = false;

                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: this.invCustlip.inv_custlip_id ? 'InvCustlip updated successfully' : 'InvCustlip created successfully',
                    timer: 2000,
                    showConfirmButton: false
                });
            },
            error: (error) => {
                console.error('Error saving InvCustlip:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to save InvCustlip. Please try again.',
                    confirmButtonColor: '#EF4444'
                });
            }
        });
    }
}
