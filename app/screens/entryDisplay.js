import { StyleSheet, Text, FlatList, Platform, Image, Alert, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";
import GreenButton from "../components/GreenButton";
import {TouchableOpacity} from 'react-native';
import { collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore"; 
import { db } from '../../firebase';
import colors from "../config/colors";
import { DrawerItem } from "@react-navigation/drawer";


export default function EntryDisplay({ navigation }) {
    const entryKeys = Object.keys(navigation.state.params.queryObj).map(key => `${key}`);
    const entryValues = Object.keys(navigation.state.params.queryObj).map(key => `${navigation.state.params.queryObj[key]}`);

    
    const ItemView = ({ item, index }) => {
        if(entryKeys[index] == "image"){
          if(index != 0){
            console.log("image index: " + index)
            const tempVal = entryValues[0]
            entryValues[0] =  entryValues[index];
            entryValues[index] = tempVal;

            const tempKey = entryKeys[0]
            entryKeys[0] =  entryKeys[index];
            entryKeys[index] = tempKey;
            console.log(entryKeys[1] + ": " + entryValues[1])
          }
          return (
            <Image
              style={{flex: 1, resizeMode: 'contain', width: 500, height: 500}}
              source={{uri: item.toString()}}
            />
            );
        }
        else if(entryKeys[index] == "location"){
          const locationData = Object.keys(navigation.state.params.queryObj.location.coords).map(key => `${key.toUpperCase()}: ${navigation.state.params.queryObj.location.coords[key]} `);

          return (
              <FlatList
                data={locationData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item, index) => NestedItemView(item, index)} 
            /> 
          );
            
        }
        else if(entryKeys[index] == "oxygenUsed"){
          const oxygenData =  Object.keys(navigation.state.params.queryObj.oxygenUsed).map(key => `${key.toUpperCase()}: ${navigation.state.params.queryObj.oxygenUsed[key]}`);
          return(
            
              <FlatList
                  data={oxygenData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={(item, index) => NestedItemView(item, index)} 
              /> 
          
          );
        }
        else{
          return (
            <Text style={styles.text}>
              {entryKeys[index].toUpperCase() + ": " + item}
            </Text>
          );
        }
      };

      const NestedItemView = ({ item, index }) => {
        return (
            <Text style={styles.text}>
              {item}
            </Text>
          
            
          )}
    

    return (
        
        <SafeAreaView style={styles.container}>
            {<FlatList
            data={entryValues}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item, index) => ItemView(item, index)}
          /> }
        </SafeAreaView>
        
    )
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
    text1: {
      fontSize: 15,
      padding: 15,
      margin: 5,
      zIndex: 999,
      backgroundColor: "black",
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
    }});