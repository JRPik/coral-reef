//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';

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
import { Picker } from '@react-native-picker/picker';
import { collection, addDoc } from 'firebase/firestore';
import  Slider  from '@react-native-community/slider';

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import GreenButton from "../components/GreenButton";
//import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";
import { app, db } from '../../firebase';
import ApptTextInput from "../components/ApptTextInput";
//import { selectedBoat, selectedWeather, selectedWater} from "./newEntry";

export default function Login({ navigation, route }) {
  const [coralName, setCoralName] = useState();
  const [temperature, setTemperature] = useState('0');
  const [depth, setDepth] = useState();
  const [bleach, setBleach] = useState();
  const [wildLife, setWildlife] = useState();

  const addEntry = async() => {
    await addDoc(collection(db, "CoralReefProject/Entries/EntriesCollection"), {
      timeText: navigation.getParam('timeText', ""),
      dateText: navigation.getParam('dateText', ""),
      boat: navigation.getParam('boat', ""),
      weather: navigation.getParam('weather', ""),
      water: navigation.getParam('water', ""),
      coralName: coralName,
      wildLife: wildLife,
      temperature: temperature
    })
    navigation.navigate("Coral");
  };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        ></View>
        <ApptTextInput
          value={coralName}
          placeholder="Coral Name"
          onChangeText={text => setCoralName(text)}
        />

        <Text style={styles.text}>Wildlife Present: </Text>
          <Picker style={{ width: "75%" }}
            selectedValue={wildLife}
            onValueChange={(itemValue, itemIndex) =>
              setWildlife(itemValue)
            }
            mode='dropdown'
            >
            <Picker.Item label="true" value="true" />
            <Picker.Item label="false" value="false" />
          </Picker>

          <Text>{(Math.round(temperature * 100) / 100).toFixed(2)}</Text>
          <Slider style={{ marginBottom: "" }}
            minimumValue={-459.67}
            maximumValue={459.67}
            onValueChange={(value) => setTemperature(value)}
          />

        <TouchableOpacity onPress={addEntry}>
          <GreenButton title="Add Entry" />
        </TouchableOpacity>

        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      backgroundColor: colors.primary,
      width: "25%",
      alignSelf: "flex-end",
      borderRadius: 20,
      padding: 10,
    },
    container: {
      flex: 1,
      backgroundColor: colors.backGroundOne,
      alignContent: "center",
    },
    image: {
      width: 250,
      height: 250,
      resizeMode: "contain",
    },
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.backGroundOne,
      margin: 16,
      borderRadius: 8,
      shadowColor: colors.shadowTwo,
      shadowOpacity: 0.3,
      shadowRadius: 8,
      shadowOffset: { height: 1, width: 0.3 },
    },
    text: {
      padding: 10,
      fontSize: 18,
      ...Platform.select({
        ios:{
            fontFamily: "Avenir",
        },
        android:{
            fontFamily: "Roboto",
        },
      }),
    },
    text2: {
      marginBottom: 15,
      marginTop: 15,
      fontSize: 15,
      textAlign: "center",
    },
    textbox: {
      backgroundColor: colors.backGroundOne,
      height: 40,
      width: "75%",
      margin: 10,
      borderRadius: 5,
      shadowColor: colors.shadowOne,
      shadowOpacity: 0.3,
      shadowOffset: { height: 1, width: 0.3 },
    },
  });
  
