import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import React from "react";
import Login from "../screens/login";
import Logon from "../screens/logon";
import Drawer from "../routes/drawer";
import Header from "../shared/header";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: () => {
        <Text
          style={{
            textAlign: "center",
            flex: 1,
            fontFamily: "RobotoCondensed_700Bold",
            fontSize: 22,
          }}
        >
          Login
        </Text>;
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
