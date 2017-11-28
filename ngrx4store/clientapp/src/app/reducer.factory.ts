import { ActionReducerMap } from '@ngrx/store';
import { DepartmentReducer } from './department-feature/dept-store/reducers/department-reducer'
import { DepartmentService } from './department-feature/services/department-service';
import { DeptState } from './department-feature/models/models'

export interface IAppState {
  departments: DeptState
}

export const RootReducers: ActionReducerMap<IAppState> = {
    departments: DepartmentReducer
};