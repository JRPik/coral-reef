import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "react-native-dynamic-search-bar";
import React, { useEffect, useState } from "react";
import { useFonts, RobotoCondensed_300Light, RobotoCondensed_300Light_Italic,
RobotoCondensed_400Regular, RobotoCondensed_400Regular_Italic, RobotoCondensed_700Bold,
RobotoCondensed_700Bold_Italic } from "@expo-google-fonts/dev";

const data = [
  { reef: "Carysfort Reef", coral: "Boulder Star" },
  { reef: "Carysfort Reef", coral: "Elkhorn" },
  { reef: "Carysfort Reef", coral: "Mountainous Star" },
  { reef: "Carysfort Reef", coral: "Staghorn" },
  { reef: "Cheeca Rocks", coral: "Mountainous Star" },
  { reef: "Looe Key", coral: "Staghorn" },
  { reef: "Pickle's Reef", coral: "Staghorn" },
  { reef: "Sombrero Reef", coral: "Elkhorn" },
];

export default function EntrySearch({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(data);
    setMasterDataSource(data);
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.coral
          ? item.coral.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const getItem = (item) => {
    // Function for click on an item
    alert(item.reef + "\n" + item.coral);
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.text} onPress={() => getItem(item)}>
        {item.reef + ": " + item.coral}
      </Text>
    );
  };

  const pressedHandler = () => {
    navigation.navigate("Logon");
  };

  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          placeholder="Search coral here"
          onClear={(text) => searchFilterFunction("")}
          onChangeText={(text) => searchFilterFunction(text)}
          textInputStyle={styles.searchText}
          style={{ elevation: 5 }}
        />
        <View style={styles.list}>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ItemView}
          />
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  list: {
    marginHorizontal: 8,
    marginVertical: 16,
    paddingLeft: 10,
  },
  text: {
    fontFamily: "RobotoCondensed_400Regular",
    fontSize: 15,
    padding: 15,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 5,
  },
  searchText: {
    fontFamily: "RobotoCondensed_400Regular",
  },
});
