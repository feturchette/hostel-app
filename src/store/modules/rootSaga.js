import { all } from "redux-saga/effects";

import hostels from "./hostels/sagas";
import currency from "./currency/sagas";

export default function* rootSaga() {
  return yield all([hostels, currency]);
}
