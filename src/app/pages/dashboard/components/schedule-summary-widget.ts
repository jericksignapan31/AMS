import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-schedule-summary-widget',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, RouterModule],
    template: `
        <div class="col-span-12 lg:col-span-4">
            <p-card class="h-full">
                <ng-template #header>
                    <div class="flex items-center justify-between p-4 border-b">
                        <h3 class="text-lg font-bold">Lab Schedules</h3>
                        <i class="pi pi-calendar text-3xl text-green-500"></i>
                    </div>
                </ng-template>

                <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-green-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600">Total Schedules</p>
                            <p class="text-3xl font-bold text-green-600">{{ totalSchedules }}</p>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600">Laboratories</p>
                            <p class="text-3xl font-bold text-blue-600">{{ labCount }}</p>
                        </div>
                    </div>

                    <div class="bg-linear-to-r from-green-500 to-green-600 p-4 rounded-lg text-white">
                        <p class="text-sm opacity-90">Instructors</p>
                        <p class="text-3xl font-bold">{{ instructorCount }}</p>
                    </div>

                    <p-button label="View Schedule Report" routerLink="/reports/schedule" icon="pi pi-arrow-right" iconPos="right" class="w-full" severity="success" />
                </div>
            </p-card>
        </div>
    `,
    providers: [MessageService]
})
export class ScheduleSummaryWidget implements OnInit {
    totalSchedules = 0;
    labCount = 0;
    instructorCount = 0;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadScheduleData();
    }

    loadScheduleData() {
        this.http.get<any[]>(`${environment.apiUrl}/schedules`).subscribe({
            next: (data: any[]) => {
                this.totalSchedules = data.length;
                this.labCount = new Set(data.map((s: any) => s.laboratoryId)).size;
                this.instructorCount = new Set(data.map((s: any) => s.instructorId)).size;
                console.log('✅ Schedule Summary loaded');
            },
            error: (err: any) => {
                console.error('❌ Error loading schedules:', err);
            }
        });
    }
}
