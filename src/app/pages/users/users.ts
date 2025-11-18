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
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule],
    styleUrls: ['../../../assets/pages/_users.scss'],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New User" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNewUserDialog()" />
                <p-button severity="secondary" label="Delete Selected" icon="pi pi-trash" outlined (onClick)="deleteSelectedUsers()" [disabled]="!selectedUsers || !selectedUsers.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="filteredUsers"
            [rows]="10"
            [paginator]="true"
            [globalFilterFields]="['FirstName', 'email']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedUsers"
            [rowHover]="true"
            dataKey="user_id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Users Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filterUsers()" placeholder="Search users..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th pSortableColumn="FirstName" style="min-width: 15rem">
                        Name
                        <p-sortIcon field="FirstName" />
                    </th>
                    <th pSortableColumn="email" style="min-width: 15rem">
                        Email
                        <p-sortIcon field="email" />
                    </th>
                    <th pSortableColumn="Department" style="min-width: 12rem">
                        Department
                        <p-sortIcon field="Department" />
                    </th>
                    <th pSortableColumn="Campus" style="min-width: 12rem">
                        Campus
                        <p-sortIcon field="Campus" />
                    </th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-user>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="user" />
                    </td>
                    <td>{{ user.firstName || user.FirstName }} {{ user.middleName || user.MiddleName || '' }} {{ user.lastName || user.LastName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.Department || 'N/A' }}</td>
                    <td>{{ user.Campus || 'N/A' }}</td>
                    <td>
                        <div class="action-buttons">
                            <p-button type="button" icon="pi pi-eye" class="p-button-rounded p-button-info" (click)="viewUser(user)" pTooltip="View" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-warning" (click)="editUser(user)" pTooltip="Edit" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-trash" class="p-button-rounded p-button-danger" (click)="deleteUser(user)" pTooltip="Delete" tooltipPosition="top"></p-button>
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="6" style="text-align: center; padding: 2rem;">No users found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class UsersComponent implements OnInit {
    @ViewChild('dt') table!: Table;

    users: any[] = [];
    filteredUsers: any[] = [];
    selectedUsers: any[] = [];
    searchValue: string = '';
    loading: boolean = false;

    constructor(
        private userService: UserService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers() {
        this.loading = true;
        this.userService.getAllUsers().subscribe({
            next: (response: any) => {
                console.log('Users loaded:', response);
                this.users = Array.isArray(response) ? response : response.data || [];
                this.filteredUsers = [...this.users];
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading users:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to load users: ' + (error.error?.message || error.message),
                    icon: 'error'
                });
                this.loading = false;
            }
        });
    }

    filterUsers() {
        if (!this.searchValue.trim()) {
            this.filteredUsers = [...this.users];
            return;
        }

        const search = this.searchValue.toLowerCase();
        this.filteredUsers = this.users.filter(
            (user) => user.FirstName?.toLowerCase().includes(search) || user.LastName?.toLowerCase().includes(search) || user.email?.toLowerCase().includes(search) || user.Department?.toLowerCase().includes(search)
        );
    }

    viewUser(user: any) {
        const createdDate = new Date(user.userCreated).toLocaleDateString();
        Swal.fire({
            title: user.firstName + ' ' + (user.middleName || '') + ' ' + user.lastName,
            html: `
                <div style="text-align: left;">
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Contact Number:</strong> ${user.contactNumber || 'N/A'}</p>
                    <p><strong>Role:</strong> ${user.role || 'N/A'}</p>
                    <p><strong>Active:</strong> <span style="color: ${user.isActive ? 'green' : 'red'}">${user.isActive ? 'Yes' : 'No'}</span></p>
                    <p><strong>Created:</strong> ${createdDate}</p>
                </div>
            `,
            icon: 'info',
            confirmButtonText: 'Close'
        });
    }

    editUser(user: any) {
        const editData = {
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
            email: user.email,
            contactNumber: user.contactNumber,
            role: user.role,
            isActive: user.isActive
        };

        Swal.fire({
            title: 'Edit User',
            html: `
                <div style="text-align: left; width: 100%; max-width: 700px; margin: 0 auto;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">First Name</label>
                            <input id="firstName" type="text" value="${editData.firstName || ''}" placeholder="First" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Middle Name</label>
                            <input id="middleName" type="text" value="${editData.middleName || ''}" placeholder="Middle" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Last Name</label>
                            <input id="lastName" type="text" value="${editData.lastName || ''}" placeholder="Last" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Email</label>
                            <input id="email" type="email" value="${editData.email || ''}" placeholder="email@example.com" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Contact</label>
                            <input id="contactNumber" type="text" value="${editData.contactNumber || ''}" placeholder="+63" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Role</label>
                            <select id="role" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; cursor: pointer; transition: border-color 0.2s;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="SuperAdmin" ${editData.role === 'SuperAdmin' ? 'selected' : ''}>SuperAdmin</option>
                                <option value="CampusAdmin" ${editData.role === 'CampusAdmin' ? 'selected' : ''}>CampusAdmin</option>
                                <option value="Faculty" ${editData.role === 'Faculty' ? 'selected' : ''}>Faculty</option>
                                <option value="LabTech" ${editData.role === 'LabTech' ? 'selected' : ''}>LabTech</option>
                            </select>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding-top: 12px; border-top: 1px solid #f0f0f0;">
                        <label style="font-weight: 500; color: #555; margin: 0; font-size: 13px; flex: 1;">Active Status</label>
                        <div style="position: relative; display: inline-block; width: 48px; height: 24px;">
                            <input id="isActive" type="checkbox" ${editData.isActive ? 'checked' : ''} style="opacity: 0; width: 0; height: 0; cursor: pointer;" />
                            <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: ${editData.isActive ? '#667eea' : '#ddd'}; transition: 0.3s; border-radius: 24px;"></span>
                            <span style="position: absolute; content: ''; height: 20px; width: 20px; left: ${editData.isActive ? '24px' : '2px'}; bottom: 2px; background-color: white; transition: 0.3s; border-radius: 50%;"></span>
                        </div>
                    </div>
                </div>
            `,
            width: '750px',
            showCancelButton: true,
            confirmButtonText: 'Save',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#e0e0e0',
            didOpen: () => {
                const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
                if (firstNameInput) firstNameInput.focus();

                // Add toggle functionality
                const checkbox = document.getElementById('isActive') as HTMLInputElement;
                const toggleSpan = checkbox?.parentElement?.querySelector('span:nth-child(2)') as HTMLElement;
                const toggleCircle = checkbox?.parentElement?.querySelector('span:nth-child(3)') as HTMLElement;

                if (checkbox && toggleSpan && toggleCircle) {
                    checkbox.addEventListener('change', () => {
                        toggleSpan.style.backgroundColor = checkbox.checked ? '#667eea' : '#ddd';
                        toggleCircle.style.left = checkbox.checked ? '24px' : '2px';
                    });
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
                const middleName = (document.getElementById('middleName') as HTMLInputElement).value;
                const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
                const email = (document.getElementById('email') as HTMLInputElement).value;
                const contactNumber = (document.getElementById('contactNumber') as HTMLInputElement).value;
                const role = (document.getElementById('role') as HTMLSelectElement).value;
                const isActive = (document.getElementById('isActive') as HTMLInputElement).checked;

                const updatedData = {
                    firstName: firstName || user.firstName,
                    middleName: middleName || user.middleName,
                    lastName: lastName || user.lastName,
                    email: email || user.email,
                    contactNumber: contactNumber || user.contactNumber,
                    role: role || user.role,
                    isActive
                };

                this.userService.updateUser(user.userId, updatedData).subscribe({
                    next: () => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'User updated successfully',
                            icon: 'success'
                        });
                        this.loadUsers();
                    },
                    error: (error) => {
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to update user: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }
    deleteUser(user: any) {
        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you want to delete this user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.userService.deleteUser(user.user_id).subscribe({
                    next: () => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'User has been deleted successfully.',
                            icon: 'success'
                        });
                        this.loadUsers();
                    },
                    error: (error) => {
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to delete user: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }

    openNewUserDialog() {
        Swal.fire({
            title: 'Add New User',
            text: 'Add user functionality coming soon',
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }

    deleteSelectedUsers() {
        if (!this.selectedUsers || this.selectedUsers.length === 0) {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please select users to delete' });
            return;
        }

        Swal.fire({
            title: 'Confirm Delete',
            text: `Are you sure you want to delete ${this.selectedUsers.length} user(s)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete All',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                let deletedCount = 0;
                let failedCount = 0;

                this.selectedUsers.forEach((user) => {
                    this.userService.deleteUser(user.user_id).subscribe({
                        next: () => {
                            deletedCount++;
                            if (deletedCount + failedCount === this.selectedUsers.length) {
                                this.selectedUsers = [];
                                this.loadUsers();
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: `${deletedCount} user(s) deleted successfully.`,
                                    icon: 'success'
                                });
                            }
                        },
                        error: () => {
                            failedCount++;
                            if (deletedCount + failedCount === this.selectedUsers.length) {
                                this.selectedUsers = [];
                                this.loadUsers();
                                Swal.fire({
                                    title: 'Partial Delete',
                                    text: `${deletedCount} user(s) deleted, ${failedCount} failed.`,
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
        if (this.filteredUsers.length === 0) {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'No data to export' });
            return;
        }

        const csv = this.generateCSV(this.filteredUsers);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', 'users_export.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Users exported to CSV' });
    }

    private generateCSV(data: any[]): string {
        const headers = ['Name', 'Email', 'Department', 'Campus', 'Role'];
        const rows = data.map((user) => [`${user.FirstName || ''} ${user.LastName || ''}`, user.email || '', user.Department || '', user.Campus || '', user.role || '']);

        const csvContent = [headers.join(','), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(','))].join('\n');

        return csvContent;
    }
}
