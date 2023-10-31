import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
  total:0
};

const modifyQtyByOne = (cart, selectedProduct, modificationType) => {
  let previousCart = [...cart]; // Usamos "let" en lugar de "const" para poder modificar previousCart.
  const productInCart = previousCart.find(
    (product) => product.productId === selectedProduct.productId
  );

  if (!productInCart) {
    // Si el producto no está en el carrito, lo agregamos con una cantidad de 1.
    previousCart.push({ ...selectedProduct, quantity: 1 , subtotal: selectedProduct.price * 1});
  } else {
    const filteredCart = previousCart.filter(
      (p) => p.productId !== productInCart.productId
    );

    const modification = modificationType === "INCREMENT" ? 1 : -1;

    productInCart.quantity = productInCart.quantity + modification;
    productInCart.subtotal = productInCart.quantity * productInCart.price;


    if (productInCart.quantity > 0) {
      // Solo agregamos el producto modificado si la cantidad es mayor que 0.
      previousCart = [...filteredCart, productInCart];
    } else {
      // Si la cantidad es 0 o menor, simplemente eliminamos el producto del carrito.
      previousCart = filteredCart;
    }
  }

  // // Calculamos el subtotal y lo agregamos al objeto previousCart.
  // const subTotal = calculateSubtotal(previousCart);
  // previousCart.subtotal = subTotal;

  return previousCart;
};

// Función para calcular el total del carrito
const calculateTotal = (cart) => {
  return cart.reduce((prev, current) => current.subtotal + prev, 0);
};





const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    
    decrementProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (state.cart[itemIndex].quantity === 1) {
        const updatedCart = state.cart.filter(
          (p) => p.productId !== action.payload.productId
        );
        state.cart = updatedCart;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (state.cart[itemIndex].quantity >= 1) {
        state.cart[itemIndex].quantity += 1;
      }
    },

    // incrementProduct: (state, action) => {
    //   const modifiedCart = modifyQtyByOne(
    //     state.cart,
    //     action.payload,
    //     "INCREMENT"
    //   );
    //   state.cart = modifiedCart;
    //   localStorage.setItem("cart", JSON.stringify(state.cart));
    // },
    // decrementProduct: (state, action) => {
    //   const modifiedCart = modifyQtyByOne(
    //     state.cart,
    //     action.payload,
    //     "DECREMENT"
    //   );
    //   state.cart = modifiedCart;
    //   localStorage.setItem("cart", JSON.stringify(state.cart));
    //   state.total = calculateTotal(state.cart);
    // },
    removeFromCart: (state, action) => {
      const modifiedCart = state.cart.filter((cartItem) => cartItem.productId !== action.payload.productId);
      state.cart = modifiedCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    resetCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
      state.total = calculateTotal(state.cart);

    },
      // Nueva acción para actualizar el total
      updateTotal: (state) => {
        state.total = calculateTotal(state.cart);
      },
  
  },
});

export const { incrementProduct, decrementProduct, resetCart, updateTotal, removeFromCart, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;