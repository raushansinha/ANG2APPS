import { Component, OnInit } from '@angular/core';
import { Department } from './Models/department'
import { DepartmentService } from '../services/department.service'
import { Store } from '@ngrx/store';
import { GetDepartment } from './ngrx-store/action';
import { DeptReducer } from './ngrx-store/dept-reducer';
import { getDepartmentState, IAppState } from '../store/rootReducer';

@Component({
  selector: 'dept-list',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
    departments: Array<Department>;
  
    constructor(private store: Store<Department>, private departmentService: DepartmentService) {
    }
  
    ngOnInit() {
      this.departmentService.getDepartmentInfo()
        .subscribe(
          department => this.store.dispatch(new GetDepartment(DeptReducer))
        );
  
      this.store.select(getDepartmentState)
        .subscribe(
          departments => this.departments.push(departments)
        );
  
    }
  
  }
  
