import { View, Text, StyleSheet } from "react-native";

function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kershka</Text>
    </View>
  );
}

export default Logo;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },
});
