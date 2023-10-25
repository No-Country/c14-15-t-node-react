import { createAsyncThunk } from "@reduxjs/toolkit";
import { greenIXApi } from "../../../axiosApi";

export const fetchProducts = createAsyncThunk("product", async (page=1) => {
  try {
    const { data } = await greenIXApi.get(`/products?page=${page}`).then((res) => res.data);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
});
