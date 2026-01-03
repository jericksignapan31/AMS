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
import { UserContextService } from '../service/user-context.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule],
    styleUrls: ['../../../assets/pages/_users.scss'],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewUserDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelectedUsers()" [disabled]="!selectedUsers.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filterUsers()" placeholder="Search users..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            #dt
            [value]="filteredUsers"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [rowHover]="true"
            [loading]="loading"
            dataKey="userId"
            [(selection)]="selectedUsers"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>

                    <th pSortableColumn="FirstName" style="min-width:20rem">Name <p-sortIcon field="FirstName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-user>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="user" />
                    </td>
                    <td>{{ user.userId || user.user_id }}</td>

                    <td>{{ user.firstName || user.FirstName }} {{ user.middleName || user.MiddleName || '' }} {{ user.lastName || user.LastName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="viewUser(user)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="editUser(user)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="deleteUser(user)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No users found</td>
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
    currentUserRole: string = '';
    campuses: any[] = [];
    departments: any[] = [];

    constructor(
        private userService: UserService,
        private messageService: MessageService,
        private userContextService: UserContextService
    ) {}

    ngOnInit() {
        console.log('UsersComponent initialized');
        this.loadUsers();
        this.loadCurrentUserRole();
        this.loadCampuses();
        this.loadDepartments();
    }

    loadDepartments() {
        console.log('Loading departments...');
        this.userService.getDepartments().subscribe({
            next: (response: any) => {
                console.log('API Department Response:', response);
                console.table(response);
                this.departments = Array.isArray(response) ? response : response.data || [];
                console.log('Departments set:', this.departments);
            },
            error: (error) => {
                console.error('Error loading departments:', error);
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

    loadCurrentUserRole() {
        const userId = this.userContextService.getUserId();
        console.log('Loading current user role, userId:', userId);
        if (userId) {
            this.userService.getUserById(userId).subscribe({
                next: (user: any) => {
                    this.currentUserRole = user.role || '';
                    console.log('Current user role:', this.currentUserRole);
                },
                error: (error) => {
                    console.error('Error loading current user:', error);
                }
            });
        }
    }

    loadUsers() {
        console.log('Loading users...');
        this.loading = true;
        this.userService.getAllUsers().subscribe({
            next: (response: any) => {
                console.log('Users loaded:', response);
                this.users = Array.isArray(response) ? response : response.data || [];
                this.filteredUsers = [...this.users];
                this.loading = false;
                console.log('Users set:', this.users);
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

    onSelectionChange(event: any) {
        console.log('Selection changed:', event);
        console.log('Selected users:', this.selectedUsers);
        if (this.selectedUsers && this.selectedUsers.length > 0) {
            console.log(
                'Selected user IDs:',
                this.selectedUsers.map((u: any) => u.userId || u.user_id)
            );
        }
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
            title: '',
            titleText: '',
            html: `
                <div style="text-align: left; width: 100%; max-width: 700px; margin: 4 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">✎ Edit User</h2>
                    </div>
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
                    <div style="display: flex; align-items: center; gap: 12px; padding-top: 12px; border-top: 1px solid #f0f0f0; cursor: pointer;" onclick="document.getElementById('isActive').click();">
                        <label style="font-weight: 500; color: #555; margin: 0; font-size: 13px; flex: 1; cursor: pointer;">Active Status</label>
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
                const toggleDiv = checkbox?.parentElement?.parentElement as HTMLElement;
                const toggleSpan = checkbox?.parentElement?.querySelector('span:nth-child(2)') as HTMLElement;
                const toggleCircle = checkbox?.parentElement?.querySelector('span:nth-child(3)') as HTMLElement;

                if (checkbox && toggleSpan && toggleCircle && toggleDiv) {
                    // Toggle on checkbox change
                    checkbox.addEventListener('change', () => {
                        toggleSpan.style.backgroundColor = checkbox.checked ? '#667eea' : '#ddd';
                        toggleCircle.style.left = checkbox.checked ? '24px' : '2px';
                    });

                    // Make entire div clickable
                    toggleDiv.addEventListener('click', (e: Event) => {
                        if (e.target !== checkbox) {
                            checkbox.checked = !checkbox.checked;
                            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                    });

                    // Also make the toggle spans clickable
                    toggleSpan?.addEventListener('click', () => {
                        checkbox.checked = !checkbox.checked;
                        checkbox.dispatchEvent(new Event('change', { bubbles: true }));
                    });

                    toggleCircle?.addEventListener('click', () => {
                        checkbox.checked = !checkbox.checked;
                        checkbox.dispatchEvent(new Event('change', { bubbles: true }));
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
        const userId = user.userId || user.user_id;
        console.log('Deleting single user:', userId, 'Full user object:', user);

        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you want to delete this user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d'
        }).then((result) => {
            if (result.isConfirmed) {
                this.userService.deleteUser(userId).subscribe({
                    next: () => {
                        console.log('User deleted successfully:', userId);
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'User has been deleted successfully.',
                            icon: 'success'
                        });
                        this.loadUsers();
                    },
                    error: (error) => {
                        console.error('Error deleting user:', userId, error);
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
        // Get current logged-in user's ID from multiple sources
        let userId = this.userContextService.getUserId();

        // Fallback to localStorage
        if (!userId) {
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser) {
                const user = JSON.parse(currentUser);
                userId = user.userId || user.user_id || user.id;
            }
        }

        if (!userId) {
            Swal.fire({
                title: 'Error',
                text: 'User ID not found. Please log in again.',
                icon: 'error'
            });
            return;
        }

        // Fetch full user data from backend
        this.userService.getUserById(userId).subscribe({
            next: (loggedInUser: any) => {
                console.log('🔵 New User Dialog Opened');
                console.log('Logged-in User Data:', loggedInUser);
                console.log('Campus:', loggedInUser.campus || loggedInUser.Campus);
                console.log('Department:', loggedInUser.department || loggedInUser.Department);

                // Store logged-in user data in sessionStorage for use in dialog
                sessionStorage.setItem('loggedInUserData', JSON.stringify(loggedInUser));

                this.showNewUserDialog();
            },
            error: (error) => {
                console.error('Error fetching user data:', error);
                this.showNewUserDialog();
            }
        });
    }
    private showNewUserDialog() {
        const newUserData = {
            userName: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            middleName: '',
            contactNumber: '',
            department: '',
            campus: '',
            role: 'CampusAdmin',
            isActive: true,
            isStaff: false,
            isSuperUser: false
        };

        // Get logged-in user data
        const userId = this.userContextService.getUserId();
        const loggedInUserData = JSON.parse(sessionStorage.getItem('loggedInUserData') || '{}');
        const isCampusAdmin = this.currentUserRole === 'CampusAdmin';
        const campusAdminCampusId = loggedInUserData.campus?.campusId || loggedInUserData.campusId || '';
        const campusAdminCampusName = loggedInUserData.campus?.campusName || loggedInUserData.campusName || '';

        // Filter departments for CampusAdmin (only their campus departments)
        const filteredDepartments = isCampusAdmin ? this.departments.filter((dept: any) => dept.campus?.campusId === campusAdminCampusId) : this.departments;

        Swal.fire({
            title: '',
            titleText: '',
            html: `
                <div style="text-align: left; width: 100%; max-width: 700px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">➕ Add New User</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">First Name *</label>
                            <input id="newFirstName" type="text" placeholder="First" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Middle Name</label>
                            <input id="newMiddleName" type="text" placeholder="Middle" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Last Name *</label>
                            <input id="newLastName" type="text" placeholder="Last" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Username *</label>
                            <input id="newUserName" type="text" placeholder="username" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Email *</label>
                            <input id="newEmail" type="email" placeholder="email@example.com" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Password *</label>
                            <input id="newPassword" type="password" placeholder="••••••••" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Contact Number</label>
                            <input id="newContactNumber" type="text" placeholder="+63" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                    ${
                        !isCampusAdmin
                            ? `
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Department * <span style="color: #999; font-size: 11px;">(Auto)</span></label>
                            <input id="newDepartment" type="text" value="Default Department" placeholder="Department" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #ccc; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; color: #999; cursor: not-allowed;" disabled />
                            <input id="newDepartmentId" type="hidden" value="813e7dd9-345f-40dd-a37b-ec08c2575119" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus *</label>
                            <select id="newCampus" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="">-- Select Campus --</option>
                                ${this.campuses.map((campus: any) => `<option value="${campus.campusId}">${campus.campusName}</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Role * <span style="color: #999; font-size: 11px;">(Auto)</span></label>
                            <input id="newRole" type="text" value="CampusAdmin" placeholder="Role" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #ccc; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; color: #999; cursor: not-allowed;" disabled />
                        </div>
                    </div>
                    `
                            : `
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Department *</label>
                            <select id="newDepartment" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="">-- Select Department --</option>
                                ${filteredDepartments.map((dept: any) => `<option value="${dept.departmentId}">${dept.departmentName}</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus <span style="color: #999; font-size: 11px;">(Auto)</span></label>
                            <input id="newCampus" type="text" value="${campusAdminCampusName}" placeholder="Campus" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #ccc; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; color: #999; cursor: not-allowed;" disabled />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Role *</label>
                            <select id="newRole" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="Faculty">Faculty</option>
                                <option value="LabTech">LabTech</option>
                            </select>
                        </div>
                    </div>
                    <input id="newCampusHidden" type="hidden" value="${campusAdminCampusId}" />
                    `
                    }
                    <div style="display: flex; align-items: center; gap: 12px; padding-top: 12px; border-top: 1px solid #f0f0f0;">
                        <label style="font-weight: 500; color: #555; margin: 0; font-size: 13px; flex: 1;">Active Status</label>
                        <div style="position: relative; display: inline-block; width: 48px; height: 24px;">
                            <input id="newIsActive" type="checkbox" checked style="opacity: 0; width: 0; height: 0; cursor: pointer;" />
                            <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #667eea; transition: 0.3s; border-radius: 24px;"></span>
                            <span style="position: absolute; content: ''; height: 20px; width: 20px; left: 24px; bottom: 2px; background-color: white; transition: 0.3s; border-radius: 50%;"></span>
                        </div>
                    </div>
                </div>
            `,
            width: '750px',
            showCancelButton: true,
            confirmButtonText: 'Create User',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#e0e0e0',
            didOpen: () => {
                const firstNameInput = document.getElementById('newFirstName') as HTMLInputElement;
                if (firstNameInput) firstNameInput.focus();

                if (!isCampusAdmin) {
                    // Campus selection change handler (for SuperAdmin only)
                    const campusSelect = document.getElementById('newCampus') as HTMLSelectElement;
                    const departmentSelect = document.getElementById('newDepartment') as HTMLSelectElement;
                    const deptLockStatus = document.getElementById('deptLockStatus') as HTMLElement;

                    if (campusSelect && departmentSelect) {
                        campusSelect.addEventListener('change', (e: Event) => {
                            const selectedCampusId = (e.target as HTMLSelectElement).value;

                            if (selectedCampusId) {
                                // Filter departments by campus
                                const filteredDepts = this.departments.filter((dept: any) => dept.campus && dept.campus.campusId === selectedCampusId);

                                // Clear current options
                                departmentSelect.innerHTML = '<option value="">-- Select Department --</option>';

                                // Add filtered department options
                                filteredDepts.forEach((dept: any) => {
                                    const option = document.createElement('option');
                                    option.value = dept.departmentId;
                                    option.textContent = dept.departmentName;
                                    departmentSelect.appendChild(option);
                                });

                                // Enable department select
                                departmentSelect.disabled = false;
                                departmentSelect.style.color = '#333';
                                departmentSelect.style.borderBottomColor = '#e0e0e0';
                                departmentSelect.style.cursor = 'pointer';
                                deptLockStatus.textContent = '';
                            } else {
                                // Disable department select
                                departmentSelect.disabled = true;
                                departmentSelect.innerHTML = '<option value="">-- Select Department --</option>';
                                departmentSelect.style.color = '#999';
                                departmentSelect.style.borderBottomColor = '#ccc';
                                departmentSelect.style.cursor = 'not-allowed';
                                deptLockStatus.textContent = '(Select Campus First)';
                            }
                        });
                    }
                }

                // Toggle functionality
                const toggleCheckbox = document.getElementById('newIsActive') as HTMLInputElement;
                const toggleDiv = toggleCheckbox?.parentElement?.parentElement as HTMLElement;
                const toggleSpan = toggleCheckbox?.parentElement?.querySelector('span:nth-child(2)') as HTMLElement;
                const toggleCircle = toggleCheckbox?.parentElement?.querySelector('span:nth-child(3)') as HTMLElement;

                if (toggleCheckbox && toggleSpan && toggleCircle && toggleDiv) {
                    toggleCheckbox.addEventListener('change', () => {
                        toggleSpan.style.backgroundColor = toggleCheckbox.checked ? '#667eea' : '#ddd';
                        toggleCircle.style.left = toggleCheckbox.checked ? '24px' : '2px';
                    });

                    toggleDiv.addEventListener('click', (e: Event) => {
                        if (e.target !== toggleCheckbox) {
                            toggleCheckbox.checked = !toggleCheckbox.checked;
                            toggleCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                    });

                    toggleSpan?.addEventListener('click', () => {
                        toggleCheckbox.checked = !toggleCheckbox.checked;
                        toggleCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
                    });

                    toggleCircle?.addEventListener('click', () => {
                        toggleCheckbox.checked = !toggleCheckbox.checked;
                        toggleCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
                    });
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Get form values with null checks
                const firstNameElement = document.getElementById('newFirstName') as HTMLInputElement;
                const lastNameElement = document.getElementById('newLastName') as HTMLInputElement;
                const userNameElement = document.getElementById('newUserName') as HTMLInputElement;
                const emailElement = document.getElementById('newEmail') as HTMLInputElement;
                const passwordElement = document.getElementById('newPassword') as HTMLInputElement;
                const middleNameElement = document.getElementById('newMiddleName') as HTMLInputElement;
                const contactNumberElement = document.getElementById('newContactNumber') as HTMLInputElement;
                const departmentElement = document.getElementById('newDepartment') as HTMLSelectElement | HTMLInputElement;
                const departmentIdElement = document.getElementById('newDepartmentId') as HTMLInputElement;

                const firstName = firstNameElement ? firstNameElement.value.trim() : '';
                const lastName = lastNameElement ? lastNameElement.value.trim() : '';
                const userName = userNameElement ? userNameElement.value.trim() : '';
                const email = emailElement ? emailElement.value.trim() : '';
                const password = passwordElement ? passwordElement.value.trim() : '';
                const middleName = middleNameElement ? middleNameElement.value.trim() : '';
                const contactNumber = contactNumberElement ? contactNumberElement.value.trim() : '';

                // Get department - from hidden input for SuperAdmin, from select for CampusAdmin
                let department = '';
                if (isCampusAdmin) {
                    department = departmentElement ? departmentElement.value : '';
                } else {
                    // SuperAdmin - use hidden input
                    department = departmentIdElement ? departmentIdElement.value : '813e7dd9-345f-40dd-a37b-ec08c2575119';
                }

                const campusInput = document.getElementById('newCampus') as HTMLInputElement | HTMLSelectElement;
                const campusHiddenInput = document.getElementById('newCampusHidden') as HTMLInputElement;

                let campus = '';
                if (isCampusAdmin) {
                    campus = campusHiddenInput ? campusHiddenInput.value : campusAdminCampusId;
                } else {
                    campus = campusInput ? campusInput.value : '';
                }

                const role = document.getElementById('newRole') as HTMLSelectElement | HTMLInputElement;
                const roleValue = role ? role.value : '';
                const isActiveElement = document.getElementById('newIsActive') as HTMLInputElement;
                const isActive = isActiveElement ? isActiveElement.checked : true;

                // Validation
                if (!firstName) {
                    Swal.fire({ title: 'Error', text: 'First Name is required', icon: 'error' });
                    return;
                }
                if (!lastName) {
                    Swal.fire({ title: 'Error', text: 'Last Name is required', icon: 'error' });
                    return;
                }
                if (!userName) {
                    Swal.fire({ title: 'Error', text: 'Username is required', icon: 'error' });
                    return;
                }
                if (!email || !this.isValidEmail(email)) {
                    Swal.fire({ title: 'Error', text: 'Valid email is required', icon: 'error' });
                    return;
                }
                if (!password || password.length < 6) {
                    Swal.fire({ title: 'Error', text: 'Password must be at least 6 characters', icon: 'error' });
                    return;
                }
                if (!department) {
                    Swal.fire({ title: 'Error', text: 'Department is required', icon: 'error' });
                    return;
                }
                if (!campus) {
                    Swal.fire({ title: 'Error', text: 'Campus is required', icon: 'error' });
                    return;
                }

                const newUserPayload = {
                    userName,
                    email,
                    password,
                    firstName,
                    lastName,
                    middleName: middleName || undefined,
                    contactNumber: contactNumber || undefined,
                    department,
                    campus,
                    role: roleValue,
                    isActive,
                    profilePicture: undefined
                };

                console.log('📤 Creating user with payload:', newUserPayload);

                this.userService.createUser(newUserPayload).subscribe({
                    next: () => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'User created successfully',
                            icon: 'success'
                        });
                        this.loadUsers();
                    },
                    error: (error) => {
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to create user: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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
                    const userId = user.userId || user.user_id;
                    console.log('Deleting user:', userId, 'Full user object:', user);

                    this.userService.deleteUser(userId).subscribe({
                        next: () => {
                            deletedCount++;
                            console.log(`User deleted: ${userId} (${deletedCount}/${this.selectedUsers.length})`);
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
                        error: (error) => {
                            failedCount++;
                            console.error(`Failed to delete user ${userId}:`, error);
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
