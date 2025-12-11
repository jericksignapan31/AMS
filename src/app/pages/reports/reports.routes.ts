import { Routes } from '@angular/router';
import { AssetReportComponent } from './asset-report/asset-report';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report';
import { ScheduleReportComponent } from './schedule-report/schedule-report';

export const REPORTS_ROUTES: Routes = [
    { path: 'assets', component: AssetReportComponent },
    { path: 'maintenance', component: MaintenanceReportComponent },
    { path: 'schedule', component: ScheduleReportComponent },
    { path: '', redirectTo: 'assets', pathMatch: 'full' }
];
