import { Injectable } from '@angular/core';
import { Department } from '../../Models/department';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DepartmentService {

  constructor() {
  }

  public GetDepaetments(): Observable<Department> {
    return Observable.of({deptCode: 'IT', deptName: 'Information Tech'});
  }
}