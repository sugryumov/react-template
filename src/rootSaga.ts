import { all } from 'redux-saga/effects';
import { watchFetchPhotos } from 'component/Photos/store/effects';
import { watchFetchUsers } from 'component/Users/store/effects';

export default function* rootSaga() {
  yield all([watchFetchPhotos(), watchFetchUsers()]);
}
