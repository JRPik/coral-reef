//imports from our thrid-parties
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text, Platform, View } from "react-native";
import React from "react";

//imports from our code
import Login from "../app/screens/login";
import Logon from "../app/screens/logon";
import Drawer from "../routes/drawer";
import Picture from "../app/screens/picture";
import Gallery from "../app/screens/gallery";
import Header from "../app/components/header";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerTransparent: true,
      headerLeft: () => null,
      headerTitle: () => {
        <Text
          style={{
            textAlign: "center",
            flex: 1,
            fontSize: 22,
            ...Platform.select({
              ios: {
                fontFamily: "Avenir",
              },
              android: {
                fontFamily: "Roboto",
              },
            }),
          }}
        >
          Login
        </Text>;
      },
    },
  },
  Logon: {
    screen: Logon,
    navigationOptions: {
      headerTransparent: true,
      headerLeft: () => null,
      headerTitle: () => (
        <Text
          style={{
            ...Platform.select({
              ios: {
                fontFamily: "Avenir",
              },
              android: {
                fontFamily: "Roboto",
              },
            }),
          }}
        ></Text>
      ),
    },
  },
  Home: {
    screen: Drawer,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
        gestureEnabled: false,
      };
    },
  },
  Picture: {
    screen: Picture,
    headerLeft: () => null,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            paddingLeft: "20%",
            flex: 1,
            fontFamily: "Roboto",
            fontSize: 22,
          }}
        >
          Take A Picture
        </Text>
      ),
    },
  },
  Gallery: {
    screen: Gallery,
    headerLeft: () => null,
    navigationOptions: {
      headerTitle: (
        <Text
          style={{
            paddingLeft: "20%",
            flex: 1,
            fontFamily: "Roboto",
            fontSize: 22,
          }}
        >
          Gallery
        </Text>
      ),
    },
  },
};

export const HomeStack = createStackNavigator(screens);

export const Navigator = createAppContainer(HomeStack);
