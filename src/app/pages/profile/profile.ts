import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { AssetService } from '../service/asset.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, InputTextModule, FileUploadModule, AvatarModule],
    template: `
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <h5>User Profile</h5>

                    <!-- Profile Image Section -->
                    <div class="flex flex-column align-items-center mb-4" *ngIf="currentUser">
                        <div class="relative">
                            <img *ngIf="currentUser.profileImage; else defaultAvatar" [src]="currentUser.profileImage" alt="Profile" class="border-circle" style="width: 150px; height: 150px; object-fit: cover;" />
                            <ng-template #defaultAvatar>
                                <p-avatar [label]="getInitials()" size="xlarge" shape="circle" styleClass="text-2xl" style="width: 150px; height: 150px; font-size: 3rem;"> </p-avatar>
                            </ng-template>

                            <button type="button" class="p-button p-button-rounded p-button-sm absolute" style="bottom: 0; right: 0; width: 40px; height: 40px;" (click)="fileUpload.choose()" title="Upload Profile Picture">
                                <i class="pi pi-camera"></i>
                            </button>
                        </div>

                        <h4 class="mt-3 mb-1">{{ currentUser.FirstName }} {{ currentUser.LastName }}</h4>
                        <p class="text-600 m-0">{{ currentUser.role }}</p>

                        <p-fileUpload #fileUpload mode="basic" accept="image/*" [maxFileSize]="1000000" (onSelect)="onImageSelect($event)" [auto]="true" chooseLabel="Choose Image" [ngStyle]="{ display: 'none' }"></p-fileUpload>
                    </div>

                    <div class="grid formgrid p-fluid" *ngIf="currentUser">
                        <div class="field col-12 md:col-6">
                            <label for="firstName">First Name</label>
                            <input pInputText id="firstName" type="text" [value]="currentUser.FirstName" readonly />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="lastName">Last Name</label>
                            <input pInputText id="lastName" type="text" [value]="currentUser.LastName" readonly />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="email">Email</label>
                            <input pInputText id="email" type="email" [value]="currentUser.email" readonly />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="department">Department</label>
                            <input pInputText id="department" type="text" [value]="currentUser.Department" readonly />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="campus">Campus</label>
                            <input pInputText id="campus" type="text" [value]="currentUser.Campus" readonly />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="role">Role</label>
                            <input pInputText id="role" type="text" [value]="currentUser.role" readonly />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="mobileNo">Mobile Number</label>
                            <input pInputText id="mobileNo" type="text" [value]="currentUser.MobileNo" readonly />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="userId">User ID</label>
                            <input pInputText id="userId" type="text" [value]="currentUser.user_id" readonly />
                        </div>
                    </div>

                    <div class="flex gap-2">
                        <p-button label="Edit Profile" icon="pi pi-pencil" (onClick)="editProfile()" />
                        <p-button label="Back" icon="pi pi-arrow-left" severity="secondary" (onClick)="goBack()" />
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
        private assetService: AssetService
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

    editProfile() {
        this.router.navigate(['/app/account']);
    }

    goBack() {
        this.router.navigate(['/app/dashboard']);
    }
}
