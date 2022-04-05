//imports from our thrid-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text, Platform } from "react-native";
import React from "react";

//imports from our code
import Login from "../app/screens/login";
import Logon from "../app/screens/logon";
import Drawer from "../routes/drawer";
import Header from "../app/components/header";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: () => {
        <Text
        style={{
          textAlign: "center",
          flex: 1,
          fontSize: 22,
          ...Platform.select({
            ios:{
                fontFamily: "Avenir",
            },
            android:{
                fontFamily: "Roboto",
            },
          }),
        }}
        >        
        Login
        </Text>
      },
    },
  },
  Logon: {
    screen: Logon,
    navigationOptions: {
      headerTitle: (
        <Text           
        style={{
          paddingLeft: "20%",
          flex: 1,
          fontFamily: "RobotoCondensed_700Bold",
          fontSize: 22,
        }}
>          
Create Account
        </Text>
      ),
    },
  },
  Home: {
    screen: Drawer,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
        gestureEnabled: false,
      };
    },
  },
};

export const HomeStack = createStackNavigator(screens);

export const Navigator = createAppContainer(HomeStack);
