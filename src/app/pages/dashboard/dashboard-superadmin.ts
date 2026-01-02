import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-dashboard-superadmin',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Total Campuses Card -->
                <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Campuses</p>
                            <h3 class="text-4xl font-bold text-primary dark:text-primary mt-2">{{ campusCount }}</h3>
                        </div>
                        <div class="bg-primary bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                            <i class="pi pi-building text-2xl text-primary"></i>
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

                <!-- Total Assets Card -->
                <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Assets</p>
                            <h3 class="text-4xl font-bold text-blue-600 dark:text-blue-500 mt-2">{{ assetCount }}</h3>
                        </div>
                        <div class="bg-blue-500 bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                            <i class="pi pi-box text-2xl text-blue-600 dark:text-blue-500"></i>
                        </div>
                    </div>
                </div>

                <!-- Total Laboratories Card -->
                <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Laboratories</p>
                            <h3 class="text-4xl font-bold text-orange-600 dark:text-orange-500 mt-2">{{ laboratoryCount }}</h3>
                        </div>
                        <div class="bg-orange-500 bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                            <i class="pi pi-desktop text-2xl text-orange-600 dark:text-orange-500"></i>
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
export class DashboardSuperAdmin implements OnInit {
    campusCount: number = 0;
    userCount: number = 0;
    assetCount: number = 0;
    laboratoryCount: number = 0;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadCampusCount();
        this.loadUserCount();
        this.loadAssetCount();
        this.loadLaboratoryCount();
    }

    loadCampusCount() {
        const apiUrl = `${environment.apiUrl}/campuses/count/all`;
        this.http.get<number>(apiUrl).subscribe({
            next: (data) => {
                this.campusCount = data;
                console.log('Campus Count:', this.campusCount);
            },
            error: (error) => {
                console.error('Error loading campus count:', error);
            }
        });
    }

    loadUserCount() {
        const apiUrl = `${environment.apiUrl}/users/count/all`;
        this.http.get<number>(apiUrl).subscribe({
            next: (data) => {
                this.userCount = data;
                console.log('User Count:', this.userCount);
            },
            error: (error) => {
                console.error('Error loading user count:', error);
            }
        });
    }

    loadAssetCount() {
        const apiUrl = `${environment.apiUrl}/assets/count/all`;
        this.http.get<number>(apiUrl).subscribe({
            next: (data) => {
                this.assetCount = data;
                console.log('Asset Count:', this.assetCount);
            },
            error: (error) => {
                console.error('Error loading asset count:', error);
            }
        });
    }

    loadLaboratoryCount() {
        const apiUrl = `${environment.apiUrl}/laboratories/count/all`;
        this.http.get<number>(apiUrl).subscribe({
            next: (data) => {
                this.laboratoryCount = data;
                console.log('Laboratory Count:', this.laboratoryCount);
            },
            error: (error) => {
                console.error('Error loading laboratory count:', error);
            }
        });
    }
}
