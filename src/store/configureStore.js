import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer,  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER }from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import wheelReducer from './reducers/wheelSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, wheelReducer)

export const store = configureStore({
  reducer: {
    store: persistedReducer,
    // other reducers here:
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
    }
  }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

console.log('store.getState(): ', store.getState())

export const persistor = persistStore(store)