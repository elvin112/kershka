import { View, Text, StyleSheet } from "react-native";

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontsTest}>This is Search Screen</Text>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
  },
  fontsTest: {
    fontFamily: "Poppins_300Light",
    fontSize: 100,
  },
});
