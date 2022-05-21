import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import EmptyBasketSvg from "../Basket/EmptyBasketSvg";
import Title from "../UI/Title";
import Button from "../UI/Button";

function EmptyBasket() {
  const navigation = useNavigation();

  function discoverBtnHandler() {
    navigation.navigate("SearchPage");
  }

  return (
    <View style={styles.innerContainer}>
      <EmptyBasketSvg />
      <View style={styles.emptyBasketImg}></View>
      <Title style={styles.infoTitle} name="Empty Basket" />
      <Text style={styles.infoDescription}>
        Your basket is still empty, discover everything we'got for you
      </Text>
      <Button
        name="DISCOVER"
        style={styles.buttonText}
        onPress={discoverBtnHandler}
      />
    </View>
  );
}

export default EmptyBasket;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: "-29%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  infoTitle: {
    marginTop: "4%",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
  infoDescription: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    width: "70%",
    textAlign: "center",
    marginBottom: "6%",
  },
  buttonText: {
    fontSize: 19,
  },
});
