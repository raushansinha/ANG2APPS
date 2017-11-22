import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService {

  constructor() {
  }

  public getEmployeeInfo(): Observable<Employee> {
    return Observable.of({fName: 'Reyansh', lName: 'Sinha', empDept: 'Student'});
  }
}