import { combineReducers } from "redux";

import hostels from "./hostels/reducer";
import currency from "./currency/reducer";

export default combineReducers({ hostels, currency });
