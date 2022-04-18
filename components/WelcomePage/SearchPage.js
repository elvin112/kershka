import { View, Text, StyleSheet, TextInput } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

function SearchPage({ navigation }) {
  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.searchBar}>
          <AntDesign name="search1" size={22} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Search"
            selectionColor={"black"}
          />
        </View>
        <Text style={styles.cancelText} onPress={cancelHandler}>
          Cancel
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Most searched</Text>
        <Text>Spodnie</Text>
        <Text>Top</Text>
        <Text>Bluza</Text>
        <Text>Sukienka</Text>
      </View>
    </View>
  );
}

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 27,
    paddingLeft: 30,
  },
  title: {
    marginTop: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBar: {
    padding: 5,
    paddingLeft: 15,
    flexDirection: "row",

    backgroundColor: Colors.primary200,
    width: "80%",
    borderRadius: 7,
  },
  input: {
    flex: 1,
    paddingLeft: 5,
    fontFamily: "Poppins_300Light",
    color: "black",
  },
  cancelText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    paddingEnd: 10,
  },
  content: {
    marginTop: 35,
  },
  contentTitle: {
    fontFamily: "Poppins_600SemiBold",
    paddingBottom: 30,
  },
});
