import { View, Text, StyleSheet } from "react-native";

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Welcome Screen</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
  },
});
