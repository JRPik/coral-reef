//import from our third-party libraries
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView,
KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { useFonts, RobotoCondensed_300Light, RobotoCondensed_300Light_Italic, 
RobotoCondensed_400Regular, RobotoCondensed_400Regular_Italic, RobotoCondensed_700Bold,
RobotoCondensed_700Bold_Italic } from "@expo-google-fonts/dev";

//import from our code
import colors from "../config/colors";

export default function Login({ navigation }) {
  const pressedHandler = () => {
    navigation.navigate("Logon");
  };
  const pressedHandler2 = () => {
    navigation.navigate("Home");
  };
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/logo.jpg")}
            />
          </KeyboardAvoidingView>

          <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
            <TextInput style={styles.textbox} placeholder="User ID" />
            <TextInput
              secureTextEntry={true}
              style={styles.textbox}
              placeholder="Password"
            />
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={pressedHandler2}
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
          <Text style={styles.text2}>Don't Have an Account?</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={pressedHandler}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "RobotoCondensed_400Regular",
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
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
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backGroundOne,
    margin: 16,
    borderRadius: 8,
    shadowColor: colors.shadowTwo,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 0.3 },
  },
  text: {
    marginTop: 70,
    fontSize: 20,
    textAlign: "center",
  },
  text2: {
    marginBottom: 15,
    marginTop: 15,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "RobotoCondensed_400Regular",
  },
  textbox: {
    backgroundColor: colors.backGroundOne,
    height: 40,
    width: "75%",
    margin: 10,
    borderRadius: 5,
    shadowColor: colors.shadowOne,
    shadowOpacity: 0.3,
    fontFamily: "RobotoCondensed_400Regular",
    shadowOffset: { height: 1, width: 0.3 },
  },
});
