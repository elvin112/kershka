import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const CategoryItem = ({ category, subCategories, active, fetchedData }) => {
  const [isExposed, setIsExposed] = useState(false);
  const navigation = useNavigation();

  const topCategoryOnPressHandler = () => {
    setIsExposed((state) => !state);
    if (!subCategories) {
      const items = fetchedData[category];

      navigation.navigate("ItemsPage", {
        title: category,
        items: items,
        gender: active ? "women" : "men",
      });
    }
  };

  const subCategoryOnPressHandler = (subCategory) => {
    const items = fetchedData[category][subCategory];

    navigation.navigate("ItemsPage", {
      title: subCategory,
      items: items,
      gender: active ? "women" : "men",
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
