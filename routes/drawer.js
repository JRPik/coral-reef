//imports from our third-parties
import { createDrawerNavigator } from "react-navigation-drawer";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AppLoading from "expo-app-loading";
import { useFonts, RobotoCondensed_400Regular } from "@expo-google-fonts/dev";

//imports from our code
import NewEntry from "../app/screens/newEntry";
import EntrySearch from "../app/screens/entrySearch";
import CoralEntries from "../app/screens/coralEntries";
import GroupCoralEntries from "../app/screens/GroupCoralEntries";
import { MainStack } from "./mainStack";
import { NewEntryStack } from "./newEntryStack";
import { EntrySearchStack } from "./entrySearchStack";
import { UserEntryStack } from "./userEntriesStack";
import { GroupEntriesStack } from "./GroupEntriesStack";

const screens = {
  Home: {
    screen: MainStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Thing",
      };
    },
  }, //END OF HOME
  NewEntry: {
    screen: NewEntryStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "New Entry",
      };
    },
  }, //END OF NEWENTRY
  EntrySearch: {
    screen: EntrySearchStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Entry Search",
      };
    },
  }, //END OF ENTRYSEARCH
  CoralEntries: {
    screen: UserEntryStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "My Entries",
      };
    },
  }, //END OF CORALENTRIES
  GroupEntries: {
    screen: GroupEntriesStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Group Coral Entries",
      };
    },
  }, //END OF GROUPENTRIES
}; //END OF SCREENS

const Drawer = createDrawerNavigator(screens, {
  drawerPosition: "right",
  contentComponent: DrawerMenu,
}); //END OF DRAWER

const menuData = [
  { icon: "home", name: "Home", screenName: "Home", key: 1 },
  { icon: "book", name: " New Entry", screenName: "NewEntry", key: 2 },
  { icon: "search", name: "Entry Search", screenName: "EntrySearch", key: 3 },
  {
    icon: "folder-open",
    name: "User's Coral Entries",
    screenName: "CoralEntries",
    key: 4,
  },
  {
    icon: "folder-open",
    name: "Group Coral Entries",
    screenName: "GroupEntries",
    key: 5,
  },
  { icon: "sign-out", name: "Log Out", key: 6 },
]; //END OF MENUDATA ARRAY

function DrawerMenu({ navigation }) {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  }); //END OF USEFONTS

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <DrawerItem
              navigation={navigation}
              icon={item.icon}
              screenName={item.screenName}
              name={item.name}
              key={item.key}
            />
          )} //END OF RENDERITEMS
        />
      </View>
    ); //END OF RETURN
  } //END OF ELSE STATEMENT
} //END OF DRAWERMENU

function DrawerItem({ navigation, name, screenName, icon }) {
  const navHandler = (screenName, name) => {
    if (name === "Log Out") {
      navigation.navigate("Login");
    } else {
      navigation.navigate(screenName);
    } //END OF ELSE STATEMENT
  }; //END OF NAVHANDLER
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => navHandler(screenName, name)}
    >
      <Icon style={styles.icon} name={icon} size={25} color="#333" />
      <Text style={styles.menuItemText}>{name}</Text>
    </TouchableOpacity>
  ); //END OF RETURN
} //END OF DRAWERITEMS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.43)",
    paddingTop: 70,
  }, //END OF CONTAINER
  icon: {
    paddingTop: 10,
    paddingLeft: 10,
  }, //END OF ICON
  menuItem: {
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  }, //END OF MENUITEM
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
    margin: 15,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }), //END OF PLATFORM.SELECT
  }, //END OF MENUITEMTEXT
}); //END OF STYLESHEET.CREATE

export default Drawer;
