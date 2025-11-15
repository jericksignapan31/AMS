import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Select } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { Router } from '@angular/router';
import { AssetService } from '../service/asset.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-account',
    standalone: true,
    imports: [CommonModule, FormsModule, CardModule, ButtonModule, InputTextModule, PasswordModule, Select, FileUploadModule, AvatarModule, DividerModule],
    template: `
        <div class="grid">
            <!-- Header Section -->
            <div class="col-12">
                <div class="card mb-0" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px;">
                    <div class="flex align-items-center justify-content-between">
                        <div class="flex align-items-center gap-3">
                            <i class="pi pi-cog text-3xl"></i>
                            <div>
                                <h2 class="m-0 text-white">Account Settings</h2>
                                <p class="m-0 text-white-alpha-70">Manage your profile and account preferences</p>
                            </div>
                        </div>
                        <p-button icon="pi pi-arrow-left" label="Back to Profile" [text]="true" styleClass="text-white" (onClick)="cancel()" />
                    </div>
                </div>
            </div>

            <!-- Profile Picture Section -->
            <div class="col-12 lg:col-4" *ngIf="currentUser">
                <div class="card h-full">
                    <h5>Profile Picture</h5>
                    <div class="flex flex-column align-items-center text-center">
                        <div class="relative mb-4">
                            <img
                                *ngIf="currentUser.profileImage; else defaultAvatar"
                                [src]="currentUser.profileImage"
                                alt="Profile"
                                class="border-circle"
                                style="width: 200px; height: 200px; object-fit: cover; border: 4px solid var(--primary-color);"
                            />
                            <ng-template #defaultAvatar>
                                <p-avatar [label]="getInitials()" size="xlarge" shape="circle" styleClass="text-4xl" style="width: 200px; height: 200px; font-size: 4rem; border: 4px solid var(--primary-color);"> </p-avatar>
                            </ng-template>

                            <button type="button" class="p-button p-button-rounded absolute" style="bottom: 10px; right: 10px; width: 50px; height: 50px;" (click)="fileUpload.choose()" title="Change Profile Picture">
                                <i class="pi pi-camera text-xl"></i>
                            </button>
                        </div>

                        <h4 class="m-0 mb-2">{{ currentUser.FirstName }} {{ currentUser.LastName }}</h4>
                        <p class="text-600 m-0 mb-2">{{ currentUser.role }}</p>
                        <p class="text-500 text-sm m-0">{{ currentUser.Department }} • {{ currentUser.Campus }}</p>

                        <p-fileUpload #fileUpload mode="basic" accept="image/*" [maxFileSize]="2000000" (onSelect)="onImageSelect($event)" [auto]="true" chooseLabel="Change Picture" [ngStyle]="{ display: 'none' }"></p-fileUpload>

                        <p-button label="Remove Picture" icon="pi pi-trash" severity="danger" [text]="true" size="small" class="mt-3" (onClick)="removeProfilePicture()" *ngIf="currentUser.profileImage" />
                    </div>
                </div>
            </div>

            <!-- Account Information Section -->
            <div class="col-12 lg:col-8" *ngIf="currentUser">
                <div class="card h-full">
                    <h5>Personal Information</h5>
                    <div class="grid formgrid p-fluid">
                        <div class="field col-12 md:col-6">
                            <label for="firstName" class="font-semibold">First Name *</label>
                            <input pInputText id="firstName" type="text" [(ngModel)]="currentUser.FirstName" class="p-inputtext-lg" placeholder="Enter your first name" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="lastName" class="font-semibold">Last Name *</label>
                            <input pInputText id="lastName" type="text" [(ngModel)]="currentUser.LastName" class="p-inputtext-lg" placeholder="Enter your last name" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="email" class="font-semibold">Email Address *</label>
                            <input pInputText id="email" type="email" [(ngModel)]="currentUser.email" class="p-inputtext-lg" placeholder="Enter your email" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="mobileNo" class="font-semibold">Mobile Number</label>
                            <input pInputText id="mobileNo" type="text" [(ngModel)]="currentUser.MobileNo" class="p-inputtext-lg" placeholder="Enter your mobile number" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="department" class="font-semibold">Department</label>
                            <p-select id="department" [(ngModel)]="currentUser.Department" [options]="departments" optionLabel="name" optionValue="value" placeholder="Select Department" class="p-inputtext-lg" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="campus" class="font-semibold">Campus</label>
                            <p-select id="campus" [(ngModel)]="currentUser.Campus" [options]="campuses" optionLabel="name" optionValue="value" placeholder="Select Campus" class="p-inputtext-lg" />
                        </div>
                        <div class="field col-12">
                            <label for="userId" class="font-semibold">User ID</label>
                            <input pInputText id="userId" type="text" [value]="currentUser.user_id" readonly class="p-inputtext-lg" style="background-color: var(--surface-100);" />
                            <small class="text-500">User ID cannot be changed</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Security Section -->
            <div class="col-12" *ngIf="currentUser">
                <div class="card">
                    <div class="flex align-items-center gap-3 mb-4">
                        <i class="pi pi-shield text-2xl text-primary"></i>
                        <div>
                            <h5 class="m-0">Security Settings</h5>
                            <p class="m-0 text-600">Update your password and security preferences</p>
                        </div>
                    </div>

                    <p-divider />

                    <div class="grid formgrid p-fluid">
                        <div class="field col-12">
                            <label for="currentPassword" class="font-semibold">Current Password</label>
                            <p-password id="currentPassword" [(ngModel)]="currentPassword" [feedback]="false" placeholder="Enter your current password" [toggleMask]="true" />
                            <small class="text-500">Required only when changing password</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="newPassword" class="font-semibold">New Password</label>
                            <p-password
                                id="newPassword"
                                [(ngModel)]="newPassword"
                                placeholder="Enter new password"
                                [toggleMask]="true"
                                promptLabel="Choose a password"
                                weakLabel="Too simple"
                                mediumLabel="Average complexity"
                                strongLabel="Complex password"
                            />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="confirmPassword" class="font-semibold">Confirm New Password</label>
                            <p-password id="confirmPassword" [(ngModel)]="confirmPassword" [feedback]="false" placeholder="Confirm new password" [toggleMask]="true" />
                        </div>
                    </div>

                    <div class="mt-4 p-3 border-round" style="background-color: var(--blue-50); border: 1px solid var(--blue-200);">
                        <div class="flex align-items-center gap-2 text-blue-800">
                            <i class="pi pi-info-circle"></i>
                            <span class="font-semibold">Password Requirements:</span>
                        </div>
                        <ul class="mt-2 mb-0 text-blue-700 text-sm">
                            <li>At least 8 characters long</li>
                            <li>Contains uppercase and lowercase letters</li>
                            <li>Contains at least one number</li>
                            <li>Contains at least one special character</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="col-12">
                <div class="card">
                    <div class="flex gap-3 justify-content-between flex-wrap">
                        <div class="flex gap-2">
                            <p-button label="Save Changes" icon="pi pi-check" (onClick)="saveChanges()" size="large" />
                            <p-button label="Reset Changes" icon="pi pi-refresh" severity="secondary" (onClick)="resetChanges()" size="large" />
                        </div>
                        <p-button label="Cancel" icon="pi pi-times" severity="danger" [outlined]="true" (onClick)="cancel()" size="large" />
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AccountComponent implements OnInit {
    currentUser: any = null;
    originalUser: any = null; // Store original user data for reset functionality
    currentPassword: string = '';
    newPassword: string = '';
    confirmPassword: string = '';

    departments = [
        { name: 'Administration', value: 'Admin' },
        { name: 'HR Department', value: 'HR Department' },
        { name: 'OSA Department', value: 'OSA Department' },
        { name: 'Registrar Department', value: 'Registrar Department' },
        { name: 'Finance Department', value: 'Finance Department' },
        { name: 'Accounting Department', value: 'Accounting Department' },
        { name: 'Library Department', value: 'Library Department' }
    ];

    campuses = [
        { name: 'Villanueva Campus', value: 'Villanueva Campus' },
        { name: 'Jasaan Campus', value: 'Jasaan Campus' },
        { name: 'Cdo Campus', value: 'Cdo Campus' },
        { name: 'Alubijid Campus', value: 'Alubijid Campus' },
        { name: 'Oroquieta Campus', value: 'Oroquieta Campus' },
        { name: 'Panaon Campus', value: 'Panaon Campus' },
        { name: 'Claveria Campus', value: 'Claveria Campus' }
    ];

    constructor(
        private router: Router,
        private assetService: AssetService
    ) {}

    ngOnInit() {
        this.loadCurrentUser();
    }

    loadCurrentUser() {
        const userStr = localStorage.getItem('currentUser');
        if (userStr) {
            this.currentUser = { ...JSON.parse(userStr) }; // Create a copy to avoid direct mutation
            this.originalUser = { ...JSON.parse(userStr) }; // Store original for reset
        } else {
            this.router.navigate(['/login']);
        }
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
            // Validate file size (2MB = 2000000 bytes)
            if (file.size > 2000000) {
                Swal.fire({
                    title: 'File Too Large',
                    text: 'Please select an image smaller than 2MB.',
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

    removeProfilePicture() {
        Swal.fire({
            title: 'Remove Profile Picture',
            text: 'Are you sure you want to remove your profile picture?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Remove',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                delete this.currentUser.profileImage;
                Swal.fire({
                    title: 'Removed!',
                    text: 'Profile picture has been removed.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        });
    }

    resetChanges() {
        Swal.fire({
            title: 'Reset Changes',
            text: 'Are you sure you want to reset all changes?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Reset',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.currentUser = { ...this.originalUser };
                this.currentPassword = '';
                this.newPassword = '';
                this.confirmPassword = '';

                Swal.fire({
                    title: 'Reset Complete',
                    text: 'All changes have been reset.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        });
    }

    saveChanges() {
        // Validate required fields
        if (!this.currentUser.FirstName?.trim() || !this.currentUser.LastName?.trim() || !this.currentUser.email?.trim()) {
            Swal.fire({
                title: 'Required Fields Missing',
                text: 'Please fill in all required fields (First Name, Last Name, Email).',
                icon: 'error'
            });
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.currentUser.email)) {
            Swal.fire({
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
                icon: 'error'
            });
            return;
        }

        // Password validation
        if (this.newPassword) {
            if (this.newPassword !== this.confirmPassword) {
                Swal.fire({
                    title: 'Password Mismatch',
                    text: 'New password and confirm password do not match.',
                    icon: 'error'
                });
                return;
            }

            if (!this.currentPassword) {
                Swal.fire({
                    title: 'Current Password Required',
                    text: 'Please enter your current password to change it.',
                    icon: 'warning'
                });
                return;
            }

            // Validate password strength
            if (this.newPassword.length < 8) {
                Swal.fire({
                    title: 'Weak Password',
                    text: 'Password must be at least 8 characters long.',
                    icon: 'error'
                });
                return;
            }

            // Update password
            this.currentUser.password = this.newPassword;
        }

        // Show confirmation dialog
        Swal.fire({
            title: 'Confirm Changes',
            text: 'Are you sure you want to save these changes?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Save Changes',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // Save to localStorage (in real app, this would be API call)
                localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

                // Update original user data
                this.originalUser = { ...this.currentUser };

                // Clear password fields
                this.currentPassword = '';
                this.newPassword = '';
                this.confirmPassword = '';

                Swal.fire({
                    title: 'Success!',
                    text: 'Account settings have been updated successfully.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    this.router.navigate(['/app/profile']);
                });
            }
        });
    }

    cancel() {
        this.router.navigate(['/app/profile']);
    }
}
