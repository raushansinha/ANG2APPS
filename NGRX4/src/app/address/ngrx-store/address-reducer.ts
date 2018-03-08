import * as fromRoot from '../../store/rootReducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface Address {
    street: string;
    city: string;
    zip: string;
}

export const initialState: Address = {
    street: "291 poplar ave",
    city: "Devon",
    zip: "19333"
};

export function AddressReducer(state: Address = initialState, action: any): Address {
  switch (action.type) {
    case 'GET_ADDRESS':
      return Object.assign({}, state, {addresses: action.payload});
    default:
      return state;
  }
}

export const getAddressState = createFeatureSelector<Address>('address');

export const getAddress = createSelector(getAddressState,
  (state: Address) => state);