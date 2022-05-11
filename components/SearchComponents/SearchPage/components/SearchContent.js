import { StyleSheet, View } from "react-native";

import SearchGenderFilter from "./SearchGenderFilter";
import SearchCategories from "./SearchCategories";

const SearchContent = ({ active, setActive, categories, fetchedData }) => {
  const handleActiveChange = () => {
    setActive((oldState) => !oldState);
  };

  return (
    <View style={styles.container}>
      <SearchGenderFilter active={active} onPressHandler={handleActiveChange} />
      <SearchCategories
        categories={categories}
        fetchedData={fetchedData}
        active={active}
      />
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
