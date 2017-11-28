import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';
import { Params, ActivatedRouteSnapshot } from "@angular/router";
import { Store, combineReducers } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/withLatestFrom';
import { EmployeeService } from '../../services/employee-service';
import { EmpState } from '../../models/models';
import * as employeeAction from '../actions/employee-action';

@Injectable()
export class EmployeeEffects {

  constructor(private actions: Actions, private store: Store<EmpState>, private employeeService: EmployeeService) {
  }


  // @Effect() navigateToDepartments = this.actions.ofType(ROUTER_NAVIGATION)
  // .map(firstSegment)
  // .filter(s => s.routeConfig.path === "departments")
  // .switchMap((r: ActivatedRouteSnapshot) => {
  //   return this.departmentService.getDetartments().map(resp => ({type: 'GET_DEPARTMENT_SUCCESS', payload: {...resp}}));
  // }).catch(e => {
  //   console.log('Network error', e);
  //   return of();
  // });

  @Effect() loadEmployees = this.actions
    .ofType(employeeAction.GET_EMPLOYEES)
    .switchMap(() => this.employeeService.getDetartments()
      .map(resp => new employeeAction.GetEmployeesSuccess(resp)));
  //.catch(error => new departmentAction.GetServerError(error)));


  @Effect() navigateToEmployees = this.handleNavigation('employees', (r: ActivatedRouteSnapshot) => {
    return this.employeeService.getDetartments()
      .map(resp => new employeeAction.GetEmployeesSuccess(resp));
    //.catch(error => new departmentAction.GetServerError(error)));
  });

  @Effect() navigateToEmployee = this.handleNavigation('employee/:id', (r: ActivatedRouteSnapshot, state: EmpState) => {
    const id: string = r.paramMap.get('id');
    if (!state.employees) {
      return this.employeeService.getEmployeeDetail(id)
      // .map(resp => ({ type: 'GET_DEPARTMENT_DETAIL_SUCCESS', payload: resp }))
      // .catch(error => of({ type: 'SERVER_ERROR', payload: error }));
    } else {
      return of();
    }
  });


  private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: EmpState) => Observable<any>) {
    const nav = this.actions.ofType(ROUTER_NAVIGATION)
      .map(firstSegment)
      .filter(s => s.routeConfig.path === segment);

    return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
      console.log('Network error', e);
      return of();
    });
  }
}

function firstSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.firstChild;
}

