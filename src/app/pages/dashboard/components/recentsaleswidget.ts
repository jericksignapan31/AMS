import { Component, OnInit } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../service/asset.service';

@Component({
    standalone: true,
    selector: 'app-recent-sales-widget',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule],
    template: `<div class="card mb-8!">
        <div class="font-semibold text-xl mb-4">Recent Assets</div>
        <p-table [value]="assets" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th pSortableColumn="assetName">Asset Name <p-sortIcon field="assetName"></p-sortIcon></th>
                    <th pSortableColumn="category">Category <p-sortIcon field="category"></p-sortIcon></th>
                    <th>Status</th>
                    <th pSortableColumn="propertyNumber">Property No. <p-sortIcon field="propertyNumber"></p-sortIcon></th>
                </tr>
            </ng-template>
            <ng-template #body let-asset>
                <tr>
                    <td style="width: 30%; min-width: 10rem;">{{ asset.assetName || asset.AssetName || 'N/A' }}</td>
                    <td style="width: 25%; min-width: 8rem;">{{ asset.category || asset.Category || 'N/A' }}</td>
                    <td style="width: 20%;">
                        <span class="inline-flex align-items-center gap-2">
                            <span [ngClass]="{ 'text-green-600': asset.Status_id === '1', 'text-red-600': asset.Status_id !== '1' }">
                                {{ asset.Status_id === '1' ? '● Active' : '● Inactive' }}
                            </span>
                        </span>
                    </td>
                    <td style="width: 25%; min-width: 8rem;">{{ asset.propertyNumber || asset.PropertyNo || 'N/A' }}</td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
    providers: []
})
export class RecentSalesWidget implements OnInit {
    assets: any[] = [];

    constructor(private assetService: AssetService) {}

    ngOnInit() {
        this.loadAssets();
    }

    loadAssets() {
        this.assetService.getAssets().subscribe({
            next: (data: any[]) => {
                this.assets = data.slice(0, 10);
                console.log('✅ Recent Assets loaded');
            },
            error: (err: any) => {
                console.error('❌ Error loading assets:', err);
            }
        });
    }
}
