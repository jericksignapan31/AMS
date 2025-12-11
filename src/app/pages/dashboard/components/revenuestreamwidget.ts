import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../../layout/service/layout.service';
import { MaintenanceService } from '../../service/maintenance.service';

@Component({
    standalone: true,
    selector: 'app-revenue-stream-widget',
    imports: [ChartModule],
    template: `<div class="card mb-8!">
        <div class="font-semibold text-xl mb-4">Maintenance Repairs Per Month</div>
        <p-chart type="bar" [data]="chartData" [options]="chartOptions" class="h-100" />
    </div>`
})
export class RevenueStreamWidget implements OnInit {
    chartData: any;
    chartOptions: any;
    subscription!: Subscription;

    constructor(
        public layoutService: LayoutService,
        private maintenanceService: MaintenanceService
    ) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.loadMaintenanceData();
    }

    loadMaintenanceData() {
        this.maintenanceService.getMaintenanceRequests().subscribe({
            next: (data: any[]) => {
                this.processChartData(data);
                this.initChart();
            },
            error: (err: any) => {
                console.error('❌ Error loading maintenance data:', err);
            }
        });
    }

    processChartData(data: any[]) {
        const monthCount: { [key: string]: number } = {
            January: 0,
            February: 0,
            March: 0,
            April: 0,
            May: 0,
            June: 0,
            July: 0,
            August: 0,
            September: 0,
            October: 0,
            November: 0,
            December: 0
        };

        data.forEach((req: any) => {
            if (req.createdDate) {
                const date = new Date(req.createdDate);
                const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                const monthName = monthNames[date.getMonth()];
                if (monthName in monthCount) {
                    monthCount[monthName]++;
                }
            }
        });

        // Get last 12 months data
        const now = new Date();
        const months: string[] = [];
        const counts: number[] = [];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        for (let i = 11; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthName = monthNames[d.getMonth()];
            months.push(monthName);
            counts.push(monthCount[monthName] || 0);
        }

        this.chartData = {
            labels: months,
            datasets: [
                {
                    type: 'bar',
                    label: 'Maintenance Requests',
                    backgroundColor: '#FF6B6B',
                    data: counts,
                    barThickness: 32
                }
            ]
        };
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const borderColor = documentStyle.getPropertyValue('--surface-border');
        const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    }
                },
                y: {
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: borderColor,
                        borderColor: 'transparent',
                        drawTicks: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
