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
                .particulars-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .particulars-table th,
                .particulars-table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: center;
                }
                .particulars-table th {
                    background-color: #ffc7ce;
                    font-weight: bold;
                    color: #000;
                }
                .particulars-table .section-header {
                    background-color: #fff;
                    text-align: left;
                    font-weight: bold;
                }
                .particulars-table .item-row {
                    background-color: #fff;
                    font-weight: bold;
                }
                .particulars-table .sub-item {
                    background-color: #fff;
                    font-size: 0.9em;
                }
                .particulars-table .red-text {
                    color: red;
                }
            }
        `
    ],
    template: `
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <span class="text-lg font-bold">Master Plan</span>
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Print" icon="pi pi-print" severity="secondary" />
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" />
                </div>
            </ng-template>
        </p-toolbar>

        <div class="card">
            <h2 class="text-2xl font-bold text-center mb-4">PARTICULARS</h2>

            <div class="overflow-x-auto">
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
                        <tr class="section-header">
                            <td colspan="9">A) Frequently Used</td>
                        </tr>

                        <tr class="item-row">
                            <td>DATA SCIENCE LABORATORY</td>
                            <td>41</td>
                            <td>1/4/2019</td>
                            <td>MMLY7SS0228130BC1D858B</td>
                            <td>DTVPPSP33984604B929600</td>
                            <td>Lab 9-204</td>
                            <td>P56,810.00</td>
                            <td>39</td>
                            <td>2</td>
                        </tr>
                        <tr class="sub-item">
                            <td>ICT Bldg. 9-204 2nd Flr.</td>
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
                            <td></td>
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
                            <td>ACER VERITON M2640</td>
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
                            <td>Desktop w/21.5" Inches Led Monitor</td>
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
                            <td>HDD: 1TB</td>
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
                            <td>RAM: 8GB</td>
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
                            <td>PROCESSOR: CORE/7</td>
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
                            <td>OS: WINDOWS 10</td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
    `
})
export class MasterPlanComponent implements OnInit {
    ngOnInit() {}
}
