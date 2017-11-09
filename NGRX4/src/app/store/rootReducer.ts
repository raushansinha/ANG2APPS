import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { DeptReducer } from '../department/ngrx-store/dept-reducer'
import { Department } from '../department/Models/department'

export interface IAppState {
  departments: Department;
}

export const RootReducers: ActionReducerMap<IAppState> = {
    departments: DeptReducer
};


// export const initState: State = {
//   userInfo: initialState
// };

export const getDepartmentState = createFeatureSelector<Department>('departments');