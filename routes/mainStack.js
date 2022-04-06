//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
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
          <MyTitles>
            Coral Spotlight
          </MyTitles>
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

export const MainStack = createStackNavigator(screens);
