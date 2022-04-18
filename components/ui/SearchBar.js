import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View, Platform, Pressable } from "react-native";
import { Colors } from "../../constants/colors";
import { sizes } from "../../constants/sizes";

const SearchBar = () => {
  return (
    <View style={styles.bigContainer}>
      <Pressable
        onPress={() => {
          console.log("search bar clicked");
        }}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.pressable,
        ]}
        android_ripple={{ color: Colors.primary300 }}
      >
        <View style={styles.smallContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="search" size={25} color={Colors.primary300} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Search</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  bigContainer: {
    height: "7%",
    width: sizes.maxWidth,
    borderRadius: 10,
    marginTop: Platform.OS === "ios" ? 0 : 30,
    overflow: "hidden",
    marginBottom: sizes.itemMarginBottom,
  },
  pressable: {
    backgroundColor: Colors.primary200,
    flex: 1,
  },

  smallContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins_300Light",
    color: Colors.primary400,
  },
});
