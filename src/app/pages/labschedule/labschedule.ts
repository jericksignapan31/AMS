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
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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
    styleUrls: ['../../../assets/layout/_labschedule-component.scss'],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New Schedule" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                    <p-button label="Print" icon="pi pi-print" severity="secondary" outlined />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <label class="font-semibold mr-2">Filter by Laboratory:</label>
                    <p-select
                        [(ngModel)]="selectedLaboratory"
                        [options]="laboratories"
                        optionLabel="laboratoryName"
                        optionValue="laboratoryId"
                        placeholder="All Laboratories"
                        [showClear]="true"
                        styleClass="w-64"
                        appendTo="body"
                        (onChange)="onLaboratoryFilterChange()"
                    />
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
    selectedLaboratory: any = null;

    // Dialog state
    scheduleDialog: boolean = false;
    newSchedule: any = this.getEmptySchedule();

    private apiUrl = `${environment.apiUrl}/laboratories`;

    constructor(
        private messageService: MessageService,
        private http: HttpClient
    ) {}

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
        console.log('📡 Fetching laboratories from:', this.apiUrl);
        this.http.get<any[]>(this.apiUrl).subscribe({
            next: (data: any[]) => {
                console.log('✅ Laboratories loaded:', data);
                this.laboratories = data || [];
                if (this.laboratories.length > 0) {
                    this.selectedLaboratory = this.laboratories[0];
                    this.onLaboratoryFilterChange();
                }
            },
            error: (error: any) => {
                console.error('❌ Error loading laboratories:', error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load laboratories: ' + (error?.error?.message || error?.message)
                });
            }
        });
    }

    onLaboratoryFilterChange() {
        if (this.selectedLaboratory) {
            console.log('🔍 Filtering schedule for laboratory:', this.selectedLaboratory);
            this.messageService.add({
                severity: 'info',
                summary: 'Filter Applied',
                detail: `Showing schedules for: ${this.selectedLaboratory.laboratoryName}`
            });
        } else {
            console.log('🔍 Showing all laboratory schedules');
            this.messageService.add({
                severity: 'info',
                summary: 'Filter Cleared',
                detail: 'Showing all laboratory schedules'
            });
        }
        this.loadSchedules();
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
