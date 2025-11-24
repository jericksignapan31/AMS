import { Login } from './app/pages/auth/login';
import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { AuthGuard } from './app/pages/auth/auth.guard';
import { AssetsComponent } from './app/pages/assets/assets';
import { RequestmaintenanceComponent } from './app/pages/requestmaintenance/requestmaintenance/requestmaintenance.component';
import { ProfileComponent } from './app/pages/profile/profile';
import { AccountComponent } from './app/pages/account/account';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    {
        path: 'app',
        component: AppLayout,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard },
            { path: 'crud', component: AssetsComponent },
            { path: 'requestmaintenance', component: RequestmaintenanceComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'account', component: AccountComponent },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
