import { all } from 'redux-saga/effects';
import userSaga from 'sagas/user';
import authSaga from 'scenes/Auth/sagas';
import dashboardSaga from 'scenes/Dashboard/sagas';
import mainSaga from 'scenes/Main/sagas';

export default function* rootSaga() {
  yield all([
    authSaga(),
    mainSaga(),
    dashboardSaga(),
    userSaga()
  ]);
}
