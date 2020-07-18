import { createReducer, getType } from 'typesafe-actions';
import { fetchPhotosAction } from './actions';
import { IFetchPhotos } from './entities';

const initialState: IFetchPhotos = {
  response: [],
  error: null,
  loading: false,
};

export const fetchPhotosReducer = createReducer(initialState, {
  [getType(fetchPhotosAction.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(fetchPhotosAction.success)]: (state, { payload }) => ({
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(fetchPhotosAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});
