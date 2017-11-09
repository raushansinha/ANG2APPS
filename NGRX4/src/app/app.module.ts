import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentModule } from './department/department.module';
import { StoreModule } from '@ngrx/store';
import { RootReducers } from './store/rootreducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/department'},
  {path: 'employee', loadChildren: 'app/employee/employee.module#EmployeeModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DepartmentModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(RootReducers),
    StoreDevtoolsModule.instrument({maxAge: 50}),
  ],
  exports: [RouterModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
