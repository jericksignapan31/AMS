import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { CustodianComponent } from './custodian/custodian';
import { RequestmaintenanceComponent } from './requestmaintenance/requestmaintenance/requestmaintenance.component';
import { UsersComponent } from './users/users';
import { CampusesComponent } from './campuses/campuses';

export const pageRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'campuses', component: CampusesComponent },
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'custodian', component: CustodianComponent },
    { path: 'requestmaintenance', component: RequestmaintenanceComponent },
    { path: '**', redirectTo: '/notfound' }
];

export default pageRoutes;
