import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule, Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-campuses',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule],
    styleUrls: ['../../../assets/pages/_campuses.scss'],
    providers: [MessageService],
    template: `
        <p-toast />

        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New Campus" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNewCampusDialog()" />
                <p-button severity="secondary" label="Delete Selected" icon="pi pi-trash" outlined (onClick)="deleteSelectedCampuses()" [disabled]="!selectedCampuses || !selectedCampuses.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="filteredCampuses"
            [rows]="10"
            [paginator]="true"
            [globalFilterFields]="['campusName', 'campusDirector']"
            [tableStyle]="{ 'min-width': '100rem' }"
            [(selection)]="selectedCampuses"
            (selectionChange)="onSelectionChange($event)"
            [rowHover]="true"
            dataKey="campusId"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} campuses"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Campuses Management</h5>
                    <div class="flex items-center gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filterCampuses()" placeholder="Search campuses..." />
                        </p-iconfield>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th pSortableColumn="campusName" style="min-width: 15rem">
                        Campus Name
                        <p-sortIcon field="campusName" />
                    </th>
                    <th pSortableColumn="campusDirector" style="min-width: 15rem">
                        Campus Director
                        <p-sortIcon field="campusDirector" />
                    </th>
                    <th style="min-width: 10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-campus>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="campus" />
                    </td>
                    <td>{{ campus.campusName }}</td>
                    <td>{{ campus.campusDirector }}</td>
                    <td>
                        <div class="action-buttons">
                            <p-button type="button" icon="pi pi-eye" class="p-button-rounded p-button-info" (click)="viewCampus(campus)" pTooltip="View" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-warning" (click)="editCampus(campus)" pTooltip="Edit" tooltipPosition="top"></p-button>
                            <p-button type="button" icon="pi pi-trash" class="p-button-rounded p-button-danger" (click)="deleteCampus(campus)" pTooltip="Delete" tooltipPosition="top"></p-button>
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" style="text-align: center; padding: 2rem;">No campuses found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class CampusesComponent implements OnInit {
    @ViewChild('dt') table!: Table;

    campuses: any[] = [];
    filteredCampuses: any[] = [];
    selectedCampuses: any[] = [];
    searchValue: string = '';
    loading: boolean = false;

    constructor(
        private userService: UserService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        console.log('CampusesComponent initialized');
        this.loadCampuses();
    }

    loadCampuses() {
        console.log('Loading campuses...');
        this.loading = true;
        this.userService.getCampuses().subscribe({
            next: (response: any) => {
                console.log('Campuses loaded:', response);
                this.campuses = Array.isArray(response) ? response : response.data || [];
                this.filteredCampuses = [...this.campuses];
                this.loading = false;
                console.log('Campuses set:', this.campuses);
            },
            error: (error) => {
                console.error('Error loading campuses:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to load campuses: ' + (error.error?.message || error.message),
                    icon: 'error'
                });
                this.loading = false;
            }
        });
    }

    filterCampuses() {
        if (!this.searchValue.trim()) {
            this.filteredCampuses = [...this.campuses];
            return;
        }

        const search = this.searchValue.toLowerCase();
        this.filteredCampuses = this.campuses.filter((campus) => campus.campusName?.toLowerCase().includes(search) || campus.campusDirector?.toLowerCase().includes(search));
    }

    onSelectionChange(event: any) {
        console.log('Selection changed:', event);
        console.log('Selected campuses:', this.selectedCampuses);
        if (this.selectedCampuses && this.selectedCampuses.length > 0) {
            console.log(
                'Selected campus IDs:',
                this.selectedCampuses.map((c: any) => c.campusId)
            );
        }
    }

    viewCampus(campus: any) {
        const createdDate = new Date(campus.campusCreated).toLocaleDateString();
        const updatedDate = new Date(campus.campusUpdated).toLocaleDateString();
        Swal.fire({
            title: campus.campusName,
            html: `
                <div style="text-align: left;">
                    <p><strong>Campus Director:</strong> ${campus.campusDirector || 'N/A'}</p>
                    <p><strong>Created:</strong> ${createdDate}</p>
                    <p><strong>Updated:</strong> ${updatedDate}</p>
                </div>
            `,
            icon: 'info',
            confirmButtonText: 'Close'
        });
    }

    editCampus(campus: any) {
        const editData = {
            campusName: campus.campusName,
            campusDirector: campus.campusDirector
        };

        Swal.fire({
            title: '',
            titleText: '',
            html: `
                <div style="text-align: left; width: 100%; max-width: 500px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">✎ Edit Campus</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus Name *</label>
                            <input id="campusName" type="text" value="${editData.campusName}" placeholder="Campus Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus Director *</label>
                            <input id="campusDirector" type="text" value="${editData.campusDirector}" placeholder="Director Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                </div>
            `,
            width: '550px',
            showCancelButton: true,
            confirmButtonText: 'Update Campus',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#e0e0e0',
            didOpen: () => {
                const campusNameInput = document.getElementById('campusName') as HTMLInputElement;
                if (campusNameInput) campusNameInput.focus();
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const campusName = (document.getElementById('campusName') as HTMLInputElement).value.trim();
                const campusDirector = (document.getElementById('campusDirector') as HTMLInputElement).value.trim();

                if (!campusName) {
                    Swal.fire({ title: 'Error', text: 'Campus Name is required', icon: 'error' });
                    return;
                }

                if (!campusDirector) {
                    Swal.fire({ title: 'Error', text: 'Campus Director is required', icon: 'error' });
                    return;
                }

                const updatedData = {
                    campusName,
                    campusDirector
                };

                this.userService.updateCampus(campus.campusId, updatedData).subscribe({
                    next: () => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Campus updated successfully',
                            icon: 'success'
                        });
                        this.loadCampuses();
                    },
                    error: (error) => {
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to update campus: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }

    deleteCampus(campus: any) {
        const campusId = campus.campusId;
        console.log('Deleting single campus:', campusId, 'Full campus object:', campus);

        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you want to delete this campus?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d'
        }).then((result) => {
            if (result.isConfirmed) {
                this.userService.deleteCampus(campusId).subscribe({
                    next: () => {
                        console.log('Campus deleted successfully:', campusId);
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Campus has been deleted successfully.',
                            icon: 'success'
                        });
                        this.loadCampuses();
                    },
                    error: (error) => {
                        console.error('Error deleting campus:', campusId, error);
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to delete campus: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }

    openNewCampusDialog() {
        Swal.fire({
            title: '',
            titleText: '',
            html: `
                <div style="text-align: left; width: 100%; max-width: 500px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">➕ Add New Campus</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus Name *</label>
                            <input id="newCampusName" type="text" placeholder="Campus Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus Director *</label>
                            <input id="newCampusDirector" type="text" placeholder="Director Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                </div>
            `,
            width: '550px',
            showCancelButton: true,
            confirmButtonText: 'Create Campus',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#e0e0e0',
            didOpen: () => {
                const campusNameInput = document.getElementById('newCampusName') as HTMLInputElement;
                if (campusNameInput) campusNameInput.focus();
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const campusName = (document.getElementById('newCampusName') as HTMLInputElement).value.trim();
                const campusDirector = (document.getElementById('newCampusDirector') as HTMLInputElement).value.trim();

                if (!campusName) {
                    Swal.fire({ title: 'Error', text: 'Campus Name is required', icon: 'error' });
                    return;
                }

                if (!campusDirector) {
                    Swal.fire({ title: 'Error', text: 'Campus Director is required', icon: 'error' });
                    return;
                }

                const newCampusPayload = {
                    campusName,
                    campusDirector
                };

                this.userService.createCampus(newCampusPayload).subscribe({
                    next: () => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Campus created successfully',
                            icon: 'success'
                        });
                        this.loadCampuses();
                    },
                    error: (error) => {
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to create campus: ' + (error.error?.message || error.message),
                            icon: 'error'
                        });
                    }
                });
            }
        });
    }

    deleteSelectedCampuses() {
        if (!this.selectedCampuses || this.selectedCampuses.length === 0) {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please select campuses to delete' });
            return;
        }

        Swal.fire({
            title: 'Confirm Delete',
            text: `Are you sure you want to delete ${this.selectedCampuses.length} campus(es)?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete All',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                let deletedCount = 0;
                let failedCount = 0;

                this.selectedCampuses.forEach((campus) => {
                    const campusId = campus.campusId;
                    console.log('Deleting campus:', campusId);

                    this.userService.deleteCampus(campusId).subscribe({
                        next: () => {
                            deletedCount++;
                            console.log(`Campus deleted: ${campusId} (${deletedCount}/${this.selectedCampuses.length})`);
                            if (deletedCount + failedCount === this.selectedCampuses.length) {
                                this.selectedCampuses = [];
                                this.loadCampuses();
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: `${deletedCount} campus(es) deleted successfully.`,
                                    icon: 'success'
                                });
                            }
                        },
                        error: (error) => {
                            failedCount++;
                            console.error(`Failed to delete campus ${campusId}:`, error);
                            if (deletedCount + failedCount === this.selectedCampuses.length) {
                                this.selectedCampuses = [];
                                this.loadCampuses();
                                Swal.fire({
                                    title: 'Partial Delete',
                                    text: `${deletedCount} campus(es) deleted, ${failedCount} failed.`,
                                    icon: 'warning'
                                });
                            }
                        }
                    });
                });
            }
        });
    }

    exportCSV() {
        if (this.filteredCampuses.length === 0) {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'No data to export' });
            return;
        }

        const csv = this.generateCSV(this.filteredCampuses);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', 'campuses_export.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Campuses exported to CSV' });
    }

    private generateCSV(data: any[]): string {
        const headers = ['Campus Name', 'Campus Director'];
        const rows = data.map((campus) => [campus.campusName || '', campus.campusDirector || '']);

        const csvContent = [headers.join(','), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(','))].join('\n');

        return csvContent;
    }
}
