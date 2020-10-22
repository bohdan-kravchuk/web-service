import { toastrError, toastrSuccess } from 'common/helpers/toastrHelper';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { deleteUserRoutine, getUsersRoutine } from 'scenes/Dashboard/routines';
import { deleteUser, getUsers } from 'services/userService';

function* getUsersRequest() {
  try {
    const users = yield getUsers();
    yield put(getUsersRoutine.success(users));
  } catch (e) {
    yield put(getUsersRoutine.failure());
    yield call(toastrError, e.message);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(getUsersRoutine.TRIGGER, getUsersRequest);
}

function* deleteUserRequest({ payload: id }) {
  try {
    yield call(deleteUser, id);
    yield put(deleteUserRoutine.success(id));
    yield call(toastrSuccess, 'User was deleted successfully');
  } catch (e) {
    yield put(deleteUserRoutine.failure());
    yield call(toastrError, e.message);
  }
}

function* watchDeleteUserRequest() {
  yield takeEvery(deleteUserRoutine.TRIGGER, deleteUserRequest);
}

export default function* dashboardSaga() {
  yield all([
    watchGetUsersRequest(),
    watchDeleteUserRequest()
  ])
}
