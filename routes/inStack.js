import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

import Home from "../screens/home";
import CoralEntry from "../screens/coralEntry";
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
        headerTitle: "Coral",
        gestureEnabled: false,
      };
    },
  },
};

export const InStack = createStackNavigator(screens);
