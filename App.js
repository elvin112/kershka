import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";

import store from "./store/store";
import { Colors } from "./constants/colors";
import WelcomeScreen from "./screens/WelcomeScreen";
import SearchScreen from "./screens/SearchScreen";
import BasketScreen from "./screens/BasketScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import AccountScreen from "./screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                // tabBarShowLabel: false,
              }}
            >
              <Tab.Screen name="WelcomeScreen" component={WelcomeScreen} />
              <Tab.Screen name="SearchScreen" component={SearchScreen} />
              <Tab.Screen name="BasketScreen" component={BasketScreen} />
              <Tab.Screen
                name="FavouritesScreen"
                component={FavouritesScreen}
              />
              <Tab.Screen name="AccountScreen" component={AccountScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.primary100,
  },
});
