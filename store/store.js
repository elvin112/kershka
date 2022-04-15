import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import basketReducer from "./basketSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
    basket: basketReducer,
    auth: authReducer,
  },
});
