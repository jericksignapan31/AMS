import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule, Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
    selector: 'app-labschedule',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        InputTextModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        TooltipModule,
        DialogModule,
        SelectModule,
        InputNumberModule,
        TextareaModule,
        DatePickerModule
    ],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedSchedules.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search lab schedules..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="schedules"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="scheduleId"
            [(selection)]="selectedSchedules"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} schedules"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:20rem">ID</th>
                    <th pSortableColumn="laboratoryName" style="min-width:20rem">Laboratory <p-sortIcon field="laboratoryName" /></th>
                    <th style="min-width:15rem">Date</th>
                    <th style="min-width:15rem">Time</th>
                    <th style="min-width:15rem">Status</th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>

            <ng-template pTemplate="body" let-schedule>
                <tr>
                    <td style="width: 3rem"><p-tableCheckbox [value]="schedule" /></td>
                    <td>{{ schedule.scheduleId }}</td>
                    <td>{{ schedule.laboratoryName }}</td>
                    <td>{{ schedule.scheduleDate | date: 'short' }}</td>
                    <td>{{ schedule.scheduleTime }}</td>
                    <td><p-tag [value]="schedule.status" /></td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(schedule)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(schedule)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(schedule)" />
                        </div>
                    </td>
                </tr>
            </ng-template>

            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="7" class="text-center py-5">No lab schedules found</td>
                </tr>
            </ng-template>
        </p-table>

        <!-- New Schedule Dialog -->
        <p-dialog [(visible)]="scheduleDialog" [style]="{ width: '500px' }" header="Lab Schedule" [modal]="true" [closable]="true" (onHide)="closeDialog()">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4 mt-2">
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Laboratory *</label>
                        <input pInputText [(ngModel)]="newSchedule.laboratoryName" placeholder="Enter laboratory name" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Date *</label>
                        <p-datepicker [(ngModel)]="newSchedule.scheduleDate" dateFormat="yy-mm-dd" icon="pi pi-calendar" appendTo="body" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Time *</label>
                        <input pInputText [(ngModel)]="newSchedule.scheduleTime" type="time" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Description</label>
                        <textarea pTextarea [(ngModel)]="newSchedule.description" placeholder="Enter description" rows="3" class="w-full"></textarea>
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Status</label>
                        <p-select [(ngModel)]="newSchedule.status" [options]="statusOptions" placeholder="Select status" class="w-full" appendTo="body" />
                    </div>
                </div>
            </ng-template>
            <ng-template #footer>
                <div class="flex justify-end gap-2 w-full">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeDialog()" />
                    <p-button label="Save" icon="pi pi-check" (click)="saveSchedule()" />
                </div>
            </ng-template>
        </p-dialog>
    `
})
export class LabScheduleComponent implements OnInit {
    @ViewChild('dt') dt: Table | undefined;

    schedules: any[] = [];
    filteredSchedules: any[] = [];
    selectedSchedules: any[] = [];
    searchValue: string = '';
    loading: boolean = true;

    // Dialog state
    scheduleDialog: boolean = false;
    newSchedule: any = this.getEmptySchedule();

    statusOptions = [
        { label: 'Scheduled', value: 'Scheduled' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Completed', value: 'Completed' },
        { label: 'Cancelled', value: 'Cancelled' }
    ];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.loadSchedules();
    }

    getEmptySchedule() {
        return {
            scheduleId: '',
            laboratoryName: '',
            scheduleDate: null,
            scheduleTime: '',
            description: '',
            status: 'Scheduled'
        };
    }

    loadSchedules() {
        this.loading = true;
        // TODO: Replace with actual API call
        // For now, showing empty state
        this.schedules = [];
        this.filteredSchedules = [...this.schedules];
        this.loading = false;
        this.messageService.add({
            severity: 'info',
            summary: 'Info',
            detail: 'Connect this component to your laboratory schedule API endpoint'
        });
    }

    filter() {
        this.filteredSchedules = this.schedules.filter((schedule) => {
            return schedule.laboratoryName?.toLowerCase().includes(this.searchValue.toLowerCase()) || schedule.scheduleId?.toLowerCase().includes(this.searchValue.toLowerCase());
        });
    }

    onSelectionChange(event: any) {
        console.log('✅ Selection Changed');
        console.log('📊 Total Selected:', this.selectedSchedules.length);
    }

    openNew() {
        this.newSchedule = this.getEmptySchedule();
        this.scheduleDialog = true;
    }

    closeDialog() {
        this.scheduleDialog = false;
        this.newSchedule = this.getEmptySchedule();
    }

    saveSchedule() {
        if (!this.newSchedule.laboratoryName || !this.newSchedule.scheduleDate || !this.newSchedule.scheduleTime) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Validation',
                detail: 'Laboratory, Date, and Time are required'
            });
            return;
        }

        console.log('📤 Saving schedule:', this.newSchedule);
        // TODO: Replace with actual API call
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Lab schedule saved successfully'
        });

        this.closeDialog();
        this.loadSchedules();
    }

    view(schedule: any) {
        this.messageService.add({
            severity: 'info',
            summary: 'View Schedule',
            detail: `Viewing: ${schedule.laboratoryName}`
        });
    }

    edit(schedule: any) {
        this.newSchedule = { ...schedule };
        this.scheduleDialog = true;
    }

    delete(schedule: any) {
        this.messageService.add({
            severity: 'warn',
            summary: 'Delete Schedule',
            detail: `Delete: ${schedule.laboratoryName}?`
        });
    }

    deleteSelected() {
        if (!this.selectedSchedules || this.selectedSchedules.length === 0) return;
        this.messageService.add({
            severity: 'warn',
            summary: 'Delete',
            detail: `Delete ${this.selectedSchedules.length} schedule(s)?`
        });
    }

    exportCSV() {
        let csv = 'Schedule ID,Laboratory,Date,Time,Status\n';
        this.schedules.forEach((schedule) => {
            csv += `${schedule.scheduleId},${schedule.laboratoryName},${schedule.scheduleDate},${schedule.scheduleTime},${schedule.status}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'lab-schedules.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
