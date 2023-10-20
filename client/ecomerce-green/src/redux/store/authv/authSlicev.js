import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin } from './authActions'
// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }
 const authSliceV = createSlice({
    name: 'authv',
    initialState,
    reducers: {},
    extraReducers: { // login user
      [userLogin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [userLogin.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
        state.userToken = payload.userToken
      },
      [userLogin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
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