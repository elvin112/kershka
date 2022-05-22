import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import LoginSignupPage from "./LoginSignupPage";

function AccountPage() {
  const [isAuth, setIsAuth] = useState(false);

  let content = (
    <View style={styles.innerContainer}>
      <LoginSignupPage />
    </View>
  );

  return <View style={styles.container}>{content}</View>;
}

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 27,
    alignItems: "center",
  },
});
