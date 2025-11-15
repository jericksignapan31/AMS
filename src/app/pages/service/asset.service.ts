import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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

export interface Location {
    id?: string;
    LocationName?: string;
    Description?: string;
}

export interface Supplier {
    id?: string;
    SupplierName?: string;
    ContactInfo?: string;
}

export interface Program {
    id?: string;
    ProgramName?: string;
    Description?: string;
}

export interface Status {
    id?: string;
    StatusName?: string;
    Description?: string;
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
    color_id?: string;
    ColorCode?: string;
    Description?: string;
}

export interface Brand {
    brand_id?: string;
    BrandName?: string;
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

    // Reference data methods
    getLocations(): Observable<Location[]> {
        return this.http.get<Location[]>(`${this.baseApiUrl}/locations`);
    }

    getSuppliers(): Observable<Supplier[]> {
        return this.http.get<Supplier[]>(`${this.baseApiUrl}/suppliers`);
    }

    getPrograms(): Observable<Program[]> {
        return this.http.get<Program[]>(`${this.baseApiUrl}/programs`);
    }

    getStatuses(): Observable<Status[]> {
        return this.http.get<Status[]>(`${this.baseApiUrl}/statuses`);
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
        return this.http.get<Color[]>(`${this.baseApiUrl}/colors`);
    }

    getBrands(): Observable<Brand[]> {
        return this.http.get<Brand[]>(`${this.baseApiUrl}/brands`);
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
