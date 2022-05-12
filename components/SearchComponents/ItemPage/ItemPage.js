import { useLayoutEffect, useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { sizes } from "../../../constants/sizes";
import Button from "../../UI/Button";
import { favoritesActions } from "../../../store/favoritesSlice";
import { basketActions } from "../../../store/basketSlice";

const ItemPage = () => {
  const [isFav, setIsFav] = useState(false);
  const [isInBasket, setIsInBasket] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favoritesState = useSelector((state) => state.favorites);
  const basketState = useSelector((state) => state.basket);

  const name = route.params.name;
  const price = route.params.price;
  const image = route.params.image;

  const addToFavoritesHandler = () => {
    const foundFavorite = favoritesState.find(
      (favorite) => favorite.name === name
    );

    if (!foundFavorite) {
      dispatch(favoritesActions.addToFavorites({ name, price, image }));
      setIsFav((state) => !state);
    } else {
      dispatch(favoritesActions.removeFromFavorites({ name }));
      setIsFav((state) => !state);
    }
  };

  const addToBasketHandler = () => {
    const foundInBasket = basketState.find(
      (basketItem) => basketItem.name === name
    );

    if (!foundInBasket) {
      dispatch(basketActions.addToBasket({ name, price, image }));
      setIsInBasket((state) => !state);
    } else {
      dispatch(basketActions.removeFromBasket({ name }));
    }
  };

  const headerBackButtonHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => {
        return (
          <Pressable onPress={headerBackButtonHandler}>
            <AntDesign name="left" size={24} color="black" />
          </Pressable>
        );
      },
      headerRight: () => {
        return <AntDesign name="sharealt" size={24} color="black" />;
      },
      title: "",
      headerTransparent: true,
      headerShadowVisible: false,
    });
  }, []);

  useEffect(() => {
    const foundFavorite = favoritesState.find(
      (favorite) => favorite.name === name
    );

    if (!foundFavorite) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }

    const foundInBasket = basketState.find(
      (basketItem) => basketItem.name === name
    );

    if (!foundInBasket) {
      setIsInBasket(false);
    } else {
      setIsInBasket(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: image }}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.priceAndIconContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{price} PLN</Text>
          </View>
          <View style={styles.iconContainer}>
            <Pressable onPress={addToFavoritesHandler}>
              {isFav ? (
                <AntDesign name="heart" size={24} color="red" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              )}
            </Pressable>
          </View>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Button
          name="ADD TO BASKET"
          onPress={addToBasketHandler}
          style={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default ItemPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  imageContainer: {
    height: 500,
  },
  image: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: sizes.screenPadding,
    marginTop: 10,
  },
  priceAndIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    width: "80%",
  },
  priceText: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "20%",
  },
  nameContainer: {
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
  },
  buttonText: {
    fontSize: 19,
  },
});
