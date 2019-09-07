import { runSaga } from 'redux-saga';

import { getCurrencySuccess }  from '~/store/modules/currency/actions';
import { getCurrency } from '~/store/modules/currency/sagas';

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

describe('Currency Sagas', () => {
  it('should be able to fetch currencies', async () => {
    const dispatch = jest.fn();


    await runSaga({ dispatch }, getCurrency).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getCurrencySuccess(currencies))
  })
});
