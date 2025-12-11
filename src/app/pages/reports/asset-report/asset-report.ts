import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { MessageService } from 'primeng/api';
import { AssetService, Asset } from '../../service/asset.service';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
    selector: 'app-asset-report',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, TableModule, SelectModule, InputTextModule, CardModule, ToastModule, ToolbarModule, TagModule, DatePickerModule],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <h2 class="text-2xl font-bold">Asset Report</h2>
            </ng-template>
            <ng-template #end>
                <p-button label="Export to CSV" icon="pi pi-download" severity="success" (onClick)="exportToCSV()" />
                <p-button label="Print" icon="pi pi-print" severity="info" (onClick)="printReport()" class="ml-2" />
            </ng-template>
        </p-toolbar>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-gray-600 text-sm">Total Assets</p>
                <p class="text-3xl font-bold text-blue-600">{{ assets.length }}</p>
            </div>
            <div class="p-4 bg-green-50 rounded-lg">
                <p class="text-gray-600 text-sm">Active Assets</p>
                <p class="text-3xl font-bold text-green-600">{{ getActiveAssetsCount() }}</p>
            </div>
            <div class="p-4 bg-orange-50 rounded-lg">
                <p class="text-gray-600 text-sm">By Category</p>
                <p class="text-3xl font-bold text-orange-600">{{ getCategoriesCount() }}</p>
            </div>
        </div>

        <p-card class="mb-4">
            <ng-template #header>
                <div class="flex gap-4 p-4">
                    <div class="flex-1">
                        <label class="block text-sm font-medium mb-2">Category Filter</label>
                        <p-select [(ngModel)]="selectedCategory" [options]="categories" optionLabel="category" optionValue="category" placeholder="All Categories" [showClear]="true" (onChange)="filterAssets()" />
                    </div>
                    <div class="flex-1">
                        <label class="block text-sm font-medium mb-2">Status Filter</label>
                        <p-select [(ngModel)]="selectedStatus" [options]="['Active', 'Inactive', 'All']" placeholder="All Status" [showClear]="true" (onChange)="filterAssets()" />
                    </div>
                    <div class="flex items-end">
                        <p-button label="Clear Filters" icon="pi pi-times" severity="secondary" (onClick)="clearFilters()" />
                    </div>
                </div>
            </ng-template>

            <p-table [value]="filteredAssets" responsiveLayout="scroll" [paginator]="true" [rows]="10">
                <ng-template #header>
                    <tr>
                        <th pSortableColumn>Asset Name <p-sortIcon field="assetName" /></th>
                        <th pSortableColumn>Category <p-sortIcon field="category" /></th>
                        <th pSortableColumn>Property No. <p-sortIcon field="propertyNumber" /></th>
                        <th>Issued To</th>
                        <th>Status</th>
                        <th>Location</th>
                    </tr>
                </ng-template>
                <ng-template #body let-asset>
                    <tr>
                        <td>{{ asset.assetName || asset.AssetName || 'N/A' }}</td>
                        <td>{{ asset.category || asset.Category || 'N/A' }}</td>
                        <td>{{ asset.propertyNumber || asset.PropertyNo || 'N/A' }}</td>
                        <td>{{ asset.issuedTo || asset.IssuedTo || 'N/A' }}</td>
                        <td>
                            <p-tag [value]="asset.Status_id === '1' ? 'Active' : 'Inactive'" [severity]="asset.Status_id === '1' ? 'success' : 'secondary'" />
                        </td>
                        <td>{{ asset.foundCluster || asset.FoundCluster || 'N/A' }}</td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="6" class="text-center p-4">No assets found matching the selected filters.</td>
                    </tr>
                </ng-template>
            </p-table>
        </p-card>

        <p-card>
            <ng-template #header>
                <h3 class="text-lg font-bold p-4">Assets by Category</h3>
            </ng-template>
            <p-table [value]="getCategoryBreakdown()">
                <ng-template #header>
                    <tr>
                        <th>Category</th>
                        <th>Count</th>
                        <th>Percentage</th>
                    </tr>
                </ng-template>
                <ng-template #body let-row>
                    <tr>
                        <td>{{ row.category || 'Uncategorized' }}</td>
                        <td>{{ row.count }}</td>
                        <td>{{ ((row.count / assets.length) * 100).toFixed(2) }}%</td>
                    </tr>
                </ng-template>
            </p-table>
        </p-card>
    `,
    styles: [
        `
            :host ::ng-deep {
                .p-card {
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
            }
        `
    ]
})
export class AssetReportComponent implements OnInit {
    assets: Asset[] = [];
    filteredAssets: Asset[] = [];
    categories: any[] = [];
    selectedCategory: string = '';
    selectedStatus: string = '';

    constructor(
        private assetService: AssetService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.loadAssets();
    }

    loadAssets() {
        this.assetService.getAssets().subscribe({
            next: (data) => {
                this.assets = data;
                this.filteredAssets = data;
                this.extractCategories();
                console.log('✅ Assets loaded:', this.assets.length);
            },
            error: (err) => {
                console.error('❌ Error loading assets:', err);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load assets' });
            }
        });
    }

    extractCategories() {
        const uniqueCategories = new Set(this.assets.map((a) => a.category || a.Category).filter((c) => c));
        this.categories = Array.from(uniqueCategories).map((cat) => ({ category: cat }));
    }

    filterAssets() {
        this.filteredAssets = this.assets.filter((asset) => {
            const matchCategory = !this.selectedCategory || (asset.category || asset.Category) === this.selectedCategory;
            const matchStatus = !this.selectedStatus || (this.selectedStatus === 'Active' ? asset.Status_id === '1' : asset.Status_id !== '1');
            return matchCategory && matchStatus;
        });
    }

    clearFilters() {
        this.selectedCategory = '';
        this.selectedStatus = '';
        this.filteredAssets = this.assets;
    }

    getActiveAssetsCount(): number {
        return this.assets.filter((a) => a.Status_id === '1').length;
    }

    getCategoriesCount(): number {
        return new Set(this.assets.map((a) => a.category || a.Category)).size;
    }

    getCategoryBreakdown(): any[] {
        const breakdown: { [key: string]: number } = {};
        this.assets.forEach((asset) => {
            const cat = asset.category || asset.Category || 'Uncategorized';
            breakdown[cat] = (breakdown[cat] || 0) + 1;
        });
        return Object.entries(breakdown).map(([category, count]) => ({ category, count }));
    }

    exportToCSV() {
        const headers = ['Asset Name', 'Category', 'Property Number', 'Issued To', 'Status', 'Location'];
        const rows = this.filteredAssets.map((a) => [a.assetName || a.AssetName, a.category || a.Category, a.propertyNumber || a.PropertyNo, a.issuedTo || a.IssuedTo, a.Status_id === '1' ? 'Active' : 'Inactive', a.foundCluster || a.FoundCluster]);

        let csv = headers.join(',') + '\n';
        rows.forEach((row) => {
            csv += row.map((cell) => `"${cell || ''}"`).join(',') + '\n';
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `asset-report-${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.messageService.add({ severity: 'success', summary: 'Exported', detail: 'Asset report exported to CSV' });
    }

    printReport() {
        window.print();
    }
}
