import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";

function Header({ navigation }) {
  const openMenu = () => {
    navigation.toggleDrawer();
  };
  {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Coral Restoration Foundation</Text>
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
  },
  headerText: {
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: "Avenir",
        fontWeight: "bold",
      },
      android: {
        fontSize: 22,
        fontFamily: "Roboto",
        fontWeight: "bold",
      },
    }),
  },
  icon: {
    position: "absolute",
    ...Platform.select({
      ios: {
        right: "-10%",
      },
      android: {
        right: 5,
      },
    }),
  },
});

export default Header;
