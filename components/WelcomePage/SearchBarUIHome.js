import { View, StyleSheet, Text, Pressable } from "react-native";

import { AntDesign } from "@expo/vector-icons";

function SearchBarUIHome({ onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <AntDesign name="search1" size={22} color="black" />
      <Text style={styles.text}>Search</Text>
    </Pressable>
  );
}

export default SearchBarUIHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    paddingLeft: 4,
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    marginTop: 4,
    marginRight: 27,
  },
});
