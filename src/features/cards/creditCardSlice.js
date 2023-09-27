import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createId } from "../../utils/helper";

const BASE_URL = "https://randomuser.me/api";

export const getUser = createAsyncThunk("creditCard/getUser", async () => {
  const res = await axios.get(BASE_URL);
  return res.data.results[0].name;
});

const creditCardSlice = createSlice({
  name: "creditCard",
  initialState: {
    creditCards: [],
    user: null,
  },
  reducers: {
    addCreditCard: (state, action) => {
      const id = createId();
      const data = { ...action.payload, id };
      console.log(data);
      state.creditCards.push(data);
    },
    removeCreditCard: (state, action) => {
      state.creditCards = state.creditCards.filter(
        (card) => card.id !== action.payload
      );
    },
    setAllToFalse: (state) => {
      state.creditCards = state.creditCards.map((card) => ({
        ...card,
        isActive: false,
      }));
    },
    setToActive: (state, action) => {
      state.creditCards = state.creditCards.map((card) =>
        card.id === action.payload ? { ...card, isActive: true } : card
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log(state.user, "state.user updated");
    });
  },
});

export const { addCreditCard, removeCreditCard, setAllToFalse, setToActive } =
  creditCardSlice.actions;
export default creditCardSlice.reducer;
