import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { MessageModule } from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, HttpClientModule, AppFloatingConfigurator],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <img src="assets/icons/icon-48x48.png" alt="logo" class="mb-8 mx-auto" />
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Welcome to Lams!</div>
                            <span class="text-muted-color font-medium">Sign in to continue</span>
                        </div>

                        <div>
                            <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                            <input pInputText id="email1" type="text" placeholder="Email address" class="w-full md:w-120 mb-8" [(ngModel)]="email" />

                            <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                            <p-password id="password1" [(ngModel)]="password" placeholder="Password" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>

                            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                <div class="flex items-center">
                                    <p-checkbox [(ngModel)]="checked" id="rememberme1" binary class="mr-2"></p-checkbox>
                                    <label for="rememberme1">Remember me</label>
                                </div>
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Forgot password?</span>
                            </div>

                            <p-button label="Sign In" styleClass="w-full" [loading]="isLoading" (onClick)="onLogin()"> </p-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Login {
    email: string = '';
    password: string = '';
    checked: boolean = false;
    isLoading: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    onLogin(): void {
        if (!this.email || !this.password) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Please enter both email and password',
                confirmButtonColor: '#3B82F6'
            });
            return;
        }

        this.isLoading = true;

        this.authService.login(this.email, this.password).subscribe({
            next: (response) => {
                this.isLoading = false;
                if (response.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful!',
                        text: `Welcome back, ${response.user?.FirstName || 'User'}!`,
                        timer: 2000,
                        showConfirmButton: false,
                        confirmButtonColor: '#10B981'
                    }).then(() => {
                        this.router.navigate(['/app']);
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: response.message || 'Invalid email or password',
                        confirmButtonColor: '#EF4444'
                    });
                }
            },
            error: (error) => {
                this.isLoading = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Connection Error',
                    text: 'Unable to connect to the server. Please try again.',
                    confirmButtonColor: '#EF4444'
                });
                console.error('Login error:', error);
            }
        });
    }
}
