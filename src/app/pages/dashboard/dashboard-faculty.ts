import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UIChart } from 'primeng/chart';

@Component({
    selector: 'app-dashboard-faculty',
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
                                <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Submitted Requests</p>
                                <h3 class="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-2">{{ totalSubmitted }}</h3>
                            </div>
                            <div class="bg-blue-500 bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                                <i class="pi pi-send text-2xl text-blue-600 dark:text-blue-400"></i>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Pending Requests</p>
                                <h3 class="text-4xl font-bold text-amber-600 dark:text-amber-400 mt-2">{{ pendingCount }}</h3>
                            </div>
                            <div class="bg-amber-500 bg-opacity-10 dark:bg-opacity-20 p-4 rounded-full">
                                <i class="pi pi-clock text-2xl text-amber-600 dark:text-amber-400"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right column: donut chart -->
                <div class="w-full md:w-1/2 bg-white dark:bg-surface-800 rounded-lg shadow-md p-6 h-82 flex flex-col items-center justify-start relative pt-8">
                    <h3 class="text-xl font-semibold dark:text-white absolute top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">Requests by Status</h3>
                    <div class="w-72 h-72">
                        <p-chart type="doughnut" [data]="statusChartData" [options]="donutOptions"></p-chart>
                    </div>
                </div>
            </div>

            <!-- Lab Schedule Section -->
            <div class="flex flex-col md:flex-row gap-6 mt-6">
                <!-- Today's Schedule -->
                <div class="w-full md:w-1/2 bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-semibold mb-4 dark:text-white">Today's Schedule</h3>
                    <div class="space-y-3">
                        <div *ngFor="let schedule of todaySchedules" class="border-l-4 border-blue-500 pl-4 py-2 dark:border-blue-400">
                            <div class="font-semibold dark:text-white">{{ schedule.subject }}</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">{{ schedule.time }}</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">{{ schedule.laboratory }} • {{ schedule.students }} students</div>
                        </div>
                    </div>
                </div>

                <!-- Upcoming Schedules -->
                <div class="w-full md:w-1/2 bg-white dark:bg-surface-800 rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-semibold mb-4 dark:text-white">Upcoming Schedules</h3>
                    <div class="space-y-3 max-h-80 overflow-y-auto">
                        <div *ngFor="let schedule of upcomingSchedules" class="border-l-4 border-green-500 pl-4 py-2 dark:border-green-400">
                            <div class="font-semibold dark:text-white">{{ schedule.subject }}</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">{{ schedule.date }} @ {{ schedule.time }}</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">{{ schedule.laboratory }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class DashboardFaculty implements OnInit {
    totalSubmitted: number = 0;
    pendingCount: number = 0;
    statusChartData: any;
    donutOptions: any;
    todaySchedules: any[] = [];
    upcomingSchedules: any[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadTotalSubmitted();
        this.loadPending();
        this.loadByStatus();
        this.initDonutOptions();
        this.initMockScheduleData();
    }

    loadTotalSubmitted() {
        const apiUrl = 'http://localhost:3000/api/maintenance-requests/count-total-submitted';
        this.http.get<number>(apiUrl).subscribe({
            next: (count) => (this.totalSubmitted = count || 0),
            error: (error) => console.error('Error loading total submitted:', error)
        });
    }

    loadPending() {
        const apiUrl = 'http://localhost:3000/api/maintenance-requests/count-pending';
        this.http.get<number>(apiUrl).subscribe({
            next: (count) => (this.pendingCount = count || 0),
            error: (error) => console.error('Error loading pending count:', error)
        });
    }

    loadByStatus() {
        const apiUrl = 'http://localhost:3000/api/maintenance-requests/count-by-status';
        this.http.get<any[]>(apiUrl).subscribe({
            next: (data) => {
                const labels = data.map((item) => item.status || 'Unknown');
                const counts = data.map((item) => item.count || 0);
                const colors = this.generateColors(labels.length);

                this.statusChartData = {
                    labels,
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
            error: (error) => console.error('Error loading status counts:', error)
        });
    }

    initDonutOptions() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.donutOptions = {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: textColor,
                        usePointStyle: true,
                        padding: 16,
                        font: { size: 12 }
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

    generateColors(count: number): Array<{ bg: string; border: string }> {
        const palette = [
            { bg: 'rgba(59, 130, 246, 0.7)', border: 'rgb(59, 130, 246)' },
            { bg: 'rgba(34, 197, 94, 0.7)', border: 'rgb(34, 197, 94)' },
            { bg: 'rgba(239, 68, 68, 0.7)', border: 'rgb(239, 68, 68)' },
            { bg: 'rgba(250, 204, 21, 0.7)', border: 'rgb(250, 204, 21)' },
            { bg: 'rgba(168, 85, 247, 0.7)', border: 'rgb(168, 85, 247)' },
            { bg: 'rgba(14, 165, 233, 0.7)', border: 'rgb(14, 165, 233)' },
            { bg: 'rgba(236, 72, 153, 0.7)', border: 'rgb(236, 72, 153)' },
            { bg: 'rgba(6, 182, 212, 0.7)', border: 'rgb(6, 182, 212)' },
            { bg: 'rgba(139, 92, 246, 0.7)', border: 'rgb(139, 92, 246)' },
            { bg: 'rgba(245, 158, 11, 0.7)', border: 'rgb(245, 158, 11)' }
        ];

        const colors: Array<{ bg: string; border: string }> = [];
        for (let i = 0; i < count; i++) {
            colors.push(palette[i % palette.length]);
        }
        return colors;
    }

    initMockScheduleData() {
        // Mock Today's Schedule
        this.todaySchedules = [
            {
                time: '08:00 AM - 10:00 AM',
                subject: 'Chemistry Lab',
                laboratory: 'Chem Lab 1',
                students: 25
            },
            {
                time: '10:30 AM - 12:30 PM',
                subject: 'Advanced Physics',
                laboratory: 'Physics Lab 2',
                students: 18
            },
            {
                time: '1:00 PM - 3:00 PM',
                subject: 'Organic Chemistry',
                laboratory: 'Chem Lab 2',
                students: 22
            }
        ];

        // Mock Upcoming Schedules (next 5 sessions)
        this.upcomingSchedules = [
            {
                date: 'Jan 6, 2026',
                time: '09:00 AM',
                subject: 'Biology Lab',
                laboratory: 'Bio Lab 1'
            },
            {
                date: 'Jan 7, 2026',
                time: '10:00 AM',
                subject: 'Physics Lab',
                laboratory: 'Physics Lab 1'
            },
            {
                date: 'Jan 8, 2026',
                time: '2:00 PM',
                subject: 'Chemistry Lab',
                laboratory: 'Chem Lab 1'
            },
            {
                date: 'Jan 9, 2026',
                time: '11:00 AM',
                subject: 'Advanced Physics',
                laboratory: 'Physics Lab 2'
            },
            {
                date: 'Jan 10, 2026',
                time: '3:00 PM',
                subject: 'Organic Chemistry',
                laboratory: 'Chem Lab 2'
            }
        ];
    }
}
