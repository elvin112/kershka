import { StyleSheet, Text, View } from "react-native";

import SearchGenderButton from "./SearchGenderButton";

const SearchGenderFilter = ({ active, onPressHandler }) => {
  return (
    <View style={styles.container}>
      <SearchGenderButton active={active} onPressHandler={onPressHandler}>
        Women
      </SearchGenderButton>
      <SearchGenderButton active={!active} onPressHandler={onPressHandler}>
        Men
      </SearchGenderButton>
    </View>
  );
};

export default SearchGenderFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
