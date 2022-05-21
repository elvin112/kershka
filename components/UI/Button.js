import { Pressable, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

function Button({ name, style, onPress, containerStyle, containerSize, icon }) {
  return (
    <Pressable
      style={[styles.btnContainer, containerStyle, containerSize]}
      onPress={onPress}
    >
      <Text style={[styles.text, style]}>
        {icon}
        {name}
      </Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    maxHeight: 58,
    backgroundColor: Colors.primary500,
    padding: 7,
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    color: Colors.primary100,
    textAlign: "center",
  },
});
