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

interface DailyCorrectiveRecord {
    date: Date;
    equipmentName: string;
    serialNumber: string;
    laboratoryLocation: string;
    problemReported: string;
    actionTaken: string;
    partsReplaced: string;
    remarks: string;
    completedBy: string;
    priorityLevel: string;
    downtime: string;
}

interface MonthlyCorrectiveRecord {
    date: Date;
    equipmentName: string;
    serialNumber: string;
    laboratoryLocation: string;
    problemReported: string;
    actionTaken: string;
    partsReplaced: string;
    remarks: string;
    completedBy: string;
    requestedBy: string;
    priorityLevel: string;
    downtime: string;
    assetId: string;
    requestId: string;
    campusName: string;
}

interface PriorityLevel {
    priorityLevelId: string;
    priorityLevelName: string;
}

@Component({
    selector: 'app-corrective-report',
    standalone: true,
    imports: [CommonModule, FormsModule, ToolbarModule, ButtonModule, DatePickerModule, TableModule, TabsModule, TagModule, SelectModule, InputTextModule, ProgressSpinnerModule, MessageModule, CardModule],
    template: `
        <div class="card">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Corrective Maintenance Report</h2>
                    <p class="text-muted-color">Generate daily or monthly corrective maintenance reports with priority filtering.</p>
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
                    <label for="priorityLevelId" class="font-semibold">Priority Level (Optional)</label>
                    <p-select [(ngModel)]="priorityLevelId" [options]="priorityLevels" optionLabel="priorityLevelName" optionValue="priorityLevelId" placeholder="All Priorities" [filter]="true" [showClear]="true" />
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
                    <h3 class="text-xl font-bold mb-2">Daily Corrective Maintenance Report</h3>
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

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '90rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment</th>
                            <th>Serial No.</th>
                            <th>Laboratory</th>
                            <th>Problem</th>
                            <th>Action Taken</th>
                            <th>Parts Replaced</th>
                            <th>Completed By</th>
                            <th>Priority</th>
                            <th>Downtime</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'shortDate' }}</td>
                            <td>{{ row.equipmentName || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.laboratoryLocation || 'N/A' }}</td>
                            <td>{{ row.problemReported || 'N/A' }}</td>
                            <td>{{ row.actionTaken || 'N/A' }}</td>
                            <td>{{ row.partsReplaced || 'None' }}</td>
                            <td>{{ row.completedBy || 'N/A' }}</td>
                            <td><p-tag [value]="row.priorityLevel" [severity]="getPrioritySeverity(row.priorityLevel)" /></td>
                            <td>{{ row.downtime || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="10" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- Report Results - Monthly -->
            <div *ngIf="reportData && reportType === 'monthly' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">{{ reportData.reportTitle || 'Monthly Corrective Maintenance Report' }}</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <p><strong>Period:</strong> {{ getMonthName(reportData.reportMonth || selectedMonth) }} {{ reportData.reportYear || selectedYear }}</p>
                            <p><strong>Campus:</strong> {{ reportData.campusName || 'N/A' }}</p>
                            <p *ngIf="reportData.generatedDate"><strong>Generated:</strong> {{ reportData.generatedDate | date: 'medium' }}</p>
                        </div>
                        <div>
                            <p><strong>Total Records:</strong> {{ reportData.totalRecords || reportData.records?.length || 0 }}</p>
                        </div>
                    </div>
                </div>

                <!-- Summary Section -->
                <div *ngIf="reportData.summary" class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div class="p-4 bg-blue-50 dark:bg-blue-900 rounded">
                        <h4 class="text-sm font-semibold text-blue-700 dark:text-blue-300">Total Repairs</h4>
                        <p class="text-2xl font-bold text-blue-900 dark:text-blue-100">{{ reportData.summary.totalRepairs }}</p>
                    </div>
                    <div class="p-4 bg-green-50 dark:bg-green-900 rounded">
                        <h4 class="text-sm font-semibold text-green-700 dark:text-green-300">Completed</h4>
                        <p class="text-2xl font-bold text-green-900 dark:text-green-100">{{ reportData.summary.completedRepairs }}</p>
                    </div>
                    <div class="p-4 bg-orange-50 dark:bg-orange-900 rounded">
                        <h4 class="text-sm font-semibold text-orange-700 dark:text-orange-300">Avg Downtime</h4>
                        <p class="text-2xl font-bold text-orange-900 dark:text-orange-100">{{ reportData.summary.averageDowntimeHours }}h</p>
                    </div>
                    <div class="p-4 bg-purple-50 dark:bg-purple-900 rounded">
                        <h4 class="text-sm font-semibold text-purple-700 dark:text-purple-300">Completion Rate</h4>
                        <p class="text-2xl font-bold text-purple-900 dark:text-purple-100">{{ getCompletionRate() }}%</p>
                    </div>
                </div>

                <!-- Priority Breakdown -->
                <div *ngIf="reportData.summary?.byPriority" class="mb-4">
                    <h4 class="font-semibold mb-2">Breakdown by Priority</h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div *ngFor="let item of reportData.summary.byPriority" class="p-3 bg-surface-50 dark:bg-surface-800 rounded">
                            <p class="text-sm text-muted-color">{{ item.priorityLevel }}</p>
                            <p class="text-lg font-bold">{{ item.count }}</p>
                        </div>
                    </div>
                </div>

                <!-- Laboratory Breakdown -->
                <div *ngIf="reportData.summary?.byLaboratory" class="mb-4">
                    <h4 class="font-semibold mb-2">Breakdown by Laboratory</h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div *ngFor="let item of reportData.summary.byLaboratory" class="p-3 bg-surface-50 dark:bg-surface-800 rounded">
                            <p class="text-sm text-muted-color">{{ item.laboratoryName }}</p>
                            <p class="text-lg font-bold">{{ item.count }}</p>
                        </div>
                    </div>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Detailed Records</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '100rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment</th>
                            <th>Serial No.</th>
                            <th>Laboratory</th>
                            <th>Problem</th>
                            <th>Action Taken</th>
                            <th>Parts Replaced</th>
                            <th>Remarks</th>
                            <th>Completed By</th>
                            <th>Priority</th>
                            <th>Downtime</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'shortDate' }}</td>
                            <td>{{ row.equipmentName || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.laboratoryLocation || 'N/A' }}</td>
                            <td>{{ row.problemReported || 'N/A' }}</td>
                            <td>{{ row.actionTaken || 'N/A' }}</td>
                            <td>{{ row.partsReplaced || 'None' }}</td>
                            <td>{{ row.remarks || 'N/A' }}</td>
                            <td>{{ row.completedBy || 'N/A' }}</td>
                            <td><p-tag [value]="row.priorityLevel" [severity]="getPrioritySeverity(row.priorityLevel)" /></td>
                            <td>{{ row.downtime || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="11" class="text-center py-4">No records found.</td>
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
export class CorrectiveReportComponent implements OnInit {
    reportType: 'daily' | 'monthly' = 'daily';
    selectedDate: Date = new Date();
    selectedMonth: number = new Date().getMonth() + 1;
    selectedYear: number = new Date().getFullYear();
    priorityLevelId: string = '';

    reportData: any = null;
    isLoading: boolean = false;
    errorMessage: string = '';

    priorityLevels: PriorityLevel[] = [];

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
        const currentYear = new Date().getFullYear();
        for (let i = 2020; i <= currentYear + 5; i++) {
            this.years.push(i);
        }
    }

    ngOnInit(): void {
        this.loadPriorityLevels();
    }

    loadPriorityLevels(): void {
        const apiUrl = `${environment.apiUrl}/maintenance/priority-levels`;
        this.http.get<PriorityLevel[]>(apiUrl).subscribe({
            next: (data) => {
                this.priorityLevels = data;
                console.log('✅ Priority levels loaded:', data);
            },
            error: (error) => {
                console.error('❌ Error loading priority levels:', error);
            }
        });
    }

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
            this.reportService.getDailyCorrectiveReport(dateStr, this.priorityLevelId || undefined).subscribe({
                next: (data) => {
                    this.reportData = data;
                    this.isLoading = false;
                    console.log('✅ Daily Corrective Report loaded:', data);
                },
                error: (error) => {
                    this.errorMessage = error.error?.message || 'Failed to generate daily report';
                    this.isLoading = false;
                    console.error('❌ Error loading daily report:', error);
                }
            });
        } else {
            this.reportService.getMonthlyCorrectiveReport(this.selectedMonth, this.selectedYear, this.priorityLevelId || undefined).subscribe({
                next: (data) => {
                    this.reportData = data;
                    this.isLoading = false;
                    console.log('✅ Monthly Corrective Report loaded:', data);
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

    getCompletionRate(): number {
        if (!this.reportData?.summary) return 0;
        const { totalRepairs, completedRepairs } = this.reportData.summary;
        if (totalRepairs === 0) return 0;
        return Math.round((completedRepairs / totalRepairs) * 100);
    }

    getPrioritySeverity(priority: string): 'success' | 'info' | 'warn' | 'secondary' | 'contrast' | 'danger' {
        const lowerPriority = priority?.toLowerCase() || '';
        if (lowerPriority.includes('high') || lowerPriority.includes('critical') || lowerPriority.includes('urgent')) {
            return 'danger';
        } else if (lowerPriority.includes('medium') || lowerPriority.includes('moderate')) {
            return 'warn';
        } else if (lowerPriority.includes('low')) {
            return 'success';
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
            csv = 'Date,Equipment,Serial No,Laboratory,Problem,Action Taken,Parts Replaced,Completed By,Priority,Downtime\n';
            csv += this.reportData.records
                .map((r: DailyCorrectiveRecord) => {
                    const date = new Date(r.date).toISOString().split('T')[0];
                    return `"${date}","${r.equipmentName}","${r.serialNumber}","${r.laboratoryLocation}","${r.problemReported}","${r.actionTaken}","${r.partsReplaced}","${r.completedBy}","${r.priorityLevel}","${r.downtime}"`;
                })
                .join('\n');
            filename = `corrective-daily-${this.formatDateToString(this.selectedDate)}.csv`;
        } else {
            csv = 'Date,Equipment,Serial No,Laboratory,Problem,Action Taken,Parts Replaced,Remarks,Completed By,Requested By,Priority,Downtime\n';
            csv += this.reportData.records
                .map((r: MonthlyCorrectiveRecord) => {
                    const date = new Date(r.date).toISOString().split('T')[0];
                    return `"${date}","${r.equipmentName}","${r.serialNumber}","${r.laboratoryLocation}","${r.problemReported}","${r.actionTaken}","${r.partsReplaced}","${r.remarks}","${r.completedBy}","${r.requestedBy}","${r.priorityLevel}","${r.downtime}"`;
                })
                .join('\n');
            filename = `corrective-monthly-${this.selectedYear}-${this.selectedMonth}.csv`;
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
