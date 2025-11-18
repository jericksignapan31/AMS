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
                    <td>{{ user.FirstName }} {{ user.LastName }}</td>
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
        Swal.fire({
            title: user.FirstName + ' ' + user.LastName,
            html: `
                <div style="text-align: left;">
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Department:</strong> ${user.Department || 'N/A'}</p>
                    <p><strong>Campus:</strong> ${user.Campus || 'N/A'}</p>
                    <p><strong>Role:</strong> ${user.role || 'N/A'}</p>
                </div>
            `,
            icon: 'info',
            confirmButtonText: 'Close'
        });
    }

    editUser(user: any) {
        Swal.fire({
            title: 'Edit User',
            text: 'Edit functionality coming soon',
            icon: 'info',
            confirmButtonText: 'OK'
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
