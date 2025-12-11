import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MaintenanceService } from '../../service/maintenance.service';

@Component({
    selector: 'app-maintenance-summary-widget',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, RouterModule],
    template: `
        <div class="col-span-12 lg:col-span-4">
            <p-card class="h-full">
                <ng-template #header>
                    <div class="flex items-center justify-between p-4 border-b">
                        <h3 class="text-lg font-bold">Maintenance</h3>
                        <i class="pi pi-wrench text-3xl text-orange-500"></i>
                    </div>
                </ng-template>

                <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600">Pending</p>
                            <p class="text-3xl font-bold text-yellow-600">{{ pendingRequests }}</p>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600">Completed</p>
                            <p class="text-3xl font-bold text-purple-600">{{ completedRequests }}</p>
                        </div>
                    </div>

                    <div class="bg-linear-to-r from-orange-500 to-orange-600 p-4 rounded-lg text-white">
                        <p class="text-sm opacity-90">Total Requests</p>
                        <p class="text-3xl font-bold">{{ totalRequests }}</p>
                    </div>

                    <p-button label="View Maintenance Report" routerLink="/reports/maintenance" icon="pi pi-arrow-right" iconPos="right" class="w-full" severity="warn" />
                </div>
            </p-card>
        </div>
    `,
    providers: [MessageService]
})
export class MaintenanceSummaryWidget implements OnInit {
    totalRequests = 0;
    pendingRequests = 0;
    completedRequests = 0;

    constructor(private maintenanceService: MaintenanceService) {}

    ngOnInit() {
        this.loadMaintenanceData();
    }

    loadMaintenanceData() {
        this.maintenanceService.getMaintenanceRequests().subscribe({
            next: (data: any[]) => {
                this.totalRequests = data.length;
                this.pendingRequests = data.filter((r: any) => (r.requestStatusName || 'Pending') === 'Pending').length;
                this.completedRequests = data.filter((r: any) => r.requestStatusName === 'Completed').length;
                console.log('✅ Maintenance Summary loaded');
            },
            error: (err: any) => {
                console.error('❌ Error loading maintenance requests:', err);
            }
        });
    }
}
