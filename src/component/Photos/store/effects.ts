import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchPhotosAction } from './actions';
import network from 'network';

function* fetchPhotosSaga() {
  try {
    const response = yield call([network, network.fetchPhotos]);

    yield put(fetchPhotosAction.success(response));
  } catch (error) {
    yield put(fetchPhotosAction.failure(error));
  }
}

export function* watchFetchPhotos() {
  yield takeEvery(fetchPhotosAction.request, fetchPhotosSaga);
}
