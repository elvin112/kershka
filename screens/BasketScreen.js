import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import BasketItem from "../components/Basket/BasketItem";
import EmptyBasket from "../components/Basket/EmptyBasket";
import Title from "../components/UI/Title";
import { sizes } from "../constants/sizes";
import SnackBar from "react-native-snackbar-component";
import { Colors } from "../constants/colors";
import Button from "../components/UI/Button";

function BasketScreen() {
  const basketState = useSelector((state) => state.basket);

  const [snackbarEnabled, setSnackbarEnabled] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const basketItemLength = basketState.length;

    const items = basketState;
    let totalPrice = 0;
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      totalPrice += element.price;
    }
    setTotalPrice(totalPrice);
    setItemCount(basketItemLength);
  }, [basketState]);

  function snackBarHandler() {
    setSnackbarEnabled((current) => !current);
    setTimeout(() => {
      setSnackbarEnabled((current) => !current);
    }, 1300);
  }
  const renderItem = ({ item }) => (
    <BasketItem
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

  if (basketState) {
    const basketItems = basketState;
    if (basketItems.length > 0) {
      content = (
        <>
          <FlatList
            data={basketItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.image}
          />
          <View style={styles.orderContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.totalPriceTxt}>
                Total <Text style={styles.vat}>(VAT included)</Text>
              </Text>
              <Text style={styles.totalPriceTxt}>{totalPrice}PLN</Text>
            </View>
            <View style={styles.orderButtonsContainer}>
              <Button
                name="Process order"
                style={styles.buttonText}
                containerStyle={styles.btnContainer}
                containerSize={styles.btnContainerSize}
              />
              <Button
                name="Buy with G-Pay"
                style={styles.buttonText}
                containerSize={styles.btnContainerSize}
              />
            </View>
          </View>
        </>
      );
    } else {
      content = (
        <View style={styles.innerContainer}>
          <EmptyBasket />
        </View>
      );
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Title
          style={styles.titleStyle}
          name="My basket"
          itemSize={itemCount}
        />
        {content}
        <SnackBar
          visible={snackbarEnabled}
          textMessage="Item removed"
          backgroundColor="#1DA1F2"
          containerStyle={{ height: 45 }}
          position="top"
        />
      </View>
    </>
  );
}

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
    marginHorizontal: sizes.screenPadding,
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  orderContainer: {
    flex: 1,
    justifyContent: "flex-end",
    height: "25%",

    marginBottom: "6%",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "8%",
  },
  orderButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  btnContainerSize: {
    width: "47%",
  },
  btnContainer: {
    backgroundColor: Colors.accent100,
  },
  buttonText: {
    fontSize: 16,
  },
  totalPriceTxt: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
  },
  vat: {
    fontSize: 11,
    color: Colors.primary300,
  },
});
