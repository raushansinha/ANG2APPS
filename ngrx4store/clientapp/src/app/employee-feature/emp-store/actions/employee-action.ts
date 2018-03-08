import { RouterAction } from '@ngrx/router-store';
import { Employee } from '../../models/models';
import { Action } from '@ngrx/store';

export const GET_EMPLOYEES = '[Employees] Get';
export const GET_EMPLOYEE_SUCCESS = '[Employees] Get:success';
export const SERVER_ERROR = '[Employees] Get:error';


export class GetEmployees implements Action {
    readonly type = GET_EMPLOYEES;
}

export class  GetEmployeesSuccess implements Action {
    readonly type = GET_EMPLOYEE_SUCCESS;
    constructor(public payload: Employee[]){ }
   
};

export class GetServerError implements Action {
    readonly type = SERVER_ERROR;
    constructor(public error: String) { }
};

export class GetEmployeeDetailSuccess implements Action {
    readonly type = 'GET_EMPLOYEE_DETAIL_SUCCESS';
    constructor(payload: Employee) { }
};

export type EmpAction =
     GetEmployees
    | GetEmployeesSuccess
    | GetEmployeeDetailSuccess
    | GetServerError;