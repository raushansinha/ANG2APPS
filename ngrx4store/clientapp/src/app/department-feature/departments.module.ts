import { CommonModule  } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DepartmentReducer } from './dept-store/reducers/department-reducer';
import { DepartmentsEffects } from './dept-store/effects/department-effect';
import { DeptState, initialState } from './models/models';
import { DepartmentService } from './services/department-service';
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { DepartmentListGuard } from './departments-list-guard';

export const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent
    //canActivate: [DepartmentListGuard],
  },
  {
    path: 'department:id', 
    component: DepartmentDetailsComponent
  }
];

@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentsComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    CommonModule ,
    HttpModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('departments', DepartmentReducer),
    EffectsModule.forFeature([
          DepartmentsEffects
    ]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({maxAge: 50}),
  ],
  exports: [RouterModule, StoreModule, EffectsModule],
  providers: [DepartmentService, DepartmentListGuard],
})
export class DepartmentsModule { }
