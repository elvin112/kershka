import { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SnackBar from "react-native-snackbar-component";

import { favoritesActions } from "../store/favoritesSlice";
import Title from "../components/UI/Title";
import { sizes } from "../constants/sizes";
import Button from "../components/UI/Button";
import EmptyFavorite from "../components/UI/Favorites/EmptyFavorite";
import FavoriteItem from "../components/UI/Favorites/FavoriteItem";

function FavouritesScreen() {
  const [snackbarEnabled, setSnackbarEnabled] = useState(false);
  const favoritesState = useSelector((state) => state.favorites);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const favoritedItemLength = favoritesState.length;
    setItemCount(favoritedItemLength);
  });

  function snackBarHandler() {
    setSnackbarEnabled((current) => !current);
    setTimeout(() => {
      setSnackbarEnabled((current) => !current);
    }, 1300);
  }
  const renderItem = ({ item }) => (
    <FavoriteItem
      image={item.image}
      name={item.name}
      price={item.price}
      onSnackbar={snackBarHandler}
    />
  );

  let content = (
    <View style={styles.innerContainer}>
      <ActivityIndicator size="large" color="#000000" />;
    </View>
  );

  if (favoritesState) {
    const favoritedItems = favoritesState;
    if (favoritedItems.length > 0) {
      content = (
        <FlatList
          data={favoritedItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.image}
        />
      );
    } else {
      content = (
        <View style={styles.innerContainer}>
          <EmptyFavorite />
        </View>
      );
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Title
          style={styles.titleStyle}
          name="My favourites"
          itemSize={itemCount}
        />
        {content}
      </View>
      <SnackBar
        visible={snackbarEnabled}
        textMessage="Item removed"
        backgroundColor="#1DA1F2"
        containerStyle={{ height: 45 }}
        position="bottom"
      />
    </>
  );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
    marginHorizontal: sizes.screenPadding,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});
