import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, verifyJwt, logout } from "./authActions";

const storedUser= localStorage.getItem('user');
const user= !!storedUser ? JSON.parse(storedUser) : null;
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  user,
  isAuthenticated: false,
  userToken,
  error: null,
  success: false,
};

const authSliceV = createSlice({
  name: "authv",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    // Login user
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.isAuthenticated = true;
        state.userToken = payload;
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
      })
      .addCase(registerUser.fulfilled, (state , { payload }) => {
        state.loading = false;
        state.success = true;
        state.userToken =  payload;
        
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = null;
        state.userToken = null;
        state.user = null;
      })
      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
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

export const { onChecking, onLogin, onLogout, clearErrorMessage , reset} =
  authSliceV.actions;

export default authSliceV.reducer;
