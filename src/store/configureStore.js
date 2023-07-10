import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore,
  // FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from "redux-persist";
import thunk from "redux-thunk";

import wheelReducer from "./reducers/wheelSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, wheelReducer);

let middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  const { createLogger } = require("redux-logger");
  const logger = createLogger();
  middleware = [...middleware, logger];
}

export const store = configureStore({
  reducer: {
    wheels: persistedReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }).concat(logger),
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

console.log(store.getState());