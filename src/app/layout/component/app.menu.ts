import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { UserService } from '../../pages/service/user.service';
import { AvatarModule } from 'primeng/avatar';

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

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.loadUserProfile();
        this.loadMenuItems();
    }

    loadUserProfile() {
        this.userService.getUserProfile().subscribe({
            next: (userData) => {
                console.log('User profile loaded:', userData);
                this.currentUser = userData;
            },
            error: (error) => {
                console.error('Error loading user profile:', error);
                // Fallback to localStorage if API fails
                const storedUser = localStorage.getItem('currentUser');
                if (storedUser) {
                    this.currentUser = JSON.parse(storedUser);
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
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app/dashboard'] }]
            },

            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/app/pages'],
                items: [
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/app/pages/users']
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
                        label: 'Assets',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/app/crud']
                    },

                    {
                        label: 'Request Maintenance',
                        icon: 'pi pi-fw pi-wrench',
                        routerLink: ['/app/requestmaintenance']
                    }
                ]
            },
            {
                label: 'Asset Category',
                items: [
                    {
                        label: 'Asset Type',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Brand', icon: 'pi pi-fw pi-tag', routerLink: ['/app/pages/assetcategory/brand'] },
                            { label: 'Color', icon: 'pi pi-fw pi-palette', routerLink: ['/app/pages/assetcategory/color'] },
                            { label: 'Program', icon: 'pi pi-fw pi-list', routerLink: ['/app/pages/assetcategory/program'] },
                            { label: 'Supplier', icon: 'pi pi-fw pi-truck', routerLink: ['/app/pages/assetcategory/supplier'] },
                            { label: 'Location', icon: 'pi pi-fw pi-map-marker', routerLink: ['/app/pages/assetcategory/location'] }
                        ]
                    }
                ]
            }
        ];
    }
}
