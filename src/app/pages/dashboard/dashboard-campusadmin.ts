import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard-campusadmin',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <h1 class="text-3xl font-bold">Dashboard for CampusAdmin</h1>
        </div>
    `
})
export class DashboardCampusAdmin {}
