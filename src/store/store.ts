import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { fetchUserApi } from './api/fetchUserApiSlice';
import { authUserApi } from './api/authUserApiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import likeReducer from './likeSlice'; // импортируйте likeSlice

function saveToLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch(e) {
    console.warn(e);
    return undefined;
  }
}

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    like: likeReducer, // добавьте likeSlice в reducer
    [fetchUserApi.reducerPath]: fetchUserApi.reducer,
    [authUserApi.reducerPath]: authUserApi.reducer
  },
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchUserApi.middleware).concat(authUserApi.middleware),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;