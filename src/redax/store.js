import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth-slise';

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['user', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
