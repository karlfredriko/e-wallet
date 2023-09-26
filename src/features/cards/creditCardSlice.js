import { createSlice } from "@reduxjs/toolkit";

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
    setActiveToFalse: (state) => {
      state.creditCards = state.creditCards.map((card) => ({
        ...card,
        isActive: false,
      }));
    },
  },
});

export const { addCreditCard, removeCreditCard, setActiveToFalse } =
  creditCardSlice.actions;
export default creditCardSlice.reducer;
