import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from '../department/department.component';
import { RouterModule } from '@angular/router';
import { DepartmentService } from '../services/department.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: 'department', pathMatch: 'full', component: DepartmentComponent}])
  ],
  declarations: [DepartmentComponent],
  providers: [DepartmentService],
  exports: []
})
export class DepartmentModule {
}
