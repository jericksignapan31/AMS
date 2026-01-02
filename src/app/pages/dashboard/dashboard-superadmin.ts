import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-dashboard-superadmin',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <h1 class="text-3xl font-bold mb-8">Dashboard for SuperAdmin</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Total Campuses Card -->
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm font-medium">Total Campuses</p>
                            <h3 class="text-4xl font-bold text-primary mt-2">{{ campusCount }}</h3>
                        </div>
                        <div class="bg-primary bg-opacity-10 p-4 rounded-full">
                            <i class="pi pi-building text-2xl text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `
    ]
})
export class DashboardSuperAdmin implements OnInit {
    campusCount: number = 0;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadCampusCount();
    }

    loadCampusCount() {
        const apiUrl = `${environment.apiUrl}/campuses/count/all`;
        this.http.get<number>(apiUrl).subscribe({
            next: (data) => {
                this.campusCount = data;
                console.log('Campus Count:', this.campusCount);
            },
            error: (error) => {
                console.error('Error loading campus count:', error);
            }
        });
    }
}
