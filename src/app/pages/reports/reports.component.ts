import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { AssetReportComponent } from './asset-report/asset-report';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report';
import { ScheduleReportComponent } from './schedule-report/schedule-report';

@Component({
    selector: 'app-reports',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonModule, TabsModule, CardModule, AssetReportComponent, MaintenanceReportComponent, ScheduleReportComponent],
    template: `
        <div class="mb-6">
            <h1 class="text-3xl font-bold mb-4">Reports & Analytics</h1>
            <p class="text-gray-600">Access comprehensive reports and analytics for asset management, maintenance, and scheduling.</p>
        </div>

        <p-tabs>
            <p-tablist>
                <p-tab value="assets">
                    <ng-template #header>
                        <i class="pi pi-box mr-2"></i>
                        <span>Asset Report</span>
                    </ng-template>
                </p-tab>
                <p-tab value="maintenance">
                    <ng-template #header>
                        <i class="pi pi-wrench mr-2"></i>
                        <span>Maintenance Report</span>
                    </ng-template>
                </p-tab>
                <p-tab value="schedule">
                    <ng-template #header>
                        <i class="pi pi-calendar mr-2"></i>
                        <span>Schedule Report</span>
                    </ng-template>
                </p-tab>
            </p-tablist>
            <p-tabpanels>
                <p-tabpanel value="assets">
                    <app-asset-report />
                </p-tabpanel>
                <p-tabpanel value="maintenance">
                    <app-maintenance-report />
                </p-tabpanel>
                <p-tabpanel value="schedule">
                    <app-schedule-report />
                </p-tabpanel>
            </p-tabpanels>
        </p-tabs>
    `,
    styles: [
        `
            :host {
                display: block;
                padding: 1rem;
            }
        `
    ]
})
export class ReportsComponent {
    constructor(private router: Router) {}
}
