import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSuperAdmin } from './dashboard-superadmin';
import { DashboardCampusAdmin } from './dashboard-campusadmin';
import { DashboardFaculty } from './dashboard-faculty';
import { DashboardStudent } from './dashboard-student';
import { DashboardLabTech } from './dashboard-labtech';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, DashboardSuperAdmin, DashboardCampusAdmin, DashboardFaculty, DashboardStudent, DashboardLabTech],
    template: `
        @if (userRole === 'SuperAdmin') {
            <app-dashboard-superadmin />
        } @else if (userRole === 'CampusAdmin') {
            <app-dashboard-campusadmin />
        } @else if (userRole === 'LabTech') {
            <app-dashboard-labtech />
        } @else if (userRole === 'Faculty') {
            <app-dashboard-faculty />
        } @else if (userRole === 'Student') {
            <app-dashboard-student />
        } @else {
            <div class="p-6">
                <h1 class="text-3xl font-bold">Dashboard</h1>
                <p class="text-gray-600 mt-4">Please contact administrator for access.</p>
            </div>
        }
    `
})
export class Dashboard implements OnInit {
    userRole: string = '';

    ngOnInit() {
        // Get user role from localStorage or auth service
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        this.userRole = user.role || '';
        console.log('User Role:', this.userRole);
        console.log('User Data:', user);
    }
}
