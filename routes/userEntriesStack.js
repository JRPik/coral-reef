//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

///imports from our code
import Home from "../app/screens/home";
import CoralEntry from "../app/screens/coralEntry";
import MyTitles from "../app/components/MyTitles";
import CoralEntries from "../app/screens/coralEntries";

const screens = {
    CoralEntries: {
        screen: CoralEntries,
        navigationOptions: ({ navigation }) => {
          return {
            headerLeft: () => null,
            headerTitle: () => (
              <MyTitles>
                  My Entries
              </MyTitles>
            ),
            gestureEnabled: false,
          };
        },
      },
 
};

export const UserEntryStack = createStackNavigator(screens);
