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
        TagModule
    ],
    providers: [MessageService, ConfirmationService],
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
                        <ng-template pTemplate="caption">
                            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                                <h5 class="m-0">Manage InvCustlips</h5>
                                <span class="block mt-2 md:mt-0 p-input-icon-left">
                                    <i class="pi pi-search"></i>
                                    <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search..." class="w-full sm:w-auto" />
                                </span>
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
                                    <span class="p-column-title">Property No</span>
                                    {{ item.PropertyNo }}
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title">Invoice No</span>
                                    {{ item.InvNo }}
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title">Description</span>
                                    {{ item.Description }}
                                </td>
                                <td style="width:14%; min-width:8rem;">
                                    <span class="p-column-title">Quantity</span>
                                    {{ item.Quantity }}
                                </td>
                                <td style="width:14%; min-width:8rem;">
                                    <span class="p-column-title">Unit</span>
                                    {{ item.UoM }}
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title">Brand</span>
                                    {{ getBrandName(item.brand_id) }}
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title">Color</span>
                                    <div class="flex align-items-center gap-2">
                                        <div class="w-2rem h-2rem border-round" [style.background-color]="getColorCode(item.color_id)"></div>
                                        {{ getColorDescription(item.color_id) }}
                                    </div>
                                </td>
                                <td style="width:14%; min-width:10rem;">
                                    <span class="p-column-title">Date Acquired</span>
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

                <p-dialog [(visible)]="itemDialog" [style]="{ width: '800px' }" header="InvCustlip Details" [modal]="true" class="p-fluid">
                    <ng-template pTemplate="content">
                        <div class="grid">
                            <div class="col-12 md:col-6">
                                <div class="field">
                                    <label for="propertyNo">Property No</label>
                                    <input type="text" pInputText id="propertyNo" [(ngModel)]="item.PropertyNo" required autofocus [ngClass]="{ 'ng-invalid ng-dirty': submitted && !item.PropertyNo }" />
                                    <small class="ng-dirty ng-invalid" *ngIf="submitted && !item.PropertyNo">Property No is required.</small>
                                </div>
                            </div>

                            <div class="col-12 md:col-6">
                                <div class="field">
                                    <label for="invNo">Invoice No</label>
                                    <input type="text" pInputText id="invNo" [(ngModel)]="item.InvNo" />
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="field">
                                    <label for="description">Description</label>
                                    <textarea id="description" pInputTextarea [(ngModel)]="item.Description" rows="3" cols="20"> </textarea>
                                </div>
                            </div>

                            <div class="col-12 md:col-6">
                                <div class="field">
                                    <label for="quantity">Quantity</label>
                                    <p-inputNumber id="quantity" [(ngModel)]="item.Quantity" mode="decimal"> </p-inputNumber>
                                </div>
                            </div>

                            <div class="col-12 md:col-6">
                                <div class="field">
                                    <label for="uom">Unit of Measure</label>
                                    <input type="text" pInputText id="uom" [(ngModel)]="item.UoM" />
                                </div>
                            </div>

                            <div class="col-12 md:col-6">
                                <div class="field">
                                    <label for="brand">Brand</label>
                                    <p-select [options]="brands" [(ngModel)]="item.brand_id" optionLabel="BrandName" optionValue="brand_id" placeholder="Select a Brand"> </p-select>
                                </div>
                            </div>

                            <div class="col-12 md:col-6">
                                <div class="field">
                                    <label for="color">Color</label>
                                    <p-select [options]="colors" [(ngModel)]="item.color_id" optionLabel="Description" optionValue="color_id" placeholder="Select a Color">
                                        <ng-template pTemplate="selectedItem">
                                            <div class="flex align-items-center gap-2" *ngIf="item.color_id">
                                                <div class="w-1rem h-1rem border-round" [style.background-color]="getColorCode(item.color_id)"></div>
                                                <span>{{ getColorDescription(item.color_id) }}</span>
                                            </div>
                                        </ng-template>
                                        <ng-template pTemplate="item" let-color>
                                            <div class="flex align-items-center gap-2">
                                                <div class="w-1rem h-1rem border-round" [style.background-color]="color.ColorCode"></div>
                                                <span>{{ color.Description }}</span>
                                            </div>
                                        </ng-template>
                                    </p-select>
                                </div>
                            </div>

                            <div class="col-12 md:col-6">
                                <div class="field">
                                    <label for="dateAcquired">Date Acquired</label>
                                    <p-datepicker [(ngModel)]="item.DateAcquired" dateFormat="yy-mm-dd" id="dateAcquired"> </p-datepicker>
                                </div>
                            </div>

                            <div class="col-12 md:col-6">
                                <div class="field">
                                    <label for="material">Material</label>
                                    <input type="text" pInputText id="material" [(ngModel)]="item.material" />
                                </div>
                            </div>

                            <div class="col-12 md:col-4">
                                <div class="field">
                                    <label for="height">Height</label>
                                    <input type="text" pInputText id="height" [(ngModel)]="item.height" />
                                </div>
                            </div>

                            <div class="col-12 md:col-4">
                                <div class="field">
                                    <label for="width">Width</label>
                                    <input type="text" pInputText id="width" [(ngModel)]="item.width" />
                                </div>
                            </div>

                            <div class="col-12 md:col-4">
                                <div class="field">
                                    <label for="package">Package</label>
                                    <input type="text" pInputText id="package" [(ngModel)]="item.package" />
                                </div>
                            </div>

                            <!-- Specs Section -->
                            <div class="col-12">
                                <h6>Specifications</h6>
                            </div>

                            <div class="col-12 md:col-4">
                                <div class="field">
                                    <label for="cpu">CPU</label>
                                    <input type="text" pInputText id="cpu" [(ngModel)]="item.specs!.CPU" />
                                </div>
                            </div>

                            <div class="col-12 md:col-4">
                                <div class="field">
                                    <label for="ram">RAM</label>
                                    <input type="text" pInputText id="ram" [(ngModel)]="item.specs!.RAM" />
                                </div>
                            </div>

                            <div class="col-12 md:col-4">
                                <div class="field">
                                    <label for="storage">Storage</label>
                                    <input type="text" pInputText id="storage" [(ngModel)]="item.specs!.Storage" />
                                </div>
                            </div>
                        </div>
                    </ng-template>

                    <ng-template pTemplate="footer">
                        <p-button label="Cancel" icon="pi pi-times" class="p-button-text" (click)="hideDialog()"> </p-button>
                        <p-button label="Save" icon="pi pi-check" class="p-button-text" (click)="saveItem()"> </p-button>
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
    }

    saveItem() {
        this.submitted = true;

        if (this.item.PropertyNo?.trim()) {
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
                    },
                    error: (error) => {
                        Swal.fire('Error', 'Failed to update InvCustlip', 'error');
                        console.error('Error updating InvCustlip:', error);
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
                    },
                    error: (error) => {
                        Swal.fire('Error', 'Failed to create InvCustlip', 'error');
                        console.error('Error creating InvCustlip:', error);
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
