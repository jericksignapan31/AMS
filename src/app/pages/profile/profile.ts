import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { AssetService } from '../service/asset.service';
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
                    <h1 class="profile-name">{{ currentUser?.FirstName }} {{ currentUser?.LastName }}</h1>
                    <p class="profile-role">{{ currentUser?.role }}</p>
                    <p class="profile-bio">{{ currentUser?.Department }} • {{ currentUser?.Campus }}</p>
                    <button type="button" class="p-button p-button-sm mt-3" (click)="logUserIdFromService()" title="View User ID from Service"><i class="pi pi-info-circle mr-2"></i>View User Context</button>
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

                        <div class="info-grid" *ngIf="currentUser">
                            <div class="info-item">
                                <label>First Name</label>
                                <p>{{ currentUser.FirstName }}</p>
                            </div>
                            <div class="info-item">
                                <label>Last Name</label>
                                <p>{{ currentUser.LastName }}</p>
                            </div>
                            <div class="info-item">
                                <label>Email</label>
                                <p>{{ currentUser.email }}</p>
                            </div>
                            <div class="info-item">
                                <label>Mobile Number</label>
                                <p>{{ currentUser.MobileNo }}</p>
                            </div>
                            <div class="info-item">
                                <label>Department</label>
                                <p>{{ currentUser.Department }}</p>
                            </div>
                            <div class="info-item">
                                <label>Campus</label>
                                <p>{{ currentUser.Campus }}</p>
                            </div>
                            <div class="info-item">
                                <label>Role</label>
                                <p>{{ currentUser.role }}</p>
                            </div>
                            <div class="info-item">
                                <label>User ID</label>
                                <p>{{ currentUser.user_id }}</p>
                            </div>
                        </div>

                        <!-- <div class="flex gap-2 mt-4">
                            <p-button label="Edit Profile" icon="pi pi-pencil" (onClick)="editProfile()" />
                            <p-button label="Back" icon="pi pi-arrow-left" severity="secondary" (onClick)="goBack()" />
                        </div> -->
                    </div>
                </div>

                <!-- Right Column - Account Settings -->
                <div class="col-12 lg:col-4">
                    <div class="card profile-card mt-2.5 ">
                        <div class="card-header">
                            <h5 class="m-0"><i class="pi pi-cog mr-2"></i>Account Settings</h5>
                        </div>
                        <p-divider></p-divider>

                        <div class="settings-grid">
                            <div class="settings-card-item">
                                <div class="settings-card-icon">
                                    <i class="pi pi-lock"></i>
                                </div>
                                <p class="settings-card-title">Change Password</p>
                                <p class="settings-card-desc">Update your password</p>
                            </div>

                            <div class="settings-card-item">
                                <div class="settings-card-icon">
                                    <i class="pi pi-shield"></i>
                                </div>
                                <p class="settings-card-title">Privacy & Security</p>
                                <p class="settings-card-desc">Control your privacy</p>
                            </div>

                            <div class="settings-card-item">
                                <div class="settings-card-icon">
                                    <i class="pi pi-download"></i>
                                </div>
                                <p class="settings-card-title">Download Data</p>
                                <p class="settings-card-desc">Export your data</p>
                            </div>

                            <div class="settings-card-item danger-card">
                                <div class="settings-card-icon danger-icon">
                                    <i class="pi pi-sign-out"></i>
                                </div>
                                <p class="settings-card-title danger-title">Logout</p>
                                <p class="settings-card-desc">Sign out from your account</p>
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

    constructor(
        private router: Router,
        private assetService: AssetService,
        private userContextService: UserContextService
    ) {}

    ngOnInit() {
        this.loadCurrentUser();
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
}
