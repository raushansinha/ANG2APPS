import { Component, Input } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Router, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import * as empModels from '../models/models';


@Component({
  selector: 'employee-cmp',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() employee: empModels.Employee;
}