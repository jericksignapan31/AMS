import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
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
    private apiUrl = 'http://localhost:3000/users';
    private currentUser: User | null = null;

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<LoginResponse> {
        return this.http.get<User[]>(this.apiUrl).pipe(
            map((users) => {
                const user = users.find((u) => u.email === email && u.password === password);
                if (user) {
                    this.currentUser = user;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return { success: true, user };
                } else {
                    return { success: false, message: 'Invalid email or password' };
                }
            }),
            catchError((error) => {
                console.error('Login error:', error);
                return of({ success: false, message: 'Login service unavailable' });
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
