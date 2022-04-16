//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet,
  Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//IMPORT FROM OUR CODE
import { app } from '../../firebase';
import ApptTextInput from "../components/ApptTextInput";
import defaultStyles from "../config/styles";
import GreenButton from "../components/GreenButton";

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

  return (
    <SafeAreaView>
      <ScrollView
        style={{ backgroundColor: "transparent", paddingTop: "5%" }}
      >
        <View style={styles.logoImageContiner}>
          <Image
            style={styles.logoImage}
            source={imageLogo}
          />
        </View>

        <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
          <ApptTextInput
            autoCapitalize = "none"
            autoCorrect = {false}
            icon = "envelope-o"
            onChangeText = {text => setEmail(text)}
            placeholder = "Email"
            value = {email}
          />
          <ApptTextInput
            autoCapitalize = "none"
            autoCorrect = {false}
            icon = "lock"
            onChangeText = {text => setPassword(text)}
            placeholder = "Password"
            secureTextEntry //already true so you dont need to put true
            value = {password}
          />
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={signIn}>
          <GreenButton title="Login" />
        </TouchableOpacity>

        <Text style={defaultStyles.haveAcctText}>Don't Have an Account?</Text>

        <TouchableOpacity onPress={pressedHandler}>
          <GreenButton title="Create Account" />
        </TouchableOpacity>
        </View>
        </ScrollView>
        
        <ImageBackground
          style={styles.imageBackground}
          source={backGroundImage}
          resizeMode="cover"
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
}

const backGroundImage = require("../assets/images/coralReefBackground.jpg");
const imageLogo = require("../assets/images/logo.jpg");

const styles = StyleSheet.create({
  buttonContainer:{
    alignSelf: "center",
  },
  imageBackground: {
    position: "absolute",
    marginTop: 30,
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
    backgroundColor: defaultStyles.colors.backGroundOne,
    margin: 30,
    borderRadius: 25,
  },
});
