import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AssetService } from '../../service/asset.service';

@Component({
    selector: 'app-asset-summary-widget',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, RouterModule],
    template: `
        <div class="col-span-12 lg:col-span-4">
            <p-card class="h-full">
                <ng-template #header>
                    <div class="flex items-center justify-between p-4 border-b">
                        <h3 class="text-lg font-bold">Assets</h3>
                        <i class="pi pi-box text-3xl text-blue-500"></i>
                    </div>
                </ng-template>

                <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600">Total Assets</p>
                            <p class="text-3xl font-bold text-blue-600">{{ totalAssets }}</p>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600">Active</p>
                            <p class="text-3xl font-bold text-green-600">{{ activeAssets }}</p>
                        </div>
                    </div>

                    <div class="bg-linear-to-r from-blue-500 to-blue-600 p-4 rounded-lg text-white">
                        <p class="text-sm opacity-90">Categories</p>
                        <p class="text-3xl font-bold">{{ assetCategories }}</p>
                    </div>

                    <p-button label="View Asset Report" routerLink="/reports/assets" icon="pi pi-arrow-right" iconPos="right" class="w-full" severity="info" />
                </div>
            </p-card>
        </div>
    `,
    providers: [MessageService]
})
export class AssetSummaryWidget implements OnInit {
    totalAssets = 0;
    activeAssets = 0;
    assetCategories = 0;

    constructor(private assetService: AssetService) {}

    ngOnInit() {
        this.loadAssetData();
    }

    loadAssetData() {
        this.assetService.getAssets().subscribe({
            next: (data: any[]) => {
                this.totalAssets = data.length;
                this.activeAssets = data.filter((a: any) => a.Status_id === '1').length;
                this.assetCategories = new Set(data.map((a: any) => a.category || a.Category)).size;
                console.log('✅ Asset Summary loaded');
            },
            error: (err: any) => {
                console.error('❌ Error loading assets:', err);
            }
        });
    }
}
