import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AntDesign } from "@expo/vector-icons";
import { favoritesActions } from "../../../store/favoritesSlice";

function FavoriteItem({ image, name, price, onSnackbar }) {
  const [isFav, setIsFav] = useState(true);

  const dispatch = useDispatch();
  const favoritesState = useSelector((state) => state.favorites);

  const removeFromFavoritesHandler = () => {
    const foundFavorite = favoritesState.find(
      (favorite) => favorite.name === name
    );

    if (!foundFavorite) {
      setIsFav((state) => !state);
    } else {
      setIsFav((state) => !state);
      const identifier = setTimeout(() => {
        dispatch(favoritesActions.removeFromFavorites({ name }));
      }, 1000);
      onSnackbar();
    }
  };

  return (
    <>
      <View style={styles.innerContainer}>
        <Image style={styles.imgSize} source={{ uri: image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.price}>{price}PLN</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Pressable onPress={removeFromFavoritesHandler}>
          {isFav ? (
            <AntDesign name="heart" size={17} color="red" />
          ) : (
            <AntDesign name="hearto" size={17} color="black" />
          )}
        </Pressable>
      </View>
    </>
  );
}

export default FavoriteItem;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: "1%",
    marginBottom: "5%",
  },
  imgSize: {
    width: 110,
    height: 145,
  },
  infoContainer: {
    marginStart: "4%",
    width: "59%",
  },
  price: {
    fontFamily: "Poppins_600SemiBold",
  },
  name: {
    fontFamily: "Poppins_400Regular",
  },
});
