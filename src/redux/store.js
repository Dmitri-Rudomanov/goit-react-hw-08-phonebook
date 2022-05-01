import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './phonebook-reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './phonebook-reducer';
import authReducer from './auth/auth-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
});
setupListeners(store.dispatch);

const exportedStor = {
  store,
};
export default exportedStor;
export const persistor = persistStore(store);
