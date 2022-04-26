//IMPORTS FROM OUR THIRD-PARTIES
import * as Yup from 'yup';
import { Dimensions, FlatList, Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet,
  Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';


//IMPORT FROM OUR CODE
import AppFormField from '../components/AppFormField';
import AppText from "../components/AppText";
import ApptTextInput from "../components/ApptTextInput";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import ErrorMessage from "../components/ErrorMessage";
import GreenButton from "../components/GreenButton";
import MyHeading from "../components/MyHeading";
import SubmitButton from '../components/SubmitButton';
import { app } from '../../firebase';
import AppForm from '../components/AppForm';


//Main coral component. This will show the coral that was uploaded most recent.
const RecentCoral = (props) => (
  <View style={[styles.recentCoralContainer]}>
    <Image source={props.image} style={styles.recentCoralImage}  />
    
    <Text style={defaultStyles.recentCoralText}>
      {props.location}: {props.name}
    </Text>
    
  </View>
);


const data = {
  myCoralEntries: [
    {
      id: 1,
      name: "Elkhorn",
      image: require("../assets/images/Carysfort_Reef/Elkhorn_Coral_CReef.jpg"),
      location: "Carysfort Reef",
    },
  ],
};

const validationSchema = Yup.object().shape({
   email: Yup.string().required().email().label("Email"),
   password: Yup.string().required().min(4).label("Password")
 });

function CoralEntryInfo({ navigation }) {
  const pressMain = () => {
    navigation.navigate("Coral");
  }; 



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <ScrollView style={styles.imageCont}>
          <TouchableOpacity onPress={pressMain}>
            <View style={styles.recentCoralInfo}>
              <RecentCoral
                name={data.myCoralEntries[0].name}
                image={data.myCoralEntries[0].image}
                location={data.myCoralEntries[0].location}
              />
            </View>
          </TouchableOpacity>
          
            <FlatList 
            
            />

            <AppForm
              initialValues={{email: "", password:""}}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
            <View style={styles.bleachContainer}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                //keyboardType=
                //name="email"
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              </View> {/* END OF BLEACHCONTAINER */}
      
              {/* for the submit button */}
              <SubmitButton title="Submit" />
            
          </AppForm>

        </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


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
const styles = StyleSheet.create({
  closeIcon:{
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  imageCont:{
    marginTop: 80,
  },
  recentCoralContainer: {
    height: "100%",
    justifyContent: "flex-start",
    borderColor: defaultStyles.colors.primary,
    flexDirection: "column",
    backgroundColor: defaultStyles.colors.backGroundThree,
    borderRadius: 20,
    padding: 10,
    ...Platform.select({
      ios: {
        paddingTop: 10,
        width: "80%",
      },
      android: {
        width: "92%",
        elevation: 5,
      },
    }),
  },//END OF RECENTCORALCONTAINER
  recentCoralImage: {
    resizeMode: "cover",
    overflow: "hidden",
    width: "75%",
    left: "12%",
    ...Platform.select({
      ios: {
        height: 250,
        marginTop: 24,
      },
      android: {
        marginTop: 23,
        height: 150,
      },
    }),
  },//END OF RECENTCORALIMAGE
  recentCoralInfo: {
    flex: 1,
    alignItems: "center",
  },//END OF RECENTCORALINFO
});

export default CoralEntryInfo;