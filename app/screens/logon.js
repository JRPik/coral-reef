//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//IMPORT FROM OUR CODE
import MyHeading from "../components/MyHeading";
import GreenButton from "../components/GreenButton";
import { app } from '../../firebase';
import defaultStyles from "../config/styles";
import ApptTextInput from "../components/ApptTextInput";
import Login from "./login";



export default function Logon({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: firstName + " " + lastName
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          console.log(error.message);
        });
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code)
        console.log(error.message);
        // ..
      });
  }

  const pressedHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoImageContiner}>
          <Image
            style={styles.logoImage}
            source={imageLogo}
          />
        </View>
        <KeyboardAvoidingView>
          <MyHeading>
              Enter a Username and Password {"\n"} to make an account
          </MyHeading>

          <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
            <View style={styles.nameContainer}>
            <ApptTextInput 
              value = {firstName}
              icon = "user"
              placeholder="First Name"
              onChangeText={text => setFirstName(text)}
            />
            <ApptTextInput
              value = {lastName}
              placeholder="Last Name"
              onChangeText={text => setLastName(text)}
            />
            </View>
            <ApptTextInput
              autoCapitalize = "none"
              autoCorrect = {false}
              icon = "envelope-o"
              onChangeText={text => setEmail(text)}
              placeholder="Email"
              value = {email}
            />
            <ApptTextInput
              autoCapitalize = "none"
              autoCorrect = {false}
              icon = "lock"
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              secureTextEntry
              value = {password}
            />
            <ApptTextInput
              autoCapitalize = "none"
              autoCorrect = {false}
              secureTextEntry
              icon = "lock"
              placeholder = "Confirm Password"
            />
            </KeyboardAvoidingView>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={pressedHandler}>
                  <GreenButton title="Cancel" />
              </TouchableOpacity>
              <TouchableOpacity onPress={signUp}>
                <GreenButton title="Login" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <StatusBar style="auto" />
      <ImageBackground
        style={styles.imageBackground}
        source={backGroundImage}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
}

const backGroundImage = require("../assets/images/coralReefBackground.jpg");
const imageLogo = require("../assets/images/logo.jpg");


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.backGroundOne,
    alignContent: "center",
  },
  buttonContainer:{
    justifyContent: "space-evenly",
    flexDirection:"row",
  },
  inputTextbox: {
    backgroundColor: defaultStyles.colors.backGroundOne,
    height: 40,
    width: "80%",
    margin: 5,
    borderRadius: 5,
    paddingLeft: 5,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        shadowColor: defaultStyles.colors.shadowOne,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.backGroundOne,
    borderRadius: 20,
    margin: "5%",
    ...Platform.select({
      ios: {
        marginTop: "9%",
      },
      android: {
        marginTop: "12%",
      },
    }),
  },
  nameContainer:{
    flexDirection:"row",
    ...Platform.select({
      ios: {
        width: "49%",
      },
      android: {
        width: "48.5%",
      },
    }),
  },
});
