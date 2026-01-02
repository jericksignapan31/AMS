import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-masterplan',
    standalone: true,
    imports: [CommonModule, ToolbarModule, ButtonModule, RippleModule, TableModule, InputTextModule, FormsModule],
    styles: [
        `
            :host ::ng-deep {
                .master-plan-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .master-plan-split {
                    display: flex;
                    gap: 8px;
                    height: calc(100vh - 300px);
                    min-height: 600px;
                }

                .master-plan-section {
                    background: var(--surface-card);
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .master-plan-section.particulars {
                    flex: 0 0 50%;
                }

                .master-plan-section.timeline {
                    flex: 0 0 50%;
                }

                .section-header {
                    background: var(--primary-color);
                    color: var(--primary-contrast-color);
                    padding: 16px 24px;
                    font-size: 1.25rem;
                    font-weight: 600;
                    text-align: center;
                    flex-shrink: 0;
                }

                .table-wrapper {
                    overflow-x: auto;
                    overflow-y: auto;
                    padding: 20px;
                    background: var(--surface-ground);
                    flex: 1;
                }

                .table-wrapper::-webkit-scrollbar {
                    height: 10px;
                    width: 8px;
                }

                .table-wrapper::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }

                .table-wrapper::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }

                .table-wrapper::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }

                .particulars-table {
                    width: 100%;
                    min-width: 1200px;
                    border-collapse: collapse;
                    background: white;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }

                .particulars-table th,
                .particulars-table td {
                    border: 1px solid #e0e0e0;
                    padding: 12px 8px;
                    text-align: center;
                    font-size: 0.9rem;
                    white-space: nowrap;
                }

                .particulars-table th {
                    background: var(--primary-color);
                    font-weight: 600;
                    color: var(--primary-contrast-color);
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }

                .particulars-table thead tr:nth-child(2) th {
                    top: 37px;
                }

                .particulars-table th:first-child {
                    min-width: 250px;
                    text-align: left;
                }

                .particulars-table .section-header-row {
                    background: linear-gradient(90deg, #f7fafc 0%, #edf2f7 100%);
                    text-align: left;
                    font-weight: 600;
                    color: #2d3748;
                }

                .particulars-table .item-row {
                    background: #fff;
                    font-weight: 600;
                    transition: background 0.2s;
                }

                .particulars-table .item-row:hover {
                    background: #f7fafc;
                }

                .particulars-table .sub-item {
                    background: #fafafa;
                    font-size: 0.85rem;
                    color: #4a5568;
                }

                .particulars-table .sub-item:hover {
                    background: #f0f0f0;
                }

                .particulars-table .red-text {
                    color: #e53e3e;
                    font-weight: 500;
                }

                .maintenance-table {
                    width: 100%;
                    min-width: 3600px;
                    border-collapse: collapse;
                    background: white;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }

                .maintenance-table th,
                .maintenance-table td {
                    border: 1px solid #cbd5e0;
                    padding: 10px;
                    text-align: center;
                    min-width: 70px;
                    font-size: 0.85rem;
                }

                .maintenance-table th {
                    font-weight: 600;
                    color: white;
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }

                .maintenance-table .inventory-header {
                    background: var(--primary-color);
                }

                .maintenance-table .preventive-header {
                    background: var(--primary-color);
                }

                .maintenance-table .corrective-header {
                    background: var(--primary-color);
                }

                .maintenance-table .calibration-header {
                    background: var(--primary-color);
                }

                .maintenance-table tbody td {
                    background: #fffbeb;
                    height: 32px;
                    transition: all 0.2s;
                    cursor: pointer;
                    font-weight: 500;
                }

                .maintenance-table tbody td:hover {
                    background: #fef3c7;
                    box-shadow: inset 0 0 0 2px #f59e0b;
                }

                .maintenance-table tbody tr:nth-child(even) td {
                    background: #fef9e7;
                }

                .maintenance-table tbody tr:nth-child(even) td:hover {
                    background: #fef3c7;
                }

                @media (max-width: 1200px) {
                    .master-plan-split {
                        flex-direction: column;
                        height: auto;
                    }

                    .master-plan-section.particulars {
                        flex: 0 0 auto;
                    }

                    .master-plan-section.timeline {
                        flex: 0 0 auto;
                    }
                }

                @media (max-width: 768px) {
                    .section-header {
                        font-size: 1rem;
                        padding: 12px 16px;
                    }

                    .table-wrapper {
                        padding: 12px;
                    }

                    .particulars-table th,
                    .particulars-table td {
                        padding: 8px 6px;
                        font-size: 0.8rem;
                    }

                    .maintenance-table th,
                    .maintenance-table td {
                        min-width: 60px;
                        padding: 8px;
                        font-size: 0.75rem;
                    }
                }
            }
        `
    ],
    template: `
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <i class="pi pi-calendar text-2xl" style="color: #667eea"></i>
                    <span class="text-xl font-bold">Master Plan</span>
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2">
                        <label class="font-semibold">Year:</label>
                        <select [(ngModel)]="selectedYear" (ngModelChange)="onFilterChange()" class="p-inputtext" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">All Years</option>
                            <option *ngFor="let year of years" [value]="year">
                                {{ year }}
                            </option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="font-semibold">Laboratory:</label>
                        <select [(ngModel)]="selectedLaboratory" (ngModelChange)="onFilterChange()" class="p-inputtext" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">Select Laboratory</option>
                            <option *ngFor="let lab of laboratories" [value]="lab.laboratoryId">
                                {{ lab.laboratoryName }}
                            </option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="font-semibold">Category:</label>
                        <select [(ngModel)]="selectedCategory" (ngModelChange)="onFilterChange()" class="p-inputtext" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">All Categories</option>
                            <option *ngFor="let category of categories" [value]="category">
                                {{ category }}
                            </option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <p-button label="Print" icon="pi pi-print" severity="secondary" [outlined]="true" />
                        <p-button label="Export" icon="pi pi-upload" severity="success" [outlined]="true" />
                    </div>
                </div>
            </ng-template>
        </p-toolbar>

        <div class="master-plan-container">
            <div class="master-plan-split">
                <div class="master-plan-section particulars">
                    <div class="section-header">
                        <i class="pi pi-list mr-2"></i>
                        PARTICULARS
                    </div>

                    <div class="table-wrapper">
                        <table class="particulars-table">
                            <thead>
                                <tr>
                                    <th rowspan="2">Name of Machine / Equipment / Instrument</th>
                                    <th rowspan="2">Quantity</th>
                                    <th rowspan="2">Acquired</th>
                                    <th colspan="2">Serial No.</th>
                                    <th rowspan="2">Location</th>
                                    <th rowspan="2">Price</th>
                                    <th rowspan="2">Functional</th>
                                    <th rowspan="2">Under Repair</th>
                                </tr>
                                <tr>
                                    <th>Desktop</th>
                                    <th>MONITOR / CPU</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (masterPlanData && groupedEquipment.length > 0) {
                                    <tr class="item-row">
                                        <td style="text-align: left; padding-left: 16px;">
                                            <strong>{{ masterPlanData.laboratoryName }}</strong
                                            ><br /><small style="color: #718096; font-size: 0.85em;">{{ masterPlanData.laboratoryLocation || 'N/A' }}</small>
                                        </td>
                                        <td>
                                            <strong>{{ masterPlanData.totalEquipment || equipmentList.length }}</strong>
                                        </td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td style="color: #2f855a; font-weight: 600;">{{ getTotalPrice() | number: '1.2-2' }}</td>
                                        <td>
                                            <span style="background: #c6f6d5; color: #276749; padding: 4px 12px; border-radius: 12px; font-weight: 600;">{{ getFunctionalCount() }}</span>
                                        </td>
                                        <td>
                                            <span style="background: #fed7d7; color: #c53030; padding: 4px 12px; border-radius: 12px; font-weight: 600;">{{ masterPlanData.underRepair || 0 }}</span>
                                        </td>
                                    </tr>
                                    @for (group of groupedEquipment; track group.displayName) {
                                        @for (equipment of group.equipment; track equipment.equipment.assetId; let i = $index) {
                                            <tr class="sub-item">
                                                <td style="text-align: left; padding-left: 32px;">
                                                    @if (i === 0) {
                                                        {{ group.displayName }}
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                                @if (equipment.equipment.equipmentName?.toLowerCase().includes('desktop') || equipment.equipment.equipmentName?.toLowerCase().includes('cpu')) {
                                                    <td>{{ equipment.equipment.serialNumber }}</td>
                                                    <td></td>
                                                } @else if (equipment.equipment.equipmentName?.toLowerCase().includes('monitor')) {
                                                    <td></td>
                                                    <td>{{ equipment.equipment.serialNumber }}</td>
                                                } @else {
                                                    <td>{{ equipment.equipment.serialNumber }}</td>
                                                    <td></td>
                                                }
                                                <td>{{ equipment.equipment.location || 'N/A' }}</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        }
                                    }
                                } @else {
                                    <tr class="section-header-row">
                                        <td colspan="9"><i class="pi pi-tag mr-2"></i>A) Frequently Used</td>
                                    </tr>

                                    <tr class="item-row">
                                        <td style="text-align: left; padding-left: 16px;">DATA SCIENCE LABORATORY</td>
                                        <td><strong>41</strong></td>
                                        <td>1/4/2019</td>
                                        <td>MMLY7SS0228130BC1D858B</td>
                                        <td>DTVPPSP33984604B929600</td>
                                        <td>Lab 9-204</td>
                                        <td style="color: #2f855a; font-weight: 600;">P56,810.00</td>
                                        <td><span style="background: #c6f6d5; color: #276749; padding: 4px 12px; border-radius: 12px; font-weight: 600;">39</span></td>
                                        <td><span style="background: #fed7d7; color: #c53030; padding: 4px 12px; border-radius: 12px; font-weight: 600;">2</span></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;">ICT Bldg. 9-204 2nd Flr.</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC24858B</td>
                                        <td>DTVPPSP339846048AB9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC25858B</td>
                                        <td>DTVPPSP339846048AA9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;">ACER VERITON M2640</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC26858B</td>
                                        <td>DTVPPSP339846048B69600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item red-text">
                                        <td style="text-align: left; padding-left: 32px;">Desktop w/21.5" Inches Led Monitor</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC27859B</td>
                                        <td>DTVPPSP339846040A09600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 48px;">HDD: 1TB</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC28858B</td>
                                        <td>DTVPPSP339846048A79600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 48px;">RAM: 8GB</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC29858B</td>
                                        <td>DTVPPSP339846048B89600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 48px;">PROCESSOR: CORE/7</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC2B858B</td>
                                        <td>DTVPPSP339846048B29600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 48px;">OS: WINDOWS 10</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC2C858B</td>
                                        <td>DTVPPSP339846048A99600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC2D858B</td>
                                        <td>DTVPPSP339846048A29600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC2F858B</td>
                                        <td>DTVPPSP339846048BF9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC30858B</td>
                                        <td>DTVPPSP339846048AF9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC31858B</td>
                                        <td>DTVPPSP339846048A59600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC32858B</td>
                                        <td>DTVPPSP339846048AC9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC33858B</td>
                                        <td>DTVPPSP339846048BC9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC34858B</td>
                                        <td>DTVPPSP339846048B99600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC35858B</td>
                                        <td>DTVPPSP339846048979600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC38858B</td>
                                        <td>DTVPPSP339846048B99600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC37858B</td>
                                        <td>DTVPPSP339846048A19600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC38858B</td>
                                        <td>DTVPPSP339846048BC9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC39858B</td>
                                        <td>DTVPPSP339846048B39600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BF85858B</td>
                                        <td>DTVPPSP339846048BD9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BFB6858B</td>
                                        <td>DTVPPSP339846048B09600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="master-plan-section timeline">
                    <div class="section-header">
                        <i class="pi pi-wrench mr-2"></i>
                        TIMELINE
                    </div>

                    <div class="table-wrapper">
                        <table class="maintenance-table">
                            <thead>
                                <tr>
                                    <th colspan="9" class="inventory-header">INVENTORY</th>
                                    <th colspan="9" class="preventive-header">PREVENTIVE</th>
                                    <th colspan="12" class="corrective-header">CORRECTIVE</th>
                                    <th colspan="12" class="calibration-header">CALIBRATION</th>
                                </tr>
                                <tr>
                                    <th class="inventory-header">APR</th>
                                    <th class="inventory-header">MAY</th>
                                    <th class="inventory-header">JUN</th>
                                    <th class="inventory-header">JUL</th>
                                    <th class="inventory-header">AUG</th>
                                    <th class="inventory-header">SEP</th>
                                    <th class="inventory-header">OCT</th>
                                    <th class="inventory-header">NOV</th>
                                    <th class="inventory-header">DEC</th>
                                    <th class="preventive-header">APR</th>
                                    <th class="preventive-header">MAY</th>
                                    <th class="preventive-header">JUN</th>
                                    <th class="preventive-header">JUL</th>
                                    <th class="preventive-header">AUG</th>
                                    <th class="preventive-header">SEP</th>
                                    <th class="preventive-header">OCT</th>
                                    <th class="preventive-header">NOV</th>
                                    <th class="preventive-header">DEC</th>
                                    <th class="corrective-header">JAN</th>
                                    <th class="corrective-header">FEB</th>
                                    <th class="corrective-header">MAR</th>
                                    <th class="corrective-header">APR</th>
                                    <th class="corrective-header">MAY</th>
                                    <th class="corrective-header">JUN</th>
                                    <th class="corrective-header">JUL</th>
                                    <th class="corrective-header">AUG</th>
                                    <th class="corrective-header">SEP</th>
                                    <th class="corrective-header">OCT</th>
                                    <th class="corrective-header">NOV</th>
                                    <th class="corrective-header">DEC</th>
                                    <th class="calibration-header">JAN</th>
                                    <th class="calibration-header">FEB</th>
                                    <th class="calibration-header">MAR</th>
                                    <th class="calibration-header">APR</th>
                                    <th class="calibration-header">MAY</th>
                                    <th class="calibration-header">JUN</th>
                                    <th class="calibration-header">JUL</th>
                                    <th class="calibration-header">AUG</th>
                                    <th class="calibration-header">SEP</th>
                                    <th class="calibration-header">OCT</th>
                                    <th class="calibration-header">NOV</th>
                                    <th class="calibration-header">DEC</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (masterPlanData && equipmentList.length > 0) {
                                    @for (equipment of equipmentList; track equipment.equipment.assetId) {
                                        <tr>
                                            <!-- INVENTORY Section - 9 months (APR-DEC: 4-12) -->
                                            @for (month of [4, 5, 6, 7, 8, 9, 10, 11, 12]; track month) {
                                                <td>{{ getMaintenanceMark(equipment, month, 'inventory') }}</td>
                                            }
                                            <!-- PREVENTIVE Section - 9 months (APR-DEC: 4-12) -->
                                            @for (month of [4, 5, 6, 7, 8, 9, 10, 11, 12]; track month) {
                                                <td>{{ getMaintenanceMark(equipment, month, 'preventive') }}</td>
                                            }
                                            <!-- CORRECTIVE Section - 12 months (JAN-DEC: 1-12) -->
                                            @for (month of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; track month) {
                                                <td>{{ getMaintenanceMark(equipment, month, 'corrective') }}</td>
                                            }
                                            <!-- CALIBRATION Section - 12 months (JAN-DEC: 1-12) -->
                                            @for (month of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; track month) {
                                                <td>{{ getMaintenanceMark(equipment, month, 'calibration') }}</td>
                                            }
                                        </tr>
                                    }
                                } @else {
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class MasterPlanComponent implements OnInit {
    selectedYear: string = '';
    selectedLaboratory: string = '';
    selectedCategory: string = '';
    laboratories: any[] = [];
    years: string[] = [];
    categories: string[] = ['Software', 'Hardware'];
    masterPlanData: any = null;
    equipmentList: any[] = [];
    groupedEquipment: any[] = [];

    private currentYear = new Date().getFullYear();

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.generateYears();
        this.loadLaboratories();
    }

    generateYears() {
        const years = [];
        for (let i = this.currentYear; i >= this.currentYear - 10; i--) {
            years.push(i.toString());
        }
        this.years = years;
        console.log('📅 Available years:', this.years);
    }

    getMaintenanceMark(equipment: any, month: number, type: 'preventive' | 'calibration' | 'corrective' | 'inventory'): string {
        if (!equipment || !equipment.monthlyData) return '';
        const monthData = equipment.monthlyData.find((m: any) => m.month === month);
        if (!monthData || !monthData.maintenance) return '';
        return monthData.maintenance[type] === 'X' ? 'X' : '';
    }

    onFilterChange() {
        console.log('🔍 Filter Changed');
        console.log('📅 Selected Year:', this.selectedYear || 'ALL');
        console.log('🏢 Selected Laboratory:', this.selectedLaboratory || 'ALL');
        console.log('📂 Selected Category:', this.selectedCategory || 'ALL');

        // Only call API if both filters are selected
        if (this.selectedYear && this.selectedLaboratory) {
            this.fetchMasterPlanData();
        } else {
            console.warn('⚠️ Both year and laboratory must be selected to fetch data');
        }
    }

    fetchMasterPlanData() {
        const apiUrl = `${environment.apiUrl}/reports/master-plan/annual`;
        const params: any = {
            year: this.selectedYear,
            laboratoryId: this.selectedLaboratory
        };

        console.log('📡 Fetching Master Plan data from:', apiUrl);
        console.log('📋 Query Parameters:', params);

        this.http.get<any>(apiUrl, { params }).subscribe({
            next: (data) => {
                console.log('✅ Master Plan Data Loaded:', data);
                console.table(data);

                this.masterPlanData = data;
                let allEquipment = data.equipmentMaintenances || [];

                // Filter by category if selected
                if (this.selectedCategory) {
                    this.equipmentList = allEquipment.filter((item: any) => item.equipment?.category === this.selectedCategory);
                    console.log(`🔍 Filtered by category "${this.selectedCategory}":`, this.equipmentList.length, 'items');
                } else {
                    this.equipmentList = allEquipment;
                }

                this.groupEquipment();

                console.log('📦 Equipment List:', this.equipmentList);
                console.log('🔢 Total Equipment:', this.equipmentList.length);
                console.log('📊 Grouped Equipment:', this.groupedEquipment);
            },
            error: (error) => {
                console.error('❌ Error fetching Master Plan data:', error);
            }
        });
    }

    groupEquipment() {
        const grouped = new Map<string, any[]>();

        this.equipmentList.forEach((item) => {
            const key = `${item.equipment.equipmentName || ''} ${item.equipment.specifications || ''}`.trim();
            if (!grouped.has(key)) {
                grouped.set(key, []);
            }
            grouped.get(key)?.push(item);
        });

        this.groupedEquipment = Array.from(grouped.entries()).map(([key, items]) => ({
            displayName: key,
            equipment: items
        }));
    }

    getTotalPrice(): number {
        return this.equipmentList.reduce((total, item) => {
            const price = parseFloat(item.equipment?.price) || 0;
            return total + price;
        }, 0);
    }

    getFunctionalCount(): number {
        if (!this.masterPlanData) return 0;
        const total = this.masterPlanData.totalEquipment || 0;
        const underRepair = this.masterPlanData.underRepair || 0;
        return total - underRepair;
    }

    loadLaboratories() {
        const apiUrl = `${environment.apiUrl}/laboratories`;
        console.log('📡 Fetching laboratories from:', apiUrl);

        this.http.get<any[]>(apiUrl).subscribe({
            next: (data) => {
                console.log('✅ Laboratories loaded:', data);
                this.laboratories = data || [];
                console.log('📊 Total laboratories:', this.laboratories.length);
            },
            error: (error) => {
                console.error('❌ Error loading laboratories:', error);
            }
        });
    }
}
