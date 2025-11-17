import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserContextService {
    private userIdSubject: BehaviorSubject<string | null>;

    // Observable stream for userId - use this in components
    public userId$: Observable<string | null>;

    constructor() {
        // Initialize with userId from localStorage or currentUser in localStorage
        let storedUserId = localStorage.getItem('userId');

        // If userId not found directly, try to get it from currentUser
        if (!storedUserId) {
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser) {
                try {
                    const user = JSON.parse(currentUser);
                    storedUserId = user.user_id || null;
                } catch (error) {
                    console.error('Error parsing currentUser:', error);
                }
            }
        }

        this.userIdSubject = new BehaviorSubject<string | null>(storedUserId || null);
        this.userId$ = this.userIdSubject.asObservable();

        console.log('UserContextService initialized with userId:', storedUserId);
    }

    /**
     * Set userId when user logs in
     * Call this from auth.service after successful login
     */
    setUserId(userId: string): void {
        this.userIdSubject.next(userId);
        localStorage.setItem('userId', userId);
        console.log('UserId set:', userId);
    }

    /**
     * Get current userId synchronously
     * Use this for quick access without subscription
     */
    getUserId(): string | null {
        let userId = this.userIdSubject.getValue();

        // Fallback: if userId is null, try to get from currentUser
        if (!userId) {
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser) {
                try {
                    const user = JSON.parse(currentUser);
                    userId = user.user_id || null;
                    if (userId) {
                        this.setUserId(userId); // Cache it for next time
                    }
                } catch (error) {
                    console.error('Error parsing currentUser:', error);
                }
            }
        }

        return userId;
    }

    /**
     * Clear userId on logout
     */
    clearUserId(): void {
        this.userIdSubject.next(null);
        localStorage.removeItem('userId');
        console.log('UserId cleared');
    }
}
