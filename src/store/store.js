import { configureStore } from "@reduxjs/toolkit";
import productBusketReducer from "../productBusket/productBusket.slice";

export default configureStore({
  reducer: {
    product: productBusketReducer,
  },
});
