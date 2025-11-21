import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { AssetService } from '../service/asset.service';
import { UserService } from '../service/user.service';
import { UserContextService } from '../service/user-context.service';
import { StorageService } from '../service/storage.service';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, InputTextModule, FileUploadModule, AvatarModule, DividerModule, FormsModule],
    styleUrls: ['../../../assets/layout/_profile.scss'],
    template: `
        <div class="profile-container">
            <!-- Background Header Section -->
            <div class="profile-header-bg" [style.backgroundImage]="backgroundImage">
                <button type="button" pButton label="Edit Cover" class="p-button-secondary" style="position: absolute; top: 1rem; right: 1rem;" (click)="editCover()"></button>
            </div>

            <!-- Profile Info Section -->
            <div class="profile-info-section">
                <div class="profile-picture-container">
                    <img *ngIf="currentUser?.profilePicture; else defaultAvatar" [src]="currentUser.profilePicture" alt="Profile" class="profile-picture" />
                    <ng-template #defaultAvatar>
                        <p-avatar [label]="getInitials()" shape="circle" styleClass="profile-picture-avatar"></p-avatar>
                    </ng-template>
                    <button type="button" class="p-button p-button-rounded p-button-sm camera-btn" (click)="triggerFileUpload()" title="Upload Profile Picture" style="cursor: pointer; position: relative; z-index: 25;">
                        <i class="pi pi-camera"></i>
                    </button>
                    <p-fileUpload #fileUpload mode="basic" accept="image/*" [maxFileSize]="5242880" (onSelect)="onImageSelect($event)" [auto]="false" chooseLabel="Choose Image" [ngStyle]="{ display: 'none' }"></p-fileUpload>
                </div>

                <div class="profile-name-section">
                    <h1 class="profile-name">
                        {{ fetchedUserData?.firstName }} {{ fetchedUserData?.middleName }} {{ fetchedUserData?.lastName }} <span *ngIf="!fetchedUserData">{{ currentUser?.FirstName }} {{ currentUser?.LastName }}</span>
                    </h1>
                    <p class="profile-role">{{ fetchedUserData?.role || currentUser?.role }}</p>
                    <p class="profile-bio">{{ getDepartmentName(fetchedUserData?.department || currentUser?.Department) }} • {{ getCampusName(fetchedUserData?.campus || currentUser?.Campus) }}</p>
                </div>
            </div>

            <!-- Main Content - Two Column Layout -->
            <div style="gap: 1.5rem;">
                <!-- Left Column - User Details -->
                <div class="col-12 lg:col-8">
                    <div class="card profile-card mt-2.5">
                        <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                            <h5 class="m-0"><i class="pi pi-user mr-2"></i>Personal Information</h5>
                            <button type="button" pButton [ngClass]="isEditMode ? 'p-button-success' : 'p-button-warning'" [label]="isEditMode ? 'Save Changes' : 'Edit Profile'" (click)="toggleEditMode()" icon="pi pi-pencil"></button>
                        </div>
                        <p-divider></p-divider>

                        <div *ngIf="fetchedUserData || currentUser">
                            <div class="info-grid-editable" *ngIf="!isEditMode">
                                <div class="info-item-display" *ngFor="let item of profileInfoItems">
                                    <label class="info-label">{{ item.label }}</label>
                                    <div class="info-value-display" *ngIf="item.key !== 'isActive'">{{ item.value || 'N/A' }}</div>
                                    <div class="info-value-display" *ngIf="item.key === 'isActive'">
                                        <span class="status-badge" [style.backgroundColor]="fetchedUserData?.isActive ? '#d4edda' : '#f8d7da'" [style.color]="fetchedUserData?.isActive ? '#155724' : '#721c24'">
                                            {{ fetchedUserData?.isActive ? '✓ Active' : '✕ Inactive' }}
                                        </span>
                                    </div>
                                </div>
                                <!-- Locked Fields - Display only -->
                                <div class="info-item-display">
                                    <label class="info-label">Department</label>
                                    <div class="info-value-display">{{ getDepartmentName(fetchedUserData?.department || currentUser?.Department) }}</div>
                                </div>
                                <div class="info-item-display">
                                    <label class="info-label">Campus</label>
                                    <div class="info-value-display">{{ getCampusName(fetchedUserData?.campus || currentUser?.Campus) }}</div>
                                </div>
                                <div class="info-item-display">
                                    <label class="info-label">Role</label>
                                    <div class="info-value-display">{{ fetchedUserData?.role || currentUser?.role }}</div>
                                </div>
                                <div class="info-item-display">
                                    <label class="info-label">User ID</label>
                                    <div class="info-value-display">{{ fetchedUserData?.userId || currentUser?.user_id }}</div>
                                </div>
                            </div>
                            <div class="info-grid-edit" *ngIf="isEditMode">
                                <div class="edit-input-group" *ngFor="let item of profileInfoItems">
                                    <label class="edit-label">{{ item.label }}</label>
                                    <input *ngIf="item.key !== 'isActive'" type="text" [(ngModel)]="editFormData[item.key]" class="edit-input" placeholder="Enter {{ item.label | lowercase }}" />
                                    <div *ngIf="item.key === 'isActive'" class="status-toggle">
                                        <label class="toggle-switch">
                                            <input type="checkbox" [(ngModel)]="editFormData['isActive']" />
                                            <span class="slider"></span>
                                        </label>
                                        <span style="margin-left: 0.5rem;">{{ editFormData['isActive'] ? 'Active' : 'Inactive' }}</span>
                                    </div>
                                </div>
                                <!-- Locked Fields - Display as read-only -->
                                <div class="edit-input-group">
                                    <label class="edit-label">Department</label>
                                    <input type="text" [value]="getDepartmentName(fetchedUserData?.department || currentUser?.Department)" disabled class="edit-input" style="opacity: 0.6; cursor: not-allowed;" />
                                </div>
                                <div class="edit-input-group">
                                    <label class="edit-label">Campus</label>
                                    <input type="text" [value]="getCampusName(fetchedUserData?.campus || currentUser?.Campus)" disabled class="edit-input" style="opacity: 0.6; cursor: not-allowed;" />
                                </div>
                                <div class="edit-input-group">
                                    <label class="edit-label">Role</label>
                                    <input type="text" [value]="fetchedUserData?.role || currentUser?.role" disabled class="edit-input" style="opacity: 0.6; cursor: not-allowed;" />
                                </div>
                                <div class="edit-input-group">
                                    <label class="edit-label">User ID</label>
                                    <input type="text" [value]="fetchedUserData?.userId || currentUser?.user_id" disabled class="edit-input" style="opacity: 0.6; cursor: not-allowed;" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class ProfileComponent implements OnInit {
    currentUser: any = null;
    fetchedUserData: any = null; // Store fetched user data from backend
    profileInfoItems: any[] = []; // Store info items for ngFor
    isEditMode: boolean = false; // Toggle between view and edit mode
    editFormData: any = {}; // Store form data during edit mode
    originalFormData: any = {}; // Store original form data for validation
    backgroundImage: string = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; // Background image/gradient

    constructor(
        private router: Router,
        private assetService: AssetService,
        private userService: UserService,
        private userContextService: UserContextService,
        private storageService: StorageService
    ) {}

    ngOnInit() {
        this.loadCurrentUser();
        // Automatically fetch user data from backend
        this.fetchUserDataByUserIdAuto();
        // Load background image (from localStorage first, then from API)
        const savedBackground = localStorage.getItem('backgroundImage');
        if (savedBackground) {
            this.backgroundImage = savedBackground;
            console.log('Background image loaded from localStorage');
        } else {
            this.loadBackgroundImage();
        }
        // Build profile info items for display
        setTimeout(() => this.buildProfileInfoItems(), 100);
    }

    getInitials(): string {
        if (!this.currentUser) return 'U';
        const firstName = this.currentUser.FirstName || '';
        const lastName = this.currentUser.LastName || '';
        return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
    }

    getCampusName(campus: any): string {
        // Handle campus as object or string
        if (typeof campus === 'string') {
            return campus;
        }
        if (campus && typeof campus === 'object') {
            return campus.campusName || campus.name || 'N/A';
        }
        return 'N/A';
    }

    getDepartmentName(department: any): string {
        // Handle department as object or string
        if (typeof department === 'string') {
            return department;
        }
        if (department && typeof department === 'object') {
            return department.departmentName || department.name || 'N/A';
        }
        return 'N/A';
    }

    loadBackgroundImage() {
        const userId = this.userContextService.getUserId();

        if (!userId) {
            console.log('No userId found, using default background');
            return;
        }

        this.storageService.getBackgroundPicture().subscribe({
            next: (response: any) => {
                const imageUrl = response.url || response.imageUrl || response.data?.url;
                if (imageUrl) {
                    this.backgroundImage = `url('${imageUrl}')`;
                    console.log('Background image loaded:', imageUrl);
                }
            },
            error: (error) => {
                console.error('Error loading background image:', error);
                // Keep default gradient on error
                this.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }
        });
    }

    triggerFileUpload(): void {
        // Get reference to file upload element and trigger click
        const fileUploadElement = document.querySelector('input[type="file"]');
        if (fileUploadElement) {
            (fileUploadElement as HTMLInputElement).click();
        }
    }

    onImageSelect(event: any) {
        const file = event.files[0];
        if (file) {
            // Validate file size (5MB = 5242880 bytes)
            if (file.size > 5242880) {
                Swal.fire({
                    title: 'File Too Large',
                    text: 'Please select an image smaller than 5MB.',
                    icon: 'error'
                });
                return;
            }

            // Validate file type
            if (!file.type.startsWith('image/')) {
                Swal.fire({
                    title: 'Invalid File Type',
                    text: 'Please select a valid image file.',
                    icon: 'error'
                });
                return;
            }

            // Show loading notification
            Swal.fire({
                title: 'Uploading...',
                text: 'Please wait while your profile picture is being uploaded.',
                didOpen: () => {
                    Swal.showLoading();
                },
                allowOutsideClick: false,
                allowEscapeKey: false
            });

            // Upload to backend
            this.storageService.uploadProfilePicture(file).subscribe({
                next: (response) => {
                    console.log('Profile picture uploaded successfully:', response);

                    // Update currentUser with new profile picture URL
                    if (response.url || response.imageUrl || response.data?.url) {
                        const imageUrl = response.url || response.imageUrl || response.data?.url;
                        this.currentUser.profilePicture = imageUrl;
                        this.currentUser.profileImage = imageUrl;
                        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                    }

                    Swal.fire({
                        title: 'Success!',
                        text: 'Profile picture updated successfully.',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false
                    });
                },
                error: (error) => {
                    console.error('Error uploading profile picture:', error);
                    Swal.fire({
                        title: 'Upload Failed',
                        text: 'Failed to upload profile picture: ' + (error.error?.message || error.message),
                        icon: 'error'
                    });
                }
            });
        }
    }

    loadCurrentUser() {
        // Get user from localStorage
        const userStr = localStorage.getItem('currentUser');
        if (userStr) {
            this.currentUser = JSON.parse(userStr);
        } else {
            // Try to get from database - for demo purposes, get first user
            this.assetService.getUsers().subscribe({
                next: (users) => {
                    if (users && users.length > 0) {
                        this.currentUser = users[0]; // Get first user as demo
                        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                    }
                },
                error: (error) => {
                    console.error('Error loading user:', error);
                    // Fallback user data
                    this.currentUser = {
                        user_id: 'UID2025-10-15-123456',
                        email: 'superadmin@lams.com',
                        FirstName: 'Jerick',
                        LastName: 'Signapan',
                        Department: 'Admin',
                        MobileNo: '09999991111',
                        Campus: 'Villanueva Campus',
                        role: 'Super Admin'
                    };
                }
            });
        }
    }

    editCover() {
        Swal.fire({
            title: 'Upload Cover Photo',
            html: `
                <input type="file" id="coverFileInput" accept="image/*" style="display: none;" />
                <div style="text-align: center;">
                    <button type="button" onclick="document.getElementById('coverFileInput').click()" 
                            style="padding: 8px 16px; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Choose Image
                    </button>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Upload',
            cancelButtonText: 'Cancel',
            didOpen: () => {
                const fileInput = document.getElementById('coverFileInput') as HTMLInputElement;
                if (fileInput) {
                    fileInput.addEventListener('change', (e: any) => {
                        const file = e.target.files[0];
                        if (file) {
                            // Validate file size (5MB)
                            if (file.size > 5242880) {
                                Swal.fire({
                                    title: 'File Too Large',
                                    text: 'Please select an image smaller than 5MB.',
                                    icon: 'error'
                                });
                                return;
                            }
                            // Validate file type
                            if (!file.type.startsWith('image/')) {
                                Swal.fire({
                                    title: 'Invalid File Type',
                                    text: 'Please select a valid image file.',
                                    icon: 'error'
                                });
                                return;
                            }
                            // Store file in component for upload on confirm
                            (this as any).selectedCoverFile = file;
                            Swal.update({
                                confirmButtonText: 'Upload: ' + file.name
                            });
                        }
                    });
                }
            }
        }).then((result) => {
            if (result.isConfirmed && (this as any).selectedCoverFile) {
                Swal.fire({
                    title: 'Uploading...',
                    text: 'Please wait while your cover photo is being uploaded.',
                    didOpen: () => {
                        Swal.showLoading();
                    },
                    allowOutsideClick: false,
                    allowEscapeKey: false
                });

                this.storageService.uploadBackgroundPicture((this as any).selectedCoverFile).subscribe({
                    next: (response) => {
                        console.log('Cover photo uploaded successfully:', response);
                        const imageUrl = response.url || response.imageUrl || response.data?.url;
                        if (imageUrl) {
                            this.backgroundImage = `url('${imageUrl}')`;
                            // Save to localStorage for persistence
                            localStorage.setItem('backgroundImage', this.backgroundImage);
                            console.log('Background image saved to localStorage');
                        }
                        Swal.fire({
                            title: 'Success!',
                            text: 'Cover photo updated successfully.',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    },
                    error: (error) => {
                        console.error('Error uploading cover photo:', error);
                        Swal.fire({
                            title: 'Upload Failed',
                            text: 'Failed to upload cover photo: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
                (this as any).selectedCoverFile = null;
            }
        });
    }

    editProfile() {
        this.router.navigate(['/app/account']);
    }

    goBack() {
        this.router.navigate(['/app/dashboard']);
    }

    /**
     * Build profile info items array for ngFor
     */
    buildProfileInfoItems() {
        this.profileInfoItems = [
            { label: 'First Name', key: 'firstName', value: this.fetchedUserData?.firstName || this.currentUser?.FirstName },
            { label: 'Last Name', key: 'lastName', value: this.fetchedUserData?.lastName || this.currentUser?.LastName },
            { label: 'Middle Name', key: 'middleName', value: this.fetchedUserData?.middleName || 'N/A' },
            { label: 'Email', key: 'email', value: this.fetchedUserData?.email || this.currentUser?.email },
            { label: 'Username', key: 'userName', value: this.fetchedUserData?.userName || 'N/A' },
            { label: 'Contact Number', key: 'contactNumber', value: this.fetchedUserData?.contactNumber || 'N/A' },
            { label: 'Status', key: 'isActive', value: this.fetchedUserData?.isActive ? 'Active' : 'Inactive' }
        ];
        // Initialize edit form data
        this.initializeEditFormData();
    }

    /**
     * Initialize edit form data with current values
     */
    initializeEditFormData() {
        // Get the logged-in user's departmentId
        // Handle both object format {departmentId: uuid} and direct UUID string format
        let userDepartmentId = '';

        if (this.fetchedUserData?.department) {
            if (typeof this.fetchedUserData.department === 'object' && this.fetchedUserData.department?.departmentId) {
                userDepartmentId = this.fetchedUserData.department.departmentId;
            } else if (typeof this.fetchedUserData.department === 'string') {
                // If it's a string, it's likely already the departmentId (UUID)
                // Only use it if it looks like a UUID (contains hyphens)
                if (this.fetchedUserData.department.includes('-')) {
                    userDepartmentId = this.fetchedUserData.department;
                }
            }
        }

        // Fallback to currentUser
        if (!userDepartmentId && this.currentUser) {
            if (typeof this.currentUser.department === 'object' && this.currentUser.department?.departmentId) {
                userDepartmentId = this.currentUser.department.departmentId;
            } else if (typeof this.currentUser.department === 'string' && this.currentUser.department.includes('-')) {
                userDepartmentId = this.currentUser.department;
            }
        }

        this.editFormData = {
            firstName: this.fetchedUserData?.firstName || this.currentUser?.FirstName || '',
            lastName: this.fetchedUserData?.lastName || this.currentUser?.LastName || '',
            middleName: this.fetchedUserData?.middleName || '',
            email: this.fetchedUserData?.email || this.currentUser?.email || '',
            userName: this.fetchedUserData?.userName || '',
            contactNumber: this.fetchedUserData?.contactNumber || '',
            Department: userDepartmentId,
            isActive: this.fetchedUserData?.isActive || false
        };
        // Store original values for validation
        this.originalFormData = JSON.parse(JSON.stringify(this.editFormData));
    }

    /**
     * Toggle between view and edit mode
     */
    toggleEditMode() {
        if (this.isEditMode) {
            // Save changes
            this.saveChanges();
        } else {
            // Enter edit mode
            this.isEditMode = true;
            console.log('🔵 Edit Mode Activated');
            console.log('Department ID:', this.editFormData.Department);
            console.log('Edit Form Data:', this.editFormData);
        }
    }

    /**
     * Save changes from edit mode
     */
    saveChanges() {
        Swal.fire({
            title: 'Save Changes',
            html: 'Are you sure you want to save these changes?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Save',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                const userId = this.userContextService.getUserId();

                if (!userId) {
                    Swal.fire({
                        title: 'Error',
                        text: 'UserId not found. Cannot save changes.',
                        icon: 'error'
                    });
                    return;
                }

                // Prepare payload with user's current departmentId and campusId (always send the same)
                const userDepartmentId = this.editFormData.Department || this.originalFormData.Department;

                // Extract campus ID from fetched data or current user
                let userCampusId = '';
                if (this.fetchedUserData?.campus) {
                    if (typeof this.fetchedUserData.campus === 'object' && this.fetchedUserData.campus?.campusId) {
                        userCampusId = this.fetchedUserData.campus.campusId;
                    } else if (typeof this.fetchedUserData.campus === 'string' && this.fetchedUserData.campus.includes('-')) {
                        userCampusId = this.fetchedUserData.campus;
                    }
                }
                if (!userCampusId && this.currentUser?.campus) {
                    if (typeof this.currentUser.campus === 'object' && this.currentUser.campus?.campusId) {
                        userCampusId = this.currentUser.campus.campusId;
                    } else if (typeof this.currentUser.campus === 'string' && this.currentUser.campus.includes('-')) {
                        userCampusId = this.currentUser.campus;
                    }
                }

                const updatePayload = {
                    firstName: this.editFormData.firstName?.trim() || this.originalFormData.firstName,
                    lastName: this.editFormData.lastName?.trim() || this.originalFormData.lastName,
                    middleName: this.editFormData.middleName?.trim() || this.originalFormData.middleName,
                    email: this.editFormData.email?.trim() || this.originalFormData.email,
                    userName: this.editFormData.userName?.trim() || this.originalFormData.userName,
                    contactNumber: this.editFormData.contactNumber?.trim() || this.originalFormData.contactNumber,
                    department: userDepartmentId,
                    campus: userCampusId,
                    isActive: this.editFormData.isActive !== undefined ? this.editFormData.isActive : this.originalFormData.isActive
                };

                // Validate required fields are not empty
                if (!updatePayload.firstName?.trim()) {
                    Swal.fire({
                        title: 'Validation Error',
                        text: 'First Name is required',
                        icon: 'error'
                    });
                    return;
                }
                if (!updatePayload.lastName?.trim()) {
                    Swal.fire({
                        title: 'Validation Error',
                        text: 'Last Name is required',
                        icon: 'error'
                    });
                    return;
                }

                // Log payload being sent to backend
                console.log('📤 Sending to Backend:', updatePayload);

                // Call backend API to update user
                this.userService.updateUser(userId, updatePayload).subscribe({
                    next: (response) => {
                        console.log('User updated successfully:', response);

                        // Update fetchedUserData with response
                        this.fetchedUserData = {
                            ...this.fetchedUserData,
                            ...response
                        };

                        // Save to localStorage
                        if (this.currentUser) {
                            this.currentUser.FirstName = response['firstName'] || this.editFormData.firstName;
                            this.currentUser.LastName = response['lastName'] || this.editFormData.lastName;
                            this.currentUser.email = response['email'] || this.editFormData.email;
                            this.currentUser.Department = response['department'] || this.editFormData.department;
                            this.currentUser.Campus = response['campus'] || this.editFormData.campus;
                            this.currentUser.role = response['role'] || this.editFormData.role;
                            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                        }

                        // Rebuild profile info items
                        this.buildProfileInfoItems();
                        this.isEditMode = false;

                        Swal.fire({
                            title: 'Success!',
                            text: 'Your changes have been saved successfully.',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    },
                    error: (error) => {
                        console.error('Error updating user:', error);
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to save changes: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }

    /**
     * Cancel edit mode without saving
     */
    cancelEdit() {
        this.isEditMode = false;
        this.buildProfileInfoItems();
    }

    /**
     * Sample method to demonstrate UserContextService usage
     * This will log the current userId to console
     */
    logUserIdFromService() {
        const userId = this.userContextService.getUserId();
        console.log('UserId from UserContextService:', userId);

        Swal.fire({
            title: 'User Context',
            html: `<strong>UserId:</strong> ${userId}<br><strong>Name:</strong> ${this.currentUser?.FirstName} ${this.currentUser?.LastName}`,
            icon: 'info'
        });
    }

    /**
     * Sample method to subscribe to userId changes
     * This will log whenever userId changes
     */
    subscribeToUserIdChanges() {
        this.userContextService.userId$.subscribe((userId) => {
            console.log('UserId changed to:', userId);
        });
    }

    /**
     * Sample method to fetch user profile from backend
     * Demonstrates how to use UserService getUserProfile method
     */
    fetchUserDataByUserId() {
        console.log('Fetching current user profile');

        this.userService.getUserProfile().subscribe({
            next: (userData) => {
                console.log('User profile fetched successfully:', userData);
                this.fetchedUserData = userData; // Store in component
                this.buildProfileInfoItems(); // Rebuild info items

                Swal.fire({
                    title: 'Success',
                    text: 'User profile loaded successfully!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            },
            error: (error) => {
                console.error('Error fetching user profile:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to fetch user profile: ' + (error.error?.message || error.message),
                    icon: 'error'
                });
            }
        });
    }

    /**
     * Automatically fetch user profile on page load (no popups)
     */
    private fetchUserDataByUserIdAuto() {
        console.log('Auto-fetching current user profile');
        console.log('Token:', localStorage.getItem('token') ? 'Present' : 'Missing');

        this.userService.getUserProfile().subscribe({
            next: (userData) => {
                console.log('✓ User profile auto-fetched successfully:', userData);
                this.fetchedUserData = userData; // Store in component
                this.buildProfileInfoItems(); // Rebuild info items with new data
            },
            error: (error) => {
                console.error('✗ Error auto-fetching user profile:', error);
                console.error('Status:', error.status);
                console.error('Message:', error.message);
                console.error('Error Object:', error.error);
                // Fail silently for auto-fetch
            }
        });
    }
}
