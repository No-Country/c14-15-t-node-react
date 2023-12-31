// authActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { greenIXApi } from "../../../axiosApi";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ firstname, lastname, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await greenIXApi.post(
        "/users/create",
        {
          firstname,
          lastname,
          email,
          password,
        },
        config
      );

      // store user's token in local storage
      const user = {
        firstname: data.data.firstname,
        lastname: data.data.lastname,
      };
      localStorage.setItem("userToken", data.data.token);
      localStorage.setItem("user", JSON.stringify(user));
      return data.data;
    } catch (error) {
      console.log("mensaje de error", error.response.data.data.message);
      // return custom error message from backend if present
      if (error.response && error.response.data.data.message) {
        return rejectWithValue(error.response.data.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await greenIXApi.post(
        "/auth",
        {
          email,
          password,
        },
        config
      );

      // store user's token in local storage
      const user = {
        firstname: data.data.firstname,
        lastname: data.data.lastname,
      };
      localStorage.setItem("userToken", data.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      return { userToken: data.data.token, user };
    } catch (error) {
      console.log("error", error.message);
      console.log("hay error", error.response.data.error);
      console.log("error", error.response.data);
      console.log("msg error", error.response.data.data.message);
      // return custom error message from API if any
      if (error.response && error.response.data.data.message) {
        return rejectWithValue(error.response.data.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userToken");
});

export const verifyJwt = createAsyncThunk(
  "auth/verify-jwt",

  async (userToken, { rejectWithValue }) => {
    try {
      // configure header's
      const config = {
        headers: {
          "x-token": userToken,
        },
      };
      const { data } = await greenIXApi.post(
        "/auth/token",
        {
          email,
          password,
        },
        config
      );
      console.log(data);

      // return await jwt.verifyJwt(userToken);
    } catch (error) {
      return rejectWithValue("Unable to verify");
    }
  }
);
