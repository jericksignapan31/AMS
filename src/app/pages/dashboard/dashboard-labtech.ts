import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UIChart } from 'primeng/chart';

@Component({
    selector: 'app-dashboard-labtech',
    standalone: true,
    imports: [CommonModule, UIChart],
    template: `
        <div class="p-6">
            <div class="flex flex-col md:flex-row gap-6">
                <!-- Left column: stacked cards -->
                <div class="w-full md:w-1/2 flex flex-col gap-6">
                    <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Overdue Approvals</p>
                                <h3 class="text-4xl font-bold text-red-600 dark:text-red-400 mt-2">{{ overdueApprovalsCount }}</h3>
                            </div>
                            <div class="bg-red-500 bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                                <i class="pi pi-clock text-2xl text-red-600 dark:text-red-400"></i>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Requests For Approval</p>
                                <h3 class="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-2">{{ requestsForApprovalCount }}</h3>
                            </div>
                            <div class="bg-blue-500 bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                                <i class="pi pi-check-square text-2xl text-blue-600 dark:text-blue-400"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right column: donut chart -->
                <div class="w-full md:w-1/2 bg-white dark:bg-surface-800 rounded-lg shadow-md p-6 h-82 flex flex-col items-center justify-start relative pt-10">
                    <h4 class="text-lg font-semibold dark:text-white absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">Requests by Service Type</h4>
                    <div class="w-85 h-85">
                        <p-chart type="doughnut" [data]="serviceTypeChartData" [options]="donutChartOptions"></p-chart>
                    </div>
                </div>
            </div>
            <!-- Bottom charts row -->
            <div class="flex flex-col md:flex-row gap-6 mt-6">
                <div class="w-full md:w-1/2 bg-white dark:bg-surface-800 rounded-lg shadow-md p-6 h-96">
                    <h3 class="text-xl font-semibold mb-4 dark:text-white">Assets by Supplier</h3>
                    <p-chart type="bar" [data]="assetsBySupplierChartData" [options]="barChartOptions"></p-chart>
                </div>

                <div class="w-full md:w-1/2 bg-white dark:bg-surface-800 rounded-lg shadow-md p-6 h-96">
                    <h3 class="text-xl font-semibold mb-4 dark:text-white">Assets by Brand</h3>
                    <p-chart type="bar" [data]="assetsByBrandChartData" [options]="horizontalChartOptions"></p-chart>
                </div>
            </div>

            <!-- Lab schedule mock charts row -->
            <div class="flex flex-col md:flex-row gap-6 mt-6">
                <div class="w-full md:w-1/2 bg-white dark:bg-surface-800 rounded-lg shadow-md p-6 h-96">
                    <h3 class="text-xl font-semibold mb-4 dark:text-white">Schedules by Day (Mock)</h3>
                    <p-chart type="bar" [data]="scheduleByDayChartData" [options]="barChartOptions"></p-chart>
                </div>

                <div class="w-full md:w-1/2 bg-white dark:bg-surface-800 rounded-lg shadow-md p-6 h-96">
                    <h3 class="text-xl font-semibold mb-4 dark:text-white">Schedules by Laboratory (Mock)</h3>
                    <p-chart type="bar" [data]="scheduleByLabChartData" [options]="horizontalChartOptions"></p-chart>
                </div>
            </div>
        </div>
    `
})
export class DashboardLabTech implements OnInit {
    overdueApprovalsCount: number = 0;
    requestsForApprovalCount: number = 0;
    serviceTypeChartData: any;
    donutChartOptions: any;
    assetsBySupplierChartData: any;
    assetsByBrandChartData: any;
    barChartOptions: any;
    horizontalChartOptions: any;
    scheduleByDayChartData: any;
    scheduleByLabChartData: any;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadOverdueApprovalsCount();
        this.loadRequestsForApprovalCount();
        this.loadServiceTypeData();
        this.initDonutOptions();
        this.loadAssetsBySupplier();
        this.loadAssetsByBrand();
        this.initBarOptions();
        this.initHorizontalBarOptions();
        this.initMockScheduleCharts();
    }

    loadOverdueApprovalsCount() {
        const apiUrl = `${environment.apiUrl}/maintenance-approvals/count-overdue`;
        this.http.get<number>(apiUrl).subscribe({
            next: (count) => {
                this.overdueApprovalsCount = count;
            },
            error: (error) => {
                console.error('Error loading overdue approvals count:', error);
            }
        });
    }

    loadRequestsForApprovalCount() {
        const apiUrl = `${environment.apiUrl}/maintenance-requests/count-for-approval`;
        this.http.get<number>(apiUrl).subscribe({
            next: (count) => {
                this.requestsForApprovalCount = count;
            },
            error: (error) => {
                console.error('Error loading requests for approval count:', error);
            }
        });
    }

    loadServiceTypeData() {
        const apiUrl = `${environment.apiUrl}/maintenance-requests/by-service-type`;
        this.http.get<any[]>(apiUrl).subscribe({
            next: (data) => {
                console.log('Service type data:', data);
                const labels = data.map((item) => item.serviceName || item.serviceType || 'Unknown');
                const counts = data.map((item) => item.count || 0);
                const colors = this.generateColors(labels.length);

                this.serviceTypeChartData = {
                    labels: labels,
                    datasets: [
                        {
                            data: counts,
                            backgroundColor: colors.map((c) => c.bg),
                            borderColor: colors.map((c) => c.border),
                            borderWidth: 1
                        }
                    ]
                };
            },
            error: (error) => {
                console.error('Error loading service type data:', error);
            }
        });
    }

    loadAssetsBySupplier() {
        const apiUrl = `${environment.apiUrl}/assets/by-supplier`;
        this.http.get<any[]>(apiUrl).subscribe({
            next: (data) => {
                console.log('Assets by supplier:', data);
                const labels = data.map((item) => item.supplierName || item.supplier || 'Unknown');
                const counts = data.map((item) => item.count || item.assetCount || 0);
                const colors = this.generateColors(labels.length);

                this.assetsBySupplierChartData = {
                    labels,
                    datasets: [
                        {
                            label: 'Assets',
                            data: counts,
                            backgroundColor: colors.map((c) => c.bg),
                            borderColor: colors.map((c) => c.border),
                            borderWidth: 1
                        }
                    ]
                };
            },
            error: (error) => {
                console.error('Error loading assets by supplier:', error);
            }
        });
    }

    loadAssetsByBrand() {
        const apiUrl = `${environment.apiUrl}/assets/by-brand`;
        this.http.get<any[]>(apiUrl).subscribe({
            next: (data) => {
                console.log('Assets by brand:', data);
                const labels = data.map((item) => item.brandName || item.brand || 'Unknown');
                const counts = data.map((item) => item.count || item.assetCount || 0);
                const colors = this.generateColors(labels.length);

                this.assetsByBrandChartData = {
                    labels,
                    datasets: [
                        {
                            label: 'Assets',
                            data: counts,
                            backgroundColor: colors.map((c) => c.bg),
                            borderColor: colors.map((c) => c.border),
                            borderWidth: 1
                        }
                    ]
                };
            },
            error: (error) => {
                console.error('Error loading assets by brand:', error);
            }
        });
    }

    initDonutOptions() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.donutChartOptions = {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: textColor,
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context: any) {
                            return `${context.label}: ${context.parsed}`;
                        }
                    }
                }
            }
        };
    }

    initBarOptions() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.barChartOptions = {
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: { weight: 500 }
                    },
                    grid: { display: false, drawBorder: false }
                },
                y: {
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false }
                }
            }
        };
    }

    initHorizontalBarOptions() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.horizontalChartOptions = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: { weight: 500 }
                    },
                    grid: { color: surfaceBorder, drawBorder: false }
                },
                y: {
                    ticks: { color: textColorSecondary },
                    grid: { display: false, drawBorder: false }
                }
            }
        };
    }

    initMockScheduleCharts() {
        const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayCounts = [6, 8, 7, 5, 9, 3];
        const dayColors = this.generateColors(dayLabels.length);

        this.scheduleByDayChartData = {
            labels: dayLabels,
            datasets: [
                {
                    label: 'Schedules',
                    data: dayCounts,
                    backgroundColor: dayColors.map((c) => c.bg),
                    borderColor: dayColors.map((c) => c.border),
                    borderWidth: 1
                }
            ]
        };

        const labLabels = ['Chem Lab', 'Physics Lab', 'CS Lab', 'Bio Lab'];
        const labCounts = [10, 7, 12, 5];
        const labColors = this.generateColors(labLabels.length);

        this.scheduleByLabChartData = {
            labels: labLabels,
            datasets: [
                {
                    label: 'Schedules',
                    data: labCounts,
                    backgroundColor: labColors.map((c) => c.bg),
                    borderColor: labColors.map((c) => c.border),
                    borderWidth: 1
                }
            ]
        };
    }

    generateColors(count: number): Array<{ bg: string; border: string }> {
        const palette = [
            { bg: 'rgba(59, 130, 246, 0.7)', border: 'rgb(59, 130, 246)' }, // Blue
            { bg: 'rgba(34, 197, 94, 0.7)', border: 'rgb(34, 197, 94)' }, // Green
            { bg: 'rgba(239, 68, 68, 0.7)', border: 'rgb(239, 68, 68)' }, // Red
            { bg: 'rgba(250, 204, 21, 0.7)', border: 'rgb(250, 204, 21)' }, // Amber
            { bg: 'rgba(168, 85, 247, 0.7)', border: 'rgb(168, 85, 247)' }, // Purple
            { bg: 'rgba(14, 165, 233, 0.7)', border: 'rgb(14, 165, 233)' }, // Sky
            { bg: 'rgba(236, 72, 153, 0.7)', border: 'rgb(236, 72, 153)' }, // Pink
            { bg: 'rgba(6, 182, 212, 0.7)', border: 'rgb(6, 182, 212)' }, // Cyan
            { bg: 'rgba(139, 92, 246, 0.7)', border: 'rgb(139, 92, 246)' }, // Violet
            { bg: 'rgba(245, 158, 11, 0.7)', border: 'rgb(245, 158, 11)' } // Gold
        ];

        const colors: Array<{ bg: string; border: string }> = [];
        for (let i = 0; i < count; i++) {
            colors.push(palette[i % palette.length]);
        }
        return colors;
    }
}
