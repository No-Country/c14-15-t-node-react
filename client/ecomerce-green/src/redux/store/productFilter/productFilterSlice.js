import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { STATUS } from "../../../constants/Status";
import {  fetchCategory } from "./productFilterAction";
const base_url = "http://localhost:5000/";

const initialState = {
  status: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  productsfilter: [],
  product: {}
};




const productFilterSlice = createSlice({
  name: "productsfilter",
  initialState,
  extraReducers: (builder) => {
    builder
 
      .addCase(fetchCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productsfilter = action.payload || [];
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.productsfilter = [];
      })
      ;
    },
  });

  export default productFilterSlice.reducer;