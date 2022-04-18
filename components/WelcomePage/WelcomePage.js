import { Text, View, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import Logo from "../UI/Logo";
import SearchBarUIHome from "./SearchBarUIHome";
import { DUMMY_IMAGES } from "../../constants/DUMMY_DATA";

function WelcomePage({ navigation }) {
  function searchBarHandler() {
    navigation.navigate("SearchPage");
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.slider}>
        <SliderBox
          images={DUMMY_IMAGES}
          dotStyle={styles.dotStyle}
          sliderBoxHeight={"100%"}
          autoplay
          circleLoop
        />
      </View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Logo />
          <SearchBarUIHome onPress={searchBarHandler} />
        </View>
      </View>
    </View>
  );
}

export default WelcomePage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 27,
  },
  slider: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  dotStyle: {
    width: 0,
    height: 0,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});
