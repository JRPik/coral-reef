//import from our third-party libraries
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, RobotoCondensed_400Regular } from "@expo-google-fonts/dev";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

//import from our code
import colors from "../config/colors";

export default function Logon() {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView style={{ paddingTop: "40%" }}>
            <Text style={styles.text}>
              Enter a Username and Password {"\n"} to make an account
            </Text>
            <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
              <TextInput style={styles.textbox} placeholder="Email" />
              <TextInput
                secureTextEntry={true}
                style={styles.textbox}
                placeholder="Password"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.textbox}
                placeholder="Confirm Password"
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => console.log("Button Pressed")}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "RobotoCondensed_400Regular",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    width: "45%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "RobotoCondensed_400Regular",
  },
  textbox: {
    backgroundColor: colors.backGroundOne,
    height: 40,
    width: "75%",
    margin: 10,
    borderRadius: 5,
    fontFamily: "RobotoCondensed_400Regular",
    shadowColor: colors.shadowOne,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 0.3 },
  },
});
