import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ReportService } from '../service/report.service';

interface DailyCalibrationRecord {
    date: Date;
    equipmentName: string;
    serialNumber: string;
    calibrationType: string;
    result: string;
    performedBy: string;
    remarks: string;
}

interface MonthlyCalibrationRecord {
    date: Date;
    equipmentName: string;
    serialNumber: string;
    calibrationType: string;
    result: string;
    performedBy: string;
    nextCalibrationDate: Date;
    remarks: string;
}

@Component({
    selector: 'app-calibration-report',
    standalone: true,
    imports: [CommonModule, FormsModule, ToolbarModule, ButtonModule, DatePickerModule, TableModule, TabsModule, TagModule, SelectModule, InputTextModule, ProgressSpinnerModule, MessageModule, CardModule],
    template: `
        <div class="card">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Calibration Report</h2>
                    <p class="text-muted-color">Generate daily or monthly calibration reports for equipment maintenance.</p>
                </div>
            </div>

            <!-- Filters Section -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-surface-50 dark:bg-surface-800 rounded">
                <div class="flex flex-col gap-2">
                    <label for="reportType" class="font-semibold">Report Type</label>
                    <p-select [(ngModel)]="reportType" [options]="reportTypes" optionLabel="label" optionValue="value" placeholder="Select report type" (onChange)="onReportTypeChange()" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'daily'">
                    <label for="selectedDate" class="font-semibold">Date</label>
                    <p-datepicker [(ngModel)]="selectedDate" inputId="selectedDate" placeholder="Select date" dateFormat="yy-mm-dd" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'monthly'">
                    <label for="selectedMonth" class="font-semibold">Month</label>
                    <p-select [(ngModel)]="selectedMonth" [options]="months" optionLabel="label" optionValue="value" placeholder="Select month" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'monthly'">
                    <label for="selectedYear" class="font-semibold">Year</label>
                    <p-select [(ngModel)]="selectedYear" [options]="years" placeholder="Select year" />
                </div>

                <div class="flex items-end">
                    <p-button label="Generate Report" icon="pi pi-chart-bar" (onClick)="generateReport()" [disabled]="isLoading" [loading]="isLoading" />
                </div>
            </div>

            <!-- Error Message -->
            <p-message *ngIf="errorMessage" severity="error" [text]="errorMessage" styleClass="mb-4 w-full" />

            <!-- Loading Spinner -->
            <div *ngIf="isLoading" class="flex justify-center items-center py-8">
                <p-progressSpinner />
            </div>

            <!-- Report Results - Daily -->
            <div *ngIf="reportData && reportType === 'daily' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">Daily Calibration Report</h3>
                    <p><strong>Date:</strong> {{ formatDate(selectedDate) }}</p>
                    <p><strong>Total Records:</strong> {{ reportData.records?.length || 0 }}</p>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Daily Report Details</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '80rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment Name</th>
                            <th>Serial Number</th>
                            <th>Calibration Type</th>
                            <th>Result</th>
                            <th>Performed By</th>
                            <th>Remarks</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'shortDate' }}</td>
                            <td>{{ row.equipmentName || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.calibrationType || 'N/A' }}</td>
                            <td><p-tag [value]="row.result" [severity]="getResultSeverity(row.result)" /></td>
                            <td>{{ row.performedBy || 'N/A' }}</td>
                            <td>{{ row.remarks || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="7" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- Report Results - Monthly -->
            <div *ngIf="reportData && reportType === 'monthly' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">Monthly Calibration Report</h3>
                    <p><strong>Period:</strong> {{ getMonthName(selectedMonth) }} {{ selectedYear }}</p>
                    <p><strong>Total Records:</strong> {{ reportData.records?.length || 0 }}</p>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Monthly Report Details</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '90rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment Name</th>
                            <th>Serial Number</th>
                            <th>Calibration Type</th>
                            <th>Result</th>
                            <th>Performed By</th>
                            <th>Next Calibration</th>
                            <th>Remarks</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'shortDate' }}</td>
                            <td>{{ row.equipmentName || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.calibrationType || 'N/A' }}</td>
                            <td><p-tag [value]="row.result" [severity]="getResultSeverity(row.result)" /></td>
                            <td>{{ row.performedBy || 'N/A' }}</td>
                            <td>{{ row.nextCalibrationDate | date: 'shortDate' }}</td>
                            <td>{{ row.remarks || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="8" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- No Data Message -->
            <div *ngIf="!reportData && !isLoading && !errorMessage" class="text-center py-8 text-muted-color">
                <i class="pi pi-info-circle text-4xl mb-3"></i>
                <p>Select filters and click "Generate Report" to view data.</p>
            </div>
        </div>
    `
})
export class CalibrationReportComponent implements OnInit {
    reportType: 'daily' | 'monthly' = 'daily';
    selectedDate: Date = new Date();
    selectedMonth: number = new Date().getMonth() + 1;
    selectedYear: number = new Date().getFullYear();

