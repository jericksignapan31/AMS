import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AssetReportData {
    totalAssets: number;
    activeAssets: number;
    inactiveAssets: number;
    assetsByCategory: { category: string; count: number }[];
    assetsByStatus: { status: string; count: number }[];
}

export interface MaintenanceReportData {
    totalRequests: number;
    pendingRequests: number;
    approvedRequests: number;
    completedRequests: number;
    requestsByPriority: { priority: string; count: number }[];
    requestsByStatus: { status: string; count: number }[];
}

export interface ScheduleReportData {
    totalSchedules: number;
    laboratoryCount: number;
    instructorCount: number;
    schedulesByDay: { day: string; count: number }[];
    schedulesByLaboratory: { laboratory: string; count: number }[];
}

@Injectable({ providedIn: 'root' })
export class ReportService {
    private baseApiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    // Asset Reports
    getAssetReportData(): Observable<AssetReportData> {
        const url = `${this.baseApiUrl}/reports/assets`;
        console.log('📊 Fetching Asset Report:', url);
        return this.http.get<AssetReportData>(url);
    }

    getAssetReportCSV(): Observable<Blob> {
        return this.http.get(`${this.baseApiUrl}/reports/assets/export`, {
            responseType: 'blob'
        });
    }

    // Maintenance Reports
    getMaintenanceReportData(): Observable<MaintenanceReportData> {
        const url = `${this.baseApiUrl}/reports/maintenance`;
        console.log('📊 Fetching Maintenance Report:', url);
        return this.http.get<MaintenanceReportData>(url);
    }

    getMaintenanceReportCSV(): Observable<Blob> {
        return this.http.get(`${this.baseApiUrl}/reports/maintenance/export`, {
            responseType: 'blob'
        });
    }

    // Schedule Reports
    getScheduleReportData(): Observable<ScheduleReportData> {
        const url = `${this.baseApiUrl}/reports/schedules`;
        console.log('📊 Fetching Schedule Report:', url);
        return this.http.get<ScheduleReportData>(url);
    }

    getScheduleReportCSV(): Observable<Blob> {
        return this.http.get(`${this.baseApiUrl}/reports/schedules/export`, {
            responseType: 'blob'
        });
    }

    // Advanced Filtering Reports
    getAssetReportFiltered(filters: { category?: string; status?: string; location?: string }): Observable<any[]> {
        let url = `${this.baseApiUrl}/reports/assets/filter`;
        const params = new URLSearchParams();

        if (filters.category) params.append('category', filters.category);
        if (filters.status) params.append('status', filters.status);
        if (filters.location) params.append('location', filters.location);

        if (params.toString()) {
            url += '?' + params.toString();
        }

        return this.http.get<any[]>(url);
    }

    getMaintenanceReportFiltered(filters: { status?: string; priority?: string; dateFrom?: string; dateTo?: string }): Observable<any[]> {
        let url = `${this.baseApiUrl}/reports/maintenance/filter`;
        const params = new URLSearchParams();

        if (filters.status) params.append('status', filters.status);
        if (filters.priority) params.append('priority', filters.priority);
        if (filters.dateFrom) params.append('dateFrom', filters.dateFrom);
        if (filters.dateTo) params.append('dateTo', filters.dateTo);

        if (params.toString()) {
            url += '?' + params.toString();
        }

        return this.http.get<any[]>(url);
    }

    getScheduleReportFiltered(filters: { laboratory?: string; day?: string; dateFrom?: string; dateTo?: string }): Observable<any[]> {
        let url = `${this.baseApiUrl}/reports/schedules/filter`;
        const params = new URLSearchParams();

        if (filters.laboratory) params.append('laboratory', filters.laboratory);
        if (filters.day) params.append('day', filters.day);
        if (filters.dateFrom) params.append('dateFrom', filters.dateFrom);
        if (filters.dateTo) params.append('dateTo', filters.dateTo);

        if (params.toString()) {
            url += '?' + params.toString();
        }

        return this.http.get<any[]>(url);
    }

    // Dashboard Summary
    getDashboardSummary(): Observable<{
        totalAssets: number;
        totalMaintenanceRequests: number;
        totalSchedules: number;
        pendingMaintenanceRequests: number;
    }> {
        const url = `${this.baseApiUrl}/reports/dashboard-summary`;
        console.log('📊 Fetching Dashboard Summary:', url);
        return this.http.get<any>(url);
    }

    // Maintenance Reports - New Endpoints
    getDailyPreventiveReport(date: string, laboratoryId: string): Observable<any> {
        const url = `${this.baseApiUrl}/reports/preventive-maintenance/daily?date=${date}&laboratoryId=${laboratoryId}`;
        console.log('📊 Fetching Daily Preventive Report:', url);
        return this.http.get<any>(url);
    }

    getMonthlyPreventiveReport(month: number, year: number, laboratoryId: string): Observable<any> {
        const url = `${this.baseApiUrl}/reports/preventive-maintenance/monthly?month=${month}&year=${year}&laboratoryId=${laboratoryId}`;
        console.log('📊 Fetching Monthly Preventive Report:', url);
        return this.http.get<any>(url);
    }

    getDailyCorrectiveReport(date: string, priorityLevelId?: string): Observable<any> {
        let url = `${this.baseApiUrl}/reports/corrective-maintenance/daily?date=${date}`;
        if (priorityLevelId) {
            url += `&priorityLevelId=${priorityLevelId}`;
        }
        console.log('📊 Fetching Daily Corrective Report:', url);
        return this.http.get<any>(url);
    }

    getMonthlyCorrectiveReport(month: number, year: number, priorityLevelId?: string): Observable<any> {
        let url = `${this.baseApiUrl}/reports/corrective-maintenance/monthly?month=${month}&year=${year}`;
        if (priorityLevelId) {
            url += `&priorityLevelId=${priorityLevelId}`;
        }
        console.log('📊 Fetching Monthly Corrective Report:', url);
        return this.http.get<any>(url);
    }

    // Calibration Reports
    getDailyCalibrationReport(date: string): Observable<any> {
        const url = `${this.baseApiUrl}/reports/calibration-maintenance/daily?date=${date}`;
        console.log('📊 Fetching Daily Calibration Report:', url);
        return this.http.get<any>(url);
    }

    getMonthlyCalibrationReport(month: number, year: number): Observable<any> {
        const url = `${this.baseApiUrl}/reports/calibration-maintenance/monthly?month=${month}&year=${year}`;
        console.log('📊 Fetching Monthly Calibration Report:', url);
        return this.http.get<any>(url);
    }
}
