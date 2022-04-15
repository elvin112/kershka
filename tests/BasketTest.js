import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppLoading from "expo-app-loading";

import {
  addToBasket,
  removeFromBasket,
  fetchFromAsyncStorage,
} from "../store/basketSlice";

const BasketTest = () => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  useEffect(() => {
    const fetchStorage = async () => {
      try {
        const favoritesUnparsed = await AsyncStorage.getItem("basket");
        if (favoritesUnparsed) {
          const favoritesParsed = JSON.parse(favoritesUnparsed);
          dispatch(fetchFromAsyncStorage(favoritesParsed));
        }
        setIsTryingLogin(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStorage();
  }, []);

  if (isTryingLogin) {
    return (
      <View style={[styles.screen, { backgroundColor: "red" }]}>
        <AppLoading />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text>BasketTest</Text>
      {basket.map((basketItem) => (
        <Text key={basketItem}>{basketItem}</Text>
      ))}
      <Button
        title="Add to basket"
        onPress={() => dispatch(addToBasket(Math.random()))}
      />
      <Button
        title="Remove from basket"
        onPress={() => dispatch(removeFromBasket(basket[0]))}
      />
    </View>
  );
};

export default BasketTest;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
