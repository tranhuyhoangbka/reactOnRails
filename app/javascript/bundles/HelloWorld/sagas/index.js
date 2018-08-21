import 'babel-polyfill';
import {takeLatest} from 'redux-saga/effects';
import {fork} from 'redux-saga/effects';
import {all} from 'redux-saga/effects';
import {loadUser} from './loadUser';
import {loadDashboardSequenced} from './loadDashboardSequenced';
import {loadDashboardNonSequenced} from './loadDashboardNonSequenced';
import {loadDashboardNonSequencedNonBlocking, isolatedFlight, isolatedForecast} from './loadDashboardNonSequencedNonBlocking';

function* rootSaga() {
  yield all([
    fork(loadUser),
    takeLatest('LOAD_DASHBOARD', loadDashboardSequenced),
    takeLatest('LOAD_DASHBOARD2', loadDashboardNonSequenced),
    takeLatest('LOAD_DASHBOARD3', loadDashboardNonSequencedNonBlocking),
    fork(isolatedForecast),
    fork(isolatedFlight)
  ]);
}

export default rootSaga;
