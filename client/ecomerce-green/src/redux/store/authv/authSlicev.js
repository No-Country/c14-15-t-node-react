import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin } from './authActions';

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  loading: false,
  userInfo: {},
  userToken,
  error: null,
  success: false,
};

const authSliceV = createSlice({
  name: 'authv',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login user
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload.userToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    // Register user
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSliceV.actions;

export default authSliceV.reducer;
