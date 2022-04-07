//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
  Dimensions,
  View,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
//import AppText from "../components/AppText";
import MyHeading from "../components/MyHeading";
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
          <View style={styles.logoImageContiner}>
            <Image
              style={styles.logoImage}
              source={require("../assets/images/logo.jpg")}
            />

            <KeyboardAvoidingView>
              <MyHeading>
                Enter a Username and Password {"\n"} to make an account
              </MyHeading>

              <KeyboardAvoidingView>
                <TextInput placeholder="Email" style={styles.inputTextbox} />
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.inputTextbox}
                />
                <TextInput
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  style={styles.inputTextbox}
                />
              </KeyboardAvoidingView>
              <TouchableOpacity onPress={() => console.log("Button Pressed")}>
                <GreenButton title="Login" />
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
        <ImageBackground
          style={styles.imageBackground}
          source={require("../assets/images/coralReefBackground.jpg")}
          resizeMode="cover"
        />
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
  inputTextbox: {
    backgroundColor: colors.backGroundOne,
    height: 40,
    width: "100%",
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
  logoImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  logoImageContiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backGroundOne,
    borderRadius: 20,
    margin: "5%",
    paddingBottom: "10%",
  },
});
