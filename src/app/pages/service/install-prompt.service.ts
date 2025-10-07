import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class InstallPromptService {
    private deferredPrompt: any = null;
    private isInstallable$ = new BehaviorSubject<boolean>(false);

    constructor() {
        this.initializeInstallPrompt();
    }

    get isInstallable() {
        return this.isInstallable$.asObservable();
    }

    private initializeInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('PWA install prompt triggered');
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later
            this.deferredPrompt = e;
            this.isInstallable$.next(true);

            // Show install suggestion after a delay
            setTimeout(() => {
                this.showInstallSuggestion();
            }, 10000); // Show after 10 seconds
        });

        window.addEventListener('appinstalled', () => {
            console.log('PWA was installed');
            this.deferredPrompt = null;
            this.isInstallable$.next(false);

            Swal.fire({
                title: 'Installation Complete!',
                text: 'LAMS has been installed successfully. You can now access it from your home screen.',
                icon: 'success',
                timer: 3000,
                showConfirmButton: false
            });
        });
    }

    private showInstallSuggestion() {
        if (this.deferredPrompt && !this.isAppInstalled()) {
            Swal.fire({
                title: 'Install LAMS App',
                text: 'Install LAMS on your device for quick access and offline functionality.',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Install',
                cancelButtonText: 'Not Now',
                confirmButtonColor: '#1976d2',
                imageUrl: 'icons/icon-192x192.png',
                imageWidth: 80,
                imageHeight: 80
            }).then((result) => {
                if (result.isConfirmed) {
                    this.promptInstall();
                }
            });
        }
    }

    promptInstall(): Promise<boolean> {
        return new Promise((resolve) => {
            if (this.deferredPrompt) {
                this.deferredPrompt.prompt();

                this.deferredPrompt.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                        resolve(true);
                    } else {
                        console.log('User dismissed the install prompt');
                        resolve(false);
                    }
                    this.deferredPrompt = null;
                    this.isInstallable$.next(false);
                });
            } else {
                console.log('No install prompt available');
                resolve(false);
            }
        });
    }

    private isAppInstalled(): boolean {
        return window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true;
    }

    canInstall(): boolean {
        return this.deferredPrompt !== null;
    }
}
