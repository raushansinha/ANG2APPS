import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { Department } from '../Models/department'
import { GET_DEPT } from './action';

export const initialState: Array<Department> = [{
    deptCode: "IT",
    deptName: "Information Technologies"
}];

export const selectDepartmentFeature = createFeatureSelector<Array<Department>>('departments');

export const selectDepartment = createSelector(selectDepartmentFeature, (state:Array<Department>) => state)

export function DeptReducer(state = initialState, action: any): Array<Department> {
    switch (action.type) {
        case GET_DEPT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}