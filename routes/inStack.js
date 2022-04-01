//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

///imports from our code
import Home from "../app/screens/home";
import CoralEntry from "../app/screens/coralEntry";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => null,
        headerTitle: () => (
          <Text
            style={{
              textAlign: "center",
              fontFamily: "RobotoCondensed_400Regular",
              fontSize: 18,
            }}
          >
            Coral Spotlight
          </Text>
        ),
        gestureEnabled: false,
      };
    },
  },
  Coral: {
    screen: CoralEntry,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Coral Info",
        gestureEnabled: false,
      };
    },
  },
};

export const InStack = createStackNavigator(screens);
