//IMPORTS FROM OUR THIRD-PARTIES
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
  Platform,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import GreenButton from "../components/GreenButton";
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
      <SafeAreaView>
        <ScrollView style={{ backgroundColor: "transparent" }}>
          <View style={styles.logoImageContiner}>
            <Image
              style={styles.logoImage}
              source={require("../assets/images/logo.jpg")}
            />
          </View>

          <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
            <TextInput placeholder="User ID" style={styles.inputTextbox} />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.inputTextbox}
            />
          </KeyboardAvoidingView>

          <TouchableOpacity onPress={pressedHandler2}>
            <GreenButton title="Login" />
          </TouchableOpacity>

          <Text style={styles.haveAcctText}>Don't Have an Account?</Text>

          <TouchableOpacity onPress={pressedHandler}>
            <GreenButton title="Create Account" />
          </TouchableOpacity>
        </ScrollView>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../assets/images/coralReefBackground.jpg")}
          resizeMode="cover"
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  haveAcctText: {
    marginTop: 5,
    fontSize: 15,
    textAlign: "center",
    color: colors.backGroundOne,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        marginBottom: -15,
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  inputTextbox: {
    backgroundColor: colors.backGroundOne,
    height: 40,
    width: "80%",
    margin: 5,
    borderRadius: 5,
    paddingLeft: 5,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        shadowColor: colors.shadowOne,
        shadowOpacity: 0.3,
        shadowOffset: { height: 1, width: 0.3 },
      },
      android: {
        fontFamily: "Roboto",
        elevation: 5,
      },
    }),
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
    margin: 30,
    borderRadius: 25,
  },
});
