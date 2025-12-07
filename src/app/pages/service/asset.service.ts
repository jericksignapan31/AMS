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
    inventoryCustodianSlip?: any;
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

export interface Laboratory {
    laboratoryId?: string;
    laboratoryName?: string;
    capacity?: string;
    campus?: {
        campusId?: string;
        campusName?: string;
        campusDirector?: string;
        campusCreated?: string;
        campusUpdated?: string;
    };
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

    createAssetWithFile(formData: FormData): Observable<Asset> {
        return this.http.post<Asset>(this.apiUrl, formData);
    }

    updateAsset(id: number, asset: Asset): Observable<Asset> {
        return this.http.put<Asset>(`${this.apiUrl}/${id}`, asset);
    }

    patchAsset(id: string | number, asset: Partial<Asset>): Observable<Asset> {
        return this.http.patch<Asset>(`${this.apiUrl}/${id}`, asset);
    }

    deleteAsset(id: string | number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    // Reference data methods
    getLocations(): Observable<Location[]> {
        console.log('📡 Fetching locations from:', `${this.baseApiUrl}/locations`);
        return this.http.get<Location[]>(`${this.baseApiUrl}/locations`).pipe(tap((data) => console.log('✅ getLocations API Response:', data)));
    }
    createLocation(body: Partial<Location>): Observable<Location> {
        return this.http.post<Location>(`${this.baseApiUrl}/locations`, body);
    }
    updateLocation(id: string, body: Partial<Location>): Observable<Location> {
        return this.http.put<Location>(`${this.baseApiUrl}/locations/${id}`, body);
    }
    deleteLocation(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseApiUrl}/locations/${id}`);
    }

    getSuppliers(): Observable<Supplier[]> {
        console.log('📡 Fetching suppliers from:', `${this.baseApiUrl}/suppliers`);
        return this.http.get<Supplier[]>(`${this.baseApiUrl}/suppliers`).pipe(tap((data) => console.log('✅ getSuppliers API Response:', data)));
    }
    createSupplier(body: Partial<Supplier>): Observable<Supplier> {
        return this.http.post<Supplier>(`${this.baseApiUrl}/suppliers`, body);
    }
    updateSupplier(id: string, body: Partial<Supplier>): Observable<Supplier> {
        return this.http.put<Supplier>(`${this.baseApiUrl}/suppliers/${id}`, body);
    }
    deleteSupplier(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseApiUrl}/suppliers/${id}`);
    }

    getPrograms(): Observable<Program[]> {
        console.log('📡 Fetching programs from:', `${this.baseApiUrl}/programs`);
        return this.http.get<Program[]>(`${this.baseApiUrl}/programs`).pipe(tap((data) => console.log('✅ getPrograms API Response:', data)));
    }
    createProgram(body: Partial<Program>): Observable<Program> {
        return this.http.post<Program>(`${this.baseApiUrl}/programs`, body);
    }
    updateProgram(id: string, body: Partial<Program>): Observable<Program> {
        return this.http.put<Program>(`${this.baseApiUrl}/programs/${id}`, body);
    }
    deleteProgram(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseApiUrl}/programs/${id}`);
    }

    getStatuses(): Observable<Status[]> {
        return this.http.get<Status[]>(`${this.baseApiUrl}/status`).pipe(tap((data) => console.log('getStatuses API Response:', data)));
    }
    createStatus(body: Partial<Status>): Observable<Status> {
        return this.http.post<Status>(`${this.baseApiUrl}/status`, body);
    }
    updateStatus(id: string, body: Partial<Status>): Observable<Status> {
        return this.http.put<Status>(`${this.baseApiUrl}/status/${id}`, body);
    }
    deleteStatus(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseApiUrl}/status/${id}`);
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
    createColor(body: Partial<Color>): Observable<Color> {
        return this.http.post<Color>(`${this.baseApiUrl}/colors`, body);
    }
    updateColor(id: string, body: Partial<Color>): Observable<Color> {
        return this.http.put<Color>(`${this.baseApiUrl}/colors/${id}`, body);
    }
    deleteColor(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseApiUrl}/colors/${id}`);
    }

    getBrands(): Observable<Brand[]> {
        console.log('📡 Fetching brands from:', `${this.baseApiUrl}/brands`);
        return this.http.get<Brand[]>(`${this.baseApiUrl}/brands`).pipe(tap((data) => console.log('✅ getBrands API Response:', data)));
    }
    createBrand(body: Partial<Brand>): Observable<Brand> {
        return this.http.post<Brand>(`${this.baseApiUrl}/brands`, body);
    }
    updateBrand(id: string, body: Partial<Brand>): Observable<Brand> {
        return this.http.put<Brand>(`${this.baseApiUrl}/brands/${id}`, body);
    }
    deleteBrand(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseApiUrl}/brands/${id}`);
    }

    // Laboratory methods
    getLaboratories(): Observable<Laboratory[]> {
        console.log('📡 Fetching laboratories from:', `${this.baseApiUrl}/laboratories`);
        return this.http.get<Laboratory[]>(`${this.baseApiUrl}/laboratories`).pipe(tap((data) => console.log('✅ getLaboratories API Response:', data)));
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

    // ICS Data methods
    getAssetInventoryCustodianSlip(assetId: string): Observable<any> {
        console.log('📡 Fetching ICS from:', `${this.baseApiUrl}/assets/${assetId}/inventoryCustodianSlip`);
        return this.http.get<any>(`${this.baseApiUrl}/assets/${assetId}/inventoryCustodianSlip`).pipe(tap((data) => console.log('✅ ICS API Response:', data)));
    }

    // QR Code upload method
    uploadQrCode(assetId: string, file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        console.log(`📡 Uploading QR code to: ${this.baseApiUrl}/storage/qr-code/${assetId}`);
        return this.http.post<any>(`${this.baseApiUrl}/storage/qr-code/${assetId}`, formData).pipe(tap((response) => console.log('✅ QR Code upload successful:', response)));
    }

    // User methods
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseApiUrl}/users`);
    }

    getUserById(id: string): Observable<any> {
        return this.http.get<any>(`${this.baseApiUrl}/users/${id}`);
    }
}
