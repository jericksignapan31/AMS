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
import { DividerModule } from 'primeng/divider';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, InputTextModule, FileUploadModule, AvatarModule, DividerModule],
    styleUrls: ['../../../assets/layout/_profile.scss'],
    template: `
        <div class="profile-container">
            <!-- Background Header Section -->
            <div class="profile-header-bg" [style.backgroundImage]="'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'">
                <button type="button" class="p-button p-button-rounded p-button-text absolute" style="top: 1rem; right: 1rem; color: white;" title="Edit Cover" (click)="editCover()">
                    <i class="pi pi-camera"></i>
                </button>
            </div>

            <!-- Profile Info Section -->
            <div class="profile-info-section">
                <div class="profile-picture-container">
                    <img *ngIf="currentUser?.profileImage; else defaultAvatar" [src]="currentUser.profileImage" alt="Profile" class="profile-picture" />
                    <ng-template #defaultAvatar>
                        <p-avatar [label]="getInitials()" shape="circle" styleClass="profile-picture-avatar"></p-avatar>
                    </ng-template>
                    <button type="button" class="p-button p-button-rounded p-button-sm camera-btn" (click)="fileUpload.choose()" title="Upload Profile Picture">
                        <i class="pi pi-camera"></i>
                    </button>
                    <p-fileUpload #fileUpload mode="basic" accept="image/*" [maxFileSize]="1000000" (onSelect)="onImageSelect($event)" [auto]="true" chooseLabel="Choose Image" [ngStyle]="{ display: 'none' }"></p-fileUpload>
                </div>

                <div class="profile-name-section">
                    <h1 class="profile-name">
                        {{ fetchedUserData?.firstName }} {{ fetchedUserData?.middleName }} {{ fetchedUserData?.lastName }} <span *ngIf="!fetchedUserData">{{ currentUser?.FirstName }} {{ currentUser?.LastName }}</span>
                    </h1>
                    <p class="profile-role">{{ fetchedUserData?.role || currentUser?.role }}</p>
                    <p class="profile-bio">{{ fetchedUserData?.department || currentUser?.Department }} • {{ fetchedUserData?.campus || currentUser?.Campus }}</p>
                </div>
            </div>

            <!-- Main Content - Two Column Layout -->
            <div style="gap: 1.5rem;">
                <!-- Left Column - User Details -->
                <div class="col-12 lg:col-8">
                    <div class="card profile-card mt-2.5">
                        <div class="card-header">
                            <h5 class="m-0"><i class="pi pi-user mr-2"></i>Personal Information</h5>
                        </div>
                        <p-divider></p-divider>

                        <div class="info-grid" *ngIf="fetchedUserData || currentUser">
                            <div class="info-item" *ngFor="let item of profileInfoItems">
                                <label>{{ item.label }}</label>
                                <p *ngIf="item.key !== 'isActive'">{{ item.value }}</p>
                                <p *ngIf="item.key === 'isActive'">
                                    <span [style.color]="fetchedUserData?.isActive ? '#28a745' : '#dc3545'">{{ fetchedUserData?.isActive ? 'Active' : 'Inactive' }}</span>
                                </p>
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

    constructor(
        private router: Router,
        private assetService: AssetService,
        private userService: UserService,
        private userContextService: UserContextService
    ) {}

    ngOnInit() {
        this.loadCurrentUser();
        // Automatically fetch user data from backend
        this.fetchUserDataByUserIdAuto();
        // Build profile info items for display
        setTimeout(() => this.buildProfileInfoItems(), 100);
    }

    getInitials(): string {
        if (!this.currentUser) return 'U';
        const firstName = this.currentUser.FirstName || '';
        const lastName = this.currentUser.LastName || '';
        return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
    }

    onImageSelect(event: any) {
        const file = event.files[0];
        if (file) {
            // Validate file size (1MB = 1000000 bytes)
            if (file.size > 1000000) {
                Swal.fire({
                    title: 'File Too Large',
                    text: 'Please select an image smaller than 1MB.',
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

            // Convert to base64
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.currentUser.profileImage = e.target.result;

                // Save to localStorage
                localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

                Swal.fire({
                    title: 'Success!',
                    text: 'Profile picture updated successfully.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            };
            reader.readAsDataURL(file);
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
            title: 'Edit Cover Photo',
            text: 'Cover photo editing feature coming soon',
            icon: 'info'
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
            { label: 'Department', key: 'department', value: this.fetchedUserData?.department || this.currentUser?.Department },
            { label: 'Campus', key: 'campus', value: this.fetchedUserData?.campus || this.currentUser?.Campus },
            { label: 'Role', key: 'role', value: this.fetchedUserData?.role || this.currentUser?.role },
            { label: 'User ID', key: 'userId', value: this.fetchedUserData?.userId || this.currentUser?.user_id },
            { label: 'Status', key: 'isActive', value: this.fetchedUserData?.isActive ? 'Active' : 'Inactive' },
            { label: 'Staff', key: 'isStaff', value: this.fetchedUserData?.isStaff ? 'Yes' : 'No' }
        ];
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
     * Sample method to fetch user data by userId from backend
     * Demonstrates how to use UserService with userId from UserContextService
     */
    fetchUserDataByUserId() {
        const userId = this.userContextService.getUserId();

        if (!userId) {
            Swal.fire({
                title: 'Error',
                text: 'UserId not found. Please login first.',
                icon: 'error'
            });
            return;
        }

        console.log('Fetching user data for userId:', userId);

        this.userService.getUserById(userId).subscribe({
            next: (userData) => {
                console.log('User data fetched successfully:', userData);
                this.fetchedUserData = userData; // Store in component

                Swal.fire({
                    title: 'Success',
                    text: 'User data loaded successfully!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            },
            error: (error) => {
                console.error('Error fetching user data:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to fetch user data: ' + (error.error?.message || error.message),
                    icon: 'error'
                });
            }
        });
    }

    /**
     * Automatically fetch user data on page load (no popups)
     */
    private fetchUserDataByUserIdAuto() {
        const userId = this.userContextService.getUserId();

        if (!userId) {
            console.warn('UserId not found for auto-fetch');
            return;
        }

        console.log('Auto-fetching user data for userId:', userId);

        this.userService.getUserById(userId).subscribe({
            next: (userData) => {
                console.log('User data auto-fetched successfully:', userData);
                this.fetchedUserData = userData; // Store in component
                this.buildProfileInfoItems(); // Rebuild info items with new data
            },
            error: (error) => {
                console.error('Error auto-fetching user data:', error);
                // Fail silently for auto-fetch
            }
        });
    }
}
