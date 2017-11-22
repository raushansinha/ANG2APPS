// @ngrx
import { Action } from "@ngrx/store";

// models
import { Department } from "../../models/department";

// activities
export const LOAD_DEPT = "[Departments] Load activity";
export const LOAD_DEPT_ERROR = "[Departments] Load activity error";
export const LOAD_DEPT_SUCCESS = "[Departments] Load activity success";

/**
 * Load activity.
 * @class LoadDepartmentAction
 * @implements {Action}
 */
export class LoadDepartmentAction implements Action {
  readonly type = LOAD_DEPT;
  //constructor(public payload: { id: string }) {}
}

/**
 * Load activity error.
 * @class LoadDepartmentErrorAction
 * @implements {Action}
 */
export class LoadDepartmentErrorAction implements Action {
  readonly type = LOAD_DEPT_ERROR;
  constructor(public payload: { error: Error }) {}
}

/**
 * Load activity success.
 * @class LoadDepartmentSuccessAction
 * @implements {Action}
 */
export class LoadDepartmentSuccessAction implements Action {
  readonly type = LOAD_DEPT_SUCCESS;
  constructor(public payload: { department: Department }) {}
}

/**
 * Actions type.
 * @type {Department}
 */
export type DepartmentAction
  = LoadDepartmentAction
  | LoadDepartmentErrorAction
  | LoadDepartmentSuccessAction;