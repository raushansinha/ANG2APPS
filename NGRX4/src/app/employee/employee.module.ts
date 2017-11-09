import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component'
import { RouterModule, Routes } from '@angular/router';
//import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx-store/emp-reducer'
import { EmployeeService } from '../services/employee.service';

const routes: Routes = [
  {path: '', component: EmployeeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    //MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('employees', reducer)
  ],
  declarations: [EmployeeComponent],
  providers: [EmployeeService]
})
export class EmployeeModule {
}
