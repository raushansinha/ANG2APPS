import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';
import { Params, ActivatedRouteSnapshot } from "@angular/router";
import { Store, combineReducers } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/withLatestFrom';
import { DepartmentService } from '../../services/department-service';
import { DeptState } from '../../models/models';
import * as departmentAction from '../actions/department-action';

@Injectable()
export class DepartmentsEffects {

  constructor(private actions: Actions, private store: Store<DeptState>, private departmentService: DepartmentService) {
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

  @Effect() loadDepartments = this.actions
    .ofType(departmentAction.GET_DEPARTMENTS)
    .switchMap(() => this.departmentService.getDetartments()
      .map(resp => new departmentAction.GetDepartmentsSuccess(resp)));
  //.catch(error => new departmentAction.GetServerError(error)));


  @Effect() navigateToDepartments = this.handleNavigation('departments', (r: ActivatedRouteSnapshot) => {
    return this.departmentService.getDetartments()
      .map(resp => new departmentAction.GetDepartmentsSuccess(resp));
    //.catch(error => new departmentAction.GetServerError(error)));
  });

  @Effect() navigateToDepartment = this.handleNavigation('department/:id', (r: ActivatedRouteSnapshot, state: DeptState) => {
    const id: string = r.paramMap.get('id');
    if (!state.departments) {
      return this.departmentService.getDepartmentDetail(id)
      // .map(resp => ({ type: 'GET_DEPARTMENT_DETAIL_SUCCESS', payload: resp }))
      // .catch(error => of({ type: 'SERVER_ERROR', payload: error }));
    } else {
      return of();
    }
  });


  private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: DeptState) => Observable<any>) {
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

