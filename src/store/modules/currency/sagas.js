import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import {getCurrencySuccess, getCurrencyFailure} from './actions';

export function* getCurrency() {
  try {
    // This should be an api request using our base currency as EUR
    // but for this test it will be static
    // const response = yield call(
    //   api.get,
    //   'https://api.exchangeratesapi.io/latest'
    // );
    const currencies = {
        base: "EUR",
        rates: {
        //this number is given in the test discription
        VEF: (1/7.55),
        USD: 1.0937,
        CAD: 1.4627,
        BRL: 4.5684,
        GBP: 0.90885,
      }
    };

    yield put(getCurrencySuccess(currencies));
  } catch (err) {
    Alert.alert('Failing in attempt to load Currencies', 'The server is not responding');
    yield put(getCurrencyFailure());
  }
}


export default all([
  takeLatest('@currency/GET_CURRENCY_REQUEST', getCurrency),
]);
