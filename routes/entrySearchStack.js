//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

///imports from our code
import MyTitles from "../app/components/MyTitles";
import EntrySearch from "../app/screens/entrySearch";

const screens = {
  EntrySearch: {
    screen: EntrySearch,
    navigationOptions: ({ navigation }) => {
      return {
        //headerLeft: () => null,
        headerTitle: () => <MyTitles>Entry Search</MyTitles>,
        gestureEnabled: false,
      };
    },
  },
};

export const EntrySearchStack = createStackNavigator(screens);
