import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
    selector: 'app-schedule-report',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, TableModule, SelectModule, CardModule, ToastModule, ToolbarModule, DatePickerModule],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <h2 class="text-2xl font-bold">Lab Schedule Report</h2>
            </ng-template>
            <ng-template #end>
                <p-button label="Export to CSV" icon="pi pi-download" severity="success" (onClick)="exportToCSV()" />
                <p-button label="Print" icon="pi pi-print" severity="info" (onClick)="printReport()" class="ml-2" />
            </ng-template>
        </p-toolbar>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-gray-600 text-sm">Total Schedules</p>
                <p class="text-3xl font-bold text-blue-600">{{ schedules.length }}</p>
            </div>
            <div class="p-4 bg-green-50 rounded-lg">
                <p class="text-gray-600 text-sm">Laboratories</p>
                <p class="text-3xl font-bold text-green-600">{{ getLaboratoriesCount() }}</p>
            </div>
            <div class="p-4 bg-orange-50 rounded-lg">
                <p class="text-gray-600 text-sm">Instructors</p>
                <p class="text-3xl font-bold text-orange-600">{{ getInstructorsCount() }}</p>
            </div>
        </div>

        <p-card class="mb-4">
            <ng-template #header>
                <div class="flex gap-4 p-4 flex-wrap">
                    <div class="flex-1 min-w-[200px]">
                        <label class="block text-sm font-medium mb-2">Laboratory Filter</label>
                        <p-select [(ngModel)]="selectedLaboratory" [options]="laboratories" optionLabel="laboratoryName" optionValue="laboratoryId" placeholder="All Laboratories" [showClear]="true" (onChange)="filterSchedules()" />
                    </div>
                    <div class="flex-1 min-w-[200px]">
                        <label class="block text-sm font-medium mb-2">Day Filter</label>
                        <p-select [(ngModel)]="selectedDay" [options]="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'All']" placeholder="All Days" (onChange)="filterSchedules()" />
                    </div>
                    <div class="flex items-end">
                        <p-button label="Clear Filters" icon="pi pi-times" severity="secondary" (onClick)="clearFilters()" />
                    </div>
                </div>
            </ng-template>

            <p-table [value]="filteredSchedules" responsiveLayout="scroll" [paginator]="true" [rows]="15">
                <ng-template #header>
                    <tr>
                        <th pSortableColumn>Laboratory <p-sortIcon field="laboratoryName" /></th>
                        <th pSortableColumn>Day <p-sortIcon field="dayOfWeek" /></th>
                        <th pSortableColumn>Start Time <p-sortIcon field="startTime" /></th>
                        <th pSortableColumn>End Time <p-sortIcon field="endTime" /></th>
                        <th>Instructor</th>
                        <th>Subject</th>
                    </tr>
                </ng-template>
                <ng-template #body let-sched>
                    <tr>
                        <td>{{ sched.laboratoryName || 'N/A' }}</td>
                        <td>{{ formatDay(sched.dayOfWeek) }}</td>
                        <td>{{ sched.startTime || 'N/A' }}</td>
                        <td>{{ sched.endTime || 'N/A' }}</td>
                        <td>{{ sched.instructorName || 'N/A' }}</td>
                        <td>{{ sched.subjectName || 'N/A' }}</td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="6" class="text-center p-4">No schedules found matching the selected filters.</td>
                    </tr>
                </ng-template>
            </p-table>
        </p-card>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p-card>
                <ng-template #header>
                    <h3 class="text-lg font-bold p-4">Schedules by Laboratory</h3>
                </ng-template>
                <p-table [value]="getLaboratoryBreakdown()">
                    <ng-template #header>
                        <tr>
                            <th>Laboratory</th>
                            <th>Schedules</th>
                            <th>Percentage</th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-row>
                        <tr>
                            <td>{{ row.laboratory }}</td>
                            <td>{{ row.count }}</td>
                            <td>{{ ((row.count / schedules.length) * 100).toFixed(2) }}%</td>
                        </tr>
                    </ng-template>
                </p-table>
            </p-card>

            <p-card>
                <ng-template #header>
                    <h3 class="text-lg font-bold p-4">Schedules by Day</h3>
                </ng-template>
                <p-table [value]="getDayBreakdown()">
                    <ng-template #header>
                        <tr>
                            <th>Day</th>
                            <th>Schedules</th>
                            <th>Percentage</th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-row>
                        <tr>
                            <td>{{ row.day }}</td>
                            <td>{{ row.count }}</td>
                            <td>{{ ((row.count / schedules.length) * 100).toFixed(2) }}%</td>
                        </tr>
                    </ng-template>
                </p-table>
            </p-card>
        </div>
    `,
    styles: [
        `
            :host ::ng-deep {
                .p-card {
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
            }
        `
    ]
})
export class ScheduleReportComponent implements OnInit {
    schedules: any[] = [];
    filteredSchedules: any[] = [];
    laboratories: any[] = [];
    selectedLaboratory: string = '';
    selectedDay: string = '';

    daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.loadLaboratories();
        this.loadSchedules();
    }

    loadLaboratories() {
        this.http.get<any[]>(`${environment.apiUrl}/laboratories`).subscribe({
            next: (data) => {
                this.laboratories = data;
                console.log('✅ Laboratories loaded:', this.laboratories.length);
            },
            error: (err) => {
                console.error('❌ Error loading laboratories:', err);
            }
        });
    }

    loadSchedules() {
        this.http.get<any[]>(`${environment.apiUrl}/schedules`).subscribe({
            next: (data) => {
                this.schedules = data;
                this.filteredSchedules = data;
                console.log('✅ Schedules loaded:', this.schedules.length);
            },
            error: (err) => {
                console.error('❌ Error loading schedules:', err);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load schedules' });
            }
        });
    }

    filterSchedules() {
        this.filteredSchedules = this.schedules.filter((sched) => {
            const matchLab = !this.selectedLaboratory || sched.laboratoryId === this.selectedLaboratory;
            const matchDay = !this.selectedDay || this.formatDay(sched.dayOfWeek) === this.selectedDay;
            return matchLab && matchDay;
        });
    }

    clearFilters() {
        this.selectedLaboratory = '';
        this.selectedDay = '';
        this.filteredSchedules = this.schedules;
    }

    formatDay(dayNum: number): string {
        return this.daysOfWeek[dayNum] || `Day ${dayNum}`;
    }

    getLaboratoriesCount(): number {
        return new Set(this.schedules.map((s) => s.laboratoryId)).size;
    }

    getInstructorsCount(): number {
        return new Set(this.schedules.map((s) => s.instructorId)).size;
    }

    getLaboratoryBreakdown(): any[] {
        const breakdown: { [key: string]: { laboratory: string; count: number } } = {};
        this.schedules.forEach((sched) => {
            const labId = sched.laboratoryId;
            const labName = sched.laboratoryName || `Lab ${labId}`;
            if (!breakdown[labId]) {
                breakdown[labId] = { laboratory: labName, count: 0 };
            }
            breakdown[labId].count++;
        });
        return Object.values(breakdown);
    }

    getDayBreakdown(): any[] {
        const breakdown: { [key: string]: number } = {};
        this.schedules.forEach((sched) => {
            const day = this.formatDay(sched.dayOfWeek);
            breakdown[day] = (breakdown[day] || 0) + 1;
        });
        return Object.entries(breakdown).map(([day, count]) => ({ day, count }));
    }

    exportToCSV() {
        const headers = ['Laboratory', 'Day', 'Start Time', 'End Time', 'Instructor', 'Subject'];
        const rows = this.filteredSchedules.map((s) => [s.laboratoryName || 'N/A', this.formatDay(s.dayOfWeek), s.startTime || 'N/A', s.endTime || 'N/A', s.instructorName || 'N/A', s.subjectName || 'N/A']);

        let csv = headers.join(',') + '\n';
        rows.forEach((row) => {
            csv += row.map((cell) => `"${cell}"`).join(',') + '\n';
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `schedule-report-${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.messageService.add({ severity: 'success', summary: 'Exported', detail: 'Schedule report exported to CSV' });
    }

    printReport() {
        window.print();
    }
}
