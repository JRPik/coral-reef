//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

///imports from our code
import UserCoralEntries from "../app/screens/userCoralEntries";
import MyTitles from "../app/components/MyTitles";
import GroupCoralEntries from "../app/screens/groupCoralEntries";
import CoralEntryInfo from "../app/screens/coralEntryInfo";

const screens = {
  UserCoralEntries: {
      screen: UserCoralEntries,
      navigationOptions: ({ navigation }) => {
        return {
          //headerLeft: () => null,
          headerTitle: () => (
            <MyTitles>
                My Entries
              </MyTitles>
            ),
            gestureEnabled: false,
          };
        },
      },
      Coral: {
        screen: CoralEntryInfo,
        navigationOptions: ({ navigation }) => {
          return {    
            //We should have a back button for all pages.    
            //headerLeft: () => null,
            headerTitle: () => (
              <MyTitles>
                Coral Specification
              </MyTitles>
            ),
            gestureEnabled: false,
          };
        },
      },
    };

export const UserEntryStack = createStackNavigator(screens);
