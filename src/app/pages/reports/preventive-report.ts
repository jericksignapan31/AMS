import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { TagModule } from 'primeng/tag';

interface DailyReport {
    date: Date;
    asset: string;
    task: string;
    status: string;
}

interface MonthlyReport {
    month: string;
    completed: number;
    pending: number;
}

@Component({
    selector: 'app-preventive-report',
    standalone: true,
    imports: [CommonModule, FormsModule, ToolbarModule, ButtonModule, DatePickerModule, TableModule, TabsModule, TagModule],
    template: `
        <div class="card">
            <div class="flex justify-between items-center mb-3">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Preventive Maintenance Report</h2>
                    <p class="text-muted-color">Exportable daily and monthly summaries with date filtering.</p>
                </div>
            </div>

            <p-toolbar styleClass="mb-4">
                <ng-template #start>
                    <p-button label="Export" icon="pi pi-upload" (onClick)="exportCSV()" />
                </ng-template>
                <ng-template #end>
                    <p-datepicker selectionMode="range" [(ngModel)]="selectedDateRange" inputId="preventive-range" placeholder="Filter by date range" (onSelect)="applyDateFilter()" styleClass="w-72" />
                </ng-template>
            </p-toolbar>

            <p-tabs>
                <p-tablist>
                    <p-tab value="daily">Daily Report</p-tab>
                    <p-tab value="monthly">Monthly Report</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="daily">
                        <p-table [value]="filteredDailyReports" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '50rem' }">
                            <ng-template pTemplate="header">
                                <tr>
                                    <th>Date</th>
                                    <th>Asset</th>
                                    <th>Task</th>
                                    <th>Status</th>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="body" let-row>
                                <tr>
                                    <td>{{ row.date | date: 'mediumDate' }}</td>
                                    <td>{{ row.asset }}</td>
                                    <td>{{ row.task }}</td>
                                    <td><p-tag [value]="row.status" /></td>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="emptymessage">
                                <tr>
                                    <td colspan="4" class="text-center py-4">No daily records found for the selected range.</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </p-tabpanel>
                    <p-tabpanel value="monthly">
                        <p-table [value]="monthlyReports" [rows]="12" [paginator]="false" [tableStyle]="{ 'min-width': '40rem' }">
                            <ng-template pTemplate="header">
                                <tr>
                                    <th>Month</th>
                                    <th>Completed</th>
                                    <th>Pending</th>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="body" let-row>
                                <tr>
                                    <td>{{ row.month }}</td>
                                    <td>{{ row.completed }}</td>
                                    <td>{{ row.pending }}</td>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="emptymessage">
                                <tr>
                                    <td colspan="3" class="text-center py-4">No monthly data available.</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </p-tabpanel>
                </p-tabpanels>
            </p-tabs>
        </div>
    `
})
export class PreventiveReportComponent {
    selectedDateRange: Date[] = [];

    dailyReports: DailyReport[] = [
        { date: new Date(), asset: 'Microscope A', task: 'Filter cleaning', status: 'Completed' },
        { date: new Date(), asset: 'Centrifuge B', task: 'Belt inspection', status: 'Pending' },
        { date: new Date(Date.now() - 86400000), asset: 'Freezer C', task: 'Seal check', status: 'Completed' }
    ];

    monthlyReports: MonthlyReport[] = [
        { month: 'January', completed: 12, pending: 3 },
        { month: 'February', completed: 9, pending: 4 },
        { month: 'March', completed: 14, pending: 2 }
    ];

    applyDateFilter() {
        // Trigger change detection for the getter-based filter
        this.selectedDateRange = [...(this.selectedDateRange || [])];
    }

    get filteredDailyReports(): DailyReport[] {
        if (!this.selectedDateRange || this.selectedDateRange.length < 2) {
            return this.dailyReports;
        }
        const [start, end] = this.selectedDateRange;
        return this.dailyReports.filter((r) => this.isWithinRange(r.date, start, end));
    }

    private isWithinRange(date: Date, start: Date, end: Date): boolean {
        const target = new Date(date).getTime();
        return target >= new Date(start).getTime() && target <= new Date(end).getTime();
    }

    exportCSV() {
        const rows = this.filteredDailyReports;
        if (!rows.length) {
            console.warn('No data to export');
            return;
        }

        const header = 'Date,Asset,Task,Status';
        const body = rows
            .map((r) => {
                const date = new Date(r.date).toISOString();
                return `${date},${r.asset},${r.task},${r.status}`;
            })
            .join('\n');

        const csv = `${header}\n${body}`;
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'preventive-report.csv');
        link.click();
        URL.revokeObjectURL(url);
    }
}
