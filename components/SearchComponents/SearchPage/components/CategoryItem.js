import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

// TODO: Make list items pressable and collapsable

const CategoryItem = ({ category, subCategories, active, fetchedData }) => {
  const [isExposed, setIsExposed] = useState(false);
  const navigation = useNavigation();

  const topCategoryOnPressHandler = () => {
    setIsExposed((state) => !state);
    if (!subCategories)
      navigation.navigate("ItemsPage", {
        category: category,
        subCategory: null,
        gender: active ? "men" : "women",
        fetchedData: fetchedData,
      });
  };

  const subCategoryOnPressHandler = (subCategory) => {
    navigation.navigate("ItemsPage", {
      category: category,
      subCategory: subCategory,
      gender: active ? "men" : "women",
      fetchedData: fetchedData,
    });
  };

  const subCategoryHandler = (subCategory) => {
    return (
      <View
        style={[
          styles.subCategoryContainer,
          { display: isExposed ? "flex" : "none" },
        ]}
      >
        <Pressable
          style={styles.subCategoryButton}
          onPress={subCategoryOnPressHandler.bind(this, subCategory)}
        >
          <Text style={styles.subCategoryText}>{subCategory}</Text>
        </Pressable>
      </View>
    );
  };

  const icon = isExposed ? (
    <AntDesign name="up" size={16} color="black" />
  ) : (
    <AntDesign name="down" size={16} color="black" />
  );

  return (
    <View style={styles.container}>
      <View style={styles.topCategoryContainer}>
        <Pressable
          style={styles.topCategoryButton}
          onPress={topCategoryOnPressHandler}
        >
          <Text style={styles.topCategoryText}>{category.toUpperCase()}</Text>
          <View style={styles.iconContainer}>
            {subCategories ? icon : null}
          </View>
        </Pressable>
        {subCategories
          ? subCategories.map((subCategory) => subCategoryHandler(subCategory))
          : null}
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "5%",
  },
  topCategoryContainer: {
    width: "100%",
  },
  topCategoryText: {
    fontSize: 20,
  },
  topCategoryButton: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconContainer: {
    justifyContent: "flex-end",
  },
  subCategoryContainer: {
    marginLeft: 12,
    fontSize: 14,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  subCategoryButton: {
    flex: 1,
  },
  subCategoryText: {},
});
