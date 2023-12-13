import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { barbooksApi } from './barbooks';
import { proxyApi } from './proxy';

export const store = configureStore({
  reducer: {
    [barbooksApi.reducerPath]: barbooksApi.reducer,
    [proxyApi.reducerPath]: proxyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(barbooksApi.middleware, proxyApi.middleware),
});

setupListeners(store.dispatch);
