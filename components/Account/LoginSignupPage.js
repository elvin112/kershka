import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LoginSvg from "./LoginSvg";
import Title from "../UI/Title";
import Button from "../UI/Button";

function LoginSignupPage() {
  return (
    <View style={styles.container}>
      <LoginSvg />
      <View style={styles.titleContainer}>
        <Title style={styles.infoTitle} name="Log in or create an account" />
      </View>

      <View style={styles.btnContainer}>
        <Button
          name="Continue with email"
          style={styles.buttonText}
          onPress={{}}
          icon={
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="white"
            />
          }
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          name="Continue with Facebook"
          style={styles.buttonText}
          onPress={{}}
          containerStyle={styles.facebookBtnContainer}
          icon={
            <MaterialCommunityIcons name="facebook" size={24} color="white" />
          }
        />
      </View>
    </View>
  );
}

export default LoginSignupPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  titleContainer: {
    width: "100%",
    marginBottom: "7%",
  },
  btnContainer: {
    width: "100%",
    marginTop: "1%",
    marginBottom: "3%",
  },
  infoTitle: {
    marginTop: "6%",
    fontSize: 21,
    fontFamily: "Poppins_600SemiBold",
  },
  facebookBtnContainer: {
    backgroundColor: "#4267B2",
  },
});
