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
                    <p-select [(ngModel)]="selectedLaboratory" [options]="laboratories" optionLabel="laboratoryName" placeholder="All Laboratories" [showClear]="true" styleClass="w-64" appendTo="body" (onChange)="onLaboratoryFilterChange()" />
                </div>
            </ng-template>
        </p-toolbar>

        <div class="lab-schedule-container">
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
                        <tr *ngFor="let timeSlot of timeSlots; let timeIndex = index">
                            <td class="time-cell">{{ timeSlot }}</td>
                            <td *ngFor="let day of daysOfWeek" class="schedule-cell">
                                <div
                                    *ngFor="let schedule of getSchedulesStartingAtSlot(timeIndex, day)"
                                    [ngClass]="'schedule-block ' + getScheduleColor(schedule)"
                                    [style.grid-row]="'span ' + getRowSpan(schedule)"
                                    [style.min-height.px]="getRowSpan(schedule) * 60"
                                    class="p-3 rounded cursor-pointer hover:opacity-80 transition-opacity text-white flex flex-col items-center justify-center"
                                    (click)="viewSchedule(schedule)"
                                >
                                    <div class="text-sm font-bold">{{ schedule.subject?.subjectCode }}</div>
                                    <div class="text-xs mt-1">{{ schedule.faculty?.firstName }} {{ schedule.faculty?.lastName }}</div>
                                    <div class="text-xs mt-1 font-semibold">{{ schedule.startTime }} - {{ schedule.endTime }}</div>
                                </div>
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
                        <p-select [(ngModel)]="newSchedule.laboratory" [options]="laboratories" optionLabel="laboratoryName" optionValue="laboratoryId" placeholder="Select laboratory" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Instructor</label>
                        <p-select [(ngModel)]="newSchedule.instructor" [options]="users" optionLabel="firstName" optionValue="userId" placeholder="Select instructor" [showClear]="true" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Day *</label>
                        <p-select [(ngModel)]="newSchedule.day" [options]="daysOfWeek" placeholder="Select day" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Subject *</label>
                        <div class="flex gap-2">
                            <p-select [(ngModel)]="newSchedule.activity" [options]="subjects" optionLabel="subjectName" optionValue="subjectId" placeholder="Select subject" class="flex-1" appendTo="body" />
                            <p-button icon="pi pi-plus" severity="secondary" (click)="openCreateSubjectDialog()" pTooltip="Create new subject" tooltipPosition="top" />
                        </div>
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Time *</label>
                        <input pInputText [(ngModel)]="newSchedule.time" type="time" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">End Time *</label>
                        <input pInputText [(ngModel)]="newSchedule.endTime" type="time" class="w-full" />
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

        <!-- Create Subject Dialog -->
        <p-dialog [(visible)]="subjectDialog" [header]="'Create New Subject'" [modal]="true" [style]="{ width: '50vw' }" [breakpoints]="{ '960px': '75vw', '640px': '90vw' }" [closable]="true">
            <div class="grid grid-cols-12 gap-4 mb-4">
                <div class="col-span-12">
                    <label class="block font-bold mb-2">Subject Name *</label>
                    <input pInputText [(ngModel)]="newSubject.subjectName" type="text" placeholder="Enter subject name" class="w-full" />
                </div>
                <div class="col-span-6">
                    <label class="block font-bold mb-2">Subject Code *</label>
                    <input pInputText [(ngModel)]="newSubject.subjectCode" type="text" placeholder="e.g., CS101" class="w-full" />
                </div>
                <div class="col-span-6">
                    <label class="block font-bold mb-2">Units *</label>
                    <input pInputText [(ngModel)]="newSubject.units" type="text" placeholder="e.g., 3" class="w-full" />
                </div>
                <div class="col-span-12">
                    <label class="block font-bold mb-2">Number of Students</label>
                    <p-inputNumber [(ngModel)]="newSubject.numberOfStudents" [min]="0" placeholder="Enter number of students" class="w-full" />
                </div>
            </div>
            <ng-template #footer>
                <div class="flex justify-end gap-2 w-full">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeSubjectDialog()" />
                    <p-button label="Create" icon="pi pi-check" (click)="saveSubject()" />
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
    users: any[] = [];
    subjects: any[] = [];
    selectedLaboratory: any = null;

    // Dialog state
    scheduleDialog: boolean = false;
    newSchedule: any = this.getEmptySchedule();
    subjectDialog: boolean = false;
    newSubject: any = this.getEmptySubject();

    private apiUrl = `${environment.apiUrl}/laboratories`;

    constructor(
        private messageService: MessageService,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.initializeTimeSlots();
        this.loadLaboratories();
        this.loadUsers();
        this.loadSubjects();
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
            endTime: '',
            activity: '',
            instructor: '',
            color: '#1f2937'
        };
    }

    getEmptySubject() {
        return {
            subjectName: '',
            subjectCode: '',
            numberOfStudents: 0,
            units: ''
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

    loadUsers() {
        const usersUrl = `${environment.apiUrl}/users`;
        console.log('📡 Fetching users from:', usersUrl);

        this.http.get<any[]>(usersUrl).subscribe({
            next: (data: any[]) => {
                console.log('✅ Users loaded:', data);
                console.log('📊 Total users:', data?.length || 0);

                if (data && data.length > 0) {
                    console.log('👤 First user:', data[0]);
                    console.log('👥 User fields:', Object.keys(data[0]));
                    console.table(data);
                }

                this.users = data || [];
            },
            error: (error: any) => {
                console.error('❌ Error loading users:', error);
                console.error('Error status:', error?.status);
                console.error('Error message:', error?.message);

                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load users: ' + (error?.error?.message || error?.message)
                });
            }
        });
    }

    loadSubjects() {
        const subjectsUrl = `${environment.apiUrl}/subjects`;
        console.log('📡 Fetching subjects from:', subjectsUrl);

        this.http.get<any[]>(subjectsUrl).subscribe({
            next: (data: any[]) => {
                console.log('✅ Subjects loaded:', data);
                console.log('📊 Total subjects:', data?.length || 0);

                if (data && data.length > 0) {
                    console.log('📚 First subject:', data[0]);
                    console.log('📚 Subject fields:', Object.keys(data[0]));
                    console.table(data);
                }

                this.subjects = data || [];
            },
            error: (error: any) => {
                console.error('❌ Error loading subjects:', error);
                console.error('Error status:', error?.status);
                console.error('Error message:', error?.message);

                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load subjects: ' + (error?.error?.message || error?.message)
                });
            }
        });
    }

    onLaboratoryFilterChange() {
        if (this.selectedLaboratory) {
            console.log('🔍 Filtering schedule for laboratory:', this.selectedLaboratory);
            console.log('📋 Laboratory ID:', this.selectedLaboratory.laboratoryId);
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
        if (!this.selectedLaboratory) {
            console.log('⚠️ No laboratory selected');
            this.schedules = [];
            return;
        }

        const scheduleUrl = `${environment.apiUrl}/laboratories/${this.selectedLaboratory.laboratoryId}/schedules`;
        console.log('📡 Fetching schedules from:', scheduleUrl);

        this.http.get<any[]>(scheduleUrl).subscribe({
            next: (data: any[]) => {
                console.log('✅ Schedules API Response:', data);
                console.log('📊 Total schedules:', data?.length || 0);

                if (data && data.length > 0) {
                    console.log('🎯 First schedule:', data[0]);
                    console.log('📋 Schedule fields:', Object.keys(data[0]));
                    console.table(data);
                }

                this.schedules = data || [];
            },
            error: (error: any) => {
                console.error('❌ Error loading schedules:', error);
                console.error('Error status:', error?.status);
                console.error('Error message:', error?.message);
                console.error('Error details:', error?.error);

                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load schedules: ' + (error?.error?.message || error?.message)
                });

                this.schedules = [];
            }
        });
    }

    openNew() {
        this.newSchedule = this.getEmptySchedule();
        this.scheduleDialog = true;
    }

    closeDialog() {
        this.scheduleDialog = false;
        this.newSchedule = this.getEmptySchedule();
    }

    openCreateSubjectDialog() {
        this.newSubject = this.getEmptySubject();
        this.subjectDialog = true;
    }

    closeSubjectDialog() {
        this.subjectDialog = false;
        this.newSubject = this.getEmptySubject();
    }

    saveSubject() {
        if (!this.newSubject.subjectName || !this.newSubject.subjectCode || !this.newSubject.units) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Validation',
                detail: 'Subject Name, Code, and Units are required'
            });
            return;
        }

        const payload = {
            subjectName: this.newSubject.subjectName,
            subjectCode: this.newSubject.subjectCode,
            numberOfStudents: this.newSubject.numberOfStudents || 0,
            units: this.newSubject.units
        };

        const subjectsUrl = `${environment.apiUrl}/subjects`;
        console.log('📡 Posting new subject to:', subjectsUrl, payload);

        this.http.post<any>(subjectsUrl, payload).subscribe({
            next: (response: any) => {
                console.log('✅ Subject created successfully:', response);

                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: `Subject "${this.newSubject.subjectName}" created successfully`
                });

                this.closeSubjectDialog();
                this.loadSubjects(); // Reload subjects to include the new one
            },
            error: (error: any) => {
                console.error('❌ Error creating subject:', error);

                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to create subject: ' + (error?.error?.message || error?.message)
                });
            }
        });
    }

    saveSchedule() {
        if (!this.newSchedule.laboratory || !this.newSchedule.day || !this.newSchedule.time || !this.newSchedule.endTime || !this.newSchedule.activity) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Validation',
                detail: 'Laboratory, Day, Start Time, End Time, and Subject are required'
            });
            return;
        }

        // Build the payload for the API
        const payload = {
            faculty: this.newSchedule.instructor || '',
            subject: this.newSchedule.activity,
            startTime: this.newSchedule.time,
            endTime: this.newSchedule.endTime,
            dayOfWeek: this.newSchedule.day
        };

        console.log('📤 Saving schedule with payload:', payload);
        console.log('🔗 Laboratory ID:', this.newSchedule.laboratory);

        const scheduleUrl = `${environment.apiUrl}/laboratories/${this.newSchedule.laboratory}/schedules`;
        console.log('📡 Posting to:', scheduleUrl);

        this.http.post<any>(scheduleUrl, payload).subscribe({
            next: (response: any) => {
                console.log('✅ Schedule created successfully:', response);

                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Lab schedule created successfully'
                });

                this.closeDialog();
                this.loadSchedules();
            },
            error: (error: any) => {
                console.error('❌ Error creating schedule:', error);
                console.error('Error status:', error?.status);
                console.error('Error message:', error?.message);
                console.error('Error details:', error?.error);

                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to create schedule: ' + (error?.error?.message || error?.message)
                });
            }
        });
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

    // Convert time string (HH:MM) to minutes for comparison
    timeToMinutes(timeString: string): number {
        if (!timeString) return 0;
        const [hours, minutes] = timeString.split(':').map(Number);
        return hours * 60 + minutes;
    }

    // Extract time from time slot string (e.g., "07:00 AM" -> 420)
    timeSlotToMinutes(timeSlot: string): number {
        const match = timeSlot.match(/(\d{2}):(\d{2})\s(AM|PM)/);
        if (!match) return 0;

        let hours = parseInt(match[1]);
        const minutes = parseInt(match[2]);
        const ampm = match[3];

        if (ampm === 'PM' && hours !== 12) {
            hours += 12;
        } else if (ampm === 'AM' && hours === 12) {
            hours = 0;
        }

        return hours * 60 + minutes;
    }

    // Get schedules that START at a specific time slot and day (for card display)
    getSchedulesStartingAtSlot(timeIndex: number, day: string): any[] {
        if (!this.schedules || this.schedules.length === 0) {
            return [];
        }

        const timeSlot = this.timeSlots[timeIndex];
        const slotMinutes = this.timeSlotToMinutes(timeSlot);

        return this.schedules.filter((schedule) => {
            if (schedule.dayOfWeek !== day) {
                return false;
            }

            const startMinutes = this.timeToMinutes(schedule.startTime);

            // Round down the schedule start time to the nearest 30-minute interval
            const roundedStartMinutes = Math.floor(startMinutes / 30) * 30;

            // Only return schedules that START at or before this time slot
            return slotMinutes === roundedStartMinutes;
        });
    }

    // Get schedules that occupy a specific time slot and day
    getSchedulesForCell(timeIndex: number, day: string): any[] {
        if (!this.schedules || this.schedules.length === 0) {
            return [];
        }

        const timeSlot = this.timeSlots[timeIndex];
        const slotMinutes = this.timeSlotToMinutes(timeSlot);

        return this.schedules.filter((schedule) => {
            if (schedule.dayOfWeek !== day) {
                return false;
            }

            const startMinutes = this.timeToMinutes(schedule.startTime);
            const endMinutes = this.timeToMinutes(schedule.endTime);

            // Check if this time slot is within the schedule's start and end time
            return slotMinutes >= startMinutes && slotMinutes < endMinutes;
        });
    }

    // Calculate how many rows a schedule should span (30-min intervals)
    getRowSpan(schedule: any): number {
        const startMinutes = this.timeToMinutes(schedule.startTime);
        const endMinutes = this.timeToMinutes(schedule.endTime);
        const durationMinutes = endMinutes - startMinutes;

        // Each row is 30 minutes, so divide by 30
        const rowSpan = Math.ceil(durationMinutes / 30);
        console.log(`📏 Schedule: ${schedule.subject?.subjectCode} | Start: ${schedule.startTime} (${startMinutes}min) | End: ${schedule.endTime} (${endMinutes}min) | Duration: ${durationMinutes}min | Rows: ${rowSpan}`);

        return rowSpan;
    }

    // Get color class for schedule based on subject
    getScheduleColor(schedule: any): string {
        const colors = ['bg-green-500', 'bg-pink-500', 'bg-gray-700', 'bg-blue-600', 'bg-cyan-500', 'bg-yellow-500', 'bg-indigo-600'];

        // Use subject ID to consistently assign the same color
        if (schedule.subject && schedule.subject.subjectId) {
            const hashCode = schedule.subject.subjectId.charCodeAt(0);
            return colors[hashCode % colors.length];
        }

        return colors[0];
    }

    // View schedule details
    viewSchedule(schedule: any) {
        console.log('👁️ Viewing schedule:', schedule);
        this.messageService.add({
            severity: 'info',
            summary: 'Schedule Details',
            detail: `${schedule.subject?.subjectName} - ${schedule.faculty?.firstName} ${schedule.faculty?.lastName}`
        });
    }
}
