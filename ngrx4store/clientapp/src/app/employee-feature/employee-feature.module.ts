import { CommonModule  } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EmployeeReducer } from './emp-store/reducers/employee-reducer';
import { EmployeeEffects } from './emp-store/effects/employee-effect';
import { EmpState, initialState } from './models/models';
import { EmployeeService } from './services/employee-service';
import { StoreRouterConnectingModule } from "@ngrx/router-store";

export const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
    //canActivate: [DepartmentListGuard],
  },
  {
    path: 'employee:id', 
    component: EmployeeDetailsComponent
  }
];

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule ,
    HttpModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('employeeList', EmployeeReducer),
    EffectsModule.forFeature([
          EmployeeEffects
    ]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({maxAge: 50}),
  ],
  exports: [RouterModule, StoreModule, EffectsModule],
  providers: [EmployeeService],
})
export class EmployeeFeatureModule { }
