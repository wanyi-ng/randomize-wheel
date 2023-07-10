import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore,
  // FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import wheelReducer from "./reducers/wheelSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, wheelReducer);

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
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

console.log(store.getState());