import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Asset {
    id?: number;
    PropertyNo?: string;
    Category?: string;
    AssetName?: string;
    FoundCluster?: string;
    Location_id?: string;
    Supplier_id?: string;
    Program_id?: string;
    Purpose?: string;
    DateAcquired?: string;
    IssuedTo?: string;
    Status_id?: string;
    Active?: string;
    QrCode?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AssetService {
    private apiUrl = 'http://localhost:3001/assets';

    constructor(private http: HttpClient) {}

    getAssets(): Observable<Asset[]> {
        return this.http.get<Asset[]>(this.apiUrl);
    }

    getAsset(id: number): Observable<Asset> {
        return this.http.get<Asset>(`${this.apiUrl}/${id}`);
    }

    createAsset(asset: Asset): Observable<Asset> {
        return this.http.post<Asset>(this.apiUrl, asset);
    }

    updateAsset(id: number, asset: Asset): Observable<Asset> {
        return this.http.put<Asset>(`${this.apiUrl}/${id}`, asset);
    }

    deleteAsset(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
