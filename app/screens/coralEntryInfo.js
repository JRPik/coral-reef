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
import ListItem from '../components/lists/ListItem';
import PickerItem from '../components/PickerItem';
import SubmitButton from '../components/SubmitButton';
import { app } from '../../firebase';
import AppForm from '../components/AppForm';
import { Picker } from '@react-native-picker/picker';
import { color } from 'react-native-reanimated';


//Main coral component. This will show the coral that was uploaded most recent.
const Coral = (props) => (
  
  <View style={styles.coralContainerRow}>
    <Image source={props.image} style={styles.coralImage}  />
    
    <View style={[styles.coralContainerCol]}>
    <Text style={styles.coralText}>
      {props.location}: {props.name}
    </Text>
      <View style={styles.userContainer}>
        <ListItem 
          image={require("../assets/images/person.jpg")}
          title="Anthony Rowe"
          subTitle="Front-End Developer"
        />
       </View>
    </View> 
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
  categories: [
    { label: "Yes", value: 1 },
    { label: "No", value: 2 },
  ]
};

// const validationSchema = Yup.object().shape({
//    email: Yup.string().required().email().label("Email"),
//    password: Yup.string().required().min(4).label("Password")
//  });

function CoralEntryInfo({ navigation }) {
  const pressMain = () => {
    console.log(navigation.state.params.coralObj);
    navigation.navigate("Coral");
  }; 
  


  return (
    
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.closeIcon}></View> */}
      {/* <View style={styles.deleteIcon}></View> */}
      <ScrollView>
        <View style={styles.imageCont}>
          <TouchableOpacity onPress={pressMain}>
            <View style={styles.recentCoralInfo}>
              <Coral
                name={data.myCoralEntries[0].name}
                image={data.myCoralEntries[0].image}
                location={data.myCoralEntries[0].location}
              />
            </View>
          </TouchableOpacity>
        </View>
          {/* I need a drop down menu with yes or no. if they click yes then
          it will open up the % slider */}

         <View style={styles.formContainer}>
           <View style={styles.bleachContainer}>
           <View style={styles.bleachLabelRow}>
             <View style={styles.bleachLabelCol}>
              <Text>Bleach</Text>
              <Text>Bleach Answer</Text>
            </View>
            <View style={styles.bleachLabelCol}>
              <Text>Bleach %</Text>
              <Text>Bleach % Answer</Text>
            </View>
           </View>
           </View>

           <View style={styles.measureContainer}>
           <View style={styles.measureLabelRow}>
             <View style={styles.measureLabelCol}>
              <Text>Old Height</Text>
              <Text>Old Height Answer</Text>
            </View>
            <View style={styles.measureLabelCol}>
              <Text>Old Width</Text>
              <Text>Old Width Answer</Text>
            </View>
            <View style={styles.measureLabelCol}>
              <Text>New Height</Text>
              <Text>New Height Answer</Text>
            </View>
            <View style={styles.measureLabelCol}>
              <Text>New Width</Text>
              <Text>New Width Answer</Text>
            </View>
           </View>
           </View>

           <View style={styles.depthContainer}>
           <View style={styles.depthLabelRow}>
             <View style={styles.depthLabelCol}>
              <Text>Old Depth</Text>
              <Text>Old Depth Answer</Text>
            </View>
            <View style={styles.depthLabelCol}>
              <Text>New Dept</Text>
              <Text>New Depth Answer</Text>
            </View>
           </View>
           </View>

           <View style={styles.locationContainer}>
           <View style={styles.locationLabelRow}>
             <View style={styles.locationLabelCol}>
              <Text>Old Latitude</Text>
              <Text>Old Latitude Answer</Text>
            </View>
            <View style={styles.locationLabelCol}>
              <Text>Old Longitude</Text>
              <Text>Old Longitude Answer</Text>
            </View>
            <View style={styles.locationLabelCol}>
              <Text>New Latitude</Text>
              <Text>New Latitude Answer</Text>
            </View>
            <View style={styles.locationLabelCol}>
              <Text>New Longitude</Text>
              <Text>New Longitude Answer</Text>
            </View>
           </View>
           </View>

           <View style={styles.updatedContainer}>
            <View style={styles.updatedLabelRow}>
              <View style={styles.updatedLabelCol}>
                <Text>Last Update</Text>
                <Text>Update Answer</Text>
              </View>
            </View>
           </View>
           <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <GreenButton title="Submit" />
            </TouchableOpacity>
            </View>
         </View>   
  
        </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bleachContainer:{
    
  },
  bleachLabelCol: {
    flexDirection: "column",
    marginLeft: 20,
    width: 150,
    backgroundColor: "lightblue", //delete this
  },
  bleachLabelRow: {
    flexDirection: "row",
  },
  buttonContainer: {
    alignSelf: "center",
    left: 300,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
  coralContainerCol:{
    flexDirection: "column",
    marginLeft: 30
  },
  coralContainerRow: {
    height: "100%",
    justifyContent: "flex-start",
    borderColor: defaultStyles.colors.primary,
    flexDirection: "row",
    backgroundColor: defaultStyles.colors.backGroundThree,
    borderRadius: 20,
    padding: 10,
    //marginBottom: -75,
    left: 40,
    ...Platform.select({
      ios: {
        paddingTop: 5,
        width: "90%",
      },
      android: {
        width: "92%",
        elevation: 5,
      },
    }),
  },//END OF CORALCONTAINER
  coralImage: {
    resizeMode: "cover",
    overflow: "hidden",
    width: "50%",
    left: "5%",
    ...Platform.select({
      ios: {
        height: 250,
        marginTop: 10,
      },
      android: {
        marginTop: 23,
        height: 150,
      },
    }),
  },//END OF CORALIMAGE
  coralInfo: {
    flex: 1,
    alignItems: "center",
  },//END OF CORALINFO
  coralText: {
    //position: "absolute",
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontSize: 20,
        paddingTop: 10,
        left: "5%",
        fontFamily: "Avenir",
      },
      android: {
        marginTop: 5,
        left: "28%",
        fontSize: 21,
      },
    }),
  },
  depthContainer:{

  },
  depthLabelCol:{
    flexDirection: "column",
    marginLeft: 20,
    width: 150,
    backgroundColor: "lightblue", //delete this
  },
  depthLabelRow: {
    flexDirection: "row",
  },
  formContainer:{
    position: "absolute",
    marginTop: 350,
    marginLeft: 30,
  },
  imageCont:{
    marginTop: 20,
  },
  updatedContainer:{
    
  },
  updatedLabelCol:{
    flexDirection: "column",
    marginLeft: 20,
    width: 150,
    backgroundColor: "lightblue", //delete this
  },
  updatedLabelRow:{
    flexDirection: "row",
  },
  locationContainer:{
    marginVertical: 30
  },
  locationLabelCol:{
    flexDirection: "column",
    marginLeft: 20,
    width: 150,
    backgroundColor: "lightblue", //delete this
  },
  locationLabelRow: {
    flexDirection: "row",
  },
  measureContainer:{
    marginVertical: 30
  },
  measureLabelCol: {
    flexDirection: "column",
    marginLeft: 20,
    width: 150,
    backgroundColor: "lightblue", //delete this
  },
  measureLabelRow: {
    flexDirection: "row",
  },
  userContainer:{
    marginVertical: 10,
  },
});

export default CoralEntryInfo;