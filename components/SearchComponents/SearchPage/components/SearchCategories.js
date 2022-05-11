import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const SearchCategories = ({ categories, fetchedData, active }) => {
  const flatListRenderHandler = (itemData) => {
    let subCategories;
    if (itemData.item.subCategories) {
      subCategories = itemData.item.subCategories;
    }

    return (
      <CategoryItem
        key={itemData.item.category}
        category={itemData.item.category}
        subCategories={itemData.item.subCategories}
        fetchedData={fetchedData}
        active={active}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={flatListRenderHandler}
        keyExtractor={(item) => item.category}
      />
    </View>
  );
};

export default SearchCategories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
