import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component'
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AddressReducer } from './ngrx-store/address-reducer';


const routes: Routes = [
  {path: '', component: AddressComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('addresses', AddressReducer)
  ],
  declarations: [AddressComponent],
  providers: []
})
export class AddressModule {
    
}
