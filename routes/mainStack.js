//imports from our third-parties
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { getAuth } from "firebase/auth";
import { Text, StyleSheet } from "react-native";

///imports from our code
import CraysfortReef from '../app/screens/craysfortReef';
import Home from "../app/screens/home";
import MyTitles from "../app/components/MyTitles";
import { app } from '../firebase';

const auth = getAuth(app);
const user = auth.currentUser;
//{user.displayName}

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => null,
        headerTitle: () => (     
          <Text style={styles.homeText}>
           Welcome to our App!
          </Text>
        ),
        gestureEnabled: false,
      };
    },
  },
  Coral: {
    screen: CraysfortReef,
    headerLeft: () => null,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Craysfort Reef Coral",
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
