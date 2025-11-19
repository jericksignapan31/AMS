import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule, Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-departments',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule],
    styleUrls: ['../../../assets/pages/_departments.scss'],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Department" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNewDepartmentDialog()" />
                <p-button severity="secondary" label="Delete Selected" icon="pi pi-trash" outlined (onClick)="deleteSelectedDepartments()" [disabled]="!selectedDepartments || !selectedDepartments.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="filteredDepartments"
            [rows]="10"
            [paginator]="true"
            [globalFilterFields]="['departmentName', 'campus.campusName']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedDepartments"
            (selectionChange)="onSelectionChange($event)"
            [rowHover]="true"
            dataKey="departmentId"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} departments"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Departments Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filterDepartments()" placeholder="Search departments..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th pSortableColumn="departmentName" style="min-width: 15rem">
                        Department Name
                        <p-sortIcon field="departmentName" />
                    </th>
                    <th pSortableColumn="campus.campusName" style="min-width: 15rem">
                        Campus Name
                        <p-sortIcon field="campus.campusName" />
                    </th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-department>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="department" />
                    </td>
                    <td>{{ department.departmentName }}</td>
                    <td>{{ department.campus?.campusName || 'N/A' }}</td>
                    <td>
                        <div class="action-buttons">
                            <p-button type="button" icon="pi pi-eye" class="p-button-rounded p-button-info" (click)="viewDepartment(department)" pTooltip="View" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-warning" (click)="editDepartment(department)" pTooltip="Edit" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-trash" class="p-button-rounded p-button-danger" (click)="deleteDepartment(department)" pTooltip="Delete" tooltipPosition="top"></p-button>
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" style="text-align: center; padding: 2rem;">No departments found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class DepartmentsComponent implements OnInit {
    @ViewChild('dt') table!: Table;

    departments: any[] = [];
    filteredDepartments: any[] = [];
    selectedDepartments: any[] = [];
    campuses: any[] = [];
    searchValue: string = '';
    loading: boolean = false;

    constructor(
        private userService: UserService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        console.log('DepartmentsComponent initialized');
        this.loadDepartments();
        this.loadCampuses();
    }

    loadDepartments() {
        console.log('Loading departments...');
        this.loading = true;
        this.userService.getDepartments().subscribe({
            next: (response: any) => {
                console.log('Departments loaded:', response);
                this.departments = Array.isArray(response) ? response : response.data || [];
                this.filteredDepartments = [...this.departments];
                this.loading = false;
                console.log('Departments set:', this.departments);
            },
            error: (error) => {
                console.error('Error loading departments:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to load departments: ' + (error.error?.message || error.message),
                    icon: 'error'
                });
                this.loading = false;
            }
        });
    }

    loadCampuses() {
        console.log('Loading campuses...');
        this.userService.getCampuses().subscribe({
            next: (response: any) => {
                console.log('Campuses loaded:', response);
                this.campuses = Array.isArray(response) ? response : response.data || [];
                console.log('Campuses set:', this.campuses);
            },
            error: (error) => {
                console.error('Error loading campuses:', error);
            }
        });
    }

    filterDepartments() {
        if (!this.searchValue.trim()) {
            this.filteredDepartments = [...this.departments];
            return;
        }

        const search = this.searchValue.toLowerCase();
        this.filteredDepartments = this.departments.filter((dept) => dept.departmentName?.toLowerCase().includes(search) || dept.campus?.campusName?.toLowerCase().includes(search));
    }

    onSelectionChange(event: any) {
        console.log('Selection changed:', event);
        console.log('Selected departments:', this.selectedDepartments);
        if (this.selectedDepartments && this.selectedDepartments.length > 0) {
            console.log(
                'Selected department IDs:',
                this.selectedDepartments.map((d: any) => d.departmentId)
            );
        }
    }

    viewDepartment(department: any) {
        const createdDate = new Date(department.departmentCreated).toLocaleDateString();
        const updatedDate = new Date(department.departmentUpdated).toLocaleDateString();
        Swal.fire({
            title: department.departmentName,
            html: `
                <div style="text-align: left;">
                    <p><strong>Campus:</strong> ${department.campus?.campusName || 'N/A'}</p>
                    <p><strong>Created:</strong> ${createdDate}</p>
                    <p><strong>Updated:</strong> ${updatedDate}</p>
                </div>
            `,
            icon: 'info',
            confirmButtonText: 'Close'
        });
    }

    editDepartment(department: any) {
        const editData = {
            departmentName: department.departmentName,
            campusId: department.campus?.campusId || ''
        };

        Swal.fire({
            title: '',
            titleText: '',
            html: `
                <div style="text-align: left; width: 100%; max-width: 500px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">✎ Edit Department</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Department Name *</label>
                            <input id="departmentName" type="text" value="${editData.departmentName}" placeholder="Department Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus *</label>
                            <select id="campusId" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="">-- Select Campus --</option>
                                ${this.campuses.map((campus: any) => `<option value="${campus.campusId}" ${campus.campusId === editData.campusId ? 'selected' : ''}>${campus.campusName}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                </div>
            `,
            width: '550px',
            showCancelButton: true,
            confirmButtonText: 'Update Department',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#e0e0e0',
            didOpen: () => {
                const deptNameInput = document.getElementById('departmentName') as HTMLInputElement;
                if (deptNameInput) deptNameInput.focus();
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const departmentName = (document.getElementById('departmentName') as HTMLInputElement).value.trim();
                const campusId = (document.getElementById('campusId') as HTMLSelectElement).value;

                if (!departmentName) {
                    Swal.fire({ title: 'Error', text: 'Department Name is required', icon: 'error' });
                    return;
                }

                if (!campusId) {
                    Swal.fire({ title: 'Error', text: 'Campus is required', icon: 'error' });
                    return;
                }

                const updatedData = {
                    departmentName,
                    campusId
                };

                this.userService.updateDepartment(department.departmentId, updatedData).subscribe({
                    next: () => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Department updated successfully',
                            icon: 'success'
                        });
                        this.loadDepartments();
                    },
                    error: (error) => {
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to update department: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }

    deleteDepartment(department: any) {
        const departmentId = department.departmentId;
        console.log('Deleting single department:', departmentId, 'Full department object:', department);

        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you want to delete this department?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d'
        }).then((result) => {
            if (result.isConfirmed) {
                this.userService.deleteDepartment(departmentId).subscribe({
                    next: () => {
                        console.log('Department deleted successfully:', departmentId);
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Department has been deleted successfully.',
                            icon: 'success'
                        });
                        this.loadDepartments();
                    },
                    error: (error) => {
                        console.error('Error deleting department:', departmentId, error);
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to delete department: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }

    openNewDepartmentDialog() {
        Swal.fire({
            title: '',
            titleText: '',
            html: `
                <div style="text-align: left; width: 100%; max-width: 500px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">➕ Add New Department</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Department Name *</label>
                            <input id="newDepartmentName" type="text" placeholder="Department Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus *</label>
                            <select id="newCampusId" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="">-- Select Campus --</option>
                                ${this.campuses.map((campus: any) => `<option value="${campus.campusId}">${campus.campusName}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                </div>
            `,
            width: '550px',
            showCancelButton: true,
            confirmButtonText: 'Create Department',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#e0e0e0',
            didOpen: () => {
                const deptNameInput = document.getElementById('newDepartmentName') as HTMLInputElement;
                if (deptNameInput) deptNameInput.focus();
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const departmentName = (document.getElementById('newDepartmentName') as HTMLInputElement).value.trim();
                const campusId = (document.getElementById('newCampusId') as HTMLSelectElement).value;

                if (!departmentName) {
                    Swal.fire({ title: 'Error', text: 'Department Name is required', icon: 'error' });
                    return;
                }

                if (!campusId) {
                    Swal.fire({ title: 'Error', text: 'Campus is required', icon: 'error' });
                    return;
                }

                const newDepartmentPayload = {
                    departmentName,
                    campusId
                };

                this.userService.createDepartment(newDepartmentPayload).subscribe({
                    next: () => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Department created successfully',
                            icon: 'success'
                        });
                        this.loadDepartments();
                    },
                    error: (error) => {
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to create department: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }

    deleteSelectedDepartments() {
        if (!this.selectedDepartments || this.selectedDepartments.length === 0) {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please select departments to delete' });
            return;
        }

        Swal.fire({
            title: 'Confirm Delete',
            text: `Are you sure you want to delete ${this.selectedDepartments.length} department(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete All',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                let deletedCount = 0;
                let failedCount = 0;

                this.selectedDepartments.forEach((department) => {
                    const departmentId = department.departmentId;
                    console.log('Deleting department:', departmentId);

                    this.userService.deleteDepartment(departmentId).subscribe({
                        next: () => {
                            deletedCount++;
                            console.log(`Department deleted: ${departmentId} (${deletedCount}/${this.selectedDepartments.length})`);
                            if (deletedCount + failedCount === this.selectedDepartments.length) {
                                this.selectedDepartments = [];
                                this.loadDepartments();
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: `${deletedCount} department(s) deleted successfully.`,
                                    icon: 'success'
                                });
                            }
                        },
                        error: (error) => {
                            failedCount++;
                            console.error(`Failed to delete department ${departmentId}:`, error);
                            if (deletedCount + failedCount === this.selectedDepartments.length) {
                                this.selectedDepartments = [];
                                this.loadDepartments();
                                Swal.fire({
                                    title: 'Partial Delete',
                                    text: `${deletedCount} department(s) deleted, ${failedCount} failed.`,
                                    icon: 'warning'
                                });
                            }
                        }
                    });
                });
            }
        });
    }

    exportCSV() {
        if (this.filteredDepartments.length === 0) {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'No data to export' });
            return;
        }

        const csv = this.generateCSV(this.filteredDepartments);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', 'departments_export.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Departments exported to CSV' });
    }

    private generateCSV(data: any[]): string {
        const headers = ['Department Name', 'Campus Name'];
        const rows = data.map((dept) => [dept.departmentName || '', dept.campus?.campusName || '']);

        const csvContent = [headers.join(','), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(','))].join('\n');

        return csvContent;
    }
}
