import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as deptModel from '../../models/models';
import { Action } from '../actions/department-action';
import { Store } from '@ngrx/store/src/store';
import * as departmentAction from '../actions/department-action';

// reducer
export function DepartmentReducer(state: deptModel.DeptState = deptModel.initialState, action: Action): deptModel.DeptState {
    switch (action.type) {
      case  departmentAction.GET_DEPARTMENT_SUCCESS: {
        return Object.assign({}, state, {departments: [action.departments]})
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

  export const getDepartmentFeatureState = createFeatureSelector<deptModel.DeptState>('departments');
  
  export const getDepartmentEntities = createSelector(getDepartmentFeatureState, (state: deptModel.DeptState) => state.departments);
  