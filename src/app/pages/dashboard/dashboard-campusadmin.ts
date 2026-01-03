import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-dashboard-campusadmin',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Total Departments Card -->
                <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Departments</p>
                            <h3 class="text-4xl font-bold text-primary dark:text-primary mt-2">{{ departmentCount }}</h3>
                        </div>
                        <div class="bg-primary bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                            <i class="pi pi-sitemap text-2xl text-primary"></i>
                        </div>
                    </div>
                </div>

                <!-- Total Users Card -->
                <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Users</p>
                            <h3 class="text-4xl font-bold text-green-600 dark:text-green-500 mt-2">{{ userCount }}</h3>
                        </div>
                        <div class="bg-green-500 bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                            <i class="pi pi-users text-2xl text-green-600 dark:text-green-500"></i>
                        </div>
                    </div>
                </div>

                <!-- Total Laboratories Card -->
                <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Laboratories</p>
                            <h3 class="text-4xl font-bold text-blue-600 dark:text-blue-500 mt-2">{{ laboratoryCount }}</h3>
                        </div>
                        <div class="bg-blue-500 bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                            <i class="pi pi-desktop text-2xl text-blue-600 dark:text-blue-500"></i>
                        </div>
                    </div>
                </div>

                <!-- Total Assets Card -->
                <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Assets</p>
                            <h3 class="text-4xl font-bold text-orange-600 dark:text-orange-500 mt-2">{{ assetCount }}</h3>
                        </div>
                        <div class="bg-orange-500 bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                            <i class="pi pi-box text-2xl text-orange-600 dark:text-orange-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `
    ]
})
export class DashboardCampusAdmin implements OnInit {
    departmentCount: number = 0;
    userCount: number = 0;
    laboratoryCount: number = 0;
    assetCount: number = 0;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadDepartmentCount();
        this.loadUserCount();
        this.loadLaboratoryCount();
        this.loadAssetCount();
    }

    loadDepartmentCount() {
        const apiUrl = `${environment.apiUrl}/departments/count`;
        this.http.get<number>(apiUrl).subscribe({
            next: (data) => {
                this.departmentCount = data;
                console.log('Department Count:', this.departmentCount);
            },
            error: (error) => {
                console.error('Error loading department count:', error);
            }
        });
    }

    loadUserCount() {
        // Dummy data for now - will replace with API endpoint later
        this.userCount = 45;
        console.log('User Count (dummy):', this.userCount);
    }

    loadLaboratoryCount() {
        // Dummy data for now - will replace with API endpoint later
        this.laboratoryCount = 8;
        console.log('Laboratory Count (dummy):', this.laboratoryCount);
    }

    loadAssetCount() {
        // Dummy data for now - will replace with API endpoint later
        this.assetCount = 234;
        console.log('Asset Count (dummy):', this.assetCount);
    }
}
