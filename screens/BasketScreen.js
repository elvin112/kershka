import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Title from "../components/UI/Title";
import { sizes } from "../constants/sizes";
import EmptyBasketSvg from "../components/UI/Basket/EmptyBasketSvg";
import Button from "../components/UI/Button";

function BasketScreen() {
  const basketState = useSelector((state) => state.basket);

  return (
    <View style={styles.container}>
      <Title style={styles.titleStyle} name="My basket" />
      <View style={styles.innerContainer}>
        <EmptyBasketSvg />
        <View style={styles.emptyBasketImg}></View>
        <Title style={styles.infoTitle} name="Empty Basket" />
        <Text style={styles.infoDescription}>
          Your basket is still empty, discover everything we'got for you
        </Text>
        <Button name="DISCOVER" style={styles.buttonText} />
      </View>
    </View>
  );
}

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
    marginHorizontal: sizes.screenPadding,
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-29%",
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
    fontSize: 21,
  },
});
