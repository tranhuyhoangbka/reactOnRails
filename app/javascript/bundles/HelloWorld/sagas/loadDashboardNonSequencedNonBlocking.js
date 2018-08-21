import {take, call, put, select} from 'redux-saga/effects';
import {loadDeparture, loadFlight, loadForecast} from './apiCalls';

export const getUserFromState = (state) => state.user;

export function* loadDashboardNonSequencedNonBlocking() {
  try {
    yield take('FETCH_USER_SUCCESS');
    const user = yield select(getUserFromState);
    const departure = yield call(loadDeparture, user);
    yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: {departure}});
    yield put({type: 'FETCH_DEPARTURE_SUCCESS', departure});
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error: error.messages});
  }
}

export function* isolatedFlight() {
  try {
    const departure = yield take('FETCH_DEPARTURE_SUCCESS');
    const flight = yield call(loadFlight, departure.flightID);
    yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: {flight}});
  } catch (error) {
    yield put('FETCH_FAILED', error: error.messages);
  }
}

export function* isolatedForecast() {
  try {
    const departure = yield take('FETCH_DEPARTURE_SUCCESS');
    const forecast = yield call(loadForecast, departure.date);
    yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: {forecast}});
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error: error.messages});
  }
}
