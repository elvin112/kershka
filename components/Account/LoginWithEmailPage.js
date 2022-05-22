import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SnackBar from "react-native-snackbar-component";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../util/auth";
import { authenticate } from "../../store/authSlice";
import Button from "../UI/Button";
import Title from "../UI/Title";

function LoginWithEmailPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormErrorShown, setIsFormErrorShown] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
        const { token, expirationDate } = await login(
          enteredEmail,
          enteredPassword
        );

        // dispatch(authenticate({ token, expirationDate }));
        navigation.replace("UserPage");
      } catch (error) {
        Alert.alert(
          "Authentication failed!",
          "Could not log you in. Please check your credentials or try again later!"
        );
      }
      setIsAuthenticating(false);
    } else {
      setIsFormErrorShown(true);
    }
  }

  const navigation = useNavigation();

  function goRegisterHandler() {
    navigation.replace("SingupWithEmailPage");
  }

  return (
    <View style={styles.container}>
      <Title style={styles.infoTitle} name="Log in" />
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
            onChangeText={updatePasswordValue}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <Text style={{ fontWeight: "700", marginVertical: "5%" }}>
          Forgotten your password?
        </Text>
      </View>
      <Button name="LOG IN" style={styles.buttonText} onPress={submitHandler} />
      <Text style={styles.subTitle}>
        Don't have an account?{" "}
        <Text
          style={{ fontWeight: "bold", fontFamily: "Poppins_300Light" }}
          onPress={goRegisterHandler}
        >
          Register
        </Text>
      </Text>
      <SnackBar
        visible={isAuthenticating}
        textMessage="Logging you in.."
        backgroundColor="#1DA1F2"
        containerStyle={{ height: 47 }}
        position="top"
      />
    </View>
  );
}

export default LoginWithEmailPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  infoTitle: {
    marginBottom: "9%",
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    alignSelf: "flex-start",
  },
  subTitle: {
    marginTop: "4%",
    fontFamily: "Poppins_300Light",
    fontSize: 12,
  },
  inputRootContainer: {
    marginTop: "8%",
    alignSelf: "flex-start",
    width: "100%",
  },
  inputContainer: {
    marginVertical: "4%",
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
