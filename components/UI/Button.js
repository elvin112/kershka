import { Pressable, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

function Button({ name, style }) {
  return (
    <Pressable style={styles.btnContainer}>
      <Text style={[styles.text, style]}>{name}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    backgroundColor: "#3D3B3B",
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    color: Colors.primary100,
    textAlign: "center",
    padding: 3,
  },
});
