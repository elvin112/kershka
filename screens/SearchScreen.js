import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";

import SearchPage from "../components/SearchComponents/SearchPage/SearchPage";
import ItemsPage from "../components/SearchComponents/ItemsPage/ItemsPage";
import ItemPage from "../components/SearchComponents/ItemPage/ItemPage";

const SearchScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="ItemsPage" component={ItemsPage} />
      <Stack.Screen name="ItemPage" component={ItemPage} />
    </Stack.Navigator>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
