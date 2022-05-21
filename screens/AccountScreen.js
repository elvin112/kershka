import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import LoginSignupPage from "../components/Account/LoginSignupPage";

function AccountScreen() {
  const [isAuth, setIsAuth] = useState(false);

  let content = (
    <View style={styles.innerContainer}>
      <LoginSignupPage />
    </View>
  );

  return <View style={styles.container}>{content}</View>;
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 27,
    alignItems: "center",
  },
});
