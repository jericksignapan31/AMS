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
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface DailyReportRecord {
    machineEquipmentInstrument: string;
    actionTaken: string;
    observation: string;
}

interface MonthlyReportRecord {
    date: Date;
    machineEquipmentInstrument: string;
    serialNumber: string;
    observations: string;
    actionTaken: string;
    remarks: string;
}

interface Laboratory {
    laboratoryId: string;
    laboratoryName: string;
}

@Component({
    selector: 'app-preventive-report',
    standalone: true,
    imports: [CommonModule, FormsModule, ToolbarModule, ButtonModule, DatePickerModule, TableModule, TabsModule, TagModule, SelectModule, InputTextModule, ProgressSpinnerModule, MessageModule, CardModule],
    template: `
        <div class="card">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Preventive Maintenance Report</h2>
                    <p class="text-muted-color">Generate daily or monthly preventive maintenance reports by laboratory.</p>
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

                <div class="flex flex-col gap-2">
                    <label for="laboratoryId" class="font-semibold">Laboratory</label>
                    <p-select [(ngModel)]="laboratoryId" [options]="laboratories" optionLabel="laboratoryName" optionValue="laboratoryId" placeholder="Select laboratory" [filter]="true" />
                </div>

                <div class="flex items-end">
                    <p-button label="Generate Report" icon="pi pi-chart-bar" (onClick)="generateReport()" [disabled]="!isFormValid() || isLoading" [loading]="isLoading" />
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
                    <h3 class="text-xl font-bold mb-2">{{ reportData.laboratoryName }}</h3>
                    <p><strong>Date:</strong> {{ formatDate(reportData.date) }}</p>
                    <p><strong>Performed By:</strong> {{ reportData.performedBy || 'N/A' }}</p>
                    <p><strong>Assisted By:</strong> {{ reportData.assistedBy || 'N/A' }}</p>
                    <p class="mt-2"><strong>Recommendations:</strong></p>
                    <p class="text-muted-color">{{ reportData.recommendations || 'No recommendations provided' }}</p>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Daily Report Details</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '60rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th style="width: 30%">Machine/Equipment/Instrument</th>
                            <th style="width: 35%">Action Taken</th>
                            <th style="width: 35%">Observation</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.machineEquipmentInstrument || 'N/A' }}</td>
                            <td>{{ row.actionTaken || 'N/A' }}</td>
                            <td>{{ row.observation || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="3" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- Report Results - Monthly -->
            <div *ngIf="reportData && reportType === 'monthly' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">{{ reportData.laboratoryName }}</h3>
                    <p><strong>Period:</strong> {{ getMonthName(reportData.month) }} {{ reportData.year }}</p>
                    <p><strong>Campus:</strong> {{ reportData.campusName || 'N/A' }}</p>
                    <p><strong>Total Records:</strong> {{ reportData.totalRecords || 0 }}</p>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Monthly Report Details</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '80rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment</th>
                            <th>Serial Number</th>
                            <th>Observations</th>
                            <th>Action Taken</th>
                            <th>Remarks</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'mediumDate' }}</td>
                            <td>{{ row.machineEquipmentInstrument || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.observations || 'N/A' }}</td>
                            <td>{{ row.actionTaken || 'N/A' }}</td>
                            <td>{{ row.remarks || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="6" class="text-center py-4">No records found.</td>
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
export class PreventiveReportComponent implements OnInit {
    reportType: 'daily' | 'monthly' = 'daily';
    selectedDate: Date = new Date();
    selectedMonth: number = new Date().getMonth() + 1;
    selectedYear: number = new Date().getFullYear();
    laboratoryId: string = '';

    reportData: any = null;
    isLoading: boolean = false;
    errorMessage: string = '';

    laboratories: Laboratory[] = [];

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

    constructor(
        private reportService: ReportService,
        private http: HttpClient
    ) {
        // Generate years from 2020 to current year + 5
        const currentYear = new Date().getFullYear();
        for (let i = 2020; i <= currentYear + 5; i++) {
            this.years.push(i);
        }
    }

    ngOnInit(): void {
        this.loadLaboratories();
    }

    loadLaboratories(): void {
        const apiUrl = `${environment.apiUrl}/laboratories`;
        this.http.get<Laboratory[]>(apiUrl).subscribe({
            next: (data) => {
                this.laboratories = data;
                console.log('✅ Laboratories loaded:', data);
            },
            error: (error) => {
                console.error('❌ Error loading laboratories:', error);
            }
        });
    }

    onReportTypeChange(): void {
        this.reportData = null;
        this.errorMessage = '';
    }

    isFormValid(): boolean {
        return this.laboratoryId.trim().length > 0;
    }

    generateReport(): void {
        this.isLoading = true;
        this.errorMessage = '';
        this.reportData = null;

        if (this.reportType === 'daily') {
            const dateStr = this.formatDateToString(this.selectedDate);
            this.reportService.getDailyPreventiveReport(dateStr, this.laboratoryId).subscribe({
                next: (data) => {
                    this.reportData = data;
                    this.isLoading = false;
                    console.log('✅ Daily Preventive Report loaded:', data);
                },
                error: (error) => {
                    this.errorMessage = error.error?.message || 'Failed to generate daily report';
                    this.isLoading = false;
                    console.error('❌ Error loading daily report:', error);
                }
            });
        } else {
            this.reportService.getMonthlyPreventiveReport(this.selectedMonth, this.selectedYear, this.laboratoryId).subscribe({
                next: (data) => {
                    this.reportData = data;
                    this.isLoading = false;
                    console.log('✅ Monthly Preventive Report loaded:', data);
                },
                error: (error) => {
                    this.errorMessage = error.error?.message || 'Failed to generate monthly report';
                    this.isLoading = false;
                    console.error('❌ Error loading monthly report:', error);
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

    exportCSV(): void {
        if (!this.reportData || !this.reportData.records) {
            console.warn('No data to export');
            return;
        }

        let csv = '';
        let filename = '';

        if (this.reportType === 'daily') {
            csv = 'Machine/Equipment,Action Taken,Observation\n';
            csv += this.reportData.records.map((r: DailyReportRecord) => `"${r.machineEquipmentInstrument}","${r.actionTaken}","${r.observation}"`).join('\n');
            filename = `preventive-daily-${this.formatDateToString(this.selectedDate)}.csv`;
        } else {
            csv = 'Date,Equipment,Serial Number,Observations,Action Taken,Remarks\n';
            csv += this.reportData.records
                .map((r: MonthlyReportRecord) => {
                    const date = new Date(r.date).toISOString().split('T')[0];
                    return `"${date}","${r.machineEquipmentInstrument}","${r.serialNumber}","${r.observations}","${r.actionTaken}","${r.remarks}"`;
                })
                .join('\n');
            filename = `preventive-monthly-${this.selectedYear}-${this.selectedMonth}.csv`;
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
