import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';
import {getHostelsSuccess, getHostelsFailure} from './actions';
import { getCurrencyRequest } from '../currency/actions';

export function* getHostels() {
  try {
    const response = yield call(
      api.get,
      'bf8d095f2e92da94938810b8a8187c21/raw/70b112f88e803bf0f101f2c823a186f3d076d9e6/properties.json'
    );
    const hostels = response.data;
    yield put(getCurrencyRequest());
    yield put(getHostelsSuccess(hostels));
  } catch (err) {
    Alert.alert('Failing in attempt to load Hostels', 'The server is not responding');
    yield put(getHostelsFailure());
  }
}

export default all([
  takeLatest('@hostels/GET_HOSTELS_REQUEST', getHostels),
]);
