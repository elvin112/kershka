import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/UI/SearchBar";
import SearchContent from "../components/SearchComponents/SearchContent";
import { Colors } from "../constants/colors";
import { sizes } from "../constants/sizes";

function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <SearchContent />
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: sizes.screenPadding,
  },
});
