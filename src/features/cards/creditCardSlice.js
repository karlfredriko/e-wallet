import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../utils/helper";

// export const getUser = createAsyncThunk("creditCardSlice/getUser", async () => {
//   const user = await getData("https://randomuser.me/api");
//   return user;
// });

const creditCardSlice = createSlice({
  name: "creditCard",
  initialState: {
    creditCards: [],
  },
  reducers: {
    addCreditCard: (state, action) => {
      // Lägg till det nya kreditkortsobjektet i arrayen
      console.log(action.payload);
      state.creditCards.push(action.payload);
    },
    removeCreditCard: (state, action) => {
      // Ta bort ett kreditkortsobjekt från arrayen baserat på index
      state.creditCards.splice(action.payload, 1);
    },
    updateCreditCard: (state, action) => {
      // Uppdatera ett befintligt kreditkortsobjekt baserat på index
      state.creditCards[action.payload.index] = action.payload.creditCard;
    },
  },
  // extraReducers: {
  //   [getUser.fulfilled]: (state, action) => {
  //     console.log("getUser fulfilled!");
  //     // state.creditCards.push(action.payload);
  //   },
  // },
});

export const { addCreditCard, removeCreditCard, updateCreditCard } =
  creditCardSlice.actions;
export default creditCardSlice.reducer;
