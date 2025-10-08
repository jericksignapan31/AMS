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

import { Asset, AssetService, Location, Supplier, Program, Status, InvCustlip, Color, Brand } from '../service/asset.service';
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
                    <h5 class="m-0">assets Management</h5>
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
                        <div class="flex align-items-center gap-2">
                            <p-button icon="pi pi-plus" severity="success" [rounded]="true" [outlined]="true" (click)="openInvCustlipDialog(asset)" pTooltip="Add New InvCustlip" />
                            <p-button icon="pi pi-pencil" [rounded]="true" [outlined]="true" (click)="editAsset(asset)" pTooltip="Edit Asset" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteAsset(asset)" pTooltip="Delete Asset" />
                        </div>
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <!-- Stepper Dialog for New Asset Creation -->
        <p-dialog [(visible)]="stepperDialog" [style]="{ width: '900px' }" header="Create New Asset & InvCustlip" [modal]="true" [closable]="false">
            <ng-template #content>
                <!-- Custom Stepper Header -->
                <div class="flex justify-content-center mb-4">
                    <div class="flex align-items-center">
                        <div class="flex align-items-center justify-content-center w-3rem h-3rem border-circle" [ngClass]="{ 'bg-primary text-white': currentStep >= 0, 'surface-200 text-600': currentStep < 0 }">1</div>
                        <div class="w-6rem h-2px" [ngClass]="{ 'bg-primary': currentStep >= 1, 'surface-200': currentStep < 1 }"></div>
                        <div class="flex align-items-center justify-content-center w-3rem h-3rem border-circle" [ngClass]="{ 'bg-primary text-white': currentStep >= 1, 'surface-200 text-600': currentStep < 1 }">2</div>
                        <div class="w-6rem h-2px" [ngClass]="{ 'bg-primary': currentStep >= 2, 'surface-200': currentStep < 2 }"></div>
                        <div class="flex align-items-center justify-content-center w-3rem h-3rem border-circle" [ngClass]="{ 'bg-primary text-white': currentStep >= 2, 'surface-200 text-600': currentStep < 2 }">3</div>
                    </div>
                </div>

                <!-- Step Content -->
                <div [ngSwitch]="currentStep">
                    <!-- Step 1: Asset Details -->
                    <div *ngSwitchCase="0" class="step-content">
                        <div class="grid grid-cols-12 gap-4 mt-4">
                            <div class="col-span-6">
                                <label for="stepperPropertyNo" class="block font-bold mb-2">Property No</label>
                                <input type="text" pInputText id="stepperPropertyNo" [(ngModel)]="stepperData.asset.PropertyNo" required autofocus fluid />
                                <small class="text-red-500" *ngIf="submitted && !stepperData.asset.PropertyNo">Property No is required.</small>
                            </div>
                            <div class="col-span-6">
                                <label for="stepperCategory" class="block font-bold mb-2">Category</label>
                                <p-select [(ngModel)]="stepperData.asset.Category" inputId="stepperCategory" [options]="categories" optionLabel="label" optionValue="value" placeholder="Select Category" fluid />
                            </div>
                            <div class="col-span-12">
                                <label for="stepperAssetName" class="block font-bold mb-2">Asset Name</label>
                                <input type="text" pInputText id="stepperAssetName" [(ngModel)]="stepperData.asset.AssetName" required fluid />
                                <small class="text-red-500" *ngIf="submitted && !stepperData.asset.AssetName">Asset Name is required.</small>
                            </div>
                            <div class="col-span-6">
                                <label for="stepperFoundCluster" class="block font-bold mb-2">Found Cluster</label>
                                <input type="text" pInputText id="stepperFoundCluster" [(ngModel)]="stepperData.asset.FoundCluster" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperLocationId" class="block font-bold mb-2">Location</label>
                                <p-select id="stepperLocationId" [(ngModel)]="stepperData.asset.Location_id" [options]="locations" optionLabel="LocationName" optionValue="id" placeholder="Select a location" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperSupplierId" class="block font-bold mb-2">Supplier</label>
                                <p-select id="stepperSupplierId" [(ngModel)]="stepperData.asset.Supplier_id" [options]="suppliers" optionLabel="SupplierName" optionValue="id" placeholder="Select a supplier" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperProgramId" class="block font-bold mb-2">Program</label>
                                <p-select id="stepperProgramId" [(ngModel)]="stepperData.asset.Program_id" [options]="programs" optionLabel="ProgramName" optionValue="id" placeholder="Select a program" fluid />
                            </div>
                            <div class="col-span-12">
                                <label for="stepperPurpose" class="block font-bold mb-2">Purpose</label>
                                <textarea id="stepperPurpose" pTextarea [(ngModel)]="stepperData.asset.Purpose" rows="3" fluid></textarea>
                            </div>
                            <div class="col-span-6">
                                <label for="stepperDateAcquired" class="block font-bold mb-2">Date Acquired</label>
                                <input type="date" pInputText id="stepperDateAcquired" [(ngModel)]="stepperData.asset.DateAcquired" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperIssuedTo" class="block font-bold mb-2">Issued To</label>
                                <input type="text" pInputText id="stepperIssuedTo" [(ngModel)]="stepperData.asset.IssuedTo" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperStatus" class="block font-bold mb-2">Status</label>
                                <p-select [(ngModel)]="stepperData.asset.Status_id" inputId="stepperStatus" [options]="statusOptions" optionLabel="StatusName" optionValue="id" placeholder="Select Status" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperActive" class="block font-bold mb-2">Active</label>
                                <p-select [(ngModel)]="stepperData.asset.Active" inputId="stepperActive" [options]="activeOptions" optionLabel="label" optionValue="value" placeholder="Select" fluid />
                            </div>
                        </div>
                        <div class="flex pt-6 justify-end">
                            <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextStep()" />
                        </div>
                    </div>

                    <!-- Step 2: InvCustlip Details -->
                    <div *ngSwitchCase="1" class="step-content">
                        <div class="grid grid-cols-12 gap-4 mt-4">
                            <div class="col-span-6">
                                <label for="stepperQuantity" class="block font-bold mb-2">Quantity</label>
                                <input type="number" pInputText id="stepperQuantity" [(ngModel)]="stepperData.invCustlip.Quantity" required fluid />
                                <small class="text-red-500" *ngIf="submittedInv && !stepperData.invCustlip.Quantity">Quantity is required.</small>
                            </div>
                            <div class="col-span-6">
                                <label for="stepperUom" class="block font-bold mb-2">Unit of Measure</label>
                                <input type="text" pInputText id="stepperUom" [(ngModel)]="stepperData.invCustlip.UoM" required fluid />
                                <small class="text-red-500" *ngIf="submittedInv && !stepperData.invCustlip.UoM">Unit of Measure is required.</small>
                            </div>
                            <div class="col-span-6">
                                <label for="stepperColorId" class="block font-bold mb-2">Color</label>
                                <p-select id="stepperColorId" [(ngModel)]="stepperData.invCustlip.color_id" [options]="colors" optionLabel="Description" optionValue="color_id" placeholder="Select a color" fluid />
                            </div>
                            <div class="col-span-12">
                                <label for="stepperDescription" class="block font-bold mb-2">Description</label>
                                <textarea id="stepperDescription" pTextarea [(ngModel)]="stepperData.invCustlip.Description" rows="3" required fluid></textarea>
                                <small class="text-red-500" *ngIf="submittedInv && !stepperData.invCustlip.Description">Description is required.</small>
                            </div>
                            <div class="col-span-6">
                                <label for="stepperBrandId" class="block font-bold mb-2">Brand</label>
                                <p-select id="stepperBrandId" [(ngModel)]="stepperData.invCustlip.brand_id" [options]="brands" optionLabel="BrandName" optionValue="brand_id" placeholder="Select a brand" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperHeight" class="block font-bold mb-2">Height</label>
                                <input type="text" pInputText id="stepperHeight" [(ngModel)]="stepperData.invCustlip.height" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperWidth" class="block font-bold mb-2">Width</label>
                                <input type="text" pInputText id="stepperWidth" [(ngModel)]="stepperData.invCustlip.width" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperPackage" class="block font-bold mb-2">Package</label>
                                <input type="text" pInputText id="stepperPackage" [(ngModel)]="stepperData.invCustlip.package" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperMaterial" class="block font-bold mb-2">Material</label>
                                <input type="text" pInputText id="stepperMaterial" [(ngModel)]="stepperData.invCustlip.material" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperInvNo" class="block font-bold mb-2">Inventory No</label>
                                <input type="text" pInputText id="stepperInvNo" [(ngModel)]="stepperData.invCustlip.InvNo" fluid />
                            </div>
                            <div class="col-span-6">
                                <label for="stepperInvDateAcquired" class="block font-bold mb-2">Date Acquired</label>
                                <input type="date" pInputText id="stepperInvDateAcquired" [(ngModel)]="stepperData.invCustlip.DateAcquired" fluid />
                            </div>
                        </div>
                        <div class="flex pt-6 justify-between">
                            <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="previousStep()" />
                            <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="nextStep()" />
                        </div>
                    </div>

                    <!-- Step 3: Review -->
                    <div *ngSwitchCase="2" class="step-content">
                        <div class="mt-4">
                            <h3 class="text-xl font-bold mb-4">Review Your Information</h3>

                            <!-- Asset Review -->
                            <div class="mb-6">
                                <h4 class="text-lg font-semibold mb-3 text-primary">Asset Details</h4>
                                <div class="grid grid-cols-12 gap-2 text-sm">
                                    <div class="col-span-6"><strong>Property No:</strong> {{ stepperData.asset.PropertyNo }}</div>
                                    <div class="col-span-6"><strong>Category:</strong> {{ stepperData.asset.Category }}</div>
                                    <div class="col-span-6"><strong>Asset Name:</strong> {{ stepperData.asset.AssetName }}</div>
                                    <div class="col-span-6"><strong>Found Cluster:</strong> {{ stepperData.asset.FoundCluster }}</div>
                                    <div class="col-span-6"><strong>Date Acquired:</strong> {{ stepperData.asset.DateAcquired }}</div>
                                    <div class="col-span-6"><strong>Issued To:</strong> {{ stepperData.asset.IssuedTo }}</div>
                                    <div class="col-span-12"><strong>Purpose:</strong> {{ stepperData.asset.Purpose }}</div>
                                </div>
                            </div>

                            <!-- InvCustlip Review -->
                            <div class="mb-4">
                                <h4 class="text-lg font-semibold mb-3 text-primary">InvCustlip Details</h4>
                                <div class="grid grid-cols-12 gap-2 text-sm">
                                    <div class="col-span-6"><strong>Quantity:</strong> {{ stepperData.invCustlip.Quantity }}</div>
                                    <div class="col-span-6"><strong>Unit of Measure:</strong> {{ stepperData.invCustlip.UoM }}</div>
                                    <div class="col-span-6"><strong>Brand:</strong> {{ getBrandName(stepperData.invCustlip.brand_id) }}</div>
                                    <div class="col-span-6"><strong>Color:</strong> {{ getColorName(stepperData.invCustlip.color_id) }}</div>
                                    <div class="col-span-6"><strong>Height:</strong> {{ stepperData.invCustlip.height }}</div>
                                    <div class="col-span-6"><strong>Width:</strong> {{ stepperData.invCustlip.width }}</div>
                                    <div class="col-span-6"><strong>Package:</strong> {{ stepperData.invCustlip.package }}</div>
                                    <div class="col-span-6"><strong>Material:</strong> {{ stepperData.invCustlip.material }}</div>
                                    <div class="col-span-6"><strong>Inventory No:</strong> {{ stepperData.invCustlip.InvNo }}</div>
                                    <div class="col-span-12"><strong>Description:</strong> {{ stepperData.invCustlip.Description }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex pt-6 justify-between">
                            <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="previousStep()" />
                            <p-button label="Submit" icon="pi pi-check" (onClick)="submitStepper()" />
                        </div>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeStepper()" />
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

        <p-dialog [(visible)]="invCustlipDialog" [style]="{ width: '800px' }" header="InvCustlip Details" [modal]="true">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-6">
                        <label for="quantity" class="block font-bold mb-2">Quantity</label>
                        <input type="number" pInputText id="quantity" [(ngModel)]="invCustlip.Quantity" required fluid />
                        <small class="text-red-500" *ngIf="submittedInv && !invCustlip.Quantity">Quantity is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="uom" class="block font-bold mb-2">Unit of Measure</label>
                        <input type="text" pInputText id="uom" [(ngModel)]="invCustlip.UoM" required fluid />
                        <small class="text-red-500" *ngIf="submittedInv && !invCustlip.UoM">Unit of Measure is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="colorId" class="block font-bold mb-2">Color</label>
                        <p-select id="colorId" [(ngModel)]="invCustlip.color_id" [options]="colors" optionLabel="Description" optionValue="color_id" placeholder="Select a color" fluid> </p-select>
                    </div>
                    <div class="col-span-12">
                        <label for="description" class="block font-bold mb-2">Description</label>
                        <textarea id="description" pTextarea [(ngModel)]="invCustlip.Description" rows="3" fluid required></textarea>
                        <small class="text-red-500" *ngIf="submittedInv && !invCustlip.Description">Description is required.</small>
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
                <p-button label="Cancel" icon="pi pi-times" text (click)="hideInvCustlipDialog()" />
                <p-button label="Save" icon="pi pi-check" (click)="saveInvCustlip()" />
            </ng-template>
        </p-dialog>

        <p-confirmdialog [style]="{ width: '450px' }" />
    `,
    providers: [MessageService, AssetService, ConfirmationService]
})
export class Crud implements OnInit {
    assetDialog: boolean = false;
    qrCodeViewerDialog: boolean = false;
    invCustlipDialog: boolean = false;
    stepperDialog: boolean = false;

    assets = signal<Asset[]>([]);

    asset: Asset = {};
    invCustlip: InvCustlip = {};
    selectedQrCode: string = '';

    selectedAssets: Asset[] | null = null;

    submitted: boolean = false;
    submittedInv: boolean = false;

    // Stepper properties
    currentStep: number = 0;
    stepperData = {
        asset: {} as Asset,
        invCustlip: {} as InvCustlip
    };

    statuses: any[] = [];
    categories: any[] = [];
    activeOptions: any[] = [];

    // Reference data for dropdowns
    locations: Location[] = [];
    suppliers: Supplier[] = [];
    programs: Program[] = [];
    statusOptions: Status[] = [];
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
            { label: 'Software', value: 'Software' },
            { label: 'Hardware', value: 'Hardware' }
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
        this.stepperData = {
            asset: {},
            invCustlip: {}
        };
        this.currentStep = 0;
        this.submitted = false;
        this.submittedInv = false;
        this.stepperDialog = true;
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

    openInvCustlipDialog(asset: Asset) {
        this.invCustlip = {};
        this.submittedInv = false;
        this.invCustlipDialog = true;
    }

    hideInvCustlipDialog() {
        this.invCustlipDialog = false;
        this.submittedInv = false;
    }

    saveInvCustlip() {
        this.submittedInv = true;

        if (!this.invCustlip.Description?.trim() || !this.invCustlip.Quantity || !this.invCustlip.UoM?.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Description, Quantity, and Unit of Measure are required fields.',
                confirmButtonColor: '#3B82F6'
            });
            return;
        }

        const saveOperation = this.invCustlip.inv_custlip_id ? this.assetService.updateInvCustlip(this.invCustlip.inv_custlip_id, this.invCustlip) : this.assetService.createInvCustlip(this.invCustlip);

        saveOperation.subscribe({
            next: () => {
                this.invCustlipDialog = false;
                this.invCustlip = {};
                this.submittedInv = false;

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

    // Navigation methods for stepper
    nextStep() {
        if (this.currentStep < 2) {
            this.currentStep++;
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
        }
    }

    onTabChange(event: any) {
        this.currentStep = event.index;
    }

    // Helper methods for stepper
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

    closeStepper() {
        this.stepperDialog = false;
        this.currentStep = 0;
        this.stepperData = {
            asset: {},
            invCustlip: {}
        };
        this.submitted = false;
        this.submittedInv = false;
    }

    submitStepper() {
        // Validate both forms
        this.submitted = true;
        this.submittedInv = true;

        // Check asset validation
        if (!this.stepperData.asset.PropertyNo?.trim() || !this.stepperData.asset.AssetName?.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Asset Information',
                text: 'Asset Property No and Asset Name are required fields.',
                confirmButtonColor: '#3B82F6'
            });
            return;
        }

        // Check InvCustlip validation
        if (!this.stepperData.invCustlip.Description?.trim() || !this.stepperData.invCustlip.Quantity || !this.stepperData.invCustlip.UoM?.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing InvCustlip Information',
                text: 'InvCustlip Description, Quantity, and Unit of Measure are required fields.',
                confirmButtonColor: '#3B82F6'
            });
            return;
        }

        // Generate PropertyNo if not provided
        if (!this.stepperData.asset.PropertyNo) {
            this.stepperData.asset.PropertyNo = this.generatePropertyNo();
        }

        // Save Asset first, then InvCustlip
        this.assetService.createAsset(this.stepperData.asset).subscribe({
            next: (assetResponse) => {
                console.log('Asset created successfully', assetResponse);

                // Now save InvCustlip
                this.assetService.createInvCustlip(this.stepperData.invCustlip).subscribe({
                    next: (invCustlipResponse) => {
                        console.log('InvCustlip created successfully', invCustlipResponse);

                        // Reload assets and close stepper
                        this.loadAssets();
                        this.closeStepper();

                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Asset and InvCustlip created successfully',
                            timer: 3000,
                            showConfirmButton: false
                        });
                    },
                    error: (error) => {
                        console.error('Error creating InvCustlip:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Asset was created but failed to create InvCustlip. Please try again.',
                            confirmButtonColor: '#EF4444'
                        });
                    }
                });
            },
            error: (error) => {
                console.error('Error creating asset:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to create asset. Please try again.',
                    confirmButtonColor: '#EF4444'
                });
            }
        });
    }
}
