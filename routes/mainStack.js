//imports from our third-parties
import { getAuth } from "firebase/auth";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Text, StyleSheet } from "react-native";

///imports from our code
import Home from "../app/screens/home";
import UserCoralEntries from "../app/screens/userCoralEntries";
import MyTitles from "../app/components/MyTitles";
import { app } from '../firebase';

const auth = getAuth(app);
const user = auth.currentUser;

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => null,
        headerTitle: () => (     
          <Text style={styles.homeText}>
          {user.displayName}, Welcome to our App!
          </Text>
        ),
        gestureEnabled: false,
      };
    },
  },
  Coral: {
    screen: UserCoralEntries,
    headerLeft: () => null,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Coral Specification",
        gestureEnabled: false,
      };
    },
  },
};

const styles = StyleSheet.create({
  homeText: {
    fontSize: 18,
    fontWeight: "bold",
    ...Platform.select({
        ios:{
            fontSize: 18,
            fontFamily: "Avenir",
            textAlign: "center",
        },
        android:{
            fontSize: 20,
            fontFamily: "Roboto",
            textAlign: "center",
        },
    }),
},
});

export const MainStack = createStackNavigator(screens);
