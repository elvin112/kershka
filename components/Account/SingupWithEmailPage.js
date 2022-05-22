import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SnackBar from "react-native-snackbar-component";

import { createUser } from "../../util/auth";
import { authenticate } from "../../store/authSlice";
import Button from "../UI/Button";
import Title from "../UI/Title";

function SingupWithEmailPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormErrorShown, setIsFormErrorShown] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  function updateEmailValue(enteredValue) {
    const trimmedValue = enteredValue.trim();
    setEnteredEmail(trimmedValue);
  }

  function updatePasswordValue(enteredValue) {
    const trimmedValue = enteredValue.trim();
    setEnteredPassword(trimmedValue);
  }

  useEffect(() => {
    if (enteredEmail.includes("@") && enteredEmail.length >= 4) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    if (enteredPassword.length >= 8) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
    if (isFormErrorShown) {
      if (isEmailValid && isPasswordValid) {
        setIsFormErrorShown(false);
      }
    }
    return () => {};
  }, [enteredEmail, enteredPassword, isFormErrorShown]);

  async function submitHandler() {
    if (isEmailValid && isPasswordValid && !isFormErrorShown) {
      setIsAuthenticating(true);
      try {
        const { token, expirationDate } = await createUser(
          enteredEmail,
          enteredPassword
        );

        // dispatch(authenticate(token, expirationDate));
        navigation.replace("UserPage");
      } catch (error) {
        Alert.alert(
          "Authentication failed",
          "Could not create user, please check your input and try again later."
        );
      }
      setIsAuthenticating(false);
    } else {
      setIsFormErrorShown(true);
    }
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title style={styles.infoTitle} name="Create account" />
      <View style={styles.inputRootContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              !isEmailValid && isFormErrorShown && styles.errorInput,
            ]}
            placeholder="Email"
            onChangeText={updateEmailValue}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              !isPasswordValid && isFormErrorShown && styles.errorInput,
            ]}
            placeholder="Password"
            onChangeText={updatePasswordValue}
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.subTitle}>
          Minimum 8 characters, including lowercase, uppercase and a number.
          Don't repeat the same character more than 3 times
        </Text>
      </View>
      <Button
        name="CREATE ACCOUNT"
        style={styles.buttonText}
        onPress={submitHandler}
      />
      <SnackBar
        visible={isAuthenticating}
        textMessage="Creating user..."
        backgroundColor="#1DA1F2"
        containerStyle={{ height: 47 }}
        position="top"
      />
    </View>
  );
}

export default SingupWithEmailPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  infoTitle: {
    marginBottom: "1%",
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    alignSelf: "flex-start",
  },
  subTitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 11,
    width: "95%",
  },
  inputRootContainer: {
    marginTop: "1%",
    marginBottom: "11%",
    alignSelf: "flex-start",
    width: "100%",
  },
  inputContainer: {
    marginVertical: "6%",
  },
  input: {
    borderWidth: 1,
    padding: 8,
  },
  errorInput: {
    borderColor: "red",
  },

  buttonText: {
    fontSize: 15,
  },
});
