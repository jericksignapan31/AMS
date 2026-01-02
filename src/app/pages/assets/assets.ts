import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
import { StepperModule } from 'primeng/stepper';
import { MessageService } from 'primeng/api';
import { AssetService, Asset, Program, Supplier, Location, Color, Brand, Status, Laboratory } from '../service/asset.service';
import { MaintenanceService, MaintenanceRequestPayload } from '../service/maintenance.service';
import { environment } from '../../../environments/environment';
import jsQR from 'jsqr';
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
        FileUploadModule,
        StepperModule
    ],
    providers: [MessageService],
    styles: [
        `
            :host ::ng-deep {
                .expand-btn {
                    transition: transform 0.3s ease-in-out;
                }

                .expand-btn.expanded {
                    transform: rotate(90deg);
                }

                .expansion-row {
                    animation: slideDown 0.3s ease-out;
                }

                .expansion-content {
                    animation: fadeIn 0.3s ease-out;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-expand {
                    animation: slideDown 0.3s ease-out;
                }
            }
        `
    ],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedAssets.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search assets..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="assets"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="assetId"
            [(selection)]="selectedAssets"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} assets"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="width:3rem">Expand</th>
                    <!-- <th style="min-width:20rem">ID</th> -->
                    <th pSortableColumn="assetName" style="min-width:18rem">Asset <p-sortIcon field="assetName" /></th>
                    <th style="min-width:14rem">Property #</th>
                    <th style="min-width:14rem">Laboratory</th>
                    <th style="min-width:12rem">QR Code</th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>

            <ng-template #body let-item>
                <tr>
                    <td style="width: 3rem"><p-tableCheckbox [value]="item" /></td>
                    <td style="width: 3rem">
                        <button type="button" pButton pRipple icon="pi pi-chevron-right" class="p-button-rounded p-button-text p-button-sm expand-btn" [class.expanded]="isRowExpanded(item.assetId)" (click)="toggleExpand(item)"></button>
                    </td>
                    <!-- <td>{{ item.assetId }}</td> -->
                    <td>{{ item.assetName }}</td>
                    <td>{{ item.propertyNumber }}</td>
                    <td>{{ item.laboratories?.laboratoryName || 'N/A' }}</td>
                    <td>
                        <div *ngIf="item.qrCode" class="inline-block">
                            <!-- Display QR Code as image if it's base64 or URL, otherwise as text -->
                            <img
                                *ngIf="isBase64Image(item.qrCode)"
                                [src]="item.qrCode"
                                alt="QR Code"
                                class="w-14 h-14 rounded-lg border-2 border-gray-300 cursor-pointer hover:shadow-lg hover:scale-110 transition-all"
                                (click)="viewQrCode(item.qrCode)"
                                pTooltip="Click to view QR Code"
                            />
                            <span *ngIf="!isBase64Image(item.qrCode)" class="text-sm bg-blue-100 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 transition-colors" (click)="copyToClipboard(item.qrCode)" pTooltip="Click to copy QR Code">
                                {{ item.qrCode }}
                            </span>
                        </div>
                        <span *ngIf="!item.qrCode" class="text-gray-400">N/A</span>
                    </td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(item)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(item)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(item)" />
                            <p-button icon="pi pi-wrench" label="Request" severity="help" [rounded]="true" [text]="true" (onClick)="openRequestDialog(item)" />
                        </div>
                    </td>
                </tr>
                <!-- Manual Expansion Row -->
                <tr *ngIf="isRowExpanded(item.assetId)" class="expansion-row bg-blue-50 border-l-4 border-blue-500">
                    <td colspan="10" class="p-0">
                        <div class="expansion-content animate-expand p-8 bg-linear-to-r from-blue-50 to-indigo-50 shadow-inner">
                            <!-- Header with Asset Info -->
                            <div class="mb-6 pb-6 border-b-2 border-blue-200">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h4 class="text-lg font-bold text-blue-600 flex items-center gap-2">
                                            <i class="pi pi-file-pdf text-2xl text-red-500"></i>
                                            Inventory Custodian Slip Details
                                        </h4>
                                        <p class="text-sm text-gray-600 mt-1">
                                            Asset: <span class="font-semibold text-gray-800">{{ item.assetName }}</span>
                                        </p>
                                        <p class="text-sm text-gray-600">
                                            Property Number: <span class="font-semibold text-gray-800">{{ item.propertyNumber }}</span>
                                        </p>
                                    </div>
                                    <div class="text-right">
                                        <p class="text-xs text-gray-500 mb-1">ICS No:</p>
                                        <p class="text-xl font-bold text-blue-600">{{ item.inventoryCustodianSlip?.icsNo || 'N/A' }}</p>
                                    </div>
                                </div>
                            </div>

                            <!-- ICS Data Table with Enhanced Styling -->
                            <div class="overflow-x-auto">
                                <table class="w-full border-collapse">
                                    <thead>
                                        <tr class="bg-blue-100 border-b-2 border-blue-300">
                                            <th class="px-4 py-3 text-left font-bold text-gray-700 text-sm">Field</th>
                                            <th class="px-4 py-3 text-left font-bold text-gray-700 text-sm">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <ng-container *ngFor="let rowData of getIcsTableData(item.inventoryCustodianSlip); let odd = odd">
                                            <tr [class]="odd ? 'bg-white' : 'bg-blue-50'" class="border-b border-gray-200 hover:bg-blue-100 transition-colors">
                                                <td class="px-4 py-3 font-semibold text-gray-700 text-sm w-1/3">{{ rowData.field }}</td>
                                                <td class="px-4 py-3 text-gray-800 text-sm">{{ rowData.value }}</td>
                                            </tr>
                                        </ng-container>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Footer Actions -->
                            <div class="mt-6 pt-4 border-t-2 border-blue-200 flex justify-end gap-2">
                                <button (click)="toggleExpand(item)" class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors text-sm font-semibold">Close</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </ng-template>

            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="8" class="text-center py-5">No assets found</td>
                </tr>
            </ng-template>
        </p-table>

        <!-- New Asset Dialog with Stepper -->
        <p-dialog [(visible)]="assetDialog" [style]="{ width: '900px' }" header="Create New Asset & Inventory Custodian Slip" [modal]="true" [closable]="false">
            <ng-template #content>
                <!-- Manual Stepper Header -->
                <div class="flex justify-center gap-4 mb-6 pb-4 border-b">
                    <div class="flex items-center gap-2">
                        <div [class]="'w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ' + (currentStep >= 0 ? 'bg-primary' : 'bg-gray-300')">1</div>
                        <span [class]="currentStep >= 0 ? 'text-primary font-bold' : 'text-gray-500'">Asset Details</span>
                    </div>
                    <div [class]="'w-12 h-1 mt-3 ' + (currentStep >= 1 ? 'bg-primary' : 'bg-gray-300')"></div>
                    <div class="flex items-center gap-2">
                        <div [class]="'w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ' + (currentStep >= 1 ? 'bg-primary' : 'bg-gray-300')">2</div>
                        <span [class]="currentStep >= 1 ? 'text-primary font-bold' : 'text-gray-500'">ICS Details</span>
                    </div>
                </div>

                <!-- Step Content -->
                <div [ngSwitch]="currentStep">
                    <!-- Step 1: Asset Details -->
                    <div *ngSwitchCase="0" class="step-content">
                        <div class="grid grid-cols-12 gap-4 mt-4">
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
                                <p-select [(ngModel)]="newAsset.category" [options]="categoryOptions" placeholder="Select category" class="w-full" appendTo="body" (onChange)="onCategoryChange()" />
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
                                <label class="block font-bold mb-2">Program</label>
                                <p-select [(ngModel)]="newAsset.program" [options]="programs" optionLabel="programName" optionValue="programId" placeholder="Select program" class="w-full" appendTo="body" />
                            </div>
                            <div class="col-span-6">
                                <label class="block font-bold mb-2">Supplier</label>
                                <p-select [(ngModel)]="newAsset.supplier" [options]="suppliers" optionLabel="supplierName" optionValue="supplierId" placeholder="Select supplier" class="w-full" appendTo="body" />
                            </div>
                            <div class="col-span-6">
                                <label class="block font-bold mb-2">Laboratory</label>
                                <p-select [(ngModel)]="newAsset.laboratories" [options]="laboratories" optionLabel="laboratoryName" optionValue="laboratoryId" placeholder="Select laboratory" class="w-full" appendTo="body" />
                            </div>
                        </div>
                    </div>

                    <!-- Step 2: Inventory Custodian Slip Details -->
                    <div *ngSwitchCase="1" class="step-content">
                        <div class="grid grid-cols-12 gap-4 mt-4">
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
                                <p-inputNumber [(ngModel)]="newAsset.inventoryCustodianSlip.height" [useGrouping]="false" placeholder="Height" class="w-full" [disabled]="isSoftwareCategory()" />
                            </div>
                            <div class="col-span-4">
                                <label class="block font-bold mb-2">Width</label>
                                <p-inputNumber [(ngModel)]="newAsset.inventoryCustodianSlip.width" [useGrouping]="false" placeholder="Width" class="w-full" [disabled]="isSoftwareCategory()" />
                            </div>
                            <div class="col-span-4">
                                <label class="block font-bold mb-2">Length</label>
                                <p-inputNumber [(ngModel)]="newAsset.inventoryCustodianSlip.length" [useGrouping]="false" placeholder="Length" class="w-full" [disabled]="isSoftwareCategory()" />
                            </div>
                            <div class="col-span-6">
                                <label class="block font-bold mb-2">Package</label>
                                <input pInputText [(ngModel)]="newAsset.inventoryCustodianSlip.package" placeholder="Package" class="w-full" />
                            </div>
                            <div class="col-span-6">
                                <label class="block font-bold mb-2">Material</label>
                                <input pInputText [(ngModel)]="newAsset.inventoryCustodianSlip.material" placeholder="Material" class="w-full" [disabled]="isSoftwareCategory()" />
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
                                <p-select [(ngModel)]="newAsset.inventoryCustodianSlip.brand" [options]="brands" optionLabel="brandName" optionValue="brandId" placeholder="Select brand" class="w-full" appendTo="body" />
                            </div>
                            <div class="col-span-6">
                                <label class="block font-bold mb-2">Color</label>
                                <p-select
                                    [(ngModel)]="newAsset.inventoryCustodianSlip.color"
                                    [options]="colors"
                                    optionLabel="colorName"
                                    optionValue="colorId"
                                    placeholder="Select color"
                                    class="w-full"
                                    appendTo="body"
                                    [disabled]="isSoftwareCategory()"
                                />
                            </div>
                            <div class="col-span-12">
                                <label class="block font-bold mb-2">QR Code Image *</label>
                                <p-fileUpload
                                    name="qrCodeImage"
                                    [auto]="false"
                                    accept="image/*"
                                    maxFileSize="5000000"
                                    (onSelect)="onQRCodeSelect($event)"
                                    [customUpload]="true"
                                    [showUploadButton]="false"
                                    [showCancelButton]="false"
                                    chooseLabel="Upload QR Code Image"
                                >
                                </p-fileUpload>
                                <div *ngIf="newAsset.qrCode" class="mt-3 flex items-center gap-2">
                                    <i class="pi pi-check-circle text-green-600 text-xl"></i>
                                    <p class="text-sm text-green-600">Scanned: {{ newAsset.qrCode.substring(0, 50) }}...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <div class="flex justify-between w-full">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeDialog()" />
                    <div class="flex gap-2">
                        <p-button *ngIf="currentStep > 0" label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="previousStep()" />
                        <p-button *ngIf="currentStep < 1" label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextStep()" />
                        <p-button *ngIf="currentStep === 1" label="Save Asset" icon="pi pi-check" (onClick)="saveNewAsset()" />
                    </div>
                </div>
            </ng-template>
        </p-dialog>

        <!-- Request Maintenance Dialog -->
        <p-dialog [(visible)]="requestDialog" [style]="{ width: '650px' }" header="Request Maintenance" [modal]="true" [closable]="true" (onHide)="closeRequestDialog()">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4 mt-2">
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">maintenanceName *</label>
                        <input pInputText [(ngModel)]="maintenanceRequest.maintenanceName" placeholder="Maintenance title / name" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">maintenanceType (ID) *</label>
                        <p-select [(ngModel)]="maintenanceRequest.maintenanceType" [options]="maintenanceTypesOptions" optionLabel="label" optionValue="value" placeholder="Select type" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">serviceMaintenance (ID) *</label>
                        <p-select [(ngModel)]="maintenanceRequest.serviceMaintenance" [options]="serviceMaintenancesOptions" optionLabel="label" optionValue="value" placeholder="Select service" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">asset (ID) *</label>
                        <input pInputText [(ngModel)]="maintenanceRequest.asset" [value]="requestAsset?.assetId" class="w-full" />
                        <small class="text-gray-500">Selected: {{ requestAsset?.assetName }}</small>
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">priorityLevel (ID) *</label>
                        <p-select [(ngModel)]="maintenanceRequest.priorityLevel" [options]="priorityLevelsOptions" optionLabel="label" optionValue="value" placeholder="Select priority" class="w-full" appendTo="body" />
                    </div>
                </div>
            </ng-template>
            <ng-template #footer>
                <div class="flex justify-end gap-2 w-full">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (onClick)="closeRequestDialog()" />
                    <p-button label="Submit Request" icon="pi pi-check" (onClick)="submitMaintenanceRequest()" />
                </div>
            </ng-template>
        </p-dialog>
    `
})
export class AssetsComponent implements OnInit {
    @ViewChild('dt') dt: Table | undefined;

    assets: Asset[] = [];
    filteredAssets: Asset[] = [];
    selectedAssets: Asset[] = [];
    expandedAssets: Asset[] = [];
    expandedRowIds: Set<string> = new Set();
    searchValue: string = '';
    loading: boolean = true;

    // Dialog and form
    assetDialog: boolean = false;
    currentStep: number = 0;
    newAsset: any = this.getEmptyAsset();

    // Request maintenance dialog state
    requestDialog: boolean = false;
    requestAsset: Asset | null = null;
    maintenanceRequest: { maintenanceName: string; maintenanceType: string; serviceMaintenance: string; asset: string; priorityLevel: string } = { maintenanceName: '', maintenanceType: '', serviceMaintenance: '', asset: '', priorityLevel: '' };
    // Dropdown option arrays (label/value)
    maintenanceTypesOptions: { label: string; value: string }[] = [];
    serviceMaintenancesOptions: { label: string; value: string }[] = [];
    priorityLevelsOptions: { label: string; value: string }[] = [];

    // Reference data
    programs: Program[] = [];
    suppliers: Supplier[] = [];
    locations: Location[] = [];
    laboratories: Laboratory[] = [];
    statuses: Status[] = [];
    colors: Color[] = [];
    brands: Brand[] = [];
    categoryOptions = [
        { label: 'Software', value: 'Software' },
        { label: 'Hardware', value: 'Hardware' }
    ];

    constructor(
        private assetService: AssetService,
        private messageService: MessageService,
        private maintenanceService: MaintenanceService,
        private router: Router
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
            supplier: '',
            laboratories: '',
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
        this.loadMaintenanceDialogOptions();
    }

    loadReferenceData() {
        this.assetService.getPrograms().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                }
                this.programs = data || [];
            },
            error: (error) => {
                console.error('❌ Error loading programs:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getSuppliers().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                }
                this.suppliers = data || [];
            },
            error: (error) => {
                console.error('❌ Error loading suppliers:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getLocations().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                }
                this.locations = data || [];
            },
            error: (error) => {
                console.error('❌ Error loading locations:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getStatuses().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                }
                this.statuses = data || [];
            },
            error: (error) => {
                console.error('❌ Error loading statuses:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getColors().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                }
                this.colors = data || [];
            },
            error: (error) => {
                console.error('❌ Error loading colors:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getBrands().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                }
                this.brands = data || [];
            },
            error: (error) => {
                console.error('❌ Error loading brands:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });

        this.assetService.getLaboratories().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                }
                this.laboratories = data || [];
            },
            error: (error) => {
                console.error('❌ Error loading laboratories:', error);
                console.error('Status:', error?.status, 'Message:', error?.message);
            }
        });
    }

    loadMaintenanceDialogOptions() {
        // Maintenance Types
        this.maintenanceService.getMaintenanceTypes().subscribe({
            next: (types) => {
                this.maintenanceTypesOptions = (types || []).map((t: any) => ({ label: t.maintenanceTypeName, value: t.maintenanceTypeId }));
            }
        });
        // Service Maintenances
        this.maintenanceService.getServiceMaintenances().subscribe({
            next: (services) => {
                this.serviceMaintenancesOptions = (services || []).map((s: any) => ({ label: s.serviceName, value: s.serviceMaintenanceId }));
            }
        });
        // Priority Levels
        this.maintenanceService.getPriorityLevels().subscribe({
            next: (levels) => {
                this.priorityLevelsOptions = (levels || []).map((p: any) => ({ label: p.priorityLevelName, value: p.priorityLevelId }));
            }
        });
    }

    loadAssets() {
        this.loading = true;
        this.assetService.getAssets().subscribe({
            next: (data) => {
                if (data && data.length > 0) {
                    // Log QR code info for all assets
                    data.forEach((asset, index) => {});
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
        if (this.selectedAssets.length === 0) {
        } else {
            this.selectedAssets.forEach((asset, index) => {});
        }
    }

    onRowExpandEvent(event: any) {
        const asset = event.data as Asset;

        // Fetch ICS data for this specific asset
        if (asset.assetId && !asset.inventoryCustodianSlip?.icsNo) {
            this.assetService.getAssetInventoryCustodianSlip(asset.assetId).subscribe({
                next: (icsData) => {
                    // Update the asset object with ICS data
                    asset.inventoryCustodianSlip = icsData;
                },
                error: (error) => {
                    console.error(`❌ Error fetching ICS for ${asset.assetName}:`, error);
                }
            });
        }
    }

    onRowCollapseEvent(event: any) {
        const asset = event.data as Asset;
    }

    // Manual expand/collapse toggle
    toggleExpand(asset: Asset) {
        if (!asset.assetId) return;

        if (this.expandedRowIds.has(asset.assetId)) {
            // Collapse
            this.expandedRowIds.delete(asset.assetId);
        } else {
            // Expand - first fetch ICS data if not already loaded
            this.expandedRowIds.add(asset.assetId);

            if (!asset.inventoryCustodianSlip?.icsNo) {
                this.assetService.getAssetInventoryCustodianSlip(asset.assetId).subscribe({
                    next: (icsData) => {
                        asset.inventoryCustodianSlip = icsData;
                    },
                    error: (error) => {
                        console.error(`❌ Error fetching ICS for ${asset.assetName}:`, error);
                    }
                });
            }
        }
    }

    isRowExpanded(assetId: string | undefined): boolean {
        if (!assetId) return false;
        return this.expandedRowIds.has(assetId);
    }

    getIcsTableData(icsData: any): any[] {
        if (!icsData) return [];

        const tableData: any[] = [];
        const fields = [
            { key: 'inventoryCustodianSlipId', label: 'Inventory Custodian Slip ID' },
            { key: 'icsNo', label: 'ICS No' },
            { key: 'quantity', label: 'Quantity' },
            { key: 'uoM', label: 'Unit of Measure' },
            { key: 'unitCost', label: 'Unit Cost' },
            { key: 'description', label: 'Description' },
            { key: 'specifications', label: 'Specifications' },
            { key: 'height', label: 'Height' },
            { key: 'width', label: 'Width' },
            { key: 'length', label: 'Length' },
            { key: 'package', label: 'Package' },
            { key: 'material', label: 'Material' },
            { key: 'serialNumber', label: 'Serial Number' },
            { key: 'modelNumber', label: 'Model Number' },
            { key: 'estimatedUsefullLife', label: 'Estimated Useful Life' }
        ];

        fields.forEach((field) => {
            if (icsData[field.key] !== undefined && icsData[field.key] !== null) {
                tableData.push({
                    field: field.label,
                    value: icsData[field.key]
                });
            }
        });

        return tableData;
    }

    openNew() {
        this.assetDialog = true;
        this.currentStep = 0;
        this.newAsset = this.getEmptyAsset();
    }

    isSoftwareCategory(): boolean {
        return this.newAsset.category === 'Software';
    }

    onCategoryChange(): void {
        if (this.isSoftwareCategory()) {
            // Clear values of disabled inputs when category is Software
            this.newAsset.inventoryCustodianSlip.height = null;
            this.newAsset.inventoryCustodianSlip.width = null;
            this.newAsset.inventoryCustodianSlip.length = null;
            this.newAsset.inventoryCustodianSlip.material = '';
            // Set default color for Software category
            this.newAsset.inventoryCustodianSlip.color = '968afd8c-be83-48c8-b21b-f1ab29f15b2d';
        } else {
            // Clear color when switching back to Hardware
            this.newAsset.inventoryCustodianSlip.color = '';
        }
    }

    onQRCodeSelect(event: any) {
        const file = event.files[0];
        if (file) {
            // Store the file for later upload
            this.newAsset.qrCodeImage = file;

            // Read and decode QR code from image
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const img = new Image();
                img.onload = () => {
                    try {
                        // Create canvas and draw image
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        if (!ctx) {
                            throw new Error('Failed to get canvas context');
                        }

                        ctx.drawImage(img, 0, 0);
                        const imageData = ctx.getImageData(0, 0, img.width, img.height);

                        // Decode QR code
                        const decodedQR = jsQR(imageData.data, img.width, img.height);

                        if (decodedQR) {
                            this.newAsset.qrCode = decodedQR.data;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'QR Code Scanned',
                                detail: `QR Code: ${decodedQR.data}`
                            });
                        } else {
                            console.warn('❌ No QR code found in image');
                            this.messageService.add({
                                severity: 'warn',
                                summary: 'No QR Code',
                                detail: 'Could not find QR code in the image. Please try another image.'
                            });
                        }
                    } catch (error) {
                        console.error('❌ Error decoding QR code:', error);
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Failed to decode QR code from image'
                        });
                    }
                };
                img.onerror = () => {
                    console.error('❌ Failed to load image');
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to load image file'
                    });
                };
                img.src = e.target.result;
            };
            reader.onerror = () => {
                console.error('❌ Failed to read file');
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to read file'
                });
            };
            reader.readAsDataURL(file);
        }
    }

    closeDialog() {
        this.assetDialog = false;
        this.currentStep = 0;
        this.newAsset = this.getEmptyAsset();
    }

    nextStep() {
        if (this.currentStep < 1) {
            this.currentStep++;
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
        }
    }

    // Request Maintenance Handlers
    openRequestDialog(asset: Asset) {
        this.requestAsset = asset;
        this.maintenanceRequest = { maintenanceName: '', maintenanceType: '', serviceMaintenance: '', asset: String(asset.assetId || ''), priorityLevel: '' };
        this.requestDialog = true;
    }

    closeRequestDialog() {
        this.requestDialog = false;
        this.requestAsset = null;
    }

    submitMaintenanceRequest() {
        if (!this.requestAsset?.assetId) {
            this.messageService.add({ severity: 'warn', summary: 'Validation', detail: 'Missing asset ID' });
            return;
        }
        if (!this.maintenanceRequest.maintenanceName || !this.maintenanceRequest.priorityLevel || !this.maintenanceRequest.maintenanceType || !this.maintenanceRequest.asset || !this.maintenanceRequest.serviceMaintenance) {
            this.messageService.add({ severity: 'warn', summary: 'Validation', detail: 'All fields are required' });
            return;
        }

        const payload: MaintenanceRequestPayload = { ...this.maintenanceRequest };

        this.maintenanceService.createMaintenanceRequest(payload).subscribe({
            next: () => {
                this.messageService.add({ severity: 'success', summary: 'Request Created', detail: 'Maintenance request submitted' });
                this.closeRequestDialog();
            },
            error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to submit maintenance request: ' + (error?.error?.message || error?.message) });
            }
        });
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

        if (!this.newAsset.qrCodeImage) {
            this.messageService.add({ severity: 'warn', summary: 'Validation', detail: 'QR Code file must be uploaded' });
            return;
        }

        // Create a copy and remove qrCodeImage and qrCode before sending to API
        const assetToSend = { ...this.newAsset };
        delete assetToSend.qrCodeImage; // Remove the file object
        delete assetToSend.qrCode; // Remove the scanned QR code text - NOT needed in asset creation

        // laboratories field must be a string (laboratory ID)
        if (!assetToSend.laboratories || typeof assetToSend.laboratories !== 'string') {
            assetToSend.laboratories = '';
        }

        // Step 1: Create the asset first
        this.assetService.createAsset(assetToSend).subscribe({
            next: (response: Asset) => {
                // Extract assetId from response
                const assetId = String(response.assetId || response.id);
                if (!assetId || assetId === 'undefined') {
                    console.error('❌ No assetId returned from asset creation');
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to get asset ID from response' });
                    return;
                }

                // Step 2: Upload QR code to the new asset
                this.assetService.uploadQrCode(assetId, this.newAsset.qrCodeImage).subscribe({
                    next: (qrResponse: any) => {
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Asset created and QR code uploaded successfully' });

                        // Close dialog and refresh
                        this.assetDialog = false;
                        this.newAsset = this.getEmptyAsset();
                        this.currentStep = 0; // Reset stepper
                        this.loadAssets();
                    },
                    error: (qrError: any) => {
                        console.error('❌ Step 2 Failed: Error uploading QR code:', qrError);
                        this.messageService.add({
                            severity: 'warn',
                            summary: 'Partial Success',
                            detail: 'Asset created but failed to upload QR code: ' + (qrError?.error?.message || qrError?.message)
                        });

                        // Still close dialog but show warning
                        this.assetDialog = false;
                        this.newAsset = this.getEmptyAsset();
                        this.currentStep = 0;
                        this.loadAssets();
                    }
                });
            },
            error: (error: any) => {
                console.error('❌ Step 1 Failed: Error creating asset:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create asset: ' + (error?.error?.message || error?.message) });
            }
        });
    }

    view(item: Asset) {
        console.log('👁️ Viewing asset:', item);
        const assetName = item.assetName || item.AssetName || 'Unknown Asset';
        const html = `
            <div style="text-align: left;">
                <p><strong>Asset Name:</strong> ${assetName}</p>
                <p><strong>Asset ID:</strong> ${item.assetId || 'N/A'}</p>
                <p><strong>Property Number:</strong> ${item.propertyNumber || item.PropertyNo || 'N/A'}</p>
                <p><strong>Category:</strong> ${item.category || item.Category || 'N/A'}</p>
                <p><strong>Found Cluster:</strong> ${item.foundCluster || item.FoundCluster || 'N/A'}</p>
                <p><strong>Issued To:</strong> ${item.issuedTo || item.IssuedTo || 'N/A'}</p>
                <p><strong>Purpose:</strong> ${item.purpose || item.Purpose || 'N/A'}</p>
                <p><strong>Date Acquired:</strong> ${item.assetCreated || item.DateAcquired || 'N/A'}</p>
            </div>
        `;
        Swal.fire({
            title: 'Asset Details',
            html,
            icon: 'info',
            confirmButtonText: 'Close'
        });
    }

    edit(item: Asset) {
        if (!item || !item.assetId) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Asset data is missing' });
            return;
        }
        const assetId = item.assetId;
        const assetName = item.assetName || item.AssetName || '';
        const propertyNumber = item.propertyNumber || item.PropertyNo || '';
        const category = item.category || item.Category || '';
        const foundCluster = item.foundCluster || item.FoundCluster || '';
        const purpose = item.purpose || item.Purpose || '';
        const issuedTo = item.issuedTo || item.IssuedTo || '';
        const program = item.Program_id || '';
        const status = item.Status_id || '';
        const supplier = item.Supplier_id || '';
        const location = item.Location_id || '';

        const html = `
            <div style="display: grid; gap: 10px; text-align: left;">
                <label>Asset Name: <input type="text" id="assetName" class="swal2-input" value="${assetName}" placeholder="Asset Name" /></label>
                <label>Property Number: <input type="text" id="propertyNumber" class="swal2-input" value="${propertyNumber}" placeholder="Property Number" /></label>
                <label>Category: <input type="text" id="category" class="swal2-input" value="${category}" placeholder="Category" /></label>
                <label>Found Cluster: <input type="text" id="foundCluster" class="swal2-input" value="${foundCluster}" placeholder="Found Cluster" /></label>
                <label>Purpose: <input type="text" id="purpose" class="swal2-input" value="${purpose}" placeholder="Purpose" /></label>
                <label>Issued To: <input type="text" id="issuedTo" class="swal2-input" value="${issuedTo}" placeholder="Issued To" /></label>
                <label>Program: <input type="text" id="program" class="swal2-input" value="${program}" placeholder="Program" /></label>
                <label>Status: <input type="text" id="status" class="swal2-input" value="${status}" placeholder="Status" /></label>
                <label>Supplier: <input type="text" id="supplier" class="swal2-input" value="${supplier}" placeholder="Supplier" /></label>
                <label>Location: <input type="text" id="location" class="swal2-input" value="${location}" placeholder="Location" /></label>
            </div>
        `;

        Swal.fire({
            title: 'Edit Asset',
            html,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            didOpen: () => {
                // Auto-focus first input
                (document.getElementById('assetName') as HTMLInputElement)?.focus();
            },
            preConfirm: () => {
                const assetNameVal = (document.getElementById('assetName') as HTMLInputElement)?.value.trim();
                if (!assetNameVal) {
                    Swal.showValidationMessage('Asset name is required');
                    return false;
                }

                return {
                    assetName: assetNameVal,
                    propertyNumber: (document.getElementById('propertyNumber') as HTMLInputElement)?.value.trim(),
                    category: (document.getElementById('category') as HTMLInputElement)?.value.trim(),
                    foundCluster: (document.getElementById('foundCluster') as HTMLInputElement)?.value.trim(),
                    purpose: (document.getElementById('purpose') as HTMLInputElement)?.value.trim(),
                    issuedTo: (document.getElementById('issuedTo') as HTMLInputElement)?.value.trim(),
                    Program_id: (document.getElementById('program') as HTMLInputElement)?.value.trim(),
                    Status_id: (document.getElementById('status') as HTMLInputElement)?.value.trim(),
                    Supplier_id: (document.getElementById('supplier') as HTMLInputElement)?.value.trim(),
                    Location_id: (document.getElementById('location') as HTMLInputElement)?.value.trim()
                };
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                this.assetService.patchAsset(assetId as any, result.value).subscribe({
                    next: () => {
                        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Asset updated successfully' });
                        this.loadAssets();
                    },
                    error: (err) => {
                        console.error('Error updating asset:', err);
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update asset' });
                    }
                });
            }
        });
    }

    delete(item: Asset) {
        if (!item || !item.assetId) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Asset data is missing' });
            return;
        }

        const assetName = item.assetName || item.AssetName || 'Unknown Asset';
        const assetId = item.assetId;

        console.log('🗑️ Deleting asset:', item);
        Swal.fire({
            title: 'Delete Asset?',
            text: `Are you sure you want to delete ${assetName}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('✅ Confirmed delete for asset:', assetId);

                // Call DELETE API
                console.log('📡 Deleting asset with ID:', assetId);

                this.assetService.deleteAsset(assetId as any).subscribe({
                    next: (response: any) => {
                        console.log('✅ Asset deleted successfully:', response);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Deleted',
                            detail: `Asset ${assetName} deleted successfully`
                        });
                        this.loadAssets();
                    },
                    error: (error: any) => {
                        console.error('❌ Error deleting asset:', error);
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: `Failed to delete asset: ${error?.error?.message || error?.message}`
                        });
                    }
                });
            }
        });
    }

    deleteSelected() {
        if (!this.selectedAssets || this.selectedAssets.length === 0) return;
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: `Delete ${this.selectedAssets.length} asset(s)?` });
    }

    requestMaintenance(item: Asset) {
        if (!item?.assetId) {
            this.messageService.add({ severity: 'warn', summary: 'Missing ID', detail: 'Asset ID is required to request maintenance' });
            return;
        }
        this.router.navigate(['/requestmaintenance'], { queryParams: { assetId: item.assetId } });
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

    // QR Code display helper methods
    isBase64Image(qrCode: string): boolean {
        if (!qrCode) return false;
        return qrCode.startsWith('data:image/') || qrCode.startsWith('data:application/') || qrCode.startsWith('http://') || qrCode.startsWith('https://');
    }

    viewQrCode(qrCode: string) {
        if (qrCode) {
            Swal.fire({
                title: 'QR Code',
                html: `<img src="${qrCode}" alt="QR Code" style="max-width: 400px; border-radius: 8px;" />`,
                confirmButtonText: 'Close'
            });
        }
    }

    copyToClipboard(text: string) {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Copied!',
                    detail: 'QR Code copied to clipboard',
                    life: 2000
                });
            })
            .catch(() => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to copy to clipboard',
                    life: 2000
                });
            });
    }
}
