import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard-superadmin',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <h1 class="text-3xl font-bold">Dashboard for SuperAdmin</h1>
        </div>
    `
})
export class DashboardSuperAdmin {}
