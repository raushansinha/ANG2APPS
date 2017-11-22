import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Router, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import { DeptState, Department } from '../models/models';
import * as  DepartmentReducer  from '../dept-store/reducers/department-reducer';
import { strictEqual } from 'assert';

@Component({
  selector: 'departments-cmp',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {
  title = 'Departments List';
  departments$: Observable<Department[]>;

  constructor(private router: Router, private store: Store<DeptState>) {
   
  }

  ngOnInit() {
    this.departments$ = this.store.select(DepartmentReducer.getDepartmentEntities);
    console.log("Departments: " + this.departments$);
  }
}