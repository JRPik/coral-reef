//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  ImageBackground,
  StyleSheet,
  Text,
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
import Icon from "react-native-vector-icons/FontAwesome";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import GreenButton from "../components/GreenButton";
//import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";
import { app } from '../../firebase';
import ApptTextInput from "../components/ApptTextInput";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigation.navigate("Home");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const pressedHandler = () => {
    navigation.navigate("Logon");
  };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView>
        <ScrollView
          style={{ backgroundColor: "transparent", paddingTop: "20%" }}
        >
          <View style={styles.logoImageContiner}>
            <Image
              style={styles.logoImage}
              source={require("../assets/images/logo.jpg")}
            />
          </View>

          <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
            <ApptTextInput
              value = {email}
              icon = "envelope-o"
              placeholder= "Email"
              onChangeText={text => setEmail(text)}
            />
            <ApptTextInput
              value = {password}
              icon = "lock"
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              
            />
            </KeyboardAvoidingView>

          <TouchableOpacity onPress={signIn}>
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
