import { Http, URLSearchParams } from "@angular/http";
import { Injectable } from "@angular/core";
import { Employee, EmployeeDetail } from "../models/models";
//import 'rxjs/add/operator/map'
//import {Observable} from "rxjs/Observable";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmployeeService {
  private url = 'http://localhost:4444';

  constructor(private http: Http) { }

  getDetartments(): Observable<Employee[]> {
    return this.http.get(`${this.url}/employees`)
      .map(depts => depts.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getEmployeeDetail(id: string): Observable<Employee> {
    const params = new URLSearchParams();
    params.set("id", id);
    return this.http.get(`${this.url}/employee/`, { search: params })
      .map(r => r.json()['employee'])
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}