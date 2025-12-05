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
    styles: [
        `
            .lab-schedule-container {
                padding: 1.5rem;
                background: #f3f4f6;
                border-radius: 0.375rem;
            }

            .schedule-title {
                font-size: 1.875rem;
                font-weight: 700;
                margin-bottom: 1.5rem;
                color: #1f2937;
            }

            .schedule-table-wrapper {
                overflow-x: auto;
                background: white;
                border-radius: 0.375rem;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            }

            .schedule-table {
                width: 100%;
                border-collapse: collapse;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .schedule-table thead {
                background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
                color: white;
                position: sticky;
                top: 0;
                z-index: 10;
            }

            .schedule-table thead th {
                padding: 1rem;
                text-align: left;
                font-weight: 600;
                font-size: 0.875rem;
                border-right: 1px solid #e5e7eb;
            }

            .schedule-table thead th:first-child {
                min-width: 120px;
            }

            .schedule-table thead th:last-child {
                border-right: none;
            }

            .schedule-table tbody tr {
                border-bottom: 1px solid #e5e7eb;
            }

            .schedule-table tbody tr:hover {
                background-color: #f9fafb;
            }

            .schedule-table tbody td {
                padding: 0.5rem;
                border-right: 1px solid #e5e7eb;
                position: relative;
                height: 60px;
                vertical-align: top;
            }

            .time-cell {
                background-color: #f9fafb;
                font-weight: 600;
                font-size: 0.8125rem;
                color: #374151;
                min-width: 120px;
                border-right: 2px solid #d1d5db;
                text-align: center;
                position: sticky;
                left: 0;
                z-index: 5;
            }

            .schedule-cell {
                background-color: #fafafa;
                padding: 0;
                overflow: hidden;
                position: relative;
            }

            .schedule-cell:last-child {
                border-right: none;
            }

            .schedule-block {
                width: 100%;
                height: 100%;
                padding: 0.25rem 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: 0.7rem;
                font-weight: 600;
                color: white;
                cursor: pointer;
                transition: opacity 0.2s ease;
                border: 1px solid rgba(0, 0, 0, 0.1);
            }

            .schedule-block:hover {
                opacity: 0.9;
            }

            .block-title {
                font-weight: 700;
                margin-bottom: 0.125rem;
            }

            .block-info {
                font-size: 0.65rem;
                opacity: 0.95;
            }

            .color-green {
                background-color: #10b981;
            }
            .color-pink {
                background-color: #ec4899;
            }
            .color-gray {
                background-color: #6b7280;
            }
            .color-blue {
                background-color: #3b82f6;
            }
            .color-teal {
                background-color: #06b6d4;
            }
            .color-yellow {
                background-color: #eab308;
                color: #1f2937;
            }
            .color-indigo {
                background-color: #4f46e5;
            }

            @media (max-width: 1024px) {
                .schedule-table {
                    font-size: 0.8125rem;
                }
                .schedule-table thead th {
                    padding: 0.75rem 0.5rem;
                    font-size: 0.8125rem;
                }
                .schedule-table tbody td {
                    padding: 0.375rem;
                    height: 50px;
                }
                .time-cell {
                    min-width: 100px;
                    font-size: 0.75rem;
                }
            }

            @media (max-width: 768px) {
                .lab-schedule-container {
                    padding: 0.75rem;
                }
                .schedule-title {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                }
                .schedule-table thead th {
                    padding: 0.5rem 0.25rem;
                    font-size: 0.75rem;
                }
                .schedule-table tbody td {
                    padding: 0.25rem;
                    height: 40px;
                }
                .time-cell {
                    min-width: 80px;
                    font-size: 0.7rem;
                }
                .schedule-block {
                    font-size: 0.6rem;
                    padding: 0.125rem 0.25rem;
                }
            }
        `
    ],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New Schedule" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                    <p-button label="Print" icon="pi pi-print" severity="secondary" outlined />
                </div>
            </ng-template>
        </p-toolbar>

        <div class="lab-schedule-container">
            <h2 class="schedule-title">Lab Room Schedules</h2>

            <div class="schedule-table-wrapper">
                <table class="schedule-table">
                    <thead>
                        <tr>
                            <th class="time-column">Time & Days</th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let timeSlot of timeSlots">
                            <td class="time-cell">{{ timeSlot }}</td>
                            <td *ngFor="let day of daysOfWeek" class="schedule-cell">
                                <!-- Schedule blocks will be rendered here -->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- New Schedule Dialog -->
        <p-dialog [(visible)]="scheduleDialog" [style]="{ width: '500px' }" header="Add Lab Schedule" [modal]="true" [closable]="true" (onHide)="closeDialog()">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4 mt-2">
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Laboratory *</label>
                        <p-select [(ngModel)]="newSchedule.laboratory" [options]="laboratories" optionLabel="name" optionValue="id" placeholder="Select laboratory" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Day *</label>
                        <p-select [(ngModel)]="newSchedule.day" [options]="daysOfWeek" placeholder="Select day" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Time *</label>
                        <input pInputText [(ngModel)]="newSchedule.time" type="time" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Class/Activity *</label>
                        <input pInputText [(ngModel)]="newSchedule.activity" placeholder="E.g., CS 101 - Programming 1" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Instructor</label>
                        <input pInputText [(ngModel)]="newSchedule.instructor" placeholder="Instructor name" class="w-full" />
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

    // Schedule data
    schedules: any[] = [];
    timeSlots: string[] = [];
    daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    laboratories: any[] = [];

    // Dialog state
    scheduleDialog: boolean = false;
    newSchedule: any = this.getEmptySchedule();

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.initializeTimeSlots();
        this.loadLaboratories();
        this.loadSchedules();
    }

    // Initialize time slots from 07:00 AM to 09:00 PM (30-minute intervals)
    initializeTimeSlots() {
        const startHour = 7;
        const endHour = 21;
        const slots: string[] = [];

        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const ampm = hour >= 12 ? 'PM' : 'AM';
                const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
                const timeString = `${String(displayHour).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${ampm}`;
                slots.push(timeString);
            }
        }

        this.timeSlots = slots;
    }

    getEmptySchedule() {
        return {
            id: '',
            laboratory: '',
            day: '',
            time: '',
            activity: '',
            instructor: '',
            color: '#1f2937'
        };
    }

    loadLaboratories() {
        // TODO: Replace with API call to get laboratories
        this.laboratories = [
            { id: '1', name: 'Lab A' },
            { id: '2', name: 'Lab B' },
            { id: '3', name: 'Lab C' },
            { id: '4', name: 'Lab D' }
        ];
    }

    loadSchedules() {
        // TODO: Replace with API call to get schedules
        this.schedules = [];
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
        if (!this.newSchedule.laboratory || !this.newSchedule.day || !this.newSchedule.time || !this.newSchedule.activity) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Validation',
                detail: 'Laboratory, Day, Time, and Activity are required'
            });
            return;
        }

        console.log('📤 Saving schedule:', this.newSchedule);
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
            detail: `Viewing: ${schedule.activity}`
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
            detail: `Delete: ${schedule.activity}?`
        });
    }
}
