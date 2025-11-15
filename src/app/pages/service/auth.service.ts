import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface User {
    user_id: string;
    email: string;
    password?: string;
    FirstName: string;
    LastName: string;
    Department: string;
    MobileNo: string;
    Campus: string;
    role: string;
    profileImage?: string;
    token?: string;
}

export interface LoginResponse {
    success: boolean;
    user?: User;
    message?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/auth`;
    private currentUser: User | null = null;

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
            map((response) => {
                if (response.success && response.user) {
                    this.currentUser = response.user;
                    localStorage.setItem('currentUser', JSON.stringify(response.user));
                    if (response.user.token) {
                        localStorage.setItem('token', response.user.token);
                    }
                }
                return response;
            }),
            catchError((error) => {
                console.error('Login error:', error);
                const message = error.error?.message || 'Unable to connect to server';
                return of({ success: false, message });
            })
        );
    }

    logout(): void {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    getCurrentUser(): User | null {
        if (!this.currentUser) {
            const stored = localStorage.getItem('currentUser');
            if (stored) {
                this.currentUser = JSON.parse(stored);
            }
        }
        return this.currentUser;
    }

    isLoggedIn(): boolean {
        return this.getCurrentUser() !== null;
    }
}
