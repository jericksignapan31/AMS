import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { AssetService } from '../service/asset.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, InputTextModule],
    template: `
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <h5>User Profile</h5>
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
        this.router.navigate(['/account']);
    }

    goBack() {
        this.router.navigate(['/dashboard']);
    }
}
