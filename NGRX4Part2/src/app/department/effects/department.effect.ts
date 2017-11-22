import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import * as DepartmentAction from "../actions/department.action";
import { DepartmentService } from "../services/department.service";


@Injectable()
export class DepartmentEffects {

    constructor(
        private actions$: DepartmentAction.DepartmentAction,
        private departmentService$: DepartmentService
    ) { }

    @Effect()
    public Add: Observable<Actions> = this.actions$
    .ofType(DepartmentAction.LOAD_DEPT)
    .switchMap(() => {
        return this.departmentService$.GetDepaetments()
            .map((department) =>  new DepartmentAction.LoadDepartmentSuccessAction({department: department}))
            .catch(error => Observable.of(new DepartmentAction.LoadDepartmentErrorAction({error: error})))
    }); 
}