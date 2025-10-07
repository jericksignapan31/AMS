import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { AssetService } from '../../pages/service/asset.service';
import { InstallPromptService } from '../../pages/service/install-prompt.service';
import { PwaService } from '../../pages/service/pwa.service';
import Swal from 'sweetalert2';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, DialogModule, ButtonModule, AppConfigurator],
    template: ` <div class="layout-topbar">
            <div class="layout-topbar-logo-container">
                <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                    <i class="pi pi-bars"></i>
                </button>
                <a class="layout-topbar-logo">
                    <img src="assets/icons/icon-48x48.png" class=" w-8 h-8 " alt="logo" />
                    <span>LAMS</span>
                </a>
            </div>

            <div class="layout-topbar-actions">
                <div class="layout-config-menu">
                    <button type="button" class="layout-topbar-action" (click)="installPWA()" title="Install App" *ngIf="canInstallPWA">
                        <i class="pi pi-download"></i>
                    </button>
                    <button type="button" class="layout-topbar-action" (click)="openQRScanner()" title="QR Code Scanner">
                        <i class="pi pi-camera"></i>
                    </button>
                    <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                        <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                    </button>
                    <div class="relative">
                        <button
                            class="layout-topbar-action layout-topbar-action-highlight"
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-scalein"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-fadeout"
                            [hideOnOutsideClick]="true"
                        >
                            <i class="pi pi-palette"></i>
                        </button>
                        <app-configurator />
                    </div>
                </div>

                <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-ellipsis-v"></i>
                </button>

                <div class="layout-topbar-menu hidden lg:block">
                    <div class="layout-topbar-menu-content">
                        <button type="button" class="layout-topbar-action">
                            <i class="pi pi-calendar"></i>
                            <span>Calendar</span>
                        </button>
                        <button type="button" class="layout-topbar-action">
                            <i class="pi pi-inbox"></i>
                            <span>Messages</span>
                        </button>
                        <button type="button" class="layout-topbar-action">
                            <i class="pi pi-user"></i>
                            <span>Profile</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- QR Scanner Dialog -->
        <p-dialog header="QR Code Scanner" [(visible)]="showQRScanner" [modal]="true" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false" [closable]="true" (onHide)="closeQRScanner()">
            <div class="flex flex-column align-items-center">
                <div *ngIf="!hasPermission" class="text-center p-4">
                    <i class="pi pi-exclamation-triangle text-4xl text-orange-500 mb-3"></i>
                    <p class="text-lg mb-3">Camera access is required for QR scanning</p>
                    <p-button label="Grant Camera Access" (onClick)="requestCameraPermission()" />
                </div>

                <div *ngIf="hasPermission && !scanResult" class="w-full text-center">
                    <video #videoElement class="w-full border-round mb-3" style="max-width: 400px; height: 300px;" autoplay muted></video>
                    <p class="text-sm text-500 mb-3">Position the QR code within the camera frame</p>
                    <p-button label="Stop Scanning" severity="secondary" (onClick)="stopScanning()" />
                </div>

                <div *ngIf="scanResult" class="text-center p-4">
                    <i class="pi pi-check-circle text-4xl text-green-500 mb-3"></i>
                    <p class="text-lg mb-2">QR Code Detected!</p>
                    <p class="text-sm text-500 mb-3">Result: {{ scanResult }}</p>
                    <div class="flex gap-2 justify-content-center">
                        <p-button label="Search Asset" (onClick)="searchAsset()" />
                        <p-button label="Scan Again" severity="secondary" (onClick)="scanAgain()" />
                    </div>
                </div>

                <div *ngIf="errorMessage" class="text-center p-4">
                    <i class="pi pi-times-circle text-4xl text-red-500 mb-3"></i>
                    <p class="text-lg mb-2">Error</p>
                    <p class="text-sm text-500 mb-3">{{ errorMessage }}</p>
                    <p-button label="Try Again" (onClick)="tryAgain()" />
                </div>
            </div>
        </p-dialog>`
})
export class AppTopbar {
    items!: MenuItem[];

    // QR Scanner properties
    @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
    showQRScanner = false;
    hasPermission = false;
    scanResult: string | null = null;
    errorMessage: string | null = null;
    mediaStream: MediaStream | null = null;
    scanningInterval: any;
    codeReader: BrowserMultiFormatReader | null = null;

