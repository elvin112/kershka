import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    expirationDate: null,
    isLoggedIn: false,
  },
  reducers: {
    authenticate: (state, token, expirationDate) => {
      state.token = token;
      state.expirationDate = expirationDate;
      state.isLoggedIn = true;
      AsyncStorage.setItem("token", token);
      AsyncStorage.setItem("expirationDate", expirationDate);
    },
    logout: (state) => {
      state.token = null;
      state.expirationDate = null;
      state.isLoggedIn = false;
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("expirationDate");
    },
    refreshToken: (state, token, expirationDate) => {
      state.token = token;
      state.expirationDate = expirationDate;
      state.isLoggedIn = true;
      AsyncStorage.setItem("token", token);
      AsyncStorage.setItem("expirationDate", expirationDate);
    },
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
