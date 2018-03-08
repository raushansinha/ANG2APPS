import { DeptReducer } from '../ngrx-store/dept-reducer';
import { Component, OnInit } from '@angular/core';
import { Department } from '../Models/department'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as deptReducer from '../ngrx-store/dept-reducer';

@Component({
  selector: 'dept-list',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Observable<Array<Department>>;

  constructor(private store: Store<Array<Department>>) {
  }

  ngOnInit() {
    this.departments = this.store.select(deptReducer.selectDepartment);
    console.log(this.departments);
  }

}

