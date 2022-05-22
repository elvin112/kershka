import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import AccountPage from "../components/Account/AccountPage";
import LoginSignupPage from "../components/Account/LoginSignupPage";
import LoginWithEmailPage from "../components/Account/LoginWithEmailPage";
import SingupWithEmailPage from "../components/Account/SingupWithEmailPage";
import UserPage from "../components/Account/UserPage";

const Stack = createNativeStackNavigator();

function AccountScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountPage" component={AccountPage} />
      <Stack.Screen name="LoginSignupPage" component={LoginSignupPage} />
      <Stack.Screen
        name="LoginWithEmailPage"
        component={LoginWithEmailPage}
        options={({ navigation, route }) => ({
          headerShown: true,

          title: "",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="SingupWithEmailPage"
        component={SingupWithEmailPage}
        options={({ navigation, route }) => ({
          headerShown: true,

          title: "",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen name="UserPage" component={UserPage} />
    </Stack.Navigator>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 27,
    alignItems: "center",
  },
});
