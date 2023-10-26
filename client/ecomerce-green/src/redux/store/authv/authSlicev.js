import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, verifyJwt, logout } from "./authActions";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: {},
  isAuthenticated: false,
  userToken,
  error: null,
  success: false,
};

const authSliceV = createSlice({
  name: "authv",
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
        state.userInfo = payload.userInfo;
        state.isAuthenticated = true;
        state.userToken = payload.userToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
      });

    // Register user
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.userToken = null;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.userToken =  action.payload.userToken;
        state.userInfo = payload.firstname;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.userToken = null;
        state.userInfo = null;
      })
      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = null;
        state.userToken = null;
        state.isAuthenticated = false;
      })

      // VERIFY JWT
      .addCase(verifyJwt.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyJwt.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.isAuthenticated = action.payload;
      })
      .addCase(verifyJwt.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.isAuthenticated = false;
      })
      ;

  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSliceV.actions;

export default authSliceV.reducer;
