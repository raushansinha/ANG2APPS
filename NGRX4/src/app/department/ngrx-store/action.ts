import { Action } from '@ngrx/store';

export const GET_DEPT = 'Department List';

export class GetDepartment implements Action {
  readonly type = GET_DEPT;

  constructor(public payload ?: any) {
  }
}
