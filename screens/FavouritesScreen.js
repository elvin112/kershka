import { View, Text, StyleSheet } from "react-native";

function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Favourites Screen</Text>
    </View>
  );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
  },
});
