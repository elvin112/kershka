import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../../UI/SearchBar";
import SearchContent from "./components/SearchContent";
import { sizes } from "../../../constants/sizes";
import { fetchItems } from "../../../util/http";

function SearchPage() {
  const [active, setActive] = useState(true);
  const [fetchedData, setFetchedData] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const filter = active ? "women" : "men";
      const expenses = await fetchItems(filter);
      setFetchedData(expenses.data);

      const topCategories = Object.keys(expenses.data);

      let tempSubCategories;
      const orderedCategories = topCategories.map((category) => {
        tempSubCategories = Object.keys(expenses.data[category]);

        if (tempSubCategories[0] === "0") {
          return { category: category, subCategories: null };
        } else {
          return { category: category, subCategories: tempSubCategories };
        }
      });

      setCategories(orderedCategories);
    };

    fetchData();
  }, [active]);

  return (
    <View style={styles.container}>
      <SearchBar />
      <SearchContent
        active={active}
        setActive={setActive}
        categories={categories}
        fetchedData={fetchedData}
      />
    </View>
  );
}

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: sizes.screenPadding,
  },
});
