import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule, Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { AssetService, Asset, Program, Supplier, Location, Color, Brand, Status } from '../service/asset.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-assets',
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
        TagModule,
        InputIconModule,
        IconFieldModule,
        TooltipModule,
        DialogModule,
        SelectModule,
        InputNumberModule,
        TextareaModule,
        FileUploadModule
    ],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Asset" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />
                <p-button severity="secondary" label="Delete Selected" icon="pi pi-trash" outlined (onClick)="deleteSelected()" [disabled]="!selectedAssets || !selectedAssets.length" />
            </ng-template>
            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="assets"
            [rows]="10"
            [paginator]="true"
            [globalFilterFields]="['propertyNumber', 'assetName', 'category', 'foundCluster', 'issuedTo']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedAssets"
            (selectionChange)="onSelectionChange($event)"
            [rowHover]="true"
            dataKey="assetId"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} assets"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Asset Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search assets..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>

            <ng-template #header>
                <tr>
                    <th style="width: 3rem"><p-tableHeaderCheckbox /></th>
                    <th pSortableColumn="propertyNumber" style="min-width: 12rem">Property Number<p-sortIcon field="propertyNumber" /></th>
                    <th pSortableColumn="assetName" style="min-width: 15rem">Asset Name<p-sortIcon field="assetName" /></th>
                    <th pSortableColumn="category" style="min-width: 12rem">Category<p-sortIcon field="category" /></th>
                    <th pSortableColumn="foundCluster" style="min-width: 12rem">Found Cluster<p-sortIcon field="foundCluster" /></th>
                    <th pSortableColumn="issuedTo" style="min-width: 10rem">Issued To<p-sortIcon field="issuedTo" /></th>
                    <th pSortableColumn="purpose" style="min-width: 12rem">Purpose<p-sortIcon field="purpose" /></th>
                    <th style="min-width: 8rem">QR Code</th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>

            <ng-template #body let-item>
                <tr>
                    <td style="width: 3rem"><p-tableCheckbox [value]="item" /></td>
                    <td>{{ item.propertyNumber }}</td>
                    <td>{{ item.assetName }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.foundCluster }}</td>
                    <td>{{ item.issuedTo || 'Not assigned' }}</td>
                    <td>{{ item.purpose }}</td>
                    <td>
                        <div *ngIf="item.qrCode" class="flex items-center gap-2">
                            <span class="text-sm bg-blue-100 px-2 py-1 rounded">{{ item.qrCode }}</span>
                        </div>
                        <span *ngIf="!item.qrCode" class="text-gray-400">N/A</span>
                    </td>
                    <td>
                        <div class="action-buttons flex gap-2">
                            <p-button type="button" icon="pi pi-eye" class="p-button-rounded p-button-info" (click)="view(item)" pTooltip="View" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-warning" (click)="edit(item)" pTooltip="Edit" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-trash" class="p-button-rounded p-button-danger" (click)="delete(item)" pTooltip="Delete" tooltipPosition="top"></p-button>
                        </div>
                    </td>
                </tr>
            </ng-template>

            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="5" style="text-align: center; padding: 2rem;">No assets found</td>
                </tr>
            </ng-template>
        </p-table>

        <!-- New Asset Dialog -->
        <p-dialog [(visible)]="assetDialog" [style]="{ width: '800px' }" header="Create New Asset" [modal]="true" [closable]="true">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4">
                    <!-- Asset Details -->
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Asset Name *</label>
                        <input pInputText [(ngModel)]="newAsset.assetName" placeholder="Enter asset name" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Property Number *</label>
                        <input pInputText [(ngModel)]="newAsset.propertyNumber" placeholder="Enter property number" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Category *</label>
                        <p-select [(ngModel)]="newAsset.category" [options]="categoryOptions" placeholder="Select category" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Found Cluster</label>
                        <input pInputText [(ngModel)]="newAsset.foundCluster" placeholder="Enter found cluster" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Purpose</label>
                        <textarea pTextarea [(ngModel)]="newAsset.purpose" placeholder="Enter purpose" rows="3" class="w-full"></textarea>
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Issued To</label>
                        <input pInputText [(ngModel)]="newAsset.issuedTo" placeholder="Enter person/department" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">QR Code *</label>
                        <input pInputText [(ngModel)]="newAsset.qrCode" placeholder="Enter QR code" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">QR Code Image (Optional)</label>
                        <p-fileUpload
                            name="qrCodeImage"
                            [auto]="false"
                            accept="image/*"
                            maxFileSize="5000000"
                            (onSelect)="onQRCodeSelect($event)"
                            [customUpload]="true"
                            [showUploadButton]="false"
                            [showCancelButton]="false"
                            chooseLabel="Choose QR Code Image"
                        >
                        </p-fileUpload>
                        <div *ngIf="newAsset.qrCodeImage" class="mt-2">
                            <p class="text-sm text-green-600">✓ {{ newAsset.qrCodeImage.name }} selected</p>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Status</label>
                        <p-select [(ngModel)]="newAsset.status" [options]="statuses" optionLabel="statusName" optionValue="statusId" placeholder="Select status" class="w-full" />
                    </div>

                    <!-- Reference Data -->
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Program</label>
                        <p-select [(ngModel)]="newAsset.program" [options]="programs" optionLabel="programName" optionValue="programId" placeholder="Select program" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Supplier</label>
                        <p-select [(ngModel)]="newAsset.supplier" [options]="suppliers" optionLabel="supplierName" optionValue="supplierId" placeholder="Select supplier" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Location</label>
                        <p-select [(ngModel)]="newAsset.location" [options]="locations" optionLabel="locationName" optionValue="locationId" placeholder="Select location" class="w-full" />
                    </div>

                    <!-- Inventory Custodian Slip Details -->
                    <div class="col-span-12">
                        <h5 class="text-primary font-bold">Inventory Custodian Slip Details</h5>
                    </div>

                    <div class="col-span-6">
                        <label class="block font-bold mb-2">ICS No</label>
                        <input pInputText [(ngModel)]="newAsset.inventoryCustodianSlip.icsNo" placeholder="ICS number" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Quantity *</label>
                        <p-inputNumber [(ngModel)]="newAsset.inventoryCustodianSlip.quantity" [useGrouping]="false" placeholder="Enter quantity" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Unit of Measure *</label>
                        <input pInputText [(ngModel)]="newAsset.inventoryCustodianSlip.uoM" placeholder="UoM (e.g., pcs, set)" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Unit Cost</label>
                        <p-inputNumber [(ngModel)]="newAsset.inventoryCustodianSlip.unitCost" mode="currency" currency="PHP" placeholder="Unit cost" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Description</label>
                        <textarea pTextarea [(ngModel)]="newAsset.inventoryCustodianSlip.description" placeholder="Description" rows="3" class="w-full"></textarea>
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Specifications</label>
                        <textarea pTextarea [(ngModel)]="newAsset.inventoryCustodianSlip.specifications" placeholder="Specifications" rows="2" class="w-full"></textarea>
                    </div>
                    <div class="col-span-4">
                        <label class="block font-bold mb-2">Height</label>
                        <p-inputNumber [(ngModel)]="newAsset.inventoryCustodianSlip.height" [useGrouping]="false" placeholder="Height" class="w-full" />
                    </div>
                    <div class="col-span-4">
                        <label class="block font-bold mb-2">Width</label>
                        <p-inputNumber [(ngModel)]="newAsset.inventoryCustodianSlip.width" [useGrouping]="false" placeholder="Width" class="w-full" />
                    </div>
                    <div class="col-span-4">
                        <label class="block font-bold mb-2">Length</label>
                        <p-inputNumber [(ngModel)]="newAsset.inventoryCustodianSlip.length" [useGrouping]="false" placeholder="Length" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Package</label>
                        <input pInputText [(ngModel)]="newAsset.inventoryCustodianSlip.package" placeholder="Package" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Material</label>
                        <input pInputText [(ngModel)]="newAsset.inventoryCustodianSlip.material" placeholder="Material" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Serial Number</label>
                        <input pInputText [(ngModel)]="newAsset.inventoryCustodianSlip.serialNumber" placeholder="Serial number" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Model Number</label>
                        <input pInputText [(ngModel)]="newAsset.inventoryCustodianSlip.modelNumber" placeholder="Model number" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Estimated Useful Life</label>
                        <input pInputText [(ngModel)]="newAsset.inventoryCustodianSlip.estimatedUsefullLife" placeholder="e.g., 5 years" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Brand</label>
                        <p-select [(ngModel)]="newAsset.inventoryCustodianSlip.brand" [options]="brands" optionLabel="brandName" optionValue="brandId" placeholder="Select brand" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Color</label>
                        <p-select [(ngModel)]="newAsset.inventoryCustodianSlip.color" [options]="colors" optionLabel="colorName" optionValue="colorId" placeholder="Select color" class="w-full" />
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeDialog()" />
                <p-button label="Save" icon="pi pi-check" (click)="saveNewAsset()" />
            </ng-template>
        </p-dialog>
    `
})
export class AssetsComponent implements OnInit {
    @ViewChild('dt') dt: Table | undefined;

    assets: Asset[] = [];
    filteredAssets: Asset[] = [];
    selectedAssets: Asset[] = [];
    searchValue: string = '';
    loading: boolean = true;

    // Dialog and form
    assetDialog: boolean = false;
    newAsset: any = this.getEmptyAsset();

    // Reference data
    programs: Program[] = [];
    suppliers: Supplier[] = [];
    locations: Location[] = [];
    statuses: Status[] = [];
    colors: Color[] = [];
    brands: Brand[] = [];
    categoryOptions = [
        { label: 'Software', value: 'Software' },
        { label: 'Hardware', value: 'Hardware' }
    ];

    constructor(
        private assetService: AssetService,
        private messageService: MessageService
    ) {}

    getEmptyAsset() {
        return {
            assetName: '',
            propertyNumber: '',
            category: '',
            foundCluster: '',
            purpose: '',
            issuedTo: '',
            qrCode: '',
            qrCodeImage: null,
            program: '',
            status: '',
            supplier: '',
            location: '',
            inventoryCustodianSlip: {
                icsNo: '',
                quantity: 0,
                uoM: '',
                unitCost: 0,
                description: '',
                specifications: '',
                height: 0,
                width: 0,
                length: 0,
                package: '',
                material: '',
                serialNumber: '',
                modelNumber: '',
                estimatedUsefullLife: '',
                brand: '',
                color: ''
            }
        };
    }

    ngOnInit() {
        this.loadAssets();
        this.loadReferenceData();
    }

    loadReferenceData() {
        console.log('🔍 Starting to load reference data...');

        this.assetService.getPrograms().subscribe({
            next: (data) => {
                console.log('✅ Programs API Response:', data);
                console.log('📊 Programs count:', data?.length || 0);
                if (data && data.length > 0) {
                    console.log('🏷️ First program:', data[0]);
                    console.log('🏷️ Program fields:', Object.keys(data[0]));
                }
                this.programs = data || [];
                console.log('📦 this.programs assigned:', this.programs);
            },
            error: (error) => {
                console.error('❌ Error loading programs:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getSuppliers().subscribe({
            next: (data) => {
                console.log('✅ Suppliers API Response:', data);
                console.log('📊 Suppliers count:', data?.length || 0);
                if (data && data.length > 0) {
                    console.log('🏷️ First supplier:', data[0]);
                    console.log('🏷️ Supplier fields:', Object.keys(data[0]));
                }
                this.suppliers = data || [];
                console.log('📦 this.suppliers assigned:', this.suppliers);
            },
            error: (error) => {
                console.error('❌ Error loading suppliers:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getLocations().subscribe({
            next: (data) => {
                console.log('✅ Locations API Response:', data);
                console.log('📊 Locations count:', data?.length || 0);
                if (data && data.length > 0) {
                    console.log('🏷️ First location:', data[0]);
                    console.log('🏷️ Location fields:', Object.keys(data[0]));
                }
                this.locations = data || [];
                console.log('📦 this.locations assigned:', this.locations);
            },
            error: (error) => {
                console.error('❌ Error loading locations:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getStatuses().subscribe({
            next: (data) => {
                console.log('✅ Statuses API Response:', data);
                console.log('📊 Statuses count:', data?.length || 0);
                if (data && data.length > 0) {
                    console.log('🏷️ First status:', data[0]);
                    console.log('🏷️ Status fields:', Object.keys(data[0]));
                }
                this.statuses = data || [];
                console.log('📦 this.statuses assigned:', this.statuses);
            },
            error: (error) => {
                console.error('❌ Error loading statuses:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getColors().subscribe({
            next: (data) => {
                console.log('✅ Colors API Response:', data);
                console.log('📊 Colors count:', data?.length || 0);
                if (data && data.length > 0) {
                    console.log('🏷️ First color:', data[0]);
                    console.log('🏷️ Color fields:', Object.keys(data[0]));
                }
                this.colors = data || [];
                console.log('📦 this.colors assigned:', this.colors);
            },
            error: (error) => {
                console.error('❌ Error loading colors:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getBrands().subscribe({
            next: (data) => {
                console.log('✅ Brands API Response:', data);
                console.log('📊 Brands count:', data?.length || 0);
                if (data && data.length > 0) {
                    console.log('🏷️ First brand:', data[0]);
                    console.log('🏷️ Brand fields:', Object.keys(data[0]));
                }
                this.brands = data || [];
                console.log('📦 this.brands assigned:', this.brands);
            },
            error: (error) => {
                console.error('❌ Error loading brands:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });
    }

    loadAssets() {
        this.loading = true;
        console.log('Starting to load assets from:', 'http://localhost:3000/api/assets');
        this.assetService.getAssets().subscribe({
            next: (data) => {
                console.log('✅ Assets loaded successfully:', data);
                console.log('Number of assets:', data?.length || 0);
                if (data && data.length > 0) {
                    console.log('First asset:', data[0]);
                }
                this.assets = data || [];
                this.filteredAssets = [...this.assets];
                this.loading = false;
            },
            error: (error) => {
                console.error('❌ Error loading assets:', error);
                console.error('Error status:', error?.status);
                console.error('Error message:', error?.message);
                console.error('Error details:', error?.error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load assets: ' + error?.message });
                this.loading = false;
            }
        });
    }

    filter() {
        this.filteredAssets = this.assets.filter((asset) => {
            return (
                asset.propertyNumber?.toLowerCase().includes(this.searchValue.toLowerCase()) ||
                asset.assetName?.toLowerCase().includes(this.searchValue.toLowerCase()) ||
                asset.category?.toLowerCase().includes(this.searchValue.toLowerCase()) ||
                asset.foundCluster?.toLowerCase().includes(this.searchValue.toLowerCase()) ||
                asset.issuedTo?.toLowerCase().includes(this.searchValue.toLowerCase())
            );
        });
    }

    onSelectionChange(event: any) {
        console.log('Selected assets:', this.selectedAssets);
    }

    onQRCodeSelect(event: any) {
        const file = event.files[0];
        if (file) {
            this.newAsset.qrCodeImage = file;
            console.log('QR Code file selected:', file.name);
            this.messageService.add({ severity: 'info', summary: 'File Selected', detail: file.name });
        }
    }

    openNew() {
        console.log('🔓 Opening New Asset dialog...');
        console.log('📋 Programs in dropdown:', this.programs);
        console.log('📋 Suppliers in dropdown:', this.suppliers);
        console.log('📋 Locations in dropdown:', this.locations);
        console.log('📋 Statuses in dropdown:', this.statuses);
        console.log('📋 Colors in dropdown:', this.colors);
        console.log('📋 Brands in dropdown:', this.brands);
        this.newAsset = this.getEmptyAsset();
        this.assetDialog = true;
    }

    closeDialog() {
        this.assetDialog = false;
        this.newAsset = this.getEmptyAsset();
    }

    saveNewAsset() {
        if (!this.newAsset.assetName || !this.newAsset.propertyNumber || !this.newAsset.category) {
            this.messageService.add({ severity: 'warn', summary: 'Validation', detail: 'Asset Name, Property Number, and Category are required' });
            return;
        }

        if (!this.newAsset.inventoryCustodianSlip.quantity || !this.newAsset.inventoryCustodianSlip.uoM) {
            this.messageService.add({ severity: 'warn', summary: 'Validation', detail: 'Quantity and Unit of Measure are required in ICS details' });
            return;
        }

        if (!this.newAsset.qrCode || this.newAsset.qrCode.trim() === '') {
            this.messageService.add({ severity: 'warn', summary: 'Validation', detail: 'QR Code cannot be empty' });
            return;
        }

        // Create a copy to send to API (remove qrCodeImage property)
        const assetToSend = { ...this.newAsset };
        delete assetToSend.qrCodeImage; // Remove the file object before sending

        console.log('Saving new asset:', assetToSend);

        this.assetService.createAsset(assetToSend).subscribe({
            next: (response) => {
                console.log('✅ Asset created successfully:', response);
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Asset created successfully' });
                this.assetDialog = false;
                this.newAsset = this.getEmptyAsset();
                this.loadAssets();
            },
            error: (error) => {
                console.error('❌ Error creating asset:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create asset: ' + (error?.error?.message || error?.message) });
            }
        });
    }

    view(item: Asset) {
        this.messageService.add({ severity: 'info', summary: 'View Asset', detail: `Viewing: ${item.AssetName}` });
    }

    edit(item: Asset) {
        this.messageService.add({ severity: 'info', summary: 'Edit Asset', detail: `Editing: ${item.AssetName}` });
    }

    delete(item: Asset) {
        this.messageService.add({ severity: 'warn', summary: 'Delete Asset', detail: `Delete: ${item.AssetName}?` });
    }

    deleteSelected() {
        if (!this.selectedAssets || this.selectedAssets.length === 0) return;
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: `Delete ${this.selectedAssets.length} asset(s)?` });
    }

    exportCSV() {
        let csv = 'Property Number,Asset Name,Category,Found Cluster,Issued To,Purpose,QR Code\n';
        this.assets.forEach((asset) => {
            csv += `${asset.propertyNumber},${asset.assetName},${asset.category},${asset.foundCluster},${asset.issuedTo || 'Not assigned'},${asset.purpose},${asset.qrCode}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'assets.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
