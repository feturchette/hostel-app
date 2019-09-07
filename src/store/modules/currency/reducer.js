import produce from "immer";

export const INITIAL_STATE = {
  currencies: [],
  loading: false
};

export default function hostels(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@currency/GET_CURRENCY_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@currency/GET_CURRENCY_SUCCESS": {
        draft.loading = false;
        draft.currencies = action.payload.currencies;
        break;
      }
      case "@currency/GET_CURRENCY_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
