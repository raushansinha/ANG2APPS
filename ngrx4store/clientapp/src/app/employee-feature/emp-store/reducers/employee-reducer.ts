import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store } from '@ngrx/store/src/store';

import * as empModel from '../../models/models';
import * as empAction from '../actions/employee-action';
//import * as departmentAction from '../actions/department-action';

// reducer
export function EmployeeReducer(state: empModel.EmpState = empModel.initialState, action: empAction.EmpAction): empModel.EmpState {
    switch (action.type) {
      case  empAction.GET_EMPLOYEE_SUCCESS: {
        return Object.assign({}, state, {employees: action.payload})
      }
      // case  departmentAction.: {
      //   const departments = state.departments;
      //   return {
      //     ...state.departments, departments,
      //     ...state.departmentDetails, ...action.payload[0] 
      //   };
      // }
      default: {
        return state;
      }
    }
  }

  export const getEmployeeFeatureState = createFeatureSelector<empModel.EmpState>('employeeList');
  
  export const getEmployeeEntities = createSelector(getEmployeeFeatureState, 
                                                      (state: empModel.EmpState) => state.employees);
  