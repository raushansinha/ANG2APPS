import { Component, Input } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Router, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import * as deptModels from '../models/models';


@Component({
  selector: 'department-cmp',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  @Input() department: deptModels.Department;
}