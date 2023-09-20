import { configureStore } from "@reduxjs/toolkit";
import creditCardSlice from "../features/cards/creditCardSlice";

const store = configureStore({
  reducer: {
    creditCard: creditCardSlice,
  },
});

export default store;
