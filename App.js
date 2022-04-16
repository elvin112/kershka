import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import store from "./store/store";
import { Colors } from "./constants/colors";
import WelcomeScreen from "./screens/WelcomeScreen";
import SearchScreen from "./screens/SearchScreen";
import BasketScreen from "./screens/BasketScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import AccountScreen from "./screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const myTheme = {
    colors: {
      backgroundColor: Colors.primary100,
    },
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <Provider store={store}>
          <NavigationContainer theme={myTheme}>
            <Tab.Navigator
              style={styles.navigationContainer}
              screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                  backgroundColor: "#FFFF",
                },
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor: "#B1B1B1",
              }}
            >
              <Tab.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={size + 5} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="search" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="BasketScreen"
                component={BasketScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5
                      name="shopping-bag"
                      size={size}
                      color={color}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="FavouritesScreen"
                component={FavouritesScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="heart" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-sharp" size={size} color={color} />
                  ),
                }}
              />
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
  navigationContainer: {
    backgroundColor: Colors.primary100,
  },
  tapEffect: {
    opacity: 0.8,
  },
});
