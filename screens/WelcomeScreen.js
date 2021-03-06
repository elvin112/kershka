import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomePage from "../components/WelcomePage/WelcomePage";
import SearchPage from "../components/WelcomePage/SearchPage";
import LoginWithEmailPage from "../components/Account/LoginWithEmailPage";
import { sizes } from "../constants/sizes";

const Stack = createNativeStackNavigator();

function WelcomeScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={WelcomePage} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="LoginWithEmailPage" component={LoginWithEmailPage} />
    </Stack.Navigator>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
  },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});
