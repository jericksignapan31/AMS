import { Routes } from '@angular/router';
import { BrandComponent } from './brand';
import { ColorComponent } from './color';
import { StatusComponent } from './status';
import { ProgramComponent, SupplierComponent, LocationComponent } from './assetcategory';

export const ASSET_CATEGORY_ROUTES: Routes = [
    { path: 'brand', component: BrandComponent },
    { path: 'color', component: ColorComponent },
    { path: 'program', component: ProgramComponent },
    { path: 'supplier', component: SupplierComponent },
    { path: 'location', component: LocationComponent },
    { path: 'status', component: StatusComponent }
];
