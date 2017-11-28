import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Router, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import { DeptState, Department } from '../models/models';
import * as  DepartmentReducer  from '../dept-store/reducers/department-reducer';
import * as deptAction from '../dept-store/actions/department-action';

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {
  title = 'Departments List';
  departments$: Observable<Department[]>;

  constructor(private router: Router, private store: Store<Department[]>) {
   
  }

  ngOnInit() {
    this.displayDepartments();
  }

  // refreshList() {
  //   //this.store.dispatch(new deptAction.GetDepartments)
  //   this.displayDepartments();
  // }

  displayDepartments()
  {
    this.departments$ = this.store.select(DepartmentReducer.getDepartmentEntities);
    console.log("Departments: " + this.departments$);
  }
}