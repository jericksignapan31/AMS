import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { AssetsComponent } from './assets/assets';
import { Empty } from './empty/empty';
import { RequestmaintenanceComponent } from './requestmaintenance/requestmaintenance/requestmaintenance.component';
import { UsersComponent } from './users/users';
import { CampusesComponent } from './campuses/campuses';
import { DepartmentsComponent } from './departments/departments';
import { ASSET_CATEGORY_ROUTES } from './assetcategory/assetcategory.routes';
import { MaintenanceServicesComponent } from './maintenance/services/services';
import { MaintenanceStatusComponent } from './maintenance/status/maintenance-status';
import { MaintenancePriorityLevelComponent } from './maintenance/priority-level/maintenance-priority-level';
import { MaintenanceTypesComponent } from './maintenance/types/maintenance-types';
import { LabScheduleComponent } from './labschedule/labschedule';
import { LaboratoriesComponent } from './laboratories/laboratories';
import { ReportsComponent } from './reports/reports.component';
import { PreventiveReportComponent } from './reports/preventive-report';
import { CorrectiveReportComponent } from './reports/corrective-report';
import { CalibrationReportComponent } from './reports/calibration-report';
import { MasterPlanComponent } from './masterplan/masterplan';

export const pageRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'campuses', component: CampusesComponent },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'assetcategory', children: ASSET_CATEGORY_ROUTES },
    // Maintenance property pages
    { path: 'maintenance/services', component: MaintenanceServicesComponent },
    { path: 'maintenance/status', component: MaintenanceStatusComponent },
    { path: 'maintenance/priority-level', component: MaintenancePriorityLevelComponent },
    { path: 'maintenance/types', component: MaintenanceTypesComponent },
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: AssetsComponent },
    { path: 'requestmaintenance', component: RequestmaintenanceComponent },
    { path: 'labschedule', component: LabScheduleComponent },
    { path: 'laboratories', component: LaboratoriesComponent },
    { path: 'laboratory/:id', component: LaboratoriesComponent },
    { path: 'masterplan', component: MasterPlanComponent },
    // Reports
    { path: 'reports', component: ReportsComponent },
    { path: 'reports/preventive', component: PreventiveReportComponent },
    { path: 'reports/corrective', component: CorrectiveReportComponent },
    { path: 'reports/calibration', component: CalibrationReportComponent },
    { path: '**', redirectTo: '/notfound' }
];

export default pageRoutes;
