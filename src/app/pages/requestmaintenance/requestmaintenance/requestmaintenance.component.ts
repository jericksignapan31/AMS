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
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AssetService } from '../../service/asset.service';
import { MaintenanceService } from '../../service/maintenance.service';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';
import { TooltipModule } from 'primeng/tooltip';
import { TabsModule } from 'primeng/tabs';

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
        TooltipModule,
        DatePickerModule,
        TabsModule
    ],
    styles: [],
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
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filterByTab()" placeholder="Search maintenance requests..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>

        <p-tabs>
            <p-tablist>
                <p-tab value="0">Pending</p-tab>
                <p-tab value="1">Approved</p-tab>
                <p-tab value="3">Completed</p-tab>
            </p-tablist>
            <p-tabpanels>
                <!-- Pending Tab -->
                <p-tabpanel value="0">
                    <p-table
                        [value]="pendingItems"
                        [rows]="10"
                        [paginator]="true"
                        [rowsPerPageOptions]="[10, 20, 30]"
                        [loading]="loading"
                        [rowHover]="true"
                        dataKey="requestId"
                        [(selection)]="selectedItems"
                        (selectionChange)="onSelectionChange($event)"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} pending requests"
                        [showCurrentPageReport]="true"
                        [tableStyle]="{ 'min-width': '120rem' }"
                    >
                        <ng-template pTemplate="header">
                            <tr>
                                <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                                <th style="min-width:20rem">ID</th>
                                <th pSortableColumn="maintenanceName" style="min-width:18rem">Maintenance Name <p-sortIcon field="maintenanceName" /></th>
                                <th style="min-width:15rem">Maintenance Type</th>
                                <th style="min-width:15rem">Service Name</th>
                                <th style="min-width:12rem">Priority</th>
                                <th style="min-width:12rem">Request Date</th>
                                <th style="min-width:15rem">Requested By</th>
                                <th style="min-width:12rem">Status</th>
                                <th style="min-width:12rem">Actions</th>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="body" let-row>
                            <tr>
                                <td><p-tableCheckbox [value]="row" /></td>
                                <td>{{ row.requestId }}</td>
                                <td>{{ row.maintenanceName }}</td>
                                <td>{{ row.maintenanceType?.maintenanceTypeName || 'N/A' }}</td>
                                <td>{{ row.serviceMaintenance?.serviceName || 'N/A' }}</td>
                                <td><p-tag [value]="row.priorityLevel?.priorityLevelName" [severity]="getPrioritySeverity(row.priorityLevel?.priorityLevelName)" /></td>
                                <td>{{ row.requestDate || row.createdAt | date: 'short' }}</td>
                                <td>{{ getFullName(row) }}</td>
                                <td><p-tag [value]="row.maintenanceStatus?.requestStatusName" /></td>
                                <td>
                                    <div class="flex gap-2">
                                        <ng-container *ngIf="isLabTech()">
                                            <p-button icon="pi pi-check" severity="success" [rounded]="true" [text]="true" pTooltip="Approve" (onClick)="approve(row)" />
                                            <p-button icon="pi pi-times" severity="danger" [rounded]="true" [text]="true" pTooltip="Decline" (onClick)="decline(row)" />
                                        </ng-container>
                                        <ng-container *ngIf="!isLabTech()">
                                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                                        </ng-container>
                                    </div>
                                </td>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="emptymessage">
                            <tr>
                                <td colspan="10" class="text-center py-5">No pending requests found</td>
                            </tr>
                        </ng-template>
                    </p-table>
                </p-tabpanel>

                <!-- Approved Tab -->
                <p-tabpanel value="1">
                    <p-table
                        [value]="approvedItems"
                        [rows]="10"
                        [paginator]="true"
                        [rowsPerPageOptions]="[10, 20, 30]"
                        [loading]="loading"
                        [rowHover]="true"
                        dataKey="maintenanceApprovalId"
                        [(selection)]="selectedItems"
                        (selectionChange)="onSelectionChange($event)"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} approved requests"
                        [showCurrentPageReport]="true"
                        [tableStyle]="{ 'min-width': '70rem' }"
                    >
                        <ng-template pTemplate="header">
                            <tr>
                                <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                                <th style="min-width:25rem">ID</th>
                                <th pSortableColumn="maintenanceRequest.maintenanceName" style="min-width:20rem">Maintenance Name <p-sortIcon field="maintenanceRequest.maintenanceName" /></th>
                                <th style="min-width:15rem">Scheduled Date</th>
                                <th style="min-width:15rem">Status</th>
                                <th style="min-width:12rem">Actions</th>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="body" let-row>
                            <tr>
                                <td><p-tableCheckbox [value]="row" /></td>
                                <td>{{ row.maintenanceRequest?.requestId }}</td>
                                <td>{{ row.maintenanceRequest?.maintenanceName }}</td>
                                <td>{{ row.scheduledAt | date: 'short' }}</td>
                                <td><p-tag [value]="row.isCompleted ? 'Completed' : row.isApproved ? 'Approved' : 'Pending'" /></td>
                                <td>
                                    <div class="flex gap-2">
                                        <ng-container *ngIf="isLabTech()">
                                            <p-button label="Confirm" icon="pi pi-check" severity="success" [rounded]="true" [text]="false" (onClick)="confirm(row)" pTooltip="Confirm completion" />
                                        </ng-container>
                                        <ng-container *ngIf="!isLabTech()">
                                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                                        </ng-container>
                                    </div>
                                </td>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="emptymessage">
                            <tr>
                                <td colspan="6" class="text-center py-5">No approved requests found</td>
                            </tr>
                        </ng-template>
                    </p-table>
                </p-tabpanel>

                <!-- Completed Tab -->
                <p-tabpanel value="2">
                    <p-table
                        [value]="completedItems"
                        [rows]="10"
                        [paginator]="true"
                        [rowsPerPageOptions]="[10, 20, 30]"
                        [loading]="loading"
                        [rowHover]="true"
                        dataKey="requestId"
                        [(selection)]="selectedItems"
                        (selectionChange)="onSelectionChange($event)"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} completed requests"
                        [showCurrentPageReport]="true"
                        [tableStyle]="{ 'min-width': '70rem' }"
                    >
                        <ng-template pTemplate="header">
                            <tr>
                                <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                                <th style="min-width:25rem">ID</th>
                                <th pSortableColumn="maintenanceName" style="min-width:20rem">Maintenance Name <p-sortIcon field="maintenanceName" /></th>
                                <th style="min-width:15rem">Status</th>
                                <th style="min-width:12rem">Actions</th>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="body" let-row>
                            <tr>
                                <td><p-tableCheckbox [value]="row" /></td>
                                <td>{{ row.requestId }}</td>
                                <td>{{ row.maintenanceName }}</td>
                                <td><p-tag [value]="row.maintenanceStatus?.requestStatusName" /></td>
                                <td>
                                    <div class="flex gap-2">
                                        <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                                        <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                                    </div>
                                </td>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="emptymessage">
                            <tr>
                                <td colspan="5" class="text-center py-5">No completed requests found</td>
                            </tr>
                        </ng-template>
                    </p-table>
                </p-tabpanel>

                <!-- Completed Approvals Tab -->
                <p-tabpanel value="3">
                    <p-table
                        [value]="completedApprovedItems"
                        [rows]="10"
                        [paginator]="true"
                        [rowsPerPageOptions]="[10, 20, 30]"
                        [loading]="loading"
                        [rowHover]="true"
                        dataKey="maintenanceApprovalId"
                        [(selection)]="selectedItems"
                        (selectionChange)="onSelectionChange($event)"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} completed approvals"
                        [showCurrentPageReport]="true"
                        [tableStyle]="{ 'min-width': '120rem' }"
                    >
                        <ng-template pTemplate="header">
                            <tr>
                                <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                                <th style="min-width:20rem">ID</th>
                                <th pSortableColumn="maintenanceRequest.maintenanceName" style="min-width:18rem">Maintenance Name <p-sortIcon field="maintenanceRequest.maintenanceName" /></th>
                                <th style="min-width:12rem">Scheduled Date</th>
                                <th style="min-width:15rem">Remarks</th>
                                <th style="min-width:15rem">Action Taken</th>
                                <th style="min-width:15rem">Observations</th>
                                <th style="min-width:12rem">Expected Reading</th>
                                <th style="min-width:12rem">Actual Reading</th>
                                <th style="min-width:10rem">Status</th>
                                <th style="min-width:12rem">Actions</th>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="body" let-row>
                            <tr>
                                <td><p-tableCheckbox [value]="row" /></td>
                                <td>{{ row.maintenanceApprovalId }}</td>
                                <td>{{ row.maintenanceRequest?.maintenanceName }}</td>
                                <td>{{ row.scheduledAt | date: 'short' }}</td>
                                <td>{{ row.remarks || 'N/A' }}</td>
                                <td>{{ row.actionTaken || 'N/A' }}</td>
                                <td>{{ row.observations || 'N/A' }}</td>
                                <td>{{ row.expectedReading || 'N/A' }}</td>
                                <td>{{ row.actualReading || 'N/A' }}</td>
                                <td><p-tag value="Completed" severity="success" /></td>
                                <td>
                                    <div class="flex gap-2">
                                        <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                                        <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                                    </div>
                                </td>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="emptymessage">
                            <tr>
                                <td colspan="11" class="text-center py-5">No completed approvals found</td>
                            </tr>
                        </ng-template>
                    </p-table>
                </p-tabpanel>
            </p-tabpanels>
        </p-tabs>

        <p-dialog [(visible)]="approveModalVisible" [header]="'Approve Maintenance Request'" [modal]="true" [style]="{ width: '50vw' }">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <label class="font-semibold">Date Scheduled</label>
                    <p-datepicker [(ngModel)]="approveFormData.dateScheduled" dateFormat="yy-mm-dd" icon="pi pi-calendar" appendTo="body" />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-semibold">Remarks</label>
                    <textarea pInputTextarea [(ngModel)]="approveFormData.remarks" rows="5" placeholder="Enter remarks..."></textarea>
                </div>
            </div>
            <ng-template pTemplate="footer">
                <p-button label="Cancel" (onClick)="approveModalVisible = false" severity="secondary" />
                <p-button label="Approve" (onClick)="confirmApprove()" severity="success" />
            </ng-template>
        </p-dialog>

        <p-dialog [(visible)]="confirmModalVisible" [header]="'Complete Maintenance Request'" [modal]="true" [style]="{ width: '50vw' }">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <label class="font-semibold">Remarks</label>
                    <textarea pInputTextarea [(ngModel)]="confirmFormData.remarks" rows="3" placeholder="Enter remarks..."></textarea>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-semibold">Action Taken</label>
                    <textarea pInputTextarea [(ngModel)]="confirmFormData.actionTaken" rows="3" placeholder="Describe the action taken..."></textarea>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-semibold">Observations</label>
                    <textarea pInputTextarea [(ngModel)]="confirmFormData.observations" rows="3" placeholder="Enter observations..."></textarea>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-semibold">Expected Reading</label>
                    <input pInputText [(ngModel)]="confirmFormData.expectedReading" type="text" placeholder="Enter expected reading..." />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-semibold">Actual Reading</label>
                    <input pInputText [(ngModel)]="confirmFormData.actualReading" type="text" placeholder="Enter actual reading..." />
                </div>
            </div>
            <ng-template pTemplate="footer">
                <p-button label="Cancel" (onClick)="confirmModalVisible = false" severity="secondary" />
                <p-button label="Complete" (onClick)="confirmCompletion()" severity="success" />
            </ng-template>
        </p-dialog>
    `,
    providers: [MessageService, AssetService, ConfirmationService]
})
export class RequestmaintenanceComponent implements OnInit {
    @ViewChild('dt') dt!: Table;

    items: any[] = [];
    pendingItems: any[] = [];
    approvedItems: any[] = [];
    completedItems: any[] = [];
    completedApprovedItems: any[] = [];
    selectedItems: any[] = [];
    searchValue: string = '';
    loading: boolean = true;
    activeTabIndex: number = 0;
    approveModalVisible: boolean = false;
    confirmModalVisible: boolean = false;
    approveFormData: any = { dateScheduled: null, remarks: '' };
    confirmFormData: any = {
        remarks: '',
        actionTaken: '',
        observations: '',
        expectedReading: '',
        actualReading: ''
    };
    selectedItem: any = null;

    constructor(
        private maintenanceService: MaintenanceService,
        private messageService: MessageService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.loadItems();
    }

    isLabTech(): boolean {
        const user = this.authService.getCurrentUser();
        return user?.role?.toLowerCase() === 'labtech';
    }

    getFullName(row: any): string {
        const firstName = row.requestedBy?.firstName || '';
        const middleName = row.requestedBy?.middleName || '';
        const lastName = row.requestedBy?.lastName || '';
        return [firstName, middleName, lastName].filter((name) => name.trim()).join(' ');
    }

    getPrioritySeverity(priorityLevel: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
        const level = priorityLevel?.toLowerCase() || '';
        if (level.includes('critical') || level.includes('urgent') || level.includes('high')) {
            return 'danger';
        } else if (level.includes('medium') || level.includes('moderate')) {
            return 'warn';
        } else if (level.includes('low')) {
            return 'success';
        }
        return 'secondary';
    }

    loadItems() {
        this.loading = true;
        this.maintenanceService.getMaintenanceRequests?.()?.subscribe({
            next: (data: any[]) => {
                console.log('Maintenance Requests API Response:', data);
                if (data && data.length > 0) {
                    console.log('First item structure:', JSON.stringify(data[0], null, 2));
                }
                this.items = data || [];
                this.categorizeItems();
                this.loadApprovals();
                this.loading = false;
            },
            error: (error: any) => {
                console.error('Error loading maintenance requests:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load maintenance requests' });
                this.loading = false;
            }
        });
    }

    loadApprovals() {
        this.maintenanceService.getMaintenanceApprovals().subscribe({
            next: (data: any[]) => {
                console.log('Maintenance Approvals API Response:', data);
                const allApprovals = data || [];

                // Separate into approved (not completed) and completed
                this.approvedItems = allApprovals.filter((item) => !item.isCompleted);
                this.completedApprovedItems = allApprovals.filter((item) => item.isCompleted);

                console.log('✅ Approved items (not completed):', this.approvedItems);
                console.log('✅ Completed approved items:', this.completedApprovedItems);
                console.table(this.approvedItems);
            },
            error: (error: any) => {
                console.error('Error loading maintenance approvals:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load maintenance approvals' });
            }
        });
    }

    categorizeItems() {
        this.pendingItems = this.items.filter((item) => item.maintenanceStatus?.requestStatusName?.toLowerCase() === 'pending');
        this.completedItems = this.items.filter((item) => item.maintenanceStatus?.requestStatusName?.toLowerCase() === 'completed');
    }

    filterByTab() {
        this.categorizeItems();

        const searchLower = this.searchValue.toLowerCase();

        this.pendingItems = this.pendingItems.filter((item) => item.maintenanceName?.toLowerCase().includes(searchLower) || item.requestId?.toLowerCase().includes(searchLower));

        this.approvedItems = this.approvedItems.filter((item) => {
            const maintenanceName = item.maintenanceRequest?.maintenanceName || item.maintenanceName || '';
            const requestId = item.maintenanceRequest?.requestId || item.requestId || '';
            return maintenanceName.toLowerCase().includes(searchLower) || requestId.toLowerCase().includes(searchLower);
        });

        this.completedItems = this.completedItems.filter((item) => item.maintenanceName?.toLowerCase().includes(searchLower) || item.requestId?.toLowerCase().includes(searchLower));

        this.completedApprovedItems = this.completedApprovedItems.filter((item) => {
            const maintenanceName = item.maintenanceRequest?.maintenanceName || item.maintenanceName || '';
            const requestId = item.maintenanceRequest?.requestId || item.requestId || '';
            return maintenanceName.toLowerCase().includes(searchLower) || requestId.toLowerCase().includes(searchLower);
        });
    }

    onTabChange(event: any) {
        console.log('Tab changed to index:', event.index);
        this.activeTabIndex = event.index;
        this.selectedItems = [];
    }

    filter() {
        this.filterByTab();
    }

    onSelectionChange(event: any) {
        console.log('Selected items:', this.selectedItems);
    }

    approve(item: any) {
        console.log('Approve clicked - Selected item:', item);
        this.selectedItem = item;
        this.approveFormData = { dateScheduled: null, remarks: '' };
        this.approveModalVisible = true;
    }

    confirmApprove() {
        if (!this.approveFormData.dateScheduled) {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Date Scheduled is required' });
            return;
        }
        if (!this.approveFormData.remarks.trim()) {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Remarks is required' });
            return;
        }

        const approvalPayload = {
            maintenanceRequest: this.selectedItem.requestId,
            remarks: this.approveFormData.remarks.trim(),
            scheduledAt: this.approveFormData.dateScheduled,
            isApproved: true
        };

        console.log('Sending approval payload:', approvalPayload);

        this.maintenanceService.approveMaintenanceRequest(approvalPayload).subscribe({
            next: (response) => {
                console.log('Maintenance request approved successfully:', response);
                this.messageService.add({ severity: 'success', summary: 'Approved', detail: `Maintenance request approved for ${this.approveFormData.dateScheduled.toLocaleDateString()}` });
                this.approveModalVisible = false;
                this.loadItems();
            },
            error: (error) => {
                console.error('Error approving maintenance request:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to approve maintenance request: ' + (error.error?.message || error.message) });
            }
        });
    }

    decline(item: any) {
        Swal.fire({
            title: 'Decline Maintenance Request',
            text: `Decline "${item.maintenanceName}"?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Decline',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Declined', detail: 'Maintenance request declined' });
                this.loadItems();
            }
        });
    }

    openNewDialog() {
        Swal.fire({
            title: 'New Maintenance Request',
            html: `<input type="text" id="maintenanceName" class="swal2-input" placeholder="Maintenance Name" />`,
            confirmButtonText: 'Create',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            preConfirm: () => {
                const maintenanceName = (document.getElementById('maintenanceName') as HTMLInputElement)?.value.trim();
                if (!maintenanceName) {
                    Swal.showValidationMessage('Maintenance name is required');
                    return false;
                }
                return { maintenanceName };
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                this.maintenanceService.createMaintenanceRequest(result.value).subscribe({
                    next: (created) => {
                        this.items.push(created);
                        this.categorizeItems();
                        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Maintenance request created' });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Create failed' })
                });
            }
        });
    }

    view(item: any) {
        console.log('👁️ View clicked - Item data:', item);
        console.log('Has maintenanceApprovalId?', !!item.maintenanceApprovalId);
        console.log('Request ID:', item.maintenanceRequestId || item.id || item.requestId);

        // Check if it's an approval item (has maintenanceApprovalId) or a request item
        if (item.maintenanceApprovalId) {
            console.log('📋 Showing approval details');
            // It's a completed approval - show approval details
            const html = `
                <div style="text-align: left;">
                    <p><strong>Maintenance Name:</strong> ${item.maintenanceRequest?.maintenanceName || 'N/A'}</p>
                    <p><strong>Scheduled Date:</strong> ${new Date(item.scheduledAt).toLocaleDateString() || 'N/A'}</p>
                    <p><strong>Remarks:</strong> ${item.remarks || 'N/A'}</p>
                    <p><strong>Action Taken:</strong> ${item.actionTaken || 'N/A'}</p>
                    <p><strong>Observations:</strong> ${item.observations || 'N/A'}</p>
                    <p><strong>Expected Reading:</strong> ${item.expectedReading || 'N/A'}</p>
                    <p><strong>Actual Reading:</strong> ${item.actualReading || 'N/A'}</p>
                </div>
            `;
            Swal.fire({ title: 'Maintenance Approval Details', html, icon: 'info' });
        } else {
            console.log('📋 Fetching request details from API');
            // It's a request item - fetch from API
            const requestId = item.maintenanceRequestId || item.id || item.requestId;
            console.log('Using requestId:', requestId);
            this.maintenanceService.getMaintenanceRequest(requestId).subscribe({
                next: (data: any) => {
                    console.log('✅ Request data fetched:', data);
                    const html = `
                        <div style="text-align: left;">
                            <p><strong>Name:</strong> ${data.maintenanceName || 'N/A'}</p>
                            <p><strong>Type:</strong> ${data.maintenanceType?.maintenanceTypeName || 'N/A'}</p>
                            <p><strong>Service:</strong> ${data.serviceMaintenance?.serviceName || 'N/A'}</p>
                            <p><strong>Asset:</strong> ${data.asset?.assetName || 'N/A'}</p>
                            <p><strong>Priority:</strong> ${data.priorityLevel?.priorityLevelName || 'N/A'}</p>
                            <p><strong>Status:</strong> ${data.maintenanceStatus?.requestStatusName || 'N/A'}</p>
                            <p><strong>Description:</strong> ${data.description || 'N/A'}</p>
                        </div>
                    `;
                    Swal.fire({ title: 'Maintenance Request Details', html, icon: 'info' });
                }
            });
        }
    }

    edit(item: any) {
        const requestId = item.maintenanceRequestId || item.id;
        this.maintenanceService.getMaintenanceRequest(requestId).subscribe({
            next: (data: any) => {
                Swal.fire({
                    title: 'Edit Maintenance Request',
                    html: `<input type="text" id="maintenanceName" class="swal2-input" value="${data.maintenanceName || ''}" placeholder="Maintenance Name" />`,
                    confirmButtonText: 'Update',
                    cancelButtonText: 'Cancel',
                    showCancelButton: true,
                    preConfirm: () => {
                        const maintenanceName = (document.getElementById('maintenanceName') as HTMLInputElement)?.value.trim();
                        if (!maintenanceName) {
                            Swal.showValidationMessage('Maintenance name is required');
                            return false;
                        }
                        return { maintenanceName };
                    }
                }).then((result) => {
                    if (result.isConfirmed && result.value) {
                        this.maintenanceService.updateMaintenanceRequest(requestId, result.value).subscribe({
                            next: () => {
                                this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Maintenance request updated successfully' });
                                this.loadItems();
                            },
                            error: (err) => {
                                console.error('Error updating maintenance request:', err);
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update maintenance request' });
                            }
                        });
                    }
                });
            },
            error: (err) => {
                console.error('Error fetching maintenance request:', err);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load maintenance request' });
            }
        });
    }

    delete(item: any) {
        const requestId = item.requestId || item.maintenanceRequestId || item.id;
        const requestName = item.maintenanceName || 'Maintenance Request';
        console.log('🗑️ Delete clicked - Item:', item);
        console.log('Using requestId:', requestId);

        Swal.fire({
            title: 'Delete Maintenance Request',
            text: `Delete "${requestName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.maintenanceService.deleteMaintenanceRequest(requestId).subscribe({
                    next: () => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Maintenance request has been deleted successfully.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                        this.loadItems();
                    },
                    error: (err) => {
                        console.error('Error deleting maintenance request:', err);
                        Swal.fire({
                            title: 'Error!',
                            text: 'Failed to delete maintenance request.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    }
                });
            }
        });
    }

    deleteSelected() {
        if (!this.selectedItems?.length) return;
        Swal.fire({
            title: 'Delete Selected',
            text: `Delete ${this.selectedItems.length} maintenance request(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete'
        }).then((res) => {
            if (res.isConfirmed) {
                this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Selected maintenance requests deleted' });
                this.loadItems();
            }
        });
    }

    exportCSV() {
        let csv = 'Maintenance Name,Status,ID\n';
        this.items.forEach((item) => {
            csv += `${(item.maintenanceName || '').replace(/,/g, ';')},${item.maintenanceStatus?.requestStatusName || 'N/A'},${item.requestId}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'maintenance-requests.csv';
        a.click();
        URL.revokeObjectURL(url);
    }

    confirm(row: any) {
        console.log('Confirm clicked - Selected approval item:', row);
        this.selectedItem = row;
        this.loading = true;

        // Fetch maintenance approval details from API
        this.maintenanceService.getMaintenanceApprovalDetails(row.maintenanceApprovalId).subscribe({
            next: (data: any) => {
                console.log('Maintenance approval details loaded:', data);
                this.confirmFormData = {
                    remarks: data.remarks || '',
                    actionTaken: data.actionTaken || '',
                    observations: data.observations || '',
                    expectedReading: data.expectedReading || '',
                    actualReading: data.actualReading || ''
                };
                this.confirmModalVisible = true;
                this.loading = false;
            },
            error: (error: any) => {
                console.error('Error loading maintenance approval details:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load approval details' });
                this.loading = false;
            }
        });
    }

    confirmCompletion() {
        if (!this.confirmFormData.remarks.trim()) {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Remarks is required' });
            return;
        }

        const completionPayload = {
            maintenanceRequest: this.selectedItem.maintenanceRequest?.requestId || this.selectedItem.requestId,
            remarks: this.confirmFormData.remarks.trim(),
            scheduledAt: this.selectedItem.scheduledAt || new Date(),
            isApproved: true,
            isCompleted: true,
            actionTaken: this.confirmFormData.actionTaken.trim(),
            observations: this.confirmFormData.observations.trim(),
            expectedReading: this.confirmFormData.expectedReading.trim(),
            actualReading: this.confirmFormData.actualReading.trim()
        };

        console.log('Sending completion payload:', completionPayload);

        this.maintenanceService.completeMaintenanceApproval(this.selectedItem.maintenanceApprovalId, completionPayload).subscribe({
            next: (response: any) => {
                console.log('Maintenance request completed successfully:', response);
                this.messageService.add({ severity: 'success', summary: 'Completed', detail: 'Maintenance request marked as completed' });
                this.confirmModalVisible = false;

                // Remove from approved items
                const index = this.approvedItems.findIndex((item) => item.maintenanceApprovalId === this.selectedItem.maintenanceApprovalId);
                if (index > -1) {
                    this.approvedItems.splice(index, 1);
                    console.log('Item removed from approved items');
                }

                this.loadItems();
            },
            error: (error: any) => {
                console.error('Error completing maintenance request:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to complete maintenance request: ' + (error.error?.message || error.message) });
            }
        });
    }
}
