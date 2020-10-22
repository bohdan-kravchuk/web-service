import { all, put, takeEvery } from 'redux-saga/effects';
import { getUsersRoutine } from 'scenes/Dashboard/routines';
import { getUsers } from 'services/userService';

function* getUsersRequest({ payload }) {
  try {
    const users = yield getUsers();
    yield put(getUsersRoutine.success(users));
  } catch (e) {
    yield put(getUsersRoutine.failure());
    console.log(e.message);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(getUsersRoutine.TRIGGER, getUsersRequest);
}

export default function* dashboardSaga() {
  yield all([
    watchGetUsersRequest()
  ])
}
