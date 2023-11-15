import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/users';

interface AuthState {
  currentUser?: User;
  logged? : boolean;
}

const initialState: AuthState = {};

export const persistUser = createAsyncThunk<void, User>('auth/persistUser', (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      const user = localStorage.getItem('currentUser');
      console.log(user)
      if (user) {
        state.logged = true
      }else{
        state.logged = false
      }
      persistUser(action.payload);
    },
    signup: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      persistUser(action.payload);
    },
    logout: (state) => {
      state.currentUser = undefined;
      localStorage.removeItem('currentUser');
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;