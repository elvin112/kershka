import { useState } from "react";
import { StyleSheet, View } from "react-native";

import SearchGenderFilter from "./SearchGenderFilter";

const SearchContent = () => {
  const [active, setActive] = useState(true);

  const handleActiveChange = () => {
    setActive((oldState) => !oldState);
  };

  return (
    <View style={styles.container}>
      <SearchGenderFilter active={active} onPressHandler={handleActiveChange} />
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
