import { all } from 'redux-saga/effects';
import authSaga from 'scenes/Auth/sagas';
import mainSaga from 'scenes/Main/sagas';

export default function* rootSaga() {
  yield all([
    authSaga(),
    mainSaga()
  ]);
}
