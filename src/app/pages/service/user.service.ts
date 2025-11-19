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

    /**
     * Create new campus
     * @param campusData - The campus data to create
     * @returns Observable of created campus
     */
    createCampus(campusData: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/campuses`, campusData);
    }

    /**
     * Update campus
     * @param campusId - The campus ID to update
     * @param campusData - The campus data to update
     * @returns Observable of updated campus
     */
    updateCampus(campusId: string, campusData: any): Observable<any> {
        return this.http.patch<any>(`${environment.apiUrl}/campuses/${campusId}`, campusData);
    }

    /**
     * Delete campus
     * @param campusId - The campus ID to delete
     * @returns Observable of delete response
     */
    deleteCampus(campusId: string): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/campuses/${campusId}`);
    }

    /**
     * Create new department
     * @param departmentData - The department data to create
     * @returns Observable of created department
     */
    createDepartment(departmentData: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/departments`, departmentData);
    }

    /**
     * Update department
     * @param departmentId - The department ID to update
     * @param departmentData - The department data to update
     * @returns Observable of updated department
     */
    updateDepartment(departmentId: string, departmentData: any): Observable<any> {
        return this.http.patch<any>(`${environment.apiUrl}/departments/${departmentId}`, departmentData);
    }

    /**
     * Delete department
     * @param departmentId - The department ID to delete
     * @returns Observable of delete response
     */
    deleteDepartment(departmentId: string): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/departments/${departmentId}`);
    }
}
