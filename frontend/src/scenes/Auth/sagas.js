import { all, takeEvery, call, put } from 'redux-saga/effects';
import { signInUserRoutine, signUpUserRoutine } from 'scenes/Auth/routines';
import { signIn, signUp } from 'services/authService';

function* signUpUser({ payload }) {
  try {
    yield call(signUp, payload);
    yield put(signUpUserRoutine.success(payload));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchSignUpUser() {
  yield takeEvery(signUpUserRoutine.TRIGGER, signUpUser);
}

function* signInUser({ payload }) {
  try {
    const user = yield call(signIn, payload);
    yield put(signInUserRoutine.success(user));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchSignInUser() {
  yield takeEvery(signInUserRoutine.TRIGGER, signInUser);
}

export default function* authSaga() {
  yield all([
    watchSignUpUser(),
    watchSignInUser()
  ]);
}