    reportData: any = null;
    isLoading: boolean = false;
    errorMessage: string = '';

    reportTypes = [
        { label: 'Daily Report', value: 'daily' },
        { label: 'Monthly Report', value: 'monthly' }
    ];

    months = [
        { label: 'January', value: 1 },
        { label: 'February', value: 2 },
        { label: 'March', value: 3 },
        { label: 'April', value: 4 },
        { label: 'May', value: 5 },
        { label: 'June', value: 6 },
        { label: 'July', value: 7 },
        { label: 'August', value: 8 },
        { label: 'September', value: 9 },
        { label: 'October', value: 10 },
        { label: 'November', value: 11 },
        { label: 'December', value: 12 }
    ];

    years: number[] = [];

    constructor(private reportService: ReportService) {
        const currentYear = new Date().getFullYear();
        for (let i = 2020; i <= currentYear + 5; i++) {
            this.years.push(i);
        }
    }

    ngOnInit(): void {}

    onReportTypeChange(): void {
        this.reportData = null;
        this.errorMessage = '';
    }

    generateReport(): void {
        this.isLoading = true;
        this.errorMessage = '';
        this.reportData = null;

        if (this.reportType === 'daily') {
            const dateStr = this.formatDateToString(this.selectedDate);
            this.reportService.getDailyCalibrationReport(dateStr).subscribe({
                next: (data) => {
                    this.reportData = data;
                    this.isLoading = false;
                    console.log('✅ Daily Calibration Report loaded:', data);
                },
                error: (error) => {
                    this.errorMessage = error.error?.message || 'Failed to generate daily calibration report';
                    this.isLoading = false;
                    console.error('❌ Error loading daily calibration report:', error);
                }
            });
        } else {
            this.reportService.getMonthlyCalibrationReport(this.selectedMonth, this.selectedYear).subscribe({
                next: (data) => {
                    this.reportData = data;
                    this.isLoading = false;
                    console.log('✅ Monthly Calibration Report loaded:', data);
                },
                error: (error) => {
                    this.errorMessage = error.error?.message || 'Failed to generate monthly calibration report';
                    this.isLoading = false;
                    console.error('❌ Error loading monthly calibration report:', error);
                }
            });
        }
    }

    formatDateToString(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    formatDate(date: string | Date): string {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    getMonthName(month: number): string {
        const monthObj = this.months.find((m) => m.value === month);
        return monthObj ? monthObj.label : 'Unknown';
    }

    getResultSeverity(result: string): 'success' | 'info' | 'warn' | 'secondary' | 'contrast' | 'danger' {
        const lowerResult = result?.toLowerCase() || '';
        if (lowerResult.includes('pass') || lowerResult.includes('success') || lowerResult.includes('calibrated')) {
            return 'success';
        } else if (lowerResult.includes('fail') || lowerResult.includes('reject')) {
            return 'danger';
        } else if (lowerResult.includes('pending') || lowerResult.includes('scheduled')) {
            return 'warn';
        }
        return 'secondary';
    }

    exportCSV(): void {
        if (!this.reportData || !this.reportData.records) {
            console.warn('No data to export');
            return;
        }

        let csv = '';
        let filename = '';

        if (this.reportType === 'daily') {
            csv = 'Date,Equipment Name,Serial Number,Calibration Type,Result,Performed By,Remarks\n';
            csv += this.reportData.records
                .map((r: DailyCalibrationRecord) => {
                    const date = new Date(r.date).toISOString().split('T')[0];
                    return `"${date}","${r.equipmentName}","${r.serialNumber}","${r.calibrationType}","${r.result}","${r.performedBy}","${r.remarks}"`;
                })
                .join('\n');
            filename = `calibration-daily-${this.formatDateToString(this.selectedDate)}.csv`;
        } else {
            csv = 'Date,Equipment Name,Serial Number,Calibration Type,Result,Performed By,Next Calibration,Remarks\n';
            csv += this.reportData.records
                .map((r: MonthlyCalibrationRecord) => {
                    const date = new Date(r.date).toISOString().split('T')[0];
                    const nextDate = r.nextCalibrationDate ? new Date(r.nextCalibrationDate).toISOString().split('T')[0] : 'N/A';
                    return `"${date}","${r.equipmentName}","${r.serialNumber}","${r.calibrationType}","${r.result}","${r.performedBy}","${nextDate}","${r.remarks}"`;
                })
                .join('\n');
            filename = `calibration-monthly-${this.selectedYear}-${this.selectedMonth}.csv`;
        }

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.click();
        URL.revokeObjectURL(url);
    }
}
