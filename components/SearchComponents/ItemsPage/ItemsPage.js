import { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  FlatList,
  Image,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { sizes } from "../../../constants/sizes";

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
    return (
      <View
        style={[styles.itemContainer, item.index % 2 === 0 ? styles.odd : null]}
        key={item.item.name}
      >
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.item.image }} />
          </View>
          <View style={styles.itemTitleAndIconContainer}>
            <View style={styles.itemTitleContainer}>
              <Text>{item.item.name}</Text>
            </View>
            <View style={styles.iconContainer}>
              <AntDesign name="hearto" size={12} color="black" />
            </View>
          </View>
          <Text>{item.item.price} PLN</Text>
        </Pressable>
      </View>
    );
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
  itemContainer: {
    flex: 1,
  },
  odd: {
    marginRight: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  imageContainer: {
    height: 240,
  },
  image: {
    flex: 1,
  },
  itemTitleAndIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  itemTitleContainer: {
    width: "90%",
  },

  iconContainer: {
    width: "10%",
  },
});
