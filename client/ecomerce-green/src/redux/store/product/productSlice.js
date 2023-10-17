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
  cart: [],
};


const modifyQtyByOne = (
  cart,
  selectedProduct,
  modificationType
) => {
  const previousCart = [...cart];

  const productInCart = previousCart.find(
    (product) => product.id === selectedProduct.id
  );

  let newCart = [];

  if (!productInCart) {
    previousCart.push({ ...selectedProduct, quantity: 1 });
    newCart = previousCart;
  } else {
    const filteredCart = previousCart.filter(
      (p) => p.id !== productInCart.id
    );

    const modification = modificationType === 'INCREMENT' ? 1 : -1;

    productInCart.quantity = productInCart.quantity + modification;

    if (productInCart.quantity === 0) {
      newCart = [...filteredCart];
    } else {
      newCart = [...filteredCart, productInCart];
    }
  }
  return newCart;
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementProduct: (state, action) => {
      const modifiedCart = modifyQtyByOne(
        state.cart,
        action.payload,
        'INCREMENT'
      );
      state.cart = modifiedCart;
    },
    decrementProduct: (state, action) => {
      const modifiedCart = modifyQtyByOne(
        state.cart,
        action.payload,
        'DECREMENT'
      );
      state.cart = modifiedCart;
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
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
export const { incrementProduct, decrementProduct, resetCart  } =
  productSlice.actions;
export default productSlice.reducer;