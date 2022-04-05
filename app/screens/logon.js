//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
//import AppText from "../components/AppText";
import MyHeading from "../components/MyHeading";
import MyTextInput from "../components/MyTextInput";
import GreenButton from "../components/GreenButton";

export default function Logon() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView style={{ paddingTop: "40%" }}>
            <MyHeading>
              Enter a Username and Password {"\n"} to make an account
            </MyHeading>
            
            <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
              <MyTextInput placeholder="Email" />
              <MyTextInput secureTextEntry={true} placeholder="Password"/>
              <MyTextInput secureTextEntry={true} placeholder="Confirm Password"/>
            </KeyboardAvoidingView>
            <TouchableOpacity
              onPress={() => console.log("Button Pressed")}
            >
              <GreenButton title="Login"/>
            </TouchableOpacity>
          
          </KeyboardAvoidingView>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
});