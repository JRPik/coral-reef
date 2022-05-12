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
        
          <TouchableOpacity onPress={pressMain}>
            <View style={styles.imgCoralInfo}>
              <Coral
                name={data.myCoralEntries[0].name}
                image={data.myCoralEntries[0].image}
                location={data.myCoralEntries[0].location}
              />
            </View>
          </TouchableOpacity>
          {/* I need a drop down menu with yes or no. if they click yes then
          it will open up the % slider */}

         <View style={styles.formContainer}>
           <View style={styles.bleachContainer}>
           <View style={styles.labelRow}>
             <View style={styles.labelCol}>
              <Text style={styles.labelText}>Bleach:</Text>
              <Text style={styles.labelText}>Bleach Ans</Text>
            </View>
            <View style={styles.labelCol}>
              <Text style={styles.labelText}>Bleach %:</Text>
              <Text style={styles.labelText}>Bleach % Ans</Text>
            </View>
           </View>
           </View>

           <View style={styles.measureContainer}>
           <View style={styles.labelRow}>
             <View style={styles.labelCol}>
              <Text style={styles.labelText}>Old Height:</Text>
              <Text style={styles.labelText}>Old Height Ans</Text>
            </View>
            <View style={styles.labelCol}>
              <Text style={styles.labelText}>Old Width:</Text>
              <Text style={styles.labelText}>Old Width Ans</Text>
            </View>
            <View style={styles.labelCol}>
              <Text style={styles.labelText}>New Height:</Text>
              <Text style={styles.labelText}>New Height Ans</Text>
            </View>
            <View style={styles.labelCol}>
              <Text style={styles.labelText}>New Width:</Text>
              <Text style={styles.labelText}>New Width Ans</Text>
            </View>
           </View>
           </View>

           <View style={styles.depthContainer}>
           <View style={styles.labelRow}>
             <View style={styles.labelCol}>
              <Text style={styles.labelText}>Old Depth:</Text>
              <Text style={styles.labelText}>Old Depth Ans</Text>
            </View>
            <View style={styles.labelCol}>
              <Text style={styles.labelText}>New Dept:</Text>
              <Text style={styles.labelText}>New Depth Ans</Text>
            </View>
           </View>
           </View>

           <View style={styles.locationContainer}>
           <View style={styles.labelRow}>
             <View style={styles.labelCol}>
              <Text style={styles.labelText}>Old Lat:</Text>
              <Text style={styles.labelText} >Old Lat Ans</Text>
            </View>
            <View style={styles.labelCol}>
              <Text style={styles.labelText}>Old Long:</Text>
              <Text style={styles.labelText}>Old Long Ans</Text>
            </View>
            <View style={styles.labelCol}>
              <Text style={styles.labelText}>New Lat:</Text>
              <Text style={styles.labelText}>New Lat Ans</Text>
            </View>
            <View style={styles.labelCol}>
              <Text style={styles.labelText}>New Long:</Text>
              <Text style={styles.labelText}>New Long Ans</Text>
            </View>
           </View>
           </View>

           <View style={styles.updatedContainer}>
            <View style={styles.labelRow}>
              <View style={styles.labelCol}>
                <Text style={styles.labelText}>Last Update:</Text>
                <Text style={styles.labelText}>Update Ans</Text>
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
  labelCol: {
    flexDirection: "column",
    marginLeft: 20,
    width: 110,
    backgroundColor: "lightblue", //delete this
  },
  labelRow: {
    flexDirection: "row",
  },
  labelText: {

    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 14,
        fontWeight: "700",
        fontFamily: "Roboto",
      },
    }),
  },
  buttonContainer: {
    alignSelf: "center",
    left: 150,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
  coralContainerCol:{
    flexDirection: "column",
    marginLeft: 5
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
    ...Platform.select({
      ios: {
        height: 250,
        marginTop: 10,
      },
      android: {
        marginTop: 5,
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
        left: "5%",
        fontSize: 16,
        fontFamily: "Roboto",
      },
    }),
  },
  depthContainer:{

  },
  formContainer:{
    marginTop: 20,
  },
  imageCont:{
    marginTop: 20,
  },
  updatedContainer:{
    
  },
  locationContainer:{
    marginVertical: 30
  },
  measureContainer:{
    marginVertical: 30
  },
  userContainer:{
    marginVertical: 10,
  },
  imgCoralInfo: {
    flex: 1,
    alignItems: "center",
  },//END OF IMGCORALINFO
});

export default CoralEntryInfo;