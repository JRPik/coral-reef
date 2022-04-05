//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

///imports from our code
import Home from "../app/screens/home";
import CoralEntry from "../app/screens/coralEntry";
import MyTitles from "../app/components/MyTitles";
import NewEntry from "../app/screens/newEntry";
const screens = {
    NewEntry: {
        screen: NewEntry,
        navigationOptions: ({ navigation }) => {
          return {
            headerLeft: () => null,
            headerTitle: () => (
              <MyTitles>
                New Entry
              </MyTitles>
            ),
            gestureEnabled: false,
          };
        },
      },
  
 
};

export const NewEntryStack= createStackNavigator(screens);
