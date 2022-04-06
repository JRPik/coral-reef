//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

///imports from our code
import UserCoralEntries from "../app/screens/userCoralEntries";
import MyTitles from "../app/components/MyTitles";
import GroupCoralEntries from "../app/screens/groupCoralEntries";

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
    screen: UserCoralEntries,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Coral Specification",
        gestureEnabled: false,
      };
    },
  },
};

export const GroupEntriesStack = createStackNavigator(screens);
