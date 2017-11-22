import { Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/department'},
  {path: 'employee', loadChildren: 'app/employee/employee.module#EmployeeModule'},
  {path: 'address', loadChildren: 'app/address/address.module#AddressModule'}
];