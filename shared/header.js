import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts, CantoraOne_400Regular } from "@expo-google-fonts/dev";

export default function Header({ navigation }) {
  const openMenu = () => {
    navigation.toggleDrawer();
  };
  let [fontsLoaded] = useFonts({
    CantoraOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Coral Restauration</Text>
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
    fontFamily: "CantoraOne_400Regular",
    fontSize: 20,
  },
  icon: {
    position: "absolute",
    right: 20,
  },
});
