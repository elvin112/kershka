import { View, Text, StyleSheet } from "react-native";

function BasketScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Basket Screen</Text>
    </View>
  );
}

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
  },
});
