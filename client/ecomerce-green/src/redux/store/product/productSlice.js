import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../../constants/Status";
const base_url = "http://localhost:8000/";

const initialState = {
  status: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload || [];
        
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.products = [];
      });
  },
});

//fetching product using build in thunk on toolkit

export const fetchProducts = createAsyncThunk("product", async () => {
  const data = await axios.get(`${base_url}products`).then((res) => res.data);
  return data;
});

export default productSlice.reducer;