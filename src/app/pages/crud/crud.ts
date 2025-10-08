import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { Asset, AssetService, Location, Supplier, Program, Status } from '../service/asset.service';
import Swal from 'sweetalert2';

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
    selector: 'app-crud',
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
                <p-button severity="secondary" label="Delete Selected" icon="pi pi-trash" outlined (onClick)="deleteSelectedAssets()" [disabled]="!selectedAssets || !selectedAssets.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="assets()"
            [rows]="10"
            [columns]="cols"
            [paginator]="true"
            [globalFilterFields]="['PropertyNo', 'AssetName', 'Category', 'Status_id']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedAssets"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} assets"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Asset Management System</h5>
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
            <ng-template #body let-asset>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="asset" />
                    </td>
                    <td>{{ asset.PropertyNo }}</td>
                    <td>{{ asset.AssetName }}</td>
                    <td>{{ asset.Category }}</td>
                    <td>{{ asset.FoundCluster }}</td>
                    <td>{{ asset.IssuedTo }}</td>
                    <td>
                        <p-tag [value]="asset.Status_id" [severity]="getStatusSeverity(asset.Status_id)" />
                    </td>
                    <td>{{ asset.DateAcquired }}</td>
                    <td>
                        <img *ngIf="asset.QrCode" [src]="asset.QrCode" alt="QR Code" class="w-8 h-8 rounded border cursor-pointer hover:opacity-75 transition-opacity" (click)="viewQrCode(asset.QrCode)" pTooltip="Click to view QR Code" />
                        <span *ngIf="!asset.QrCode" class="text-muted-color text-sm">No QR Code</span>
                    </td>
                    <td>
                        <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true" (click)="editAsset(asset)" />
                        <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteAsset(asset)" />
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-dialog [(visible)]="assetDialog" [style]="{ width: '800px' }" header="Asset Details" [modal]="true">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-6">
                        <label for="propertyNo" class="block font-bold mb-2">Property No</label>
                        <input type="text" pInputText id="propertyNo" [(ngModel)]="asset.PropertyNo" required autofocus fluid />
                        <small class="text-red-500" *ngIf="submitted && !asset.PropertyNo">Property No is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="category" class="block font-bold mb-2">Category</label>
                        <p-select [(ngModel)]="asset.Category" inputId="category" [options]="categories" optionLabel="label" optionValue="value" placeholder="Select Category" fluid />
                    </div>
                    <div class="col-span-12">
                        <label for="assetName" class="block font-bold mb-2">Asset Name</label>
                        <input type="text" pInputText id="assetName" [(ngModel)]="asset.AssetName" required fluid />
                        <small class="text-red-500" *ngIf="submitted && !asset.AssetName">Asset Name is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="foundCluster" class="block font-bold mb-2">Found Cluster</label>
                        <input type="text" pInputText id="foundCluster" [(ngModel)]="asset.FoundCluster" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="locationId" class="block font-bold mb-2">Location</label>
                        <p-select id="locationId" [(ngModel)]="asset.Location_id" [options]="locations" optionLabel="LocationName" optionValue="id" placeholder="Select a location" fluid> </p-select>
                    </div>
                    <div class="col-span-6">
                        <label for="supplierId" class="block font-bold mb-2">Supplier</label>
                        <p-select id="supplierId" [(ngModel)]="asset.Supplier_id" [options]="suppliers" optionLabel="SupplierName" optionValue="id" placeholder="Select a supplier" fluid> </p-select>
                    </div>
                    <div class="col-span-6">
                        <label for="programId" class="block font-bold mb-2">Program</label>
                        <p-select id="programId" [(ngModel)]="asset.Program_id" [options]="programs" optionLabel="ProgramName" optionValue="id" placeholder="Select a program" fluid> </p-select>
                    </div>
                    <div class="col-span-12">
                        <label for="purpose" class="block font-bold mb-2">Purpose</label>
                        <textarea id="purpose" pTextarea [(ngModel)]="asset.Purpose" rows="3" fluid></textarea>
                    </div>
                    <div class="col-span-6">
                        <label for="dateAcquired" class="block font-bold mb-2">Date Acquired</label>
                        <input type="date" pInputText id="dateAcquired" [(ngModel)]="asset.DateAcquired" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="issuedTo" class="block font-bold mb-2">Issued To</label>
                        <input type="text" pInputText id="issuedTo" [(ngModel)]="asset.IssuedTo" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="status" class="block font-bold mb-2">Status</label>
                        <p-select [(ngModel)]="asset.Status_id" inputId="status" [options]="statusOptions" optionLabel="StatusName" optionValue="id" placeholder="Select Status" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="active" class="block font-bold mb-2">Active</label>
                        <p-select [(ngModel)]="asset.Active" inputId="active" [options]="activeOptions" optionLabel="label" optionValue="value" placeholder="Select" fluid />
                    </div>
                    <div class="col-span-12">
                        <label for="qrCode" class="block font-bold mb-2">QR Code Image</label>
                        <p-fileupload mode="basic" name="qrCode" accept="image/*" [maxFileSize]="1000000" (onSelect)="onQrCodeSelect($event)" chooseLabel="Choose QR Code Image" [auto]="true"> </p-fileupload>
                        <div *ngIf="asset.QrCode" class="mt-3">
                            <img [src]="asset.QrCode" alt="QR Code" class="max-w-32 max-h-32 border rounded cursor-pointer hover:opacity-75 transition-opacity" (click)="viewQrCode(asset.QrCode)" pTooltip="Click to view QR Code" />
                            <p-button icon="pi pi-times" severity="danger" size="small" [rounded]="true" class="ml-2" (click)="removeQrCode()" pTooltip="Remove QR Code"> </p-button>
                        </div>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" text (click)="hideDialog()" />
                <p-button label="Save" icon="pi pi-check" (click)="saveAsset()" />
            </ng-template>
        </p-dialog>

        <p-dialog [(visible)]="qrCodeViewerDialog" [style]="{ width: '500px' }" header="QR Code Viewer" [modal]="true">
            <ng-template #content>
                <div class="text-center">
                    <img [src]="selectedQrCode" alt="QR Code" class="max-w-full h-auto border rounded shadow-lg" />
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Close" icon="pi pi-times" (click)="closeQrCodeViewer()" />
                <p-button label="Download" icon="pi pi-download" severity="secondary" (click)="downloadQrCode()" />
            </ng-template>
        </p-dialog>

        <p-confirmdialog [style]="{ width: '450px' }" />
    `,
    providers: [MessageService, AssetService, ConfirmationService]
})
export class Crud implements OnInit {
    assetDialog: boolean = false;
    qrCodeViewerDialog: boolean = false;

    assets = signal<Asset[]>([]);

    asset: Asset = {};
    selectedQrCode: string = '';

    selectedAssets: Asset[] | null = null;

    submitted: boolean = false;

    statuses: any[] = [];
    categories: any[] = [];
    activeOptions: any[] = [];

    // Reference data for dropdowns
    locations: Location[] = [];
    suppliers: Supplier[] = [];
    programs: Program[] = [];
    statusOptions: Status[] = [];

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
        this.loadAssets();
        this.initializeDropdowns();
    }

    loadAssets() {
        this.assetService.getAssets().subscribe({
            next: (data) => {
                this.assets.set(data);
            },
            error: (error) => {
                console.error('Error loading assets:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to load assets. Please try again.',
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
            { field: 'AssetName', header: 'Asset Name' },
            { field: 'Category', header: 'Category' },
            { field: 'FoundCluster', header: 'Found Cluster' },
            { field: 'IssuedTo', header: 'Issued To' },
            { field: 'Status_id', header: 'Status' },
            { field: 'DateAcquired', header: 'Date Acquired' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    loadReferenceData() {
        // Load locations
        this.assetService.getLocations().subscribe({
            next: (data) => {
                this.locations = data;
            },
            error: (error) => {
                console.error('Error loading locations:', error);
            }
        });

        // Load suppliers
        this.assetService.getSuppliers().subscribe({
            next: (data) => {
                this.suppliers = data;
            },
            error: (error) => {
                console.error('Error loading suppliers:', error);
            }
        });

        // Load programs
        this.assetService.getPrograms().subscribe({
            next: (data) => {
                this.programs = data;
            },
            error: (error) => {
                console.error('Error loading programs:', error);
            }
        });

        // Load statuses from API
        this.assetService.getStatuses().subscribe({
            next: (data) => {
                this.statusOptions = data;
            },
            error: (error) => {
                console.error('Error loading statuses:', error);
            }
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    openNew() {
        this.asset = {};
        this.submitted = false;
        this.assetDialog = true;
    }

    editAsset(asset: Asset) {
        this.asset = { ...asset };
        this.assetDialog = true;
    }

    deleteSelectedAssets() {
        if (!this.selectedAssets || this.selectedAssets.length === 0) return;

        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected assets?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const deletePromises = this.selectedAssets!.map((asset) => this.assetService.deleteAsset(asset.id!).toPromise());

                Promise.all(deletePromises)
                    .then(() => {
                        this.loadAssets();
                        this.selectedAssets = null;
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Assets deleted successfully',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    })
                    .catch((error) => {
                        console.error('Error deleting assets:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to delete assets. Please try again.',
                            confirmButtonColor: '#EF4444'
                        });
                    });
            }
        });
    }

    hideDialog() {
        this.assetDialog = false;
        this.submitted = false;
    }

    deleteAsset(asset: Asset) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + asset.AssetName + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.assetService.deleteAsset(asset.id!).subscribe({
                    next: () => {
                        this.loadAssets();
                        this.asset = {};
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Asset deleted successfully',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    },
                    error: (error) => {
                        console.error('Error deleting asset:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to delete asset. Please try again.',
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

    onQrCodeSelect(event: any) {
        const file = event.files[0];
        if (file) {
            // Check if file is an image
            if (!file.type.startsWith('image/')) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid File Type',
                    text: 'Please select an image file for QR Code.',
                    confirmButtonColor: '#EF4444'
                });
                return;
            }

            // Check file size (max 1MB)
            if (file.size > 1000000) {
                Swal.fire({
                    icon: 'error',
                    title: 'File Too Large',
                    text: 'QR Code image must be less than 1MB.',
                    confirmButtonColor: '#EF4444'
                });
                return;
            }

            // Convert to base64
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.asset.QrCode = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    removeQrCode() {
        this.asset.QrCode = '';
    }

    viewQrCode(qrCodeData: string) {
        if (qrCodeData) {
            this.selectedQrCode = qrCodeData;
            this.qrCodeViewerDialog = true;
        }
    }

    closeQrCodeViewer() {
        this.qrCodeViewerDialog = false;
        this.selectedQrCode = '';
    }

    downloadQrCode() {
        if (this.selectedQrCode) {
            // Create a temporary anchor element to trigger download
            const link = document.createElement('a');
            link.href = this.selectedQrCode;
            link.download = `qr-code-${new Date().getTime()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            Swal.fire({
                icon: 'success',
                title: 'Downloaded!',
                text: 'QR Code image has been downloaded.',
                timer: 2000,
                showConfirmButton: false
            });
        }
    }

    saveAsset() {
        this.submitted = true;

        if (!this.asset.PropertyNo?.trim() || !this.asset.AssetName?.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Property No and Asset Name are required fields.',
                confirmButtonColor: '#3B82F6'
            });
            return;
        }

        // Generate PropertyNo if creating new asset
        if (!this.asset.id) {
            this.asset.PropertyNo = this.generatePropertyNo();
        }

        const saveOperation = this.asset.id ? this.assetService.updateAsset(this.asset.id, this.asset) : this.assetService.createAsset(this.asset);

        saveOperation.subscribe({
            next: () => {
                this.loadAssets();
                this.assetDialog = false;
                this.asset = {};
                this.submitted = false;

                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: this.asset.id ? 'Asset updated successfully' : 'Asset created successfully',
                    timer: 2000,
                    showConfirmButton: false
                });
            },
            error: (error) => {
                console.error('Error saving asset:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to save asset. Please try again.',
                    confirmButtonColor: '#EF4444'
                });
            }
        });
    }
}
