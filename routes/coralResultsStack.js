import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";


import CraysfortReef from '../app/screens/craysfortReef';
import CoralEntryInfo from '../app/screens/coralEntryInfo';
import MyTitles from "../app/components/MyTitles";

const screens = {
    CraysfortReef: {
         screen: CraysfortReef,
         headerLeft: () => null,
         navigationOptions: ({ navigation }) => {
           return {
             headerTitle: "Craysfort Reef Coral",
             gestureEnabled: false,
           };
         },
       },
       Coral: {
        screen: CoralEntryInfo,
        navigationOptions: ({ navigation }) => {
          return {    
            headerLeft: () => null,
            headerTitle: () => (
              <MyTitles>
                Coral Specifications
              </MyTitles>
            ),
            gestureEnabled: false,
          };
        },
      },
  };

export const CoralResultsStack = createStackNavigator(screens);