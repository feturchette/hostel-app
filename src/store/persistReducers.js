import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer(
    // we could use persist here to use it when there's no connection
    // but for now I will let it empty
    {
      key: "hostelworld",
      storage,
      whitelist: []
    },
    reducers
  );

  return persistedReducer;
};
