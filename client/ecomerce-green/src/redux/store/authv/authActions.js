// authActions.js

import { createAsyncThunk } from '@reduxjs/toolkit'
import { greenIXApi } from '../../../axiosApi';



export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ firstname,lastname, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await greenIXApi.post("/users/create", {
        firstname,
        lastname,
        email,
        password,
      }, config);
     console.log(data)
    } catch (error) {
      console.log("error",error.message)
      console.log("si hay error",error.response.data.error)
      console.log("mensaje de error",error.response.data.data[0].message)
    // return custom error message from backend if present
      if (error.response && error.response.data.data[0].message) {
        return rejectWithValue(error.response.data.data[0].message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)