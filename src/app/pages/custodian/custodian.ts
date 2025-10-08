import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
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
import { AssetService, InvCustlip, Color, Brand } from '../service/asset.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-custodian',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        ConfirmDialogModule,
        InputTextModule,
        TextareaModule,
        InputNumberModule,
        DialogModule,
        SelectModule,
        DatePickerModule,
        TagModule,
        InputIconModule,
        IconFieldModule
    ],
    providers: [MessageService, ConfirmationService],
    styles: [
        `
            .card {
                background: var(--surface-card);
                border: 1px solid var(--surface-border);
                border-radius: var(--border-radius);
                padding: 1.5rem;
                margin-bottom: 1rem;
                box-shadow:
                    0 2px 1px -1px rgba(0, 0, 0, 0.2),
                    0 1px 1px 0 rgba(0, 0, 0, 0.14),
                    0 1px 3px 0 rgba(0, 0, 0, 0.12);
            }

            .card-header {
                color: var(--primary-color);
                margin-bottom: 1rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid var(--surface-border);
                display: flex;
                align-items: center;
            }

            .field label {
                display: block;
                margin-bottom: 0.5rem;
                color: var(--text-color);
                font-weight: 500;
            }

            .field label i {
                color: var(--primary-color);
            }

            .p-inputtext,
            .p-inputnumber,
            .p-select,
            .p-datepicker,
            .p-inputtextarea {
                width: 100%;
            }

            .color-preview {
                border: 2px solid var(--surface-border);
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }

            .required-field::after {
                content: ' *';
                color: var(--red-500);
            }

            :host ::ng-deep .p-dialog .p-dialog-content {
                padding: 1.5rem;
                max-height: 70vh;
                overflow-y: auto;
            }

            :host ::ng-deep .p-dialog-header {
                background: var(--primary-color);
                color: var(--primary-color-text);
            }

            :host ::ng-deep .p-dialog-footer {
                border-top: 1px solid var(--surface-border);
                padding: 1rem 1.5rem;
                background: var(--surface-ground);
            }

            :host ::ng-deep .ng-invalid.ng-dirty {
                border-color: var(--red-500);
            }

            :host ::ng-deep .p-error {
                color: var(--red-500);
                font-size: 0.875rem;
            }

            .section-divider {
                border-top: 1px solid var(--surface-border);
                margin: 2rem 0 1rem 0;
            }
        `
    ],
    template: `
        <div class="grid">
            <div class="col-12">
                <div class="card px-6 py-6">
                    <p-toast></p-toast>
                    <p-toolbar styleClass="mb-4 gap-2">
                        <ng-template pTemplate="left">
                            <p-button severity="success" label="New" icon="pi pi-plus" class="mr-2" (click)="openNew()"> </p-button>
                            <p-button severity="danger" label="Delete" icon="pi pi-trash" (click)="deleteSelectedItems()" [disabled]="!selectedItems || !selectedItems.length"> </p-button>
                        </ng-template>

                        <ng-template pTemplate="right">
                            <p-fileUpload mode="basic" accept="image/*" [maxFileSize]="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block"> </p-fileUpload>
                            <p-button severity="help" label="Export" icon="pi pi-upload"> </p-button>
                        </ng-template>
                    </p-toolbar>

                    <p-table
                        #dt
                        [value]="invCustlips"
                        [columns]="cols"
                        responsiveLayout="scroll"
                        [rows]="10"
                        [globalFilterFields]="['PropertyNo', 'Description', 'InvNo']"
                        [paginator]="true"
                        [rowsPerPageOptions]="[10, 20, 30]"
                        [showCurrentPageReport]="true"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                        [(selection)]="selectedItems"
                        selectionMode="multiple"
                        [rowHover]="true"
                        dataKey="inv_custlip_id"
                    >
                        <ng-template #caption>
                            <div class="flex items-center justify-between">
                                <h5 class="m-0">Custodian</h5>
                                <p-iconfield>
                                    <p-inputicon styleClass="pi pi-search" />
                                    <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search ..." />
                                </p-iconfield>
                            </div>
                        </ng-template>

                        <ng-template pTemplate="header">
                            <tr>
                                <th style="width: 3rem">
                                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                                </th>
                                <th pSortableColumn="PropertyNo">Property No <p-sortIcon field="PropertyNo"></p-sortIcon></th>
                                <th pSortableColumn="InvNo">Invoice No <p-sortIcon field="InvNo"></p-sortIcon></th>
                                <th pSortableColumn="Description">Description <p-sortIcon field="Description"></p-sortIcon></th>
                                <th pSortableColumn="Quantity">Quantity <p-sortIcon field="Quantity"></p-sortIcon></th>
                                <th pSortableColumn="UoM">Unit <p-sortIcon field="UoM"></p-sortIcon></th>
                                <th>Brand</th>
                                <th>Color</th>
                                <th pSortableColumn="DateAcquired">Date Acquired <p-sortIcon field="DateAcquired"></p-sortIcon></th>
                                <th>Actions</th>
                            </tr>
                        </ng-template>

                        <ng-template pTemplate="body" let-item>
                            <tr>
                                <td>
                                    <p-tableCheckbox [value]="item"></p-tableCheckbox>
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title"></span>
                                    {{ item.PropertyNo }}
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title"></span>
                                    {{ item.InvNo }}
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title"></span>
                                    {{ item.Description }}
                                </td>
                                <td style="width:14%; min-width:8rem;">
                                    <span class="p-column-title"></span>
                                    {{ item.Quantity }}
                                </td>
                                <td style="width:14%; min-width:8rem;">
                                    <span class="p-column-title"></span>
                                    {{ item.UoM }}
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title"></span>
                                    {{ getBrandName(item.brand_id) }}
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title"></span>
                                    <div class="flex align-items-center gap-2">
                                        <div class="w-2rem h-2rem border-round" [style.background-color]="getColorCode(item.color_id)"></div>
                                        {{ getColorDescription(item.color_id) }}
                                    </div>
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title"></span>
                                    {{ item.DateAcquired | date: 'shortDate' }}
                                </td>
                                <td>
                                    <div class="flex gap-2">
                                        <p-button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" (click)="editItem(item)"> </p-button>
                                        <p-button icon="pi pi-trash" class="p-button-rounded p-button-warning" (click)="deleteItem(item)"> </p-button>
                                    </div>
                                </td>
                            </tr>
                        </ng-template>
                    </p-table>
                </div>

                <p-dialog [(visible)]="itemDialog" [style]="{ width: '900px' }" header="InvCustlip Details" [modal]="true" class="p-fluid" [maximizable]="true">
                    <ng-template pTemplate="content">
                        <div class="grid">
                            <!-- Basic Information Section -->
                            <div class="col-12">
                                <div class="card">
                                    <h5 class="card-header mb-3">
                                        <i class="pi pi-info-circle mr-2"></i>
                                        Basic Information
                                    </h5>
                                    <div class="grid">
                                        <div class="col-12 md:col-6">
                                            <div class="field">
                                                <label for="propertyNo" class="font-semibold">
                                                    <i class="pi pi-tag mr-1"></i>
                                                    Property No *
                                                </label>
                                                <input type="text" pInputText id="propertyNo" [(ngModel)]="item.PropertyNo" required autofocus placeholder="Enter property number" [ngClass]="{ 'ng-invalid ng-dirty': submitted && !item.PropertyNo }" />
                                                <small class="p-error" *ngIf="submitted && !item.PropertyNo"> Property No is required. </small>
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-6">
                                            <div class="field">
                                                <label for="invNo" class="font-semibold">
                                                    <i class="pi pi-file-o mr-1"></i>
                                                    Invoice No
                                                </label>
                                                <input type="text" pInputText id="invNo" [(ngModel)]="item.InvNo" placeholder="Enter invoice number" />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="field">
                                                <label for="description" class="font-semibold">
                                                    <i class="pi pi-align-left mr-1"></i>
                                                    Description
                                                </label>
                                                <textarea id="description" pInputTextarea [(ngModel)]="item.Description" rows="3" placeholder="Enter detailed description" [autoResize]="true"> </textarea>
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-6">
                                            <div class="field">
                                                <label for="dateAcquired" class="font-semibold">
                                                    <i class="pi pi-calendar mr-1"></i>
                                                    Date Acquired
                                                </label>
                                                <p-datepicker [(ngModel)]="item.DateAcquired" dateFormat="yy-mm-dd" id="dateAcquired" placeholder="Select date" [showIcon]="true"> </p-datepicker>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Quantity & Brand Information -->
                            <div class="col-12">
                                <div class="card">
                                    <h5 class="card-header mb-3">
                                        <i class="pi pi-shopping-cart mr-2"></i>
                                        Quantity & Brand
                                    </h5>
                                    <div class="grid">
                                        <div class="col-12 md:col-4">
                                            <div class="field">
                                                <label for="quantity" class="font-semibold">
                                                    <i class="pi pi-hashtag mr-1"></i>
                                                    Quantity
                                                </label>
                                                <p-inputNumber id="quantity" [(ngModel)]="item.Quantity" mode="decimal" placeholder="0" [min]="0"> </p-inputNumber>
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-4">
                                            <div class="field">
                                                <label for="uom" class="font-semibold">
                                                    <i class="pi pi-calculator mr-1"></i>
                                                    Unit of Measure
                                                </label>
                                                <input type="text" pInputText id="uom" [(ngModel)]="item.UoM" placeholder="e.g., pieces, units, kg" />
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-4">
                                            <div class="field">
                                                <label for="brand" class="font-semibold">
                                                    <i class="pi pi-bookmark mr-1"></i>
                                                    Brand
                                                </label>
                                                <p-select [options]="brands" [(ngModel)]="item.brand_id" optionLabel="BrandName" optionValue="brand_id" placeholder="Select a Brand" [showClear]="true"> </p-select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Visual & Physical Properties -->
                            <div class="col-12">
                                <div class="card">
                                    <h5 class="card-header mb-3">
                                        <i class="pi pi-palette mr-2"></i>
                                        Visual & Physical Properties
                                    </h5>
                                    <div class="grid">
                                        <div class="col-12 md:col-6">
                                            <div class="field">
                                                <label for="color" class="font-semibold">
                                                    <i class="pi pi-circle-fill mr-1"></i>
                                                    Color
                                                </label>
                                                <p-select [options]="colors" [(ngModel)]="item.color_id" optionLabel="Description" optionValue="color_id" placeholder="Select a Color" [showClear]="true">
                                                    <ng-template pTemplate="selectedItem">
                                                        <div class="flex align-items-center gap-2" *ngIf="item.color_id">
                                                            <div class="w-2rem h-2rem border-2 border-round shadow-2" [style.background-color]="getColorCode(item.color_id)"></div>
                                                            <span class="font-medium">{{ getColorDescription(item.color_id) }}</span>
                                                        </div>
                                                    </ng-template>
                                                    <ng-template pTemplate="item" let-color>
                                                        <div class="flex align-items-center gap-2 p-2">
                                                            <div class="w-2rem h-2rem border-2 border-round shadow-1" [style.background-color]="color.ColorCode"></div>
                                                            <span>{{ color.Description }}</span>
                                                        </div>
                                                    </ng-template>
                                                </p-select>
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-6">
                                            <div class="field">
                                                <label for="material" class="font-semibold">
                                                    <i class="pi pi-box mr-1"></i>
                                                    Material
                                                </label>
                                                <input type="text" pInputText id="material" [(ngModel)]="item.material" placeholder="e.g., Plastic, Metal, Wood" />
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-4">
                                            <div class="field">
                                                <label for="height" class="font-semibold">
                                                    <i class="pi pi-arrows-v mr-1"></i>
                                                    Height
                                                </label>
                                                <input type="text" pInputText id="height" [(ngModel)]="item.height" placeholder="e.g., 15 inches" />
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-4">
                                            <div class="field">
                                                <label for="width" class="font-semibold">
                                                    <i class="pi pi-arrows-h mr-1"></i>
                                                    Width
                                                </label>
                                                <input type="text" pInputText id="width" [(ngModel)]="item.width" placeholder="e.g., 10 inches" />
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-4">
                                            <div class="field">
                                                <label for="package" class="font-semibold">
                                                    <i class="pi pi-gift mr-1"></i>
                                                    Package
                                                </label>
                                                <input type="text" pInputText id="package" [(ngModel)]="item.package" placeholder="e.g., Box, Envelope" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Technical Specifications -->
                            <div class="col-12">
                                <div class="card">
                                    <h5 class="card-header mb-3">
                                        <i class="pi pi-cog mr-2"></i>
                                        Technical Specifications
                                    </h5>
                                    <div class="grid">
                                        <div class="col-12 md:col-4">
                                            <div class="field">
                                                <label for="cpu" class="font-semibold">
                                                    <i class="pi pi-microchip mr-1"></i>
                                                    CPU
                                                </label>
                                                <input type="text" pInputText id="cpu" [(ngModel)]="item.specs!.CPU" placeholder="e.g., Intel i7, AMD Ryzen" />
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-4">
                                            <div class="field">
                                                <label for="ram" class="font-semibold">
                                                    <i class="pi pi-server mr-1"></i>
                                                    RAM
                                                </label>
                                                <input type="text" pInputText id="ram" [(ngModel)]="item.specs!.RAM" placeholder="e.g., 16GB, 32GB" />
                                            </div>
                                        </div>

                                        <div class="col-12 md:col-4">
                                            <div class="field">
                                                <label for="storage" class="font-semibold">
                                                    <i class="pi pi-database mr-1"></i>
                                                    Storage
                                                </label>
                                                <input type="text" pInputText id="storage" [(ngModel)]="item.specs!.Storage" placeholder="e.g., 512GB SSD, 1TB HDD" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ng-template>

                    <ng-template pTemplate="footer">
                        <div class="flex justify-content-end gap-2">
                            <p-button label="Cancel" icon="pi pi-times" severity="secondary" [outlined]="true" (click)="hideDialog()"> </p-button>
                            <p-button [label]="saving ? 'Saving...' : 'Save'" [icon]="saving ? 'pi pi-spin pi-spinner' : 'pi pi-check'" severity="success" [disabled]="saving" (click)="saveItem()"> </p-button>
                        </div>
                    </ng-template>
                </p-dialog>

                <p-confirmDialog [style]="{ width: '450px' }"></p-confirmDialog>
            </div>
        </div>
    `
})
export class CustodianComponent implements OnInit {
    itemDialog: boolean = false;
    deleteItemDialog: boolean = false;
    deleteItemsDialog: boolean = false;

