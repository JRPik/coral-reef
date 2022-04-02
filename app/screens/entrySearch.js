//import from our third-party libraries
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "react-native-dynamic-search-bar";
import React, { useEffect, useState } from "react";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//import from our code
import colors from "../config/colors";

//Array of data with all the coral and reefs we service
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
  //States used to get the data
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  //puts the data into those values (could be made into an online data pull)
  useEffect(() => {
    setFilteredDataSource(data);
    setMasterDataSource(data);
  }, []);

  //Function that filters the results
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
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  //Function that alerts when clicked (will be changed to go to pages)
  const getItem = (item) => {
    alert(item.reef + "\n" + item.coral);
  };

  //Function that styles each entry in the FlatList
  const ItemView = ({ item }) => {
    return (
      <Text style={styles.text} onPress={() => getItem(item)}>
        {item.reef + ": " + item.coral}
      </Text>
    );
  };

  const pressedHandler = () => {
    navigation.navigate("Logon");
  };

  //Allows the fonts to be loaded
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
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
    backgroundColor: colors.backGroundTwo,
  },
  list: {
    marginHorizontal: 8,
    marginVertical: 16,
    paddingLeft: 10,
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    padding: 15,
    margin: 5,
    backgroundColor: colors.primary,
    color: colors.backGroundOne,
    borderRadius: 5,
    elevation: 5,
  },
  searchText: {
    fontFamily: "Roboto_400Regular",
  },
});
