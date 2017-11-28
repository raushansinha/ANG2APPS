import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Router, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import { EmpState, Employee } from '../models/models';
import * as  EmployeeReducer  from '../emp-store/reducers/employee-reducer';
import { strictEqual } from 'assert';
import * as deptAction from '../emp-store/actions/employee-action';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  title = 'Employees List';
  employees$: Observable<Employee[]>;

  constructor(private router: Router, private store: Store<Employee[]>) {
   
  }

  ngOnInit() {
    this.displayEmployees();
  }

  // refreshList() {
  //   //this.store.dispatch(new deptAction.GetDepartments)
  //   this.displayDepartments();
  // }

  displayEmployees()
  {
    this.employees$ = this.store.select(EmployeeReducer.getEmployeeEntities);
    console.log("Employeess: " + this.employees$);
  }
}