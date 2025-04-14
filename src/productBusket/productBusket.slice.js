import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { itemList: [], totalQuantity: 0, priceAll: 0 };

export const productBasket = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToBasket: (state, { payload: product }) => {
      const existingItem = state.itemList.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
        state.priceAll += existingItem.price;
      } else {
        state.itemList.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        });
        state.totalQuantity++;
        state.priceAll += product.price;
      }
    },
    deleteToBasket: (state, { payload: product }) => {
      const existingItem = state.itemList.find(
        (item) => item.id === product.id
      );

      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id != product.id);
        state.totalQuantity--;
        state.priceAll -= existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.priceAll -= existingItem.price;
      }
    },
  },
});

export const { addToBasket, deleteToBasket } = productBasket.actions;

export default productBasket.reducer;
