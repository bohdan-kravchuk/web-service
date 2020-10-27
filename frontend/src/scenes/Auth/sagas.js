import { setTokens } from 'common/helpers/storageHelper';
import { toastrError } from 'common/helpers/toastrHelper';
import { all, takeEvery, call, put } from 'redux-saga/effects';
import { signInUserRoutine, signUpUserRoutine } from 'scenes/Auth/routines';
import { signIn, signUp } from 'services/authService';

function* signUpUser({ payload: userData }) {
  try {
    const { user, accessToken, refreshToken } = yield call(signUp, userData);
    setTokens({ accessToken, refreshToken });
    yield put(signUpUserRoutine.success(user));
  } catch (e) {
    yield put(signUpUserRoutine.failure());
    yield call(toastrError, e.message);
  }
}

function* watchSignUpUser() {
  yield takeEvery(signUpUserRoutine.TRIGGER, signUpUser);
}

function* signInUser({ payload: credentials }) {
  try {
    const { user, accessToken, refreshToken } = yield call(signIn, credentials);
    setTokens({ accessToken, refreshToken });
    yield put(signInUserRoutine.success(user));
  } catch (e) {
    yield put(signInUserRoutine.failure());
    yield call(toastrError, e.message);
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
