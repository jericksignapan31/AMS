import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UserData {
    userId?: string;
    user_id?: string;
    email: string;
    firstName: string;
    FirstName?: string;
    lastName: string;
    LastName?: string;
    middleName?: string;
    MiddleName?: string;
    Department?: string;
    MobileNo?: string;
    contactNumber?: string;
    Campus?: string;
    role: string;
    isActive?: boolean;
    isStaff?: boolean;
    isSuperUser?: boolean;
    userCreated?: string;
    userUpdated?: string;
    profilePicture?: string;
    profileImage?: string;
    [key: string]: any; // Allow additional fields
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = `${environment.apiUrl}/users`;

    constructor(private http: HttpClient) {}

    /**
     * Get user data by userId
     * @param userId - The user ID to fetch
     * @returns Observable of user data
     */
    getUserById(userId: string): Observable<UserData> {
        return this.http.get<UserData>(`${this.apiUrl}/${userId}`);
    }

    /**
     * Get current user profile
     * @returns Observable of current user profile data
     */
    getUserProfile(): Observable<UserData> {
        return this.http.get<UserData>(`${this.apiUrl}/profile/me`);
    }

    /**
     * Get all users
     * @returns Observable of array of users
     */
    getAllUsers(): Observable<UserData[]> {
        return this.http.get<UserData[]>(this.apiUrl);
    }

    /**
     * Update user data
     * @param userId - The user ID to update
     * @param userData - The user data to update
     * @returns Observable of updated user
     */
    updateUser(userId: string, userData: Partial<UserData>): Observable<UserData> {
        return this.http.put<UserData>(`${this.apiUrl}/${userId}`, userData);
    }

    /**
     * Delete user
     * @param userId - The user ID to delete
     * @returns Observable of delete response
     */
    deleteUser(userId: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${userId}`);
    }

    /**
     * Create new user
     * @param userData - The user data to create
     * @returns Observable of created user
     */
    createUser(userData: UserData): Observable<UserData> {
        return this.http.post<UserData>(this.apiUrl, userData);
    }

    /**
     * Get all campuses
     * @returns Observable of array of campuses
     */
    getCampuses(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.apiUrl}/campuses`);
    }

    /**
     * Get all departments
     * @returns Observable of array of departments
     */
    getDepartments(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.apiUrl}/departments`);
    }
}
