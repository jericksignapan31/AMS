import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface Asset {
    assetId?: string;
    assetName?: string;
    propertyNumber?: string;
    category?: string;
    foundCluster?: string;
    issuedTo?: string;
    purpose?: string;
    qrCode?: string;
    assetCreated?: string;
    // Legacy fields for backward compatibility
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

export interface Location {
    locationId?: string;
    locationName?: string;
    description?: string;
}

export interface Supplier {
    supplierId?: string;
    supplierName?: string;
    contactInfo?: string;
}

export interface Program {
    programId?: string;
    programName?: string;
    description?: string;
}

export interface Status {
    statusId?: string;
    statusName?: string;
}

export interface InvCustlip {
    inv_custlip_id?: string;
    Quantity?: string;
    UoM?: string;
    Description?: string;
    brand_id?: string;
    specs?: {
        CPU?: string;
        RAM?: string;
        Storage?: string;
    };
    color_id?: string;
    height?: string;
    width?: string;
    package?: string;
    material?: string;
    InvNo?: string;
    DateAcquired?: string;
}

export interface Color {
    colorId?: string;
    colorName?: string;
    description?: string;
}

export interface Brand {
    brandId?: string;
    brandName?: string;
}

export interface MaintenanceRequest {
    maintenance_request_id?: string;
    assets_id?: string;
    RequestDate?: string;
    IssueDescription?: string;
    RequestedBy?: string;
    Status?: string;
    Priority?: string;
    id?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AssetService {
    private apiUrl = `${environment.apiUrl}/assets`;
    private baseApiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getAssets(): Observable<Asset[]> {
        return this.http.get<Asset[]>(this.apiUrl).pipe(tap((data) => console.log('getAssets API Response:', data)));
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

    // Reference data methods
    getLocations(): Observable<Location[]> {
        console.log('📡 Fetching locations from:', `${this.baseApiUrl}/locations`);
        return this.http.get<Location[]>(`${this.baseApiUrl}/locations`).pipe(tap((data) => console.log('✅ getLocations API Response:', data)));
    }

    getSuppliers(): Observable<Supplier[]> {
        console.log('📡 Fetching suppliers from:', `${this.baseApiUrl}/suppliers`);
        return this.http.get<Supplier[]>(`${this.baseApiUrl}/suppliers`).pipe(tap((data) => console.log('✅ getSuppliers API Response:', data)));
    }

    getPrograms(): Observable<Program[]> {
        console.log('📡 Fetching programs from:', `${this.baseApiUrl}/programs`);
        return this.http.get<Program[]>(`${this.baseApiUrl}/programs`).pipe(tap((data) => console.log('✅ getPrograms API Response:', data)));
    }

    getStatuses(): Observable<Status[]> {
        return this.http.get<Status[]>(`${this.baseApiUrl}/status`).pipe(tap((data) => console.log('getStatuses API Response:', data)));
    }

    // InvCustlips methods
    getInvCustlips(): Observable<InvCustlip[]> {
        return this.http.get<InvCustlip[]>(`${this.baseApiUrl}/InvCustlips`);
    }

    getInvCustlip(id: string): Observable<InvCustlip> {
        return this.http.get<InvCustlip>(`${this.baseApiUrl}/InvCustlips/${id}`);
    }

    createInvCustlip(invCustlip: InvCustlip): Observable<InvCustlip> {
        return this.http.post<InvCustlip>(`${this.baseApiUrl}/InvCustlips`, invCustlip);
    }

    updateInvCustlip(id: string, invCustlip: InvCustlip): Observable<InvCustlip> {
        return this.http.put<InvCustlip>(`${this.baseApiUrl}/InvCustlips/${id}`, invCustlip);
    }

    deleteInvCustlip(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseApiUrl}/InvCustlips/${id}`);
    }

    // Colors and Brands methods
    getColors(): Observable<Color[]> {
        console.log('📡 Fetching colors from:', `${this.baseApiUrl}/colors`);
        return this.http.get<Color[]>(`${this.baseApiUrl}/colors`).pipe(tap((data) => console.log('✅ getColors API Response:', data)));
    }

    getBrands(): Observable<Brand[]> {
        console.log('📡 Fetching brands from:', `${this.baseApiUrl}/brands`);
        return this.http.get<Brand[]>(`${this.baseApiUrl}/brands`).pipe(tap((data) => console.log('✅ getBrands API Response:', data)));
    }

    // Maintenance Request methods
    getMaintenanceRequests(): Observable<MaintenanceRequest[]> {
        return this.http.get<MaintenanceRequest[]>(`${this.baseApiUrl}/MaintenanceRequests`);
    }

    getMaintenanceRequest(id: string): Observable<MaintenanceRequest> {
        return this.http.get<MaintenanceRequest>(`${this.baseApiUrl}/MaintenanceRequests/${id}`);
    }

    createMaintenanceRequest(maintenanceRequest: MaintenanceRequest): Observable<MaintenanceRequest> {
        return this.http.post<MaintenanceRequest>(`${this.baseApiUrl}/MaintenanceRequests`, maintenanceRequest);
    }

    updateMaintenanceRequest(id: string, maintenanceRequest: MaintenanceRequest): Observable<MaintenanceRequest> {
        return this.http.put<MaintenanceRequest>(`${this.baseApiUrl}/MaintenanceRequests/${id}`, maintenanceRequest);
    }

    deleteMaintenanceRequest(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseApiUrl}/MaintenanceRequests/${id}`);
    }

    // User methods
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseApiUrl}/users`);
    }

    getUserById(id: string): Observable<any> {
        return this.http.get<any>(`${this.baseApiUrl}/users/${id}`);
    }
}
