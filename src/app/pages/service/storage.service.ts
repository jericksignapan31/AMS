import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private apiUrl = `${environment.apiUrl}/storage`;

    constructor(private http: HttpClient) {}

    /**
     * Upload profile picture
     * @param file - The image file to upload
     * @returns Observable of upload response with image URL
     */
    uploadProfilePicture(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${this.apiUrl}/profile-picture`, formData);
    }

    /**
     * Delete profile picture
     * @param pictureUrl - The URL of the picture to delete
     * @returns Observable of delete response
     */
    deleteProfilePicture(pictureUrl: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/profile-picture`, {
            body: { url: pictureUrl }
        });
    }
}
