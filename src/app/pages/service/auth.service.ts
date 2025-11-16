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
    access_token: string;
    user: Omit<User, 'password'>;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/auth`;
    private currentUser: User | null = null;

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<{ success: boolean; user?: User; message?: string }> {
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
            map((response) => {
                if (response.user && response.access_token) {
                    this.currentUser = response.user as User;
                    localStorage.setItem('currentUser', JSON.stringify(response.user));
                    localStorage.setItem('token', response.access_token);
                    return { success: true, user: response.user as User };
                }
                return { success: false, message: 'Login failed' };
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
