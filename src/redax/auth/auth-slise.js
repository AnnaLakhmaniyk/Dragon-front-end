import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  email: '',
  token: null,
  isLoggedIn: false,
  inLoder: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = false;
      state.inLoder = false;
    },
    [register.pending](state) {
      state.inLoder = true;
    },
    [register.rejected](state) {
      state.inLoder = false;
    },

    [logIn.fulfilled](state, { payload }) {
      state.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.inLoder = false;
    },
    [logIn.pending](state) {
      state.inLoder = true;
    },
    [logIn.rejected](state) {
      state.inLoder = false;
    },

    [logOut.fulfilled](state) {
      state.email = '';
      state.token = null;
      state.isLoggedIn = false;
      state.inLoder = false;
    },
    [logOut.pending](state) {
      state.inLoder = true;
    },
    [logOut.rejected](state) {
      state.inLoder = false;
    },

    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.email = payload.email;
      state.isLoggedIn = true;
      state.inLoder = false;
    },
    [fetchCurrentUser.pending](state) {
      state.inLoder = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.inLoder = false;
    },
  },
});

export default authSlice.reducer;
