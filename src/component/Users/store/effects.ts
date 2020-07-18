import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchUsersAction } from './actions';
import network from 'network';

function* fetchUserSaga() {
  try {
    const response = yield call([network, network.fetchUsers]);

    yield put(fetchUsersAction.success(response));
  } catch (error) {
    yield put(fetchUsersAction.failure(error));
  }
}

export function* watchFetchUsers() {
  yield takeEvery(fetchUsersAction.request, fetchUserSaga);
}
