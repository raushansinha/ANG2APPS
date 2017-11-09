import * as fromRoot from '../../store/rootReducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Employee } from '../Models/employee'


export const initialState: Employee = {
    fName: "Raushan",
    lName: "Sinha",
    empDept: "IT"
};

export function reducer(state: Employee = initialState, action: any): Employee {
  switch (action.type) {
    case 'GET_EMPLOYEE':
      return Object.assign({}, state, {employees: action.payload});
    default:
      return state;
  }
}

export interface State extends fromRoot.IAppState {
  'employee': Employee
}

export const getMailBoxState = createFeatureSelector<Employee>('employee');

export const getFolders = createSelector(getMailBoxState,
  (state: Employee) => state);