import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppLoading from "expo-app-loading";
import {
  addToFavorites,
  removeFromFavorites,
  fetchFromAsyncStorage,
} from "../store/favoritesSlice";

const FavoritesTest = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  useEffect(() => {
    const fetchStorage = async () => {
      try {
        const favoritesUnparsed = await AsyncStorage.getItem("favorites");
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
      <Text>FavoritesTest</Text>
      {favorites.map((favItem) => (
        <Text key={favItem}>{favItem}</Text>
      ))}
      <Button
        title="Add to fav"
        onPress={() => dispatch(addToFavorites(Math.random()))}
      />
      <Button
        title="Remove from fav"
        onPress={() => dispatch(removeFromFavorites(favorites[0]))}
      />
    </View>
  );
};

export default FavoritesTest;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
