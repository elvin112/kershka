import { View, Text, StyleSheet } from "react-native";

import Title from "../components/UI/Title";
import { sizes } from "../constants/sizes";
import EmptyFavoriteSvg from "../components/UI/Favorites/EmptyFavoriteSvg";
import Button from "../components/UI/Button";

function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Title style={styles.titleStyle} name="My favourites" />
      <View style={styles.innerContainer}>
        <EmptyFavoriteSvg />
        <View style={styles.emptyBasketImg}></View>
        <Title style={styles.infoTitle} name="You don't have any favourites" />
        <Text style={styles.infoDescription}>
          Did you know we update our collection every week?
        </Text>
        <Button name="SEE WHAT’S NEW" style={styles.buttonText} />
      </View>
    </View>
  );
}

export default FavouritesScreen;

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
