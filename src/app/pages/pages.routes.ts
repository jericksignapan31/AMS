import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { CustodianComponent } from './custodian/custodian';
import { RequestmaintenanceComponent } from './requestmaintenance/requestmaintenance/requestmaintenance.component';


export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'custodian', component: CustodianComponent },
    { path: 'requestmaintenance', component: RequestmaintenanceComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
