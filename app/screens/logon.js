//import from our third-party libraries
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,
KeyboardAvoidingView } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//import from our code
import colors from "../config/colors";
import { last } from "lodash";
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
          <KeyboardAvoidingView style={{ paddingTop: "40%" }}>
            <Text style={styles.text}>
              Enter a Username and Password {"\n"} to make an account
            </Text>
            <KeyboardAvoidingView style={{ paddingLeft: "15%" }}>
              <TextInput 
                style={styles.textbox}
                value = {firstName}
                placeholder="First Name"
                onChangeText={text => setFirstName(text)}
              />
              <TextInput 
                style={styles.textbox}
                value = {lastName}
                placeholder="Last Name"
                onChangeText={text => setLastName(text)}
              />
              <TextInput 
                style={styles.textbox}
                value = {email}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.textbox}
                placeholder="Password"
                value = {password}
                onChangeText={text => setPassword(text)}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.textbox}
                placeholder="Confirm Password"
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={signUp}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Roboto_400Regular",
                }}
              >
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
  },
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Roboto_400Regular",
  },
  textbox: {
    backgroundColor: colors.backGroundOne,
    height: 40,
    width: "75%",
    margin: 10,
    borderRadius: 5,
    fontFamily: "Roboto_400Regular",
    shadowColor: colors.shadowOne,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 0.3 },
  },
});
