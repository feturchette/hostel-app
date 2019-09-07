export function getCurrencyRequest() {
  return {
    type: "@currency/GET_CURRENCY_REQUEST",
  };
}

export function getCurrencySuccess(currencies) {
  return {
    type: "@currency/GET_CURRENCY_SUCCESS",
    payload: { currencies }
  };
}

export function getCurrencyFailure() {
  return {
    type: "@currency/GET_CURRENCY_FAILURE",
  };
}
