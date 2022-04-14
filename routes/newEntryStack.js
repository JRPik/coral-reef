//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

///imports from our code
import MyTitles from "../app/components/MyTitles";
import NewEntry from "../app/screens/newEntry";
import NewEntryTwo from "../app/screens/newEntryTwo";

const screens = {
    NewEntry: {
      screen: NewEntry,
      navigationOptions: ({ navigation }) => {
        return {
          //headerLeft: () => null,
          headerTitle: () => (
            <MyTitles>
              New Entry
            </MyTitles>
          ),
          gestureEnabled: false,
        };
      },
    },
    NewEntryTwo: {
      screen: NewEntryTwo,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => (
            <MyTitles>
              Below Water
            </MyTitles>
          ),
          gestureEnabled: false,
        };
      },
    },
};

export const NewEntryStack= createStackNavigator(screens);
