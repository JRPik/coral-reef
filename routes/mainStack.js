//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text, StyleSheet } from "react-native";
import React from "react";

///imports from our code
import Home from "../app/screens/home";
import UserCoralEntries from "../app/screens/userCoralEntries";
import MyTitles from "../app/components/MyTitles";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => null,
        headerTitle: () => (     
          <Text style={styles.homeText}>
            Coral Home Page
          </Text>
        ),
        gestureEnabled: false,
      };
    },
  },
  Coral: {
    screen: UserCoralEntries,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Coral Specification",
        gestureEnabled: false,
      };
    },
  },
};

const styles = StyleSheet.create({
  homeText: {
    fontSize: 18,
    fontWeight: "bold",
    ...Platform.select({
        ios:{
            fontSize: 18,
            fontFamily: "Avenir",
            textAlign: "center",
        },
        android:{
            fontSize: 20,
            fontFamily: "Roboto",
            textAlign: "center",
        },
    }),
},
});

export const MainStack = createStackNavigator(screens);
