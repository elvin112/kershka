import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { favoritesActions } from "./favoritesSlice";
import { basketActions } from "./basketSlice";

// Fetches data from async storage and puts to redux in initial render
const InitialStorageFetch = ({ children }) => {
  const dispatch = useDispatch();
  const [favState, setFavState] = useState(false);
  const [basketState, setBasketState] = useState(false);
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const fetchFavStorage = async () => {
      const jsonStorage = await AsyncStorage.getItem("favorites");
      const storageArray = JSON.parse(jsonStorage);
      if (storageArray) {
        dispatch(favoritesActions.fetchFromAsyncStorage(storageArray));
        setFavState(storageArray);
      }
    };
    if (!favState) {
      fetchFavStorage();
    }

    const fetchBasketStorage = async () => {
      const jsonStorage = await AsyncStorage.getItem("basket");
      const storageArray = JSON.parse(jsonStorage);
      if (storageArray) {
        dispatch(basketActions.fetchFromAsyncStorage(storageArray));
        setBasketState(storageArray);
      }
    };

    if (!basketState) {
      fetchBasketStorage();
    }
  }, [favState, basketState]);

  return <>{children}</>;
};

export default InitialStorageFetch;
