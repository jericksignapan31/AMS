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
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-laboratories',
    standalone: true,
    imports: [CommonModule, TableModule, FormsModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, InputTextModule, TagModule, InputIconModule, IconFieldModule, TooltipModule, DialogModule, SelectModule, InputNumberModule, TextareaModule],
    providers: [MessageService],
    template: `
        <p-toast />

        <!-- Laboratory Details View (when viewing specific lab via route param) -->
        <div *ngIf="selectedLaboratoryId && selectedLaboratoryData" class="mb-4">
            <p-toolbar styleClass="mb-4 mt-4">
                <ng-template #start>
                    <div class="flex items-center gap-2">
                        <span class="text-lg font-semibold">Assets in {{ selectedLaboratoryData.laboratoryName }} ({{ selectedLaboratoryData.assets?.length || 0 }})</span>
                    </div>
                </ng-template>
                <ng-template #end>
                    <div class="flex items-center gap-2">
                        <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelectedAssets()" [disabled]="!selectedAssets.length" />
                        <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportAssetsCSV()" />
                    </div>
                </ng-template>
            </p-toolbar>

            <p-table
                #dtAssets
                [value]="selectedLaboratoryData.assets || []"
                [rows]="10"
                [paginator]="true"
                [rowsPerPageOptions]="[10, 20, 30]"
                [loading]="loading"
                [rowHover]="true"
                dataKey="assetId"
                [(selection)]="selectedAssets"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} assets"
                [showCurrentPageReport]="true"
                [tableStyle]="{ 'min-width': '70rem' }"
            >
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                        <th pSortableColumn="assetName" style="min-width:18rem">Asset <p-sortIcon field="assetName" /></th>
                        <th style="min-width:14rem">Property #</th>
                        <th style="min-width:12rem">Category</th>
                        <th style="min-width:15rem">Issued To</th>
                        <th style="min-width:12rem">QR Code</th>
                        <th style="min-width:12rem">Actions</th>
                    </tr>
                </ng-template>

                <ng-template pTemplate="body" let-asset>
                    <tr>
                        <td style="width: 3rem"><p-tableCheckbox [value]="asset" /></td>
                        <td>{{ asset.assetName }}</td>
                        <td>{{ asset.propertyNumber }}</td>
                        <td><p-tag [value]="asset.category || 'N/A'" /></td>
                        <td>{{ asset.issuedTo }}</td>
                        <td>
                            <div *ngIf="asset.qrCode" class="inline-block">
                                <img
                                    *ngIf="isBase64Image(asset.qrCode)"
                                    [src]="asset.qrCode"
                                    alt="QR Code"
                                    class="w-14 h-14 rounded-lg border-2 border-gray-300 cursor-pointer hover:shadow-lg hover:scale-110 transition-all"
                                    pTooltip="Click to view QR Code"
                                />
                                <span *ngIf="!isBase64Image(asset.qrCode)" class="text-sm bg-blue-100 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 transition-colors" pTooltip="Click to copy QR Code">
                                    {{ asset.qrCode }}
                                </span>
                            </div>
                            <span *ngIf="!asset.qrCode" class="text-gray-400">N/A</span>
                        </td>
                        <td>
                            <div class="flex gap-2">
                                <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" pTooltip="View" />
                                <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" pTooltip="Edit" />
                                <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" pTooltip="Delete" />
                            </div>
                        </td>
                    </tr>
                </ng-template>

                <ng-template pTemplate="emptymessage">
                    <tr>
                        <td colspan="7" class="text-center py-5">No assets in this laboratory</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <!-- Laboratories List View (when not viewing specific lab) -->
        <div *ngIf="!selectedLaboratoryId">
            <p-toolbar styleClass="mb-4">
                <ng-template #start>
                    <div class="flex items-center gap-2">
                        <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                        <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedLabs.length" />
                    </div>
                </ng-template>
                <ng-template #end>
                    <div class="flex items-center gap-2">
                        <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search laboratories..." />
                        </p-iconfield>
                    </div>
                </ng-template>
            </p-toolbar>

            <p-table
                #dt
                [value]="laboratories"
                [rows]="10"
                [paginator]="true"
                [rowsPerPageOptions]="[10, 20, 30]"
                [loading]="loading"
                [rowHover]="true"
                dataKey="laboratoryId"
                [(selection)]="selectedLabs"
                (selectionChange)="onSelectionChange($event)"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} laboratories"
                [showCurrentPageReport]="true"
                [tableStyle]="{ 'min-width': '70rem' }"
            >
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                        <th style="min-width:25rem">ID</th>
                        <th pSortableColumn="laboratoryName" style="min-width:20rem">Laboratory Name <p-sortIcon field="laboratoryName" /></th>
                        <th style="min-width:15rem">Capacity</th>
                        <th style="min-width:15rem">Campus</th>
                        <th style="min-width:12rem">Actions</th>
                    </tr>
                </ng-template>

                <ng-template pTemplate="body" let-lab>
                    <tr>
                        <td style="width: 3rem"><p-tableCheckbox [value]="lab" /></td>
                        <td>{{ lab.laboratoryId }}</td>
                        <td>{{ lab.laboratoryName }}</td>
                        <td>{{ lab.capacity }}</td>
                        <td>{{ lab.campus?.campusName }}</td>
                        <td>
                            <div class="flex gap-2">
                                <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(lab)" />
                                <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(lab)" />
                                <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(lab)" />
                            </div>
                        </td>
                    </tr>
                </ng-template>

                <ng-template pTemplate="emptymessage">
                    <tr>
                        <td colspan="6" class="text-center py-5">No laboratories found</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <!-- New Laboratory Dialog -->
        <p-dialog [(visible)]="labDialog" [style]="{ width: '500px' }" header="Laboratory" [modal]="true" [closable]="true" (onHide)="closeDialog()">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4 mt-2">
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Laboratory Name *</label>
                        <input pInputText [(ngModel)]="newLab.laboratoryName" placeholder="Enter laboratory name" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Capacity *</label>
                        <p-inputNumber [(ngModel)]="newLab.capacity" placeholder="Enter capacity" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Laboratory Location *</label>
                        <input pInputText [(ngModel)]="newLab.laboratoryLocation" placeholder="Enter laboratory location" class="w-full" />
                    </div>
                </div>
            </ng-template>
            <ng-template #footer>
                <div class="flex justify-end gap-2 w-full">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeDialog()" />
                    <p-button label="Save" icon="pi pi-check" (click)="saveLab()" />
                </div>
            </ng-template>
        </p-dialog>
    `
})
export class LaboratoriesComponent implements OnInit {
    @ViewChild('dt') dt: Table | undefined;

