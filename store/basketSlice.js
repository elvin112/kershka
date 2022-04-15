import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, { payload }) => {
      state.push(payload);
      AsyncStorage.setItem("basket", JSON.stringify(state));
    },
    removeFromBasket: (state, { payload }) => {
      const idx = state.findIndex((item) => item === payload);
      state.splice(idx, 1);
      AsyncStorage.setItem("basket", JSON.stringify(state));
    },
    fetchFromAsyncStorage: (state, { payload }) => {
      state.splice(0, state.length);
      state.push(...payload);
    },
  },
});

export const { addToBasket, removeFromBasket, fetchFromAsyncStorage } =
  basketSlice.actions;
export default basketSlice.reducer;
