import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard-faculty',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <h1 class="text-3xl font-bold">Dashboard for Faculty</h1>
        </div>
    `
})
export class DashboardFaculty {}
