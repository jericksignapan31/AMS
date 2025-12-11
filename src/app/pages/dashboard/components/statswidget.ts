import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../service/asset.service';
import { MaintenanceService } from '../../service/maintenance.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
    template: `<div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Total Assets</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ totalAssets }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-box text-blue-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">{{ activeAssets }} </span>
                <span class="text-muted-color">active assets</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Maintenance Requests</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ totalMaintenance }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-wrench text-orange-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">{{ pendingMaintenance }}+ </span>
                <span class="text-muted-color">pending requests</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Lab Schedules</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ totalSchedules }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-calendar text-cyan-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">{{ labCount }} </span>
                <span class="text-muted-color">laboratories</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Asset Categories</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ assetCategories }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-list text-purple-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">{{ completedMaintenance }} </span>
                <span class="text-muted-color">maintenance completed</span>
            </div>
        </div>`
})
export class StatsWidget implements OnInit {
    totalAssets = 0;
    activeAssets = 0;
    assetCategories = 0;
    totalMaintenance = 0;
    pendingMaintenance = 0;
    completedMaintenance = 0;
    totalSchedules = 0;
    labCount = 0;

    constructor(
        private assetService: AssetService,
        private maintenanceService: MaintenanceService,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.loadAssetData();
        this.loadMaintenanceData();
        this.loadScheduleData();
    }

    loadAssetData() {
        this.assetService.getAssets().subscribe({
            next: (data: any[]) => {
                this.totalAssets = data.length;
                this.activeAssets = data.filter((a: any) => a.Status_id === '1').length;
                this.assetCategories = new Set(data.map((a: any) => a.category || a.Category)).size;
            },
            error: (err: any) => console.error('Error loading assets:', err)
        });
    }

    loadMaintenanceData() {
        this.maintenanceService.getMaintenanceRequests().subscribe({
            next: (data: any[]) => {
                this.totalMaintenance = data.length;
                this.pendingMaintenance = data.filter((r: any) => (r.requestStatusName || 'Pending') === 'Pending').length;
                this.completedMaintenance = data.filter((r: any) => r.requestStatusName === 'Completed').length;
            },
            error: (err: any) => console.error('Error loading maintenance:', err)
        });
    }

    loadScheduleData() {
        this.http.get<any[]>(`${environment.apiUrl}/schedules`).subscribe({
            next: (data: any[]) => {
                this.totalSchedules = data.length;
                this.labCount = new Set(data.map((s: any) => s.laboratoryId)).size;
            },
            error: (err: any) => console.error('Error loading schedules:', err)
        });
    }
}
