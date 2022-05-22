import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Title from "../UI/Title";

function UserPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title style={styles.infoTitle} name="Hi" />
        <Text style={styles.subTitle}>dasdemirovelvin@gmail.com</Text>
      </View>
      <View style={styles.userSettingsContainer}>
        <Pressable style={styles.option}>
          <Ionicons name="basket" size={37} color="green" />
          <Text style={styles.optionTxt}>My orders</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <MaterialIcons name="account-circle" size={37} color="red" />
          <Text style={styles.optionTxt}>Personal details and addresses</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.optionsContainer}>
        <Pressable style={styles.option}>
          <FontAwesome name="envelope-o" size={24} color="black" />
          <Text style={styles.optionTxt}>Inbox</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Feather name="help-circle" size={24} color="black" />
          <Text style={styles.optionTxt}>Help</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Feather name="info" size={24} color="black" />
          <Text style={styles.optionTxt}>We are Kershka</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Feather name="phone-call" size={24} color="black" />
          <Text style={styles.optionTxt}>Contact</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Feather name="settings" size={24} color="black" />
          <Text style={styles.optionTxt}>Settings</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <AntDesign name="poweroff" size={24} color="black" />
          <Text style={styles.optionTxt}>Log out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default UserPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    width: "90%",
    marginTop: "4%",
  },
  btnContainer: {
    flexDirection: "row",
    width: "90%",
    marginTop: "1%",
    marginBottom: "3%",
  },
  infoTitle: {
    width: "100%",
    marginTop: "6%",
    fontSize: 26,
    fontFamily: "Poppins_600SemiBold",
  },
  subTitle: {
    fontSize: 11,
    fontFamily: "Poppins_500Medium",
  },
  userSettingsContainer: { alignSelf: "stretch", paddingVertical: 19 },
  optionsContainer: {
    marginTop: "5%",

    paddingTop: "10%",
    alignSelf: "stretch",
  },
  option: {
    flexDirection: "row",
    paddingBottom: "5%",
    paddingStart: "3%",
  },
  optionTxt: {
    paddingStart: "5%",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
});
