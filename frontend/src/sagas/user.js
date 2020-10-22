import { clearStorage } from 'common/helpers/storageHelper';
import { toastrError } from 'common/helpers/toastrHelper';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserRoutine } from 'routines/user';
import { fetchUser } from 'services/userService';

function* fetchUserRequest() {
  try {
    const user = yield call(fetchUser);
    yield put(fetchUserRoutine.success(user));
  } catch (e) {
    yield call(clearStorage);
    yield put(fetchUserRoutine.failure());
    yield call(toastrError, e.message);
  }
}

function* watchUserRequest() {
  yield takeEvery(fetchUserRoutine.TRIGGER, fetchUserRequest);
}

export default function* userSaga() {
  yield all([
    watchUserRequest()
  ]);
}
