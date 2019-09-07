import reducer, { INITIAL_STATE } from '~/store/modules/currency/reducer';
import * as Actions from '~/store/modules/currency/actions';

const currencies = {
  base: "EUR",
  rates: {
    VEF: (1/7.55),
    USD: 1.0937,
    CAD: 1.4627,
    BRL: 4.5684,
    GBP: 0.90885,
  }
};

describe('Currency reducer', () => {
  it('GET_CURRENCY_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Actions.getCurrencyRequest())

    expect(state).toStrictEqual({ currencies: [], loading: true})
  });
  it('GET_CURRENCY_FAILURE', () => {
    const state = reducer(INITIAL_STATE, Actions.getCurrencyFailure())

    expect(state).toStrictEqual({ currencies: [], loading: false})
  });
  it('GET_CURRENCY_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Actions.getCurrencySuccess(currencies))

    expect(state).toStrictEqual({ currencies, loading: false})
  });

});
