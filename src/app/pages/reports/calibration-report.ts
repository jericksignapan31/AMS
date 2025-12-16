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
    calibrationType: string;
    status: string;
}

interface MonthlyReport {
    month: string;
    calibrated: number;
    overdue: number;
}

@Component({
    selector: 'app-calibration-report',
    standalone: true,
    imports: [CommonModule, FormsModule, ToolbarModule, ButtonModule, DatePickerModule, TableModule, TabsModule, TagModule],
    template: `
        <div class="card">
            <div class="flex justify-between items-center mb-3">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Calibration Report</h2>
                    <p class="text-muted-color">Exportable daily and monthly calibration activity overview.</p>
                </div>
            </div>

            <p-toolbar styleClass="mb-4">
                <ng-template #start>
                    <p-button label="Export" icon="pi pi-upload" (onClick)="exportCSV()" />
                </ng-template>
                <ng-template #end>
                    <p-datepicker selectionMode="range" [(ngModel)]="selectedDateRange" inputId="calibration-range" placeholder="Filter by date range" (onSelect)="applyDateFilter()" styleClass="w-72" />
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
                                    <th>Calibration Type</th>
                                    <th>Status</th>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="body" let-row>
                                <tr>
                                    <td>{{ row.date | date: 'mediumDate' }}</td>
                                    <td>{{ row.asset }}</td>
                                    <td>{{ row.calibrationType }}</td>
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
                                    <th>Calibrated</th>
                                    <th>Overdue</th>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="body" let-row>
                                <tr>
                                    <td>{{ row.month }}</td>
                                    <td>{{ row.calibrated }}</td>
                                    <td>{{ row.overdue }}</td>
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
export class CalibrationReportComponent {
    selectedDateRange: Date[] = [];

    dailyReports: DailyReport[] = [
        { date: new Date(), asset: 'Scale X', calibrationType: 'Weight', status: 'Completed' },
        { date: new Date(), asset: 'Pipette Y', calibrationType: 'Volume', status: 'Scheduled' },
        { date: new Date(Date.now() - 259200000), asset: 'Thermometer Z', calibrationType: 'Temperature', status: 'Completed' }
    ];

    monthlyReports: MonthlyReport[] = [
        { month: 'January', calibrated: 15, overdue: 1 },
        { month: 'February', calibrated: 11, overdue: 2 },
        { month: 'March', calibrated: 13, overdue: 1 }
    ];

    applyDateFilter() {
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

        const header = 'Date,Asset,Calibration Type,Status';
        const body = rows
            .map((r) => {
                const date = new Date(r.date).toISOString();
                return `${date},${r.asset},${r.calibrationType},${r.status}`;
            })
            .join('\n');

        const csv = `${header}\n${body}`;
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'calibration-report.csv');
        link.click();
        URL.revokeObjectURL(url);
    }
}