    invCustlips: InvCustlip[] = [];
    item: InvCustlip = {};
    selectedItems: InvCustlip[] = [];
    submitted: boolean = false;
    saving: boolean = false;
    cols: any[] = [];

    colors: Color[] = [];
    brands: Brand[] = [];

    constructor(
        private assetService: AssetService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit() {
        this.loadInvCustlips();
        this.loadReferenceData();

        this.cols = [
            { field: 'PropertyNo', header: 'Property No' },
            { field: 'InvNo', header: 'Invoice No' },
            { field: 'Description', header: 'Description' },
            { field: 'Quantity', header: 'Quantity' },
            { field: 'UoM', header: 'Unit' },
            { field: 'DateAcquired', header: 'Date Acquired' }
        ];
    }

    loadInvCustlips() {
        this.assetService.getInvCustlips().subscribe({
            next: (data) => {
                this.invCustlips = data;
            },
            error: (error) => {
                Swal.fire('Error', 'Failed to load InvCustlips data', 'error');
                console.error('Error loading InvCustlips:', error);
            }
        });
    }

    loadReferenceData() {
        this.assetService.getColors().subscribe({
            next: (colors) => {
                this.colors = colors;
            },
            error: (error) => {
                console.error('Error loading colors:', error);
            }
        });

        this.assetService.getBrands().subscribe({
            next: (brands) => {
                this.brands = brands;
            },
            error: (error) => {
                console.error('Error loading brands:', error);
            }
        });
    }

    openNew() {
        this.item = {
            specs: {}
        };
        this.submitted = false;
        this.itemDialog = true;
    }

    deleteSelectedItems() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected items?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                // Implement bulk delete logic here
                this.selectedItems = [];
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Items Deleted', life: 3000 });
            }
        });
    }

    editItem(item: InvCustlip) {
        this.item = { ...item };
        if (!this.item.specs) {
            this.item.specs = {};
        }
        this.itemDialog = true;
    }

    deleteItem(item: InvCustlip) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + item.PropertyNo + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                if (item.inv_custlip_id) {
                    this.assetService.deleteInvCustlip(item.inv_custlip_id).subscribe({
                        next: () => {
                            this.invCustlips = this.invCustlips.filter((val) => val.inv_custlip_id !== item.inv_custlip_id);
                            this.item = {};
                            Swal.fire('Deleted!', 'InvCustlip has been deleted.', 'success');
                        },
                        error: (error) => {
                            Swal.fire('Error', 'Failed to delete InvCustlip', 'error');
                            console.error('Error deleting InvCustlip:', error);
                        }
                    });
                }
            }
        });
    }

    hideDialog() {
        this.itemDialog = false;
        this.submitted = false;
        this.saving = false;
    }

    saveItem() {
        this.submitted = true;

        if (this.item.PropertyNo?.trim()) {
            this.saving = true;

            if (this.item.inv_custlip_id) {
                // Update existing item
                this.assetService.updateInvCustlip(this.item.inv_custlip_id, this.item).subscribe({
                    next: (updatedItem) => {
                        const index = this.invCustlips.findIndex((val) => val.inv_custlip_id === this.item.inv_custlip_id);
                        if (index > -1) {
                            this.invCustlips[index] = updatedItem;
                        }
                        Swal.fire('Success', 'InvCustlip updated successfully!', 'success');
                        this.itemDialog = false;
                        this.item = {};
                        this.saving = false;
                    },
                    error: (error) => {
                        Swal.fire('Error', 'Failed to update InvCustlip', 'error');
                        console.error('Error updating InvCustlip:', error);
                        this.saving = false;
                    }
                });
            } else {
                // Create new item
                this.assetService.createInvCustlip(this.item).subscribe({
                    next: (newItem) => {
                        this.invCustlips.push(newItem);
                        Swal.fire('Success', 'InvCustlip created successfully!', 'success');
                        this.itemDialog = false;
                        this.item = {};
                        this.saving = false;
                    },
                    error: (error) => {
                        Swal.fire('Error', 'Failed to create InvCustlip', 'error');
                        console.error('Error creating InvCustlip:', error);
                        this.saving = false;
                    }
                });
            }
        }
    }

    onGlobalFilter(table: any, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    getBrandName(brandId: string | undefined): string {
        if (!brandId) return '';
        const brand = this.brands.find((b) => b.brand_id === brandId);
        return brand ? brand.BrandName || '' : '';
    }

    getColorCode(colorId: string | undefined): string {
        if (!colorId) return '#ffffff';
        const color = this.colors.find((c) => c.color_id === colorId);
        return color ? color.ColorCode || '#ffffff' : '#ffffff';
    }

    getColorDescription(colorId: string | undefined): string {
        if (!colorId) return '';
        const color = this.colors.find((c) => c.color_id === colorId);
        return color ? color.Description || '' : '';
    }
}
