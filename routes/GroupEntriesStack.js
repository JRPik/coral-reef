//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

///imports from our code
import CoralEntry from "../app/screens/coralEntry";
import MyTitles from "../app/components/MyTitles";
import GroupCoralEntries from "../app/screens/GroupCoralEntries";

const screens = {
  GroupEntries: {
    screen: GroupCoralEntries,
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
    screen: CoralEntry,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Coral Specification",
        gestureEnabled: false,
      };
    },
  },
};

export const GroupEntriesStack = createStackNavigator(screens);
