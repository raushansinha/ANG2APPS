import { GetDepartments } from './dept-store/actions/department-action';
import { DeptState } from './models/models';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DepartmentListGuard implements CanActivate {
  constructor(public store: Store<DeptState>) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(new GetDepartments());

    return true;

  }
}
