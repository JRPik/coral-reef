//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList, Platform } from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "react-native-dynamic-search-bar";
import React, { useEffect, useState } from "react";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";
import GreenButton from "../components/GreenButton";
import {TouchableOpacity} from 'react-native';
import { collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore"; 
import { db } from '../../firebase';

//IMPORT FROM OUR CODE
import colors from "../config/colors";
//import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";
//Array of data with all the coral and reefs we service
const queryArray = [];

export default function EntrySearch({ navigation }) {
  //States used to get the data
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  //puts the data into those values (could be made into an online data pull)
  useEffect(() => {
    loadEntries();
  }, []);

  let loadEntries = async () => {
    const querySnapshot = await getDocs(collection(db, 'CoralReefProject/Entries/EntriesCollection'));
    querySnapshot.forEach((doc) => {
      queryArray.push(doc.data());
    })
    setFilteredDataSource(queryArray);
    setMasterDataSource(queryArray);
  }

  //Function that filters the results
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank

    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.boat ? item.boat.toUpperCase() : "".toUpperCase();
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

  //Function that styles each entry in the FlatList
  const ItemView = ({ item, index }) => {
    console.log(queryArray[index])
    return (
      <Text style={styles.text} onPress={() => navigation.navigate("EntryDisplay", {queryObj: item })}>
        {"Date: " + item.dateText + "\nUser: " + item.documentedBy}
      </Text>
    );
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
            renderItem={(item, index) => ItemView(item, index)}
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
    fontSize: 15,
    padding: 15,
    margin: 5,
    backgroundColor: colors.primary,
    color: colors.backGroundOne,
    borderRadius: 5,
    elevation: 5,
    ...Platform.select({
      ios:{
          fontFamily: "Avenir",
      },
      android:{
          fontFamily: "Roboto",
      },
    }),
  },
  searchText: {
    ...Platform.select({
      ios:{
          fontFamily: "Avenir",
      },
      android:{
          fontFamily: "Roboto",
      },
    }),
  },
});
