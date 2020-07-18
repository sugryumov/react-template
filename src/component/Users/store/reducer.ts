import { createReducer, getType } from 'typesafe-actions';
import { fetchUsersAction } from './actions';
import { IFetchUsers } from './entities';

const initialState: IFetchUsers = {
  response: [],
  error: null,
  loading: false,
};

export const fetchUserReducer = createReducer(initialState, {
  [getType(fetchUsersAction.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(fetchUsersAction.success)]: (state, { payload }) => ({
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(fetchUsersAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});
