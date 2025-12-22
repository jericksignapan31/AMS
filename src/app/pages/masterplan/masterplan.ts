import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-masterplan',
    standalone: true,
    imports: [CommonModule, ToolbarModule, ButtonModule, RippleModule, TableModule],
    styles: [
        `
            :host ::ng-deep {
                .master-plan-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .master-plan-section {
                    background: var(--surface-card);
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }

                .section-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 16px 24px;
                    font-size: 1.25rem;
                    font-weight: 600;
                    text-align: center;
                }

                .table-wrapper {
                    overflow-x: auto;
                    padding: 20px;
                    background: var(--surface-ground);
                }

                /* Custom scrollbar */
                .table-wrapper::-webkit-scrollbar {
                    height: 10px;
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
                    min-width: 1000px;
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
                    background: linear-gradient(180deg, #ffc7ce 0%, #ffb3bc 100%);
                    font-weight: 600;
                    color: #2d3748;
                    position: sticky;
                    top: 0;
                    z-index: 10;
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
                    min-width: 2400px;
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

                .maintenance-table .preventive-header {
                    background: linear-gradient(180deg, #48bb78 0%, #38a169 100%);
                }

                .maintenance-table .corrective-header {
                    background: linear-gradient(180deg, #f56565 0%, #e53e3e 100%);
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
                <div class="flex items-center gap-2">
                    <p-button label="Print" icon="pi pi-print" severity="secondary" [outlined]="true" />
                    <p-button label="Export" icon="pi pi-upload" severity="success" [outlined]="true" />
                </div>
            </ng-template>
        </p-toolbar>

        <div class="master-plan-container">
            <!-- PARTICULARS Section -->
            <div class="master-plan-section">
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
                            <tr class="section-header-row">
                                <td colspan="9"><i class="pi pi-tag mr-2"></i>A) Frequently Used</td>
                            </tr>

                            <tr class="item-row">
                                <td style="text-align: left; padding-left: 16px;">Ì≥ä DATA SCIENCE LABORATORY</td>
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
                                <td style="text-align: left; padding-left: 32px;">Ì≥ç ICT Bldg. 9-204 2nd Flr.</td>
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
                                <td style="text-align: left; padding-left: 32px;">Ì≤ª ACER VERITON M2640</td>
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
                                <td style="text-align: left; padding-left: 32px;">Ì∂•Ô∏è Desktop w/21.5" Inches Led Monitor</td>
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
                                <td style="text-align: left; padding-left: 48px;">Ì≤æ HDD: 1TB</td>
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
                                <td style="text-align: left; padding-left: 48px;">Ì¥ß RAM: 8GB</td>
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
                                <td style="text-align: left; padding-left: 48px;">‚öôÔ∏è PROCESSOR: CORE/7</td>
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
                                <td style="text-align: left; padding-left: 48px;">Ì∫ü OS: WINDOWS 10</td>
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
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- MAINTENANCE TIMELINE Section -->
            <div class="master-plan-section">
                <div class="section-header">
                    <i class="pi pi-wrench mr-2"></i>
                    MAINTENANCE TIMELINE
                </div>
                
                <div class="table-wrapper">
                    <table class="maintenance-table">
                        <thead>
                            <tr>
                                <th colspan="10" class="preventive-header">PREVENTIVE MAINTENANCE</th>
                                <th colspan="12" class="corrective-header">CORRECTIVE MAINTENANCE</th>
                            </tr>
                            <tr>
                                <th class="preventive-header">APR</th>
                                <th class="preventive-header">MAY</th>
                                <th class="preventive-header">JUN</th>
                                <th class="preventive-header">JUL</th>
                                <th class="preventive-header">AUG</th>
                                <th class="preventive-header">SEP</th>
                                <th class="preventive-header">OCT</th>
                                <th class="preventive-header">NOV</th>
                                <th class="preventive-header">DEC</th>
                                <th class="preventive-header"></th>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
})
export class MasterPlanComponent implements OnInit {
    ngOnInit() {}
}
