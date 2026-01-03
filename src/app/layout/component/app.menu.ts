import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { UserService } from '../../pages/service/user.service';
import { AvatarModule } from 'primeng/avatar';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule, AvatarModule],
    styleUrls: ['../../../assets/layout/_menu.scss'],
    template: `<ul class="layout-menu">
        <div class="user-panel" *ngIf="currentUser">
            <div class="user-panel-avatar-container">
                <img *ngIf="currentUser?.profilePicture" [src]="currentUser.profilePicture" width="64" class="user-panel-avatar" alt="avatar" />
                <p-avatar *ngIf="!currentUser?.profilePicture" [label]="getInitials()" shape="circle" size="xlarge" styleClass="user-panel-avatar"></p-avatar>
            </div>
            <div class="user-panel-info">
                <span
                    ><b>{{ currentUser?.firstName }} {{ currentUser?.lastName }}</b></span
                >
                <br />
                <em class="user-panel-role">{{ currentUser?.role }}</em>
            </div>
        </div>
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu implements OnInit {
    model: MenuItem[] = [];
    currentUser: any = null;
    laboratories: any[] = [];

    constructor(
        private userService: UserService,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.loadUserProfile();
        this.loadLaboratories();
    }

    loadLaboratories() {
        const apiUrl = `${environment.apiUrl}/laboratories`;
        console.log('📡 Fetching laboratories from:', apiUrl);

        this.http.get<any[]>(apiUrl).subscribe({
            next: (data: any[]) => {
                console.log('✅ Laboratories loaded:', data);
                this.laboratories = data || [];
                // Reload menu items to include laboratories
                this.loadUserProfile();
            },
            error: (error: any) => {
                console.error('❌ Error loading laboratories:', error);
            }
        });
    }

    loadUserProfile() {
        this.userService.getUserProfile().subscribe({
            next: (userData) => {
                this.currentUser = userData;
                this.loadMenuItems();
            },
            error: (error) => {
                console.error('Error loading user profile:', error);
                const storedUser = localStorage.getItem('currentUser');
                if (storedUser) {
                    this.currentUser = JSON.parse(storedUser);
                    this.loadMenuItems();
                }
            }
        });
    }

    getInitials(): string {
        if (!this.currentUser) return 'U';
        const firstName = this.currentUser.firstName || '';
        const lastName = this.currentUser.lastName || '';
        return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
    }

    loadMenuItems() {
        const role = this.currentUser?.role?.toLowerCase();

        switch (role) {
            case 'superadmin':
                this.loadSuperAdminMenu();
                break;
            case 'campusadmin':
                this.loadCampusAdminMenu();
                break;
            case 'faculty':
                this.loadFacultyMenu();
                break;
            case 'labtech':
                this.loadLabTechMenu();
                break;
            default:
                this.loadDefaultMenu();
        }
    }

    loadSuperAdminMenu() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app/dashboard'] }]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/app/pages/users']
                    },
                    {
                        label: 'Assets',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/app/crud']
                    },
                    {
                        label: 'Request Maintenance',
                        icon: 'pi pi-fw pi-wrench',
                        routerLink: ['/app/requestmaintenance']
                    },
                    {
                        label: 'Campuses',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/app/pages/campuses']
                    },
                    {
                        label: 'Departments',
                        icon: 'pi pi-fw pi-building-columns',
                        routerLink: ['/app/pages/departments']
                    },
                    {
                        label: 'Lab Schedule',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/app/pages/labschedule']
                    }
                ]
            }
        ];
    }

    loadCampusAdminMenu() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app/dashboard'] }]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/app/pages/users']
                    },
                    {
                        label: 'Assets',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/app/crud']
                    },
                    {
                        label: 'Request Maintenance',
                        icon: 'pi pi-fw pi-wrench',
                        routerLink: ['/app/requestmaintenance']
                    },
                    {
                        label: 'Campuses',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/app/pages/campuses']
                    },
                    {
                        label: 'Departments',
                        icon: 'pi pi-fw pi-building-columns',
                        routerLink: ['/app/pages/departments']
                    },
                    {
                        label: 'Lab Schedule',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/app/pages/labschedule']
                    }
                ]
            }
        ];
    }

    loadFacultyMenu() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app/dashboard'] }]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Assets',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/app/crud']
                    },
                    {
                        label: 'Request Maintenance',
                        icon: 'pi pi-fw pi-wrench',
                        routerLink: ['/app/requestmaintenance']
                    },
                    {
                        label: 'Lab Schedule',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/app/pages/labschedule']
                    }
                ]
            }
        ];
    }

    loadLabTechMenu() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app/dashboard'] }]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Assets',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/app/crud']
                    },
                    {
                        label: 'Request Maintenance',
                        icon: 'pi pi-fw pi-wrench',
                        routerLink: ['/app/requestmaintenance']
                    },
                    {
                        label: 'Laboratories',
                        icon: 'pi pi-fw pi-flask',
                        routerLink: ['/app/pages/laboratories']
                    },
                    {
                        label: 'Lab Schedule',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/app/pages/labschedule']
                    },
                    {
                        label: 'Master Plan',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/app/pages/masterplan']
                    },
                    {
                        label: 'Reports',
                        icon: 'pi pi-fw pi-calendar',
                        items: [
                            { label: 'Preventive', icon: 'pi pi-fw pi-list', routerLink: ['/app/pages/reports/preventive'] },
                            { label: 'Corrective', icon: 'pi pi-fw pi-truck', routerLink: ['/app/pages/reports/corrective'] },
                            { label: 'Calibration', icon: 'pi pi-fw pi-map-marker', routerLink: ['/app/pages/reports/calibration'] }
                        ]
                    }
                ]
            },
            {
                label: 'Hierarchy Page',
                items: [
                    {
                        label: 'Asset Properties',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Brand', icon: 'pi pi-fw pi-tag', routerLink: ['/app/pages/assetcategory/brand'] },
                            { label: 'Color', icon: 'pi pi-fw pi-palette', routerLink: ['/app/pages/assetcategory/color'] },
                            { label: 'Program', icon: 'pi pi-fw pi-list', routerLink: ['/app/pages/assetcategory/program'] },
                            { label: 'Supplier', icon: 'pi pi-fw pi-truck', routerLink: ['/app/pages/assetcategory/supplier'] },
                            { label: 'Location', icon: 'pi pi-fw pi-map-marker', routerLink: ['/app/pages/assetcategory/location'] },
                            { label: 'Status', icon: 'pi pi-fw pi-map-marker', routerLink: ['/app/pages/assetcategory/status'] }
                        ]
                    },
                    {
                        label: 'Maintenance Properties',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Services', icon: 'pi pi-fw pi-tag', routerLink: ['/app/pages/maintenance/services'] },
                            { label: 'Status', icon: 'pi pi-fw pi-palette', routerLink: ['/app/pages/maintenance/status'] },
                            { label: 'Priority Level', icon: 'pi pi-fw pi-list', routerLink: ['/app/pages/maintenance/priority-level'] },
                            { label: 'Types', icon: 'pi pi-fw pi-truck', routerLink: ['/app/pages/maintenance/types'] }
                        ]
                    },
                    {
                        label: 'Locations',
                        icon: 'pi pi-fw pi-building',
                        items: this.getLaboratoryMenuItems()
                    }
                ]
            }
        ];
    }

    loadDefaultMenu() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app/dashboard'] }]
            }
        ];
    }

    getLaboratoryMenuItems(): MenuItem[] {
        console.log('🏢 getLaboratoryMenuItems called, laboratories:', this.laboratories);
        const items = (this.laboratories || []).map((lab) => ({
            label: lab.laboratoryName,
            icon: 'pi pi-fw pi-flask',
            routerLink: ['/app/pages/laboratory', lab.laboratoryId]
        }));
        console.log('📋 Mapped menu items:', items);
        return items;
    }
}
