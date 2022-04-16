import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../../constants/colors";

const SearchGenderButton = ({ active, children, onPressHandler }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressHandler} android_disableSound={true}>
        <View style={active ? styles.textContainer : null}>
          <Text style={[styles.text, active ? styles.active : null]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SearchGenderButton;

const styles = StyleSheet.create({
  container: {
    marginRight: "4%",
  },
  text: {
    fontSize: 20,
    color: Colors.primary300,
    fontFamily: "Poppins_300Light",
  },
  active: {
    color: "black",
    fontFamily: "Poppins_500Medium",
  },
  textContainer: {
    borderBottomWidth: 3,
  },
});
