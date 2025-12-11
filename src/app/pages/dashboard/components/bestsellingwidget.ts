import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MaintenanceService } from '../../service/maintenance.service';

interface AssetRepairCount {
    assetName: string;
    count: number;
    percentage: number;
    color: string;
}

@Component({
    standalone: true,
    selector: 'app-best-selling-widget',
    imports: [CommonModule, ButtonModule, MenuModule],
    template: ` <div class="card">
        <div class="flex justify-between items-center mb-6">
            <div class="font-semibold text-xl">Most Frequently Repaired Assets</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>
        <ul class="list-none p-0 m-0">
            <li *ngFor="let asset of topAssets" class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">{{ asset.assetName }}</span>
                    <div class="mt-1 text-muted-color">Maintenance Count: {{ asset.count }}</div>
                </div>
                <div class="mt-2 md:mt-0 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div [style.width.%]="asset.percentage" [style.backgroundColor]="asset.color" class="h-full"></div>
                    </div>
                    <span [style.color]="asset.color" class="ml-4 font-medium">{{ asset.percentage }}%</span>
                </div>
            </li>
        </ul>
    </div>`
})
export class BestSellingWidget implements OnInit {
    topAssets: AssetRepairCount[] = [];
    items: any[] = [];

    constructor(private maintenanceService: MaintenanceService) {
        this.items = [
            { label: 'Update', icon: 'pi pi-refresh' },
            { label: 'Export', icon: 'pi pi-download' }
        ];
    }

    ngOnInit() {
        this.loadMostRepairedAssets();
    }

    loadMostRepairedAssets() {
        this.maintenanceService.getMaintenanceRequests().subscribe({
            next: (data: any[]) => {
                const assetCount: { [key: string]: number } = {};

                data.forEach((req: any) => {
                    const assetName = req.assetName || 'Unknown Asset';
                    assetCount[assetName] = (assetCount[assetName] || 0) + 1;
                });

                const total = Object.values(assetCount).reduce((a: number, b: number) => a + b, 0);
                const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA502', '#8E44AD', '#2ECC71'];

                this.topAssets = Object.entries(assetCount)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 6)
                    .map(([asset, count], index) => ({
                        assetName: asset,
                        count: count as number,
                        percentage: Math.round(((count as number) / total) * 100),
                        color: colors[index % colors.length]
                    }));

                console.log('✅ Most repaired assets loaded');
            },
            error: (err: any) => {
                console.error('❌ Error loading maintenance requests:', err);
            }
        });
    }
}
