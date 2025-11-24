import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { CustodianComponent } from './custodian/custodian';
import { RequestmaintenanceComponent } from './requestmaintenance/requestmaintenance/requestmaintenance.component';
import { UsersComponent } from './users/users';
import { CampusesComponent } from './campuses/campuses';
import { DepartmentsComponent } from './departments/departments';
import { ASSET_CATEGORY_ROUTES } from './assetcategory/assetcategory.routes';

export const pageRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'campuses', component: CampusesComponent },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'assetcategory', children: ASSET_CATEGORY_ROUTES },
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'custodian', component: CustodianComponent },
    { path: 'requestmaintenance', component: RequestmaintenanceComponent },
    { path: '**', redirectTo: '/notfound' }
];

export default pageRoutes;
