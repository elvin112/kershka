import { View, Text, StyleSheet } from "react-native";

function Title({ style, name, itemSize }) {
  return (
    <Text style={style}>
      {name} {itemSize > 0 ? "(" + itemSize + ")" : null}
    </Text>
  );
}

export default Title;
