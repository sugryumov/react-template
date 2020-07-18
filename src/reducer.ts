import { combineReducers } from 'redux';
import { fetchPhotosReducer } from 'component/Photos/store/reducer';
import { fetchUserReducer } from 'component/Users/store/reducer';

const reducers = {
  photos: fetchPhotosReducer,
  users: fetchUserReducer,
};

export const reducer = combineReducers(reducers);
