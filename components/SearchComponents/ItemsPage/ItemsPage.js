import { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { sizes } from "../../../constants/sizes";
import GridItem from "./components/GridItem";

const ItemsPage = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const title = route.params.title;
  const items = route.params.items;
  const gender = route.params.gender;

  const headerBackButtonHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: false,
      headerLeft: () => {
        return (
          <Pressable onPress={headerBackButtonHandler}>
            <AntDesign name="left" size={24} color="black" />
          </Pressable>
        );
      },
      headerRight: () => {
        return <AntDesign name="filter" size={24} color="black" />;
      },
      title: "",
      headerStyle: {
        backgroundColor: "white",
      },
      headerShadowVisible: false,
    });
  }, []);

  const renderItemHandler = (item) => {
    return <GridItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.itemsContainer}>
        <FlatList
          data={items}
          renderItem={renderItemHandler}
          numColumns={2}
          keyExtractor={(item) => item.image}
        />
      </View>
    </View>
  );
};

export default ItemsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: sizes.screenPadding,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: Platform.OS === "ios" ? 10 : 0,
  },
  title: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
  },
  itemsContainer: {
    flex: 1,
  },
});
