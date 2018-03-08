
// import actions
import {
    LOAD_DEPT,
    LOAD_DEPT_ERROR,
    LOAD_DEPT_SUCCESS,
    DepartmentAction
  } from "../actions/department.action"

  // import models
import { Department } from "../../models/department";

/**
 * The state.
 */
export interface State {
  department?: Department;
  error?: Error;
  loading: boolean;
}

/**
 * The initial state.
 */
const initialState: State = {
  loading: false,
};

/**
 * The reducer function.
 */
export function reducer(state: State = initialState, action: DepartmentAction): State {
  switch (action.type) {
    case LOAD_DEPT:
      return { ...state, ...{
        department: undefined,
        error: undefined,
        loading: true
      }};

    case LOAD_DEPT_ERROR:
      return { ...state, ...{
        error: action.payload.error,
        loading: false
      }};

    case LOAD_DEPT_SUCCESS:
      return { ...state, ...{
        department: action.payload.department,
        loading: false
      }};

    default:
      return state;
  }
}

/**
 * Return true if the activity is loading
 */
export const isLoading = (state: State) => state.loading;

/**
 * Return the activity
 */
export const getDepartment = (state: State) => state.department;