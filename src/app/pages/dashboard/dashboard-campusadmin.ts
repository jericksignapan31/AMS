import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UIChart } from 'primeng/chart';

@Component({
    selector: 'app-dashboard-campusadmin',
    standalone: true,
    imports: [CommonModule, UIChart],
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

            <!-- Assets by Laboratory Chart -->
            <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6 mt-6 w-1/2">
                <h3 class="text-xl font-semibold mb-4 dark:text-white">Assets by Laboratory</h3>
                <p-chart type="bar" [data]="assetsByLaboratoryChartData" [options]="chartOptions"></p-chart>
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
    assetsByLaboratoryChartData: any;
    chartOptions: any;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadDepartmentCount();
        this.loadUserCount();
        this.loadLaboratoryCount();
        this.loadAssetCount();
        this.loadAssetsByLaboratory();
        this.initChartOptions();
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
        const apiUrl = `${environment.apiUrl}/users/count/by-campus`;
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

    loadLaboratoryCount() {
        const apiUrl = `${environment.apiUrl}/laboratories/count/by-campus`;
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

    loadAssetCount() {
        const apiUrl = `${environment.apiUrl}/assets/count/by-campus`;
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

    loadAssetsByLaboratory() {
        const apiUrl = `${environment.apiUrl}/assets/assets-by-laboratory`;
        this.http.get<any[]>(apiUrl).subscribe({
            next: (data) => {
                console.log('Assets by Laboratory:', data);
                const labels = data.map((item) => item.laboratoryName);
                const counts = data.map((item) => item.assetCount);
                const colors = this.generateColors(data.length);

                this.assetsByLaboratoryChartData = {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Assets Count',
                            data: counts,
                            backgroundColor: colors.map((c) => c.bg),
                            borderColor: colors.map((c) => c.border),
                            borderWidth: 1
                        }
                    ]
                };
            },
            error: (error) => {
                console.error('Error loading assets by laboratory:', error);
            }
        });
    }

    generateColors(count: number): Array<{ bg: string; border: string }> {
        const colorPalette = [
            { bg: 'rgba(59, 130, 246, 0.6)', border: 'rgb(59, 130, 246)' }, // Blue
            { bg: 'rgba(34, 197, 94, 0.6)', border: 'rgb(34, 197, 94)' }, // Green
            { bg: 'rgba(239, 68, 68, 0.6)', border: 'rgb(239, 68, 68)' }, // Red
            { bg: 'rgba(168, 85, 247, 0.6)', border: 'rgb(168, 85, 247)' }, // Purple
            { bg: 'rgba(249, 115, 22, 0.6)', border: 'rgb(249, 115, 22)' }, // Orange
            { bg: 'rgba(14, 165, 233, 0.6)', border: 'rgb(14, 165, 233)' }, // Sky
            { bg: 'rgba(236, 72, 153, 0.6)', border: 'rgb(236, 72, 153)' }, // Pink
            { bg: 'rgba(6, 182, 212, 0.6)', border: 'rgb(6, 182, 212)' }, // Cyan
            { bg: 'rgba(139, 92, 246, 0.6)', border: 'rgb(139, 92, 246)' }, // Violet
            { bg: 'rgba(245, 158, 11, 0.6)', border: 'rgb(245, 158, 11)' } // Amber
        ];

        const colors: Array<{ bg: string; border: string }> = [];
        for (let i = 0; i < count; i++) {
            colors.push(colorPalette[i % colorPalette.length]);
        }
        return colors;
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
                    display: false
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
