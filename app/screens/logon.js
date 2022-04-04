//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView
  } from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
//import AppText from "../components/AppText";
import MyHeading from "../components/MyHeading";

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
              <TextInput style={styles.inputText} 
                placeholder="Email" 
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputText}
                placeholder="Password"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputText}
                placeholder="Confirm Password"
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => console.log("Button Pressed")}
            >
              <Text style={styles.buttonText}>
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
    textAlign: "center",
    color: colors.backGroundOne,
  },
  buttonText:{
    textAlign: "center",
    color: "white",
    fontFamily: "Roboto_400Regular",
  },
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
  inputText: {
    backgroundColor: colors.backGroundOne,
    height: 40,
    width: "75%",
    margin: 10,
    borderRadius: 5,
    fontFamily: "Roboto_400Regular",
    paddingLeft: 10,
    shadowColor: colors.shadowOne,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 0.3 },
  },  
});
