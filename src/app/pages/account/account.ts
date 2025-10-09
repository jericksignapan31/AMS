import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { AssetService } from '../service/asset.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-account',
    standalone: true,
    imports: [CommonModule, FormsModule, CardModule, ButtonModule, InputTextModule, PasswordModule],
    template: `
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <h5>Account Settings</h5>
                    <div class="grid formgrid p-fluid" *ngIf="currentUser">
                        <div class="field col-12 md:col-6">
                            <label for="firstName">First Name</label>
                            <input pInputText id="firstName" type="text" [(ngModel)]="currentUser.FirstName" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="lastName">Last Name</label>
                            <input pInputText id="lastName" type="text" [(ngModel)]="currentUser.LastName" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="email">Email</label>
                            <input pInputText id="email" type="email" [(ngModel)]="currentUser.email" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="mobileNo">Mobile Number</label>
                            <input pInputText id="mobileNo" type="text" [(ngModel)]="currentUser.MobileNo" />
                        </div>
                        <div class="field col-12">
                            <label for="currentPassword">Current Password</label>
                            <p-password id="currentPassword" [(ngModel)]="currentPassword" [feedback]="false" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="newPassword">New Password</label>
                            <p-password id="newPassword" [(ngModel)]="newPassword" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="confirmPassword">Confirm New Password</label>
                            <p-password id="confirmPassword" [(ngModel)]="confirmPassword" [feedback]="false" />
                        </div>
                    </div>

                    <div class="flex gap-2">
                        <p-button label="Save Changes" icon="pi pi-check" (onClick)="saveChanges()" />
                        <p-button label="Cancel" icon="pi pi-times" severity="secondary" (onClick)="cancel()" />
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AccountComponent implements OnInit {
    currentUser: any = null;
    currentPassword: string = '';
    newPassword: string = '';
    confirmPassword: string = '';

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
        } else {
            this.router.navigate(['/login']);
        }
    }

    saveChanges() {
        if (this.newPassword && this.newPassword !== this.confirmPassword) {
            Swal.fire({
                title: 'Password Mismatch',
                text: 'New password and confirm password do not match.',
                icon: 'error'
            });
            return;
        }

        // Validate current password (in real app, this would be validated on server)
        if (this.newPassword && !this.currentPassword) {
            Swal.fire({
                title: 'Current Password Required',
                text: 'Please enter your current password to change it.',
                icon: 'warning'
            });
            return;
        }

        // Update password if provided
        if (this.newPassword) {
            this.currentUser.password = this.newPassword;
        }

        // Save to localStorage (in real app, this would be API call)
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

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

    cancel() {
        this.router.navigate(['/app/profile']);
    }
}
