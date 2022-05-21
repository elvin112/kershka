import { View, Text, StyleSheet } from "react-native";

import EmptyFavoriteSvg from "./EmptyFavoriteSvg";
import Button from "../UI/Button";
import Title from "../UI/Title";

function EmptyFavorite() {
  return (
    <View style={styles.innerContainer}>
      <EmptyFavoriteSvg />
      <View style={styles.emptyBasketImg}></View>
      <Title style={styles.infoTitle} name="You don't have any favourites" />
      <Text style={styles.infoDescription}>
        Did you know we update our collection every week?
      </Text>
      <Button name="SEE WHAT’S NEW" style={styles.buttonText} />
    </View>
  );
}

export default EmptyFavorite;

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