    laboratories: any[] = [];
    filteredLaboratories: any[] = [];
    selectedLabs: any[] = [];
    selectedAssets: any[] = [];
    searchValue: string = '';
    loading: boolean = true;
    selectedLaboratoryId: string | null = null;
    selectedLaboratoryData: any = null;

    // Dialog state
    labDialog: boolean = false;
    newLab: any = this.getEmptyLab();

    private apiUrl = `${environment.apiUrl}/laboratories`;

    constructor(
        private messageService: MessageService,
        private http: HttpClient,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        // Check if navigated with a specific laboratory ID
        this.route.paramMap.subscribe((params) => {
            const labId = params.get('id');
            if (labId) {
                console.log('🔍 Loading specific laboratory with ID:', labId);
                this.selectedLaboratoryId = labId;
                this.loadLaboratories(labId);
            } else {
                this.loadLaboratories();
            }
        });
    }

    getEmptyLab() {
        return {
            laboratoryId: '',
            laboratoryName: '',
            capacity: 0,
            laboratoryLocation: '',
            campus: null
        };
    }

    loadLaboratories(laboratoryId?: string) {
        this.loading = true;
        console.log('📡 Fetching laboratories from:', this.apiUrl);

        this.http.get<any[]>(this.apiUrl).subscribe({
            next: (data: any[]) => {
                console.log('✅ Laboratories API Response:', data);
                console.log('📊 Laboratories count:', data?.length || 0);
                if (data && data.length > 0) {
                    console.log('🏷️ First laboratory:', data[0]);
                    console.log('🏷️ Laboratory fields:', Object.keys(data[0]));
                }
                console.table(data);
                this.laboratories = data || [];

                // If a specific laboratory ID is provided, filter to show only that one
                if (laboratoryId) {
                    const filtered = this.laboratories.filter((lab) => lab.laboratoryId === laboratoryId);
                    if (filtered.length > 0) {
                        console.log('🎯 Found laboratory:', filtered[0]);
                        this.selectedLaboratoryData = filtered[0];
                        console.log('📦 Assets in laboratory:', this.selectedLaboratoryData.assets?.length || 0);
                        this.filteredLaboratories = filtered;
                    } else {
                        console.warn('⚠️ Laboratory not found with ID:', laboratoryId);
                        this.filteredLaboratories = [];
                    }
                } else {
                    this.filteredLaboratories = [...this.laboratories];
                }

                this.loading = false;
            },
            error: (error: any) => {
                console.error('❌ Error loading laboratories:', error);
                console.error('Error status:', error?.status);
                console.error('Error message:', error?.message);
                console.error('Error details:', error?.error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load laboratories: ' + error?.message
                });
                this.loading = false;
            }
        });
    }

    filter() {
        this.filteredLaboratories = this.laboratories.filter((lab) => {
            return (
                lab.laboratoryName?.toLowerCase().includes(this.searchValue.toLowerCase()) || lab.laboratoryId?.toLowerCase().includes(this.searchValue.toLowerCase()) || lab.campus?.campusName?.toLowerCase().includes(this.searchValue.toLowerCase())
            );
        });
    }

    onSelectionChange(event: any) {
        console.log('✅ Selection Changed');
        console.log('📊 Total Selected:', this.selectedLabs.length);
    }

    openNew() {
        this.newLab = this.getEmptyLab();
        this.labDialog = true;
    }

    closeDialog() {
        this.labDialog = false;
        this.newLab = this.getEmptyLab();
    }

    saveLab() {
        if (!this.newLab.laboratoryName || !this.newLab.capacity || !this.newLab.laboratoryLocation) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Validation',
                detail: 'Laboratory Name, Capacity, and Location are required'
            });
            return;
        }

        const payload = {
            laboratoryName: this.newLab.laboratoryName,
            capacity: this.newLab.capacity,
            laboratoryLocation: this.newLab.laboratoryLocation
        };

        console.log('📤 Creating laboratory with payload:', payload);

        this.http.post<any>(this.apiUrl, payload).subscribe({
            next: (response) => {
                console.log('✅ Laboratory created:', response);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Laboratory created successfully'
                });
                this.closeDialog();
                this.loadLaboratories();
            },
            error: (error) => {
                console.error('❌ Error creating laboratory:', error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to create laboratory: ' + (error?.error?.message || error?.message)
                });
            }
        });
    }

    view(lab: any) {
        console.log('👁️ Viewing laboratory:', lab);
        this.messageService.add({
            severity: 'info',
            summary: 'View Laboratory',
            detail: `Viewing: ${lab.laboratoryName}`
        });
    }

    edit(lab: any) {
        console.log('✏️ Editing laboratory:', lab);
        this.newLab = { ...lab };
        this.labDialog = true;
    }

    delete(lab: any) {
        console.log('🗑️ Deleting laboratory:', lab);
        this.messageService.add({
            severity: 'warn',
            summary: 'Delete Laboratory',
            detail: `Delete: ${lab.laboratoryName}?`
        });
    }

    deleteSelected() {
        if (!this.selectedLabs || this.selectedLabs.length === 0) return;
        console.log('🗑️ Deleting selected:', this.selectedLabs);
        this.messageService.add({
            severity: 'warn',
            summary: 'Delete',
            detail: `Delete ${this.selectedLabs.length} laboratory(ies)?`
        });
    }

    exportCSV() {
        let csv = 'Laboratory ID,Laboratory Name,Capacity,Campus\n';
        this.laboratories.forEach((lab) => {
            csv += `${lab.laboratoryId},${lab.laboratoryName},${lab.capacity},${lab.campus?.campusName}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'laboratories.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }

    isBase64Image(qrCode: string): boolean {
        return qrCode?.startsWith('data:image') || qrCode?.startsWith('http');
    }

    deleteSelectedAssets() {
        if (!this.selectedAssets || this.selectedAssets.length === 0) return;
        console.log('🗑️ Deleting selected assets:', this.selectedAssets);
        this.messageService.add({
            severity: 'warn',
            summary: 'Delete',
            detail: `Delete ${this.selectedAssets.length} asset(s)?`
        });
    }

    exportAssetsCSV() {
        const assets = this.selectedLaboratoryData?.assets || [];
        let csv = 'Asset Name,Property #,Category,Issued To\n';
        assets.forEach((asset: any) => {
            csv += `${asset.assetName},${asset.propertyNumber},${asset.category || 'N/A'},${asset.issuedTo}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.selectedLaboratoryData?.laboratoryName || 'laboratory'}_assets.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
