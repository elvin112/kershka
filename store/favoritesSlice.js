import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.push(payload);
      AsyncStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFromFavorites: (state, { payload }) => {
      const idx = state.findIndex((item) => item === payload);
      state.splice(idx, 1);
      AsyncStorage.setItem("favorites", JSON.stringify(state));
    },
    fetchFromAsyncStorage: (state, { payload }) => {
      state.splice(0, state.length);
      state.push(...payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites, fetchFromAsyncStorage } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
