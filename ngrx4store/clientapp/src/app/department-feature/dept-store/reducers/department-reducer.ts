import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as deptModel from '../../models/models';
import * as deptAction from '../actions/department-action';
import { Store } from '@ngrx/store/src/store';
import * as departmentAction from '../actions/department-action';

// reducer
export function DepartmentReducer(state: deptModel.DeptState = deptModel.initialState, action: deptAction.DeptAction): deptModel.DeptState {
    switch (action.type) {
      case  departmentAction.GET_DEPARTMENT_SUCCESS: {
        return Object.assign({}, state, {departments: action.payload})
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

  export const getDepartmentFeatureState = createFeatureSelector<deptModel.DeptState>('departmentList');
  
  export const getDepartmentEntities = createSelector(getDepartmentFeatureState, 
                                                      (state: deptModel.DeptState) => state.departments);
  