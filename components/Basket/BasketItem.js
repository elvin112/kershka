import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { basketActions } from "../../store/basketSlice";

function BasketItem({ image, name, price, onSnackbar }) {
  const [isAddedToBasket, setIsAddedToBasket] = useState(true);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const basketState = useSelector((state) => state.basket);

  function viewItemHandler() {
    navigation.navigate("ItemPage", {
      name: name,
      price: price,
      image: image,
    });
  }

  const removeFromBasketHandler = () => {
    const foundItem = basketState.find(
      (basketItem) => basketItem.name === name
    );

    if (!foundItem) {
      setIsAddedToBasket((state) => !state);
    } else {
      setIsAddedToBasket((state) => !state);
      const identifier = setTimeout(() => {
        dispatch(basketActions.removeFromBasket({ name }));
      }, 1000);
      onSnackbar(identifier);
    }
  };

  return (
    <Pressable onPress={viewItemHandler}>
      <View style={styles.innerContainer}>
        <Image style={styles.imgSize} source={{ uri: image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.price}>{price}PLN</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Pressable onPress={removeFromBasketHandler}>
          <AntDesign name="delete" size={20} color="black" />
        </Pressable>
      </View>
    </Pressable>
  );
}

export default BasketItem;

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
