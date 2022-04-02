//import from our third-party libraries
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//import from our code
import colors from "../config/colors";
import { color } from "react-native-reanimated";

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
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <KeyboardAvoidingView style={styles.logoImageCont}>
              <Image
              style={styles.logoImage}
              source={require("../assets/images/logo.jpg")}/>
            </KeyboardAvoidingView>
            
            <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
              <TextInput
              style={styles.textbox}
              placeholder="User ID"
              />
              <TextInput
              secureTextEntry={true}
              style={styles.textbox}
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
  container: {
    //flex: 1,
    //backgroundColor: colors.backGroundOne,
    //alignContent: "center",
  },
  imageBackground: {
    //resizeMode: "contain",
    flex: 1,
  },
  logoImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  logoImageCont: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backGroundOne,
    margin: 10,
    borderRadius: 50,
    //shadowColor: colors.shadowTwo,
    //shadowOpacity: 0.3,
    //shadowRadius: 8,
    //shadowOffset: { height: 1, width: 0.3 },
  },
  haveAcctText: {
    marginBottom: 15,
    marginTop: 15,
    fontSize: 15,
    textAlign: "center",
    color: colors.backGroundOne,
    fontWeight: "bold",
  },
  textbox: {
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
});
