//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
import { app } from '../../firebase';

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
          </View>
            <KeyboardAvoidingView>
              <MyHeading>
                Enter a Username and Password {"\n"} to make an account
              </MyHeading>

              <KeyboardAvoidingView>
              <TextInput 
                style={styles.inputTextbox}
                value = {firstName}
                placeholder="First Name"
                onChangeText={text => setFirstName(text)}
              />
              <TextInput 
                style={styles.inputTextbox}
                value = {lastName}
                placeholder="Last Name"
                onChangeText={text => setLastName(text)}
              />
              <TextInput 
                style={styles.inputTextbox}
                value = {email}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputTextbox}
                placeholder="Password"
                value = {password}
                onChangeText={text => setPassword(text)}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputTextbox}
                placeholder="Confirm Password"
              />
            </KeyboardAvoidingView>
              <TouchableOpacity onPress={signUp}>
                <GreenButton title="Login" />
              </TouchableOpacity>
            </KeyboardAvoidingView>
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
    left: "5%",
    height: 40,
    width: "85%",
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
    marginTop: "25%",
  },
});
