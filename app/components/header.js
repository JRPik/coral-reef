import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts, RobotoCondensed_400Regular } from "@expo-google-fonts/dev";

function Header({ navigation }) {
  const openMenu = () => {
    navigation.toggleDrawer();
  };
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Coral Restoration</Text>
        </View>
        <MaterialIcons
          name="menu"
          size={28}
          onPress={openMenu}
          style={styles.icon}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios:{
          fontFamily: "Avenir",
      },
      android:{
          fontFamily: "Roboto",
      },
    }),
  },
  headerText: {
    fontSize: 20,
    ...Platform.select({
      ios:{
          fontSize: 20,
          fontFamily: "Avenir",
          fontWeight: "bold",
      },
      android:{
        fontSize: 24,
          fontFamily: "Roboto",
          fontWeight: "bold",
      },
    }),
  },
  icon: {
    position: "absolute",
    ...Platform.select({
      ios:{
          right: "-25%",
      },
      android:{
          right: 5,
      },
    }),
  },
});

export default Header;
