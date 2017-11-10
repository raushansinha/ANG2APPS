import { ActionReducerMap } from '@ngrx/store';
import { DeptReducer } from '../department/ngrx-store/dept-reducer'
import { Department } from '../department/Models/department'

export interface IAppState {
  departments: Array<Department>;
}

export const RootReducers: ActionReducerMap<IAppState> = {
    departments: DeptReducer
};