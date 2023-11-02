import { createAsyncThunk } from "@reduxjs/toolkit";
import { greenIXApi } from "../../../axiosApi";

export const getProduct = createAsyncThunk("product", async (id) => {
    try {
      const { data } = await greenIXApi.get(`/products/${id}`).then((res) => res.data);
        
      return data;
    } catch (error) {
      console.log("Error: ", error);
    }
  });
  