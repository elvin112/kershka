import { View, Text, StyleSheet } from "react-native";

function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Account Screen</Text>
    </View>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
  },
});
