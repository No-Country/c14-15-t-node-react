import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
  
};

const modifyQtyByOne = (cart, selectedProduct, modificationType) => {
  const previousCart = [...cart];

  const productInCart = previousCart.find(
    (product) => product.productId
    === selectedProduct.productId

  );

  let newCart = [];

  if (!productInCart) {
    previousCart.push({ ...selectedProduct, quantity: 1 });
    newCart = previousCart;
  } else {
    const filteredCart = previousCart.filter((p) => p.productId
    !== productInCart.productId
    );

    const modification = modificationType === "INCREMENT" ? 1 : -1;

    productInCart.quantity = productInCart.quantity + modification;

    if (productInCart.quantity === 0) {
      newCart = [...filteredCart];
    } else {
      newCart = [...filteredCart, productInCart];
    }
  }
  return newCart;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementProduct: (state, action) => {
      const modifiedCart = modifyQtyByOne(
        state.cart,
        action.payload,
        "INCREMENT"
      );
      state.cart = modifiedCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementProduct: (state, action) => {
      const modifiedCart = modifyQtyByOne(
        state.cart,
        action.payload,
        "DECREMENT"
      );
      state.cart = modifiedCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    resetCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { incrementProduct, decrementProduct, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
