//imports from our third-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text } from "react-native";
import React from "react";

///imports from our code

import MyTitles from "../app/components/MyTitles";
import UserCoralEntries from "../app/screens/userCoralEntries";


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
 
};

export const UserEntryStack = createStackNavigator(screens);
