import { RouterAction } from '@ngrx/router-store';
import { DeptState, Department } from '../../models/models';
import { Action } from '@ngrx/store';

export const GET_DEPARTMENTS = '[Departments] Get';
export const GET_DEPARTMENT_SUCCESS = '[Departments] Get:success';
export const SERVER_ERROR = '[Departments] Get:error';


export class GetDepartments implements Action {
    readonly type = GET_DEPARTMENTS;
}

export class  GetDepartmentsSuccess implements Action {
    readonly type = GET_DEPARTMENT_SUCCESS;
    constructor(public departments: Department[]){ }
   
};

export class GetServerError implements Action {
    readonly type = SERVER_ERROR;
    constructor(public error: String) { }
};

export class GetDepartmentDetailSuccess implements Action {
    readonly type = 'GET_DEPARTMENT_DETAIL_SUCCESS';
    constructor(department: Department) { }
};

export type Action =
    RouterAction<DeptState>
    | GetDepartments
    | GetDepartmentsSuccess
    | GetDepartmentDetailSuccess
    | GetServerError;