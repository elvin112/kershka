import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { favoritesActions } from "../../../../store/favoritesSlice";

const GridItem = ({ item }) => {
  const [isFav, setIsFav] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favoritesState = useSelector((state) => state.favorites);

  const itemOnPressHandler = () => {
    navigation.navigate("ItemPage", {
      name: item.item.name,
      price: item.item.price,
      image: item.item.image,
    });
  };

  const addToFavoritesHandler = () => {
    const foundFavorite = favoritesState.find(
      (favorite) => favorite.name === item.item.name
    );

    if (!foundFavorite) {
      dispatch(
        favoritesActions.addToFavorites({
          name: item.item.name,
          price: item.item.price,
          image: item.item.image,
        })
      );
      setIsFav((state) => !state);
    } else {
      dispatch(favoritesActions.removeFromFavorites({ name: item.item.name }));
      setIsFav((state) => !state);
    }
  };

  useEffect(() => {
    const foundFavorite = favoritesState.find(
      (favorite) => favorite.name === item.item.name
    );

    if (!foundFavorite) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  });

  return (
    <View
      style={[styles.itemContainer, item.index % 2 === 0 ? styles.odd : null]}
      key={item.item.name}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={itemOnPressHandler}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.item.image }} />
        </View>
        <View style={styles.itemTitleAndIconContainer}>
          <View style={styles.itemTitleContainer}>
            <Text>{item.item.name}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Pressable onPress={addToFavoritesHandler}>
              {isFav ? (
                <AntDesign name="heart" size={12} color="red" />
              ) : (
                <AntDesign name="hearto" size={12} color="black" />
              )}
            </Pressable>
          </View>
        </View>
        <Text>{item.item.price} PLN</Text>
      </Pressable>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },
  odd: {
    marginRight: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  imageContainer: {
    height: 240,
  },
  image: {
    flex: 1,
  },
  itemTitleAndIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  itemTitleContainer: {
    width: "90%",
  },

  iconContainer: {
    width: "10%",
  },
});
