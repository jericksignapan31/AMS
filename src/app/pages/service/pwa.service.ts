import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class PwaService {
    constructor(private swUpdate: SwUpdate) {
        if (swUpdate.isEnabled) {
            // Check for updates every 30 seconds
            setInterval(() => {
                swUpdate.checkForUpdate();
            }, 30000);

            // Handle version ready events
            swUpdate.versionUpdates.pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')).subscribe((evt) => {
                this.showUpdateNotification();
            });
        }
    }

    private showUpdateNotification() {
        Swal.fire({
            title: 'New Version Available!',
            text: 'A new version of LAMS is available. Would you like to update now?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Update Now',
            cancelButtonText: 'Later',
            confirmButtonColor: '#1976d2'
        }).then((result) => {
            if (result.isConfirmed) {
                this.updateApp();
            }
        });
    }

    updateApp() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.activateUpdate().then(() => {
                Swal.fire({
                    title: 'Update Complete!',
                    text: 'The application has been updated successfully.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    window.location.reload();
                });
            });
        }
    }

    checkForUpdate() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.checkForUpdate().then((hasUpdate) => {
                if (!hasUpdate) {
                    Swal.fire({
                        title: 'No Updates',
                        text: 'You are already using the latest version of LAMS.',
                        icon: 'info',
                        timer: 2000,
                        showConfirmButton: false
                    });
                }
            });
        }
    }
}
