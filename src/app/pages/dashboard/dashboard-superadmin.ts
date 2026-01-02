import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UIChart } from 'primeng/chart';

@Component({
    selector: 'app-dashboard-superadmin',
    standalone: true,
    imports: [CommonModule, UIChart],
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

            <!-- Assets by Campus Chart -->
            <div class="mt-6">
                <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6" style="width: 50%;">
                    <h3 class="text-xl font-semibold mb-4 dark:text-white">Assets by Campus</h3>
                    <p-chart type="bar" [data]="assetsByCampusChartData" [options]="chartOptions"></p-chart>
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
    assetsByCampusChartData: any;
    chartOptions: any;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadCampusCount();
        this.loadUserCount();
        this.loadAssetCount();
        this.loadLaboratoryCount();
        this.loadAssetsByCampus();
        this.initChartOptions();
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

    loadAssetsByCampus() {
        const apiUrl = `${environment.apiUrl}/campuses/count/assets/by-campus`;
        this.http.get<any[]>(apiUrl).subscribe({
            next: (data) => {
                console.log('Assets by Campus:', data);
                const labels = data.map((item) => item.campusName || item.campus);
                const counts = data.map((item) => item.assetCount || item.count);

                this.assetsByCampusChartData = {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Assets Count',
                            data: counts,
                            backgroundColor: 'rgba(59, 130, 246, 0.6)',
                            borderColor: 'rgb(59, 130, 246)',
                            borderWidth: 1
                        }
                    ]
                };
            },
            error: (error) => {
                console.error('Error loading assets by campus:', error);
            }
        });
    }

    initChartOptions() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}
