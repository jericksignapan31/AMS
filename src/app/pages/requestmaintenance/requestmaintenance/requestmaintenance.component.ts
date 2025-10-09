import { Component, OnInit, signal, ViewChild, Inject } from '@angular/core';
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
import { AssetService, InvCustlip, Color, Brand, Asset, Program, Status, Supplier, Location, MaintenanceRequest } from '../../service/asset.service';
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
    selector: 'app-requestmaintenance',
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
                <p-button label="New Request" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />
                <p-button severity="secondary" label="Delete Selected" icon="pi pi-trash" outlined (onClick)="deleteSelectedRequests()" [disabled]="!selectedRequests || !selectedRequests.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="maintenanceRequests()"
            [rows]="10"
            [columns]="cols"
            [paginator]="true"
            [globalFilterFields]="['IssueDescription', 'RequestedBy', 'Status', 'Priority']"
            responsiveLayout="stack"
            breakpoint="960px"
            [(selection)]="selectedRequests"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} requests"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            styleClass="p-datatable-customers"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Maintenance Requests</h5>
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search maintenance requests..." />
                    </p-iconfield>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th pSortableColumn="assets_id" style="min-width: 10rem">
                        Asset ID
                        <p-sortIcon field="assets_id" />
                    </th>
                    <th pSortableColumn="RequestDate" style="min-width: 10rem">
                        Request Date
                        <p-sortIcon field="RequestDate" />
                    </th>
                    <th pSortableColumn="IssueDescription" style="min-width: 15rem">
                        Issue Description
                        <p-sortIcon field="IssueDescription" />
                    </th>
                    <th pSortableColumn="RequestedBy" style="min-width: 10rem">
                        Requested By
                        <p-sortIcon field="RequestedBy" />
                    </th>
                    <th pSortableColumn="Status" style="min-width: 8rem">
                        Status
                        <p-sortIcon field="Status" />
                    </th>
                    <th pSortableColumn="Priority" style="min-width: 8rem">
                        Priority
                        <p-sortIcon field="Priority" />
                    </th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-request>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="request" />
                    </td>
                    <td style="width:12%; min-width:10rem;">
                        <span class="p-column-title"></span>
                        {{ request.assets_id }}
                    </td>
                    <td style="width:12%; min-width:10rem;">
                        <span class="p-column-title"></span>
                        {{ request.RequestDate }}
                    </td>
                    <td style="width:20%; min-width:15rem;">
                        <span class="p-column-title"></span>
                        {{ request.IssueDescription }}
                    </td>
                    <td style="width:12%; min-width:10rem;">
                        <span class="p-column-title"></span>
                        {{ request.RequestedBy }}
                    </td>
                    <td style="width:10%; min-width:8rem;">
                        <span class="p-column-title"></span>
                        <p-tag [value]="request.Status" [severity]="getStatusSeverity(request.Status)" />
                    </td>
                    <td style="width:10%; min-width:8rem;">
                        <span class="p-column-title"></span>
                        <p-tag [value]="request.Priority" [severity]="getPrioritySeverity(request.Priority)" />
                    </td>
                    <td>
                        <div class="flex align-items-center gap-2">
                            <p-button icon="pi pi-pencil" [rounded]="true" [outlined]="true" (click)="editRequest(request)" pTooltip="Edit Request" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteRequest(request)" pTooltip="Delete Request" />
                        </div>
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-dialog [(visible)]="requestDialog" [style]="{ width: '600px' }" header="Maintenance Request Details" [modal]="true">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                        <label for="assetId" class="block font-bold mb-2">Asset ID</label>
                        <input type="text" pInputText id="assetId" [(ngModel)]="maintenanceRequest.assets_id" required fluid />
                        <small class="text-red-500" *ngIf="submitted && !maintenanceRequest.assets_id">Asset ID is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="requestDate" class="block font-bold mb-2">Request Date</label>
                        <input type="date" pInputText id="requestDate" [(ngModel)]="maintenanceRequest.RequestDate" required fluid />
                        <small class="text-red-500" *ngIf="submitted && !maintenanceRequest.RequestDate">Request Date is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="requestedBy" class="block font-bold mb-2">Requested By</label>
                        <input type="text" pInputText id="requestedBy" [(ngModel)]="maintenanceRequest.RequestedBy" required fluid />
                        <small class="text-red-500" *ngIf="submitted && !maintenanceRequest.RequestedBy">Requested By is required.</small>
                    </div>
                    <div class="col-span-12">
                        <label for="issueDescription" class="block font-bold mb-2">Issue Description</label>
                        <textarea id="issueDescription" pTextarea [(ngModel)]="maintenanceRequest.IssueDescription" rows="4" fluid required></textarea>
                        <small class="text-red-500" *ngIf="submitted && !maintenanceRequest.IssueDescription">Issue Description is required.</small>
                    </div>
                    <div class="col-span-6">
                        <label for="status" class="block font-bold mb-2">Status</label>
                        <p-select id="status" [(ngModel)]="maintenanceRequest.Status" [options]="statusOptions" optionLabel="label" optionValue="value" placeholder="Select status" fluid> </p-select>
                    </div>
                    <div class="col-span-6">
                        <label for="priority" class="block font-bold mb-2">Priority</label>
                        <p-select id="priority" [(ngModel)]="maintenanceRequest.Priority" [options]="priorityOptions" optionLabel="label" optionValue="value" placeholder="Select priority" fluid> </p-select>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" text (click)="hideDialog()" />
                <p-button label="Save" icon="pi pi-check" (click)="saveRequest()" />
            </ng-template>
        </p-dialog>

        <p-confirmdialog [style]="{ width: '450px' }" />
    `,
    providers: [MessageService, AssetService, ConfirmationService]
})
export class RequestmaintenanceComponent implements OnInit {
    requestDialog: boolean = false;

    maintenanceRequests = signal<MaintenanceRequest[]>([]);

    maintenanceRequest: MaintenanceRequest = {};

    selectedRequests: MaintenanceRequest[] | null = null;

    submitted: boolean = false;

    statusOptions: any[] = [];
    priorityOptions: any[] = [];

    @ViewChild('dt') dt!: Table;

    exportColumns!: ExportColumn[];

    cols!: Column[];

    constructor(
        @Inject(AssetService) private assetService: AssetService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    exportCSV() {
        this.dt.exportCSV();
    }

    ngOnInit() {
        this.loadMaintenanceRequests();
        this.initializeDropdowns();

        this.cols = [
            { field: 'assets_id', header: 'Asset ID' },
            { field: 'RequestDate', header: 'Request Date' },
            { field: 'IssueDescription', header: 'Issue Description' },
            { field: 'RequestedBy', header: 'Requested By' },
            { field: 'Status', header: 'Status' },
            { field: 'Priority', header: 'Priority' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    loadMaintenanceRequests() {
        this.assetService.getMaintenanceRequests().subscribe({
            next: (data: MaintenanceRequest[]) => {
                this.maintenanceRequests.set(data);
            },
            error: (error: any) => {
                console.error('Error loading maintenance requests:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to load maintenance requests. Please try again.',
                    confirmButtonColor: '#EF4444'
                });
            }
        });
    }

    initializeDropdowns() {
        this.statusOptions = [
            { label: 'Pending', value: 'Pending' },
            { label: 'In Progress', value: 'In Progress' },
            { label: 'Completed', value: 'Completed' },
            { label: 'Cancelled', value: 'Cancelled' }
        ];

        this.priorityOptions = [
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
            { label: 'High', value: 'High' },
            { label: 'Critical', value: 'Critical' }
        ];
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    openNew() {
        this.maintenanceRequest = {};
        this.submitted = false;
        this.requestDialog = true;
    }

    editRequest(request: MaintenanceRequest) {
        this.maintenanceRequest = { ...request };
        this.requestDialog = true;
    }

    deleteSelectedRequests() {
        if (!this.selectedRequests || this.selectedRequests.length === 0) return;

        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected maintenance requests?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const deletePromises = this.selectedRequests!.map((item) => this.assetService.deleteMaintenanceRequest(item.id!).toPromise());

                Promise.all(deletePromises)
                    .then(() => {
                        this.loadMaintenanceRequests();
                        this.selectedRequests = null;
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Maintenance requests deleted successfully',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    })
                    .catch((error) => {
                        console.error('Error deleting maintenance requests:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to delete maintenance requests. Please try again.',
                            confirmButtonColor: '#EF4444'
                        });
                    });
            }
        });
    }

    hideDialog() {
        this.requestDialog = false;
        this.submitted = false;
    }

    deleteRequest(request: MaintenanceRequest) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this maintenance request?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.assetService.deleteMaintenanceRequest(request.id!).subscribe({
                    next: () => {
                        this.loadMaintenanceRequests();
                        this.maintenanceRequest = {};
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Maintenance request deleted successfully',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    },
                    error: (error) => {
                        console.error('Error deleting maintenance request:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to delete maintenance request. Please try again.',
                            confirmButtonColor: '#EF4444'
                        });
                    }
                });
            }
        });
    }

    getStatusSeverity(status?: string) {
        switch (status) {
            case 'Pending':
                return 'warn';
            case 'In Progress':
                return 'info';
            case 'Completed':
                return 'success';
            case 'Cancelled':
                return 'danger';
            default:
                return 'info';
        }
    }

    getPrioritySeverity(priority?: string) {
        switch (priority) {
            case 'Low':
                return 'success';
            case 'Medium':
                return 'info';
            case 'High':
                return 'warn';
            case 'Critical':
                return 'danger';
            default:
                return 'info';
        }
    }

    saveRequest() {
        this.submitted = true;

        if (!this.maintenanceRequest.assets_id?.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Asset ID is required.',
                confirmButtonColor: '#3B82F6'
            });
            return;
        }

        if (!this.maintenanceRequest.IssueDescription?.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Issue Description is required.',
                confirmButtonColor: '#3B82F6'
            });
            return;
        }

        const saveOperation = this.maintenanceRequest.id ? this.assetService.updateMaintenanceRequest(this.maintenanceRequest.id, this.maintenanceRequest) : this.assetService.createMaintenanceRequest(this.maintenanceRequest);

        saveOperation.subscribe({
            next: () => {
                this.loadMaintenanceRequests();
                this.requestDialog = false;
                this.maintenanceRequest = {};
                this.submitted = false;

                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: this.maintenanceRequest.id ? 'Maintenance request updated successfully' : 'Maintenance request created successfully',
                    timer: 2000,
                    showConfirmButton: false
                });
            },
            error: (error) => {
                console.error('Error saving maintenance request:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to save maintenance request. Please try again.',
                    confirmButtonColor: '#EF4444'
                });
            }
        });
    }
}
