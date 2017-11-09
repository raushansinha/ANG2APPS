import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { Department } from '../Models/department'
import { GET_DEPT } from './action';

export interface Department {
    department: Department;
}


export const initialState: Department = {
    deptCode: "IT",
    deptName: "Information Technologies"
};

export function DeptReducer(state = initialState, action: any): Department {
    switch (action.type) {
        case GET_DEPT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}