    // PWA properties
    canInstallPWA = false;

    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private assetService: AssetService,
        private installPromptService: InstallPromptService,
        private pwaService: PwaService
    ) {
        // Subscribe to PWA install availability
        this.installPromptService.isInstallable.subscribe((canInstall) => {
            this.canInstallPWA = canInstall;
        });
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    // QR Scanner Methods
    openQRScanner() {
        this.showQRScanner = true;
        this.resetScannerState();
        this.requestCameraPermission();
    }

    closeQRScanner() {
        this.showQRScanner = false;
        this.stopScanning();
        this.resetScannerState();
    }

    resetScannerState() {
        this.scanResult = null;
        this.errorMessage = null;
        this.hasPermission = false;
    }

    async requestCameraPermission() {
        try {
            this.mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 640 },
                    height: { ideal: 480 },
                    facingMode: 'environment' // Use back camera if available
                }
            });
            this.hasPermission = true;
            this.errorMessage = null;

            // Start video stream after view is initialized
            setTimeout(() => {
                if (this.videoElement && this.videoElement.nativeElement) {
                    this.videoElement.nativeElement.srcObject = this.mediaStream;
                    this.startScanning();
                }
            }, 100);
        } catch (error) {
            console.error('Camera access denied:', error);
            this.hasPermission = false;
            this.errorMessage = 'Camera access denied. Please allow camera permissions and try again.';
        }
    }

    async startScanning() {
        if (this.scanningInterval) {
            clearInterval(this.scanningInterval);
        }

        if (!this.videoElement || !this.videoElement.nativeElement) {
            return;
        }

        this.codeReader = new BrowserMultiFormatReader();

        try {
            // Start continuous scanning
            await this.codeReader.decodeFromVideoDevice(null, this.videoElement.nativeElement, (result, err) => {
                if (result) {
                    console.log('QR Code detected:', result.getText());
                    this.onQRCodeDetected(result.getText());
                    if (this.codeReader) {
                        this.codeReader.reset(); // Stop scanning after first result
                    }
                }
                if (err && !(err instanceof NotFoundException)) {
                    console.error('QR scanning error:', err);
                }
            });
        } catch (err) {
            console.error('Failed to start QR scanning:', err);
            this.errorMessage = 'Failed to start QR code scanning. Please try again.';
        }
    }

    onQRCodeDetected(qrData: string) {
        this.scanResult = qrData;
        this.stopScanning();
    }

    stopScanning() {
        if (this.scanningInterval) {
            clearInterval(this.scanningInterval);
            this.scanningInterval = null;
        }

        if (this.codeReader) {
            this.codeReader.reset();
            this.codeReader = null;
        }

        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach((track) => track.stop());
            this.mediaStream = null;
        }
    }

    scanAgain() {
        this.resetScannerState();
        this.requestCameraPermission();
    }

    tryAgain() {
        this.resetScannerState();
        this.requestCameraPermission();
    }

    async searchAsset() {
        if (!this.scanResult) return;

        try {
            const assets = await this.assetService.getAssets().toPromise();
            const foundAsset = assets?.find((asset) => asset.QrCode === this.scanResult || asset.PropertyNo === this.scanResult);

            if (foundAsset) {
                this.closeQRScanner();

                // Show success message with asset details
                Swal.fire({
                    title: 'Asset Found!',
                    html: `
                        <div class="text-left">
                            <p><strong>Property No:</strong> ${foundAsset.PropertyNo}</p>
                            <p><strong>Asset Name:</strong> ${foundAsset.AssetName}</p>
                            <p><strong>Category:</strong> ${foundAsset.Category}</p>
                            <p><strong>Location:</strong> ${foundAsset.FoundCluster}</p>
                            <p><strong>Issued To:</strong> ${foundAsset.IssuedTo}</p>
                            <p><strong>Status:</strong> ${foundAsset.Status_id}</p>
                        </div>
                    `,
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'View in Assets',
                    cancelButtonText: 'Close'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.router.navigate(['/pages/crud']);
                    }
                });
            } else {
                Swal.fire({
                    title: 'Asset Not Found',
                    text: `No asset found with QR code: ${this.scanResult}`,
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.error('Error searching asset:', error);
            Swal.fire({
                title: 'Search Error',
                text: 'Failed to search for asset. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    // PWA Methods
    installPWA() {
        if (this.installPromptService.canInstall()) {
            this.installPromptService.promptInstall().then((installed) => {
                if (installed) {
                    Swal.fire({
                        title: 'Installation Started!',
                        text: 'LAMS is being installed on your device.',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false
                    });
                }
            });
        } else {
            Swal.fire({
                title: 'Already Installed',
                text: 'LAMS is already installed or installation is not available on this device.',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    }
}
