//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView,
KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
//import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";

export default function Login({ navigation }) {
  const pressedHandler = () => {
    navigation.navigate("Logon");
  };
  
  const pressedHandler2 = () => {
    navigation.navigate("Home");
  };
  
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/images/coralReefBackground.jpg")}
      >
        <SafeAreaView>
          <ScrollView>
            <KeyboardAvoidingView style={styles.logoImageContiner}>
              <Image
                style={styles.logoImage}
                source={require("../assets/images/logo.jpg")}/>
            </KeyboardAvoidingView>
            
            <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
              <TextInput
                style={styles.inputTextbox}
                placeholder="User ID"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputTextbox}
                placeholder="Password"
              />
            </KeyboardAvoidingView>
          
            <TouchableOpacity style={styles.buttonContainer} onPress={pressedHandler2}>
              <Text style={styles.buttonText}>
                Login
              </Text>
            </TouchableOpacity>
          
            <Text style={styles.haveAcctText}>Don't Have an Account?</Text>
          
            <TouchableOpacity style={styles.buttonContainer} onPress={pressedHandler}>
              <Text style={styles.buttonText}>
                Create Account
              </Text>              
            </TouchableOpacity>

          </ScrollView>

          <StatusBar style="auto" />

        </SafeAreaView>
      </ImageBackground>
    );
  } 
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    width: "30%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    textAlign: "center",
    color: colors.backGroundOne,
    fontWeight: "bold",
  },
  haveAcctText: {
    marginBottom: 15,
    marginTop: 15,
    fontSize: 15,
    textAlign: "center",
    color: colors.backGroundOne,
    fontWeight: "bold",
  },
  imageBackground: {
    //resizeMode: "contain",
    flex: 1,
  },
  inputTextbox: {
    backgroundColor: colors.backGroundOne,
    height: 40,
    width: "80%",
    margin: 10,
    borderRadius: 5,
    shadowColor: colors.shadowOne,
    shadowOpacity: 0.3,
    fontFamily: "Roboto_400Regular",
    shadowOffset: { height: 1, width: 0.3 },
    paddingLeft: 5,
  },
  logoImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  logoImageContiner: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backGroundOne,
    margin: 60,
    borderRadius: 50,
  },
});
