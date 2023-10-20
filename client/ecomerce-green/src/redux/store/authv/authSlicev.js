import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './authActions'

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }
 const authSliceV = createSlice({
    name: 'authv',
    initialState,
    reducers: {},
    extraReducers: {
      // register user
      [registerUser.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [registerUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true // registration successful
      },
      [registerUser.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
    },

});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSliceV.actions;

export default authSliceV.reducer;