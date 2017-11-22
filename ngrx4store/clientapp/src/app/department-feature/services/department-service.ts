import { Http, URLSearchParams } from "@angular/http";
import { Injectable } from "@angular/core";
import { Department, DepartmentDetail } from "../models/models";
//import 'rxjs/add/operator/map'
//import {Observable} from "rxjs/Observable";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DepartmentService {
  private url = 'http://localhost:4444';

  constructor(private http: Http) { }

  getDetartments(): Observable<Department[]> {
    return this.http.get(`${this.url}/departments`)
      .map(depts => depts.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getDepartmentDetail(id: string): Observable<Department> {
    const params = new URLSearchParams();
    params.set("id", id);
    return this.http.get(`${this.url}/departmrnt/`, { search: params })
      .map(r => r.json()['department'])
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}