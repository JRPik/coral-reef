//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

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
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import { collection, addDoc, GeoPoint } from "firebase/firestore";
import Slider from "@react-native-community/slider";
import { getAuth } from "firebase/auth";
import { NavigationContainer, StackActions } from "@react-navigation/native";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import GreenButton from "../components/GreenButton";
//import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";
import { app, db } from "../../firebase";
import ApptTextInput from "../components/ApptTextInput";
import { loadAsync } from "expo-font";
//import { selectedBoat, selectedWeather, selectedWater} from "./newEntry";

export default function NewEntryTwo({ navigation, route }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    load();
  }, []);
  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMessage("Access to location is needed to run the app");
        return;
      }
      let location = await Location.getCurrentPositionAsync();

      setLocation(location);
    } catch (error) {}
  }
  const [coralName, setCoralName] = useState();
  const [temperature, setTemperature] = useState("0");
  const [depth, setDepth] = useState();
  const [bleach, setBleach] = useState();
  const [wildLife, setWildlife] = useState();
  let displayName = "";
  let text = "Waiting..";
  if (errorMessage) {
    text = errorMessage;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const auth = getAuth(app);
  const user = auth.currentUser;
  if (user) {
    displayName = user.displayName;
  } else {
    // No user is signed in.
  }
  const addEntry = async () => {
    await addDoc(collection(db, "CoralReefProject/Entries/EntriesCollection"), {
      documentedBy: displayName,
      timeText: navigation.getParam("timeText", ""),
      dateText: navigation.getParam("dateText", ""),
      boat: navigation.getParam("boat", "Boat A"),
      weather: navigation.getParam("weather", "Sunny"),
      water: navigation.getParam("water", "Choppy"),
      coralName: coralName,
      wildLife: wildLife,
      temperature: temperature,
      location: location,
    });
    navigation.dispatch(StackActions.popToTop());
    navigation.navigate("Coral");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      ></View>
      <Text style={styles.text}>Coral Name: </Text>
      <Picker
        style={{ width: "75%" }}
        selectedValue={coralName}
        onValueChange={(itemValue, itemIndex) => setCoralName(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="Boulder Star" value="Boulder Star" />
        <Picker.Item label="Elkhorn" value="Elkhorn" />
        <Picker.Item label="Mountainous Star" value="Mountainous Star" />
        <Picker.Item label="Staghorn" value="Staghorn" />
      </Picker>

      <Text style={styles.text}>Wildlife Present: </Text>
      <Picker
        style={{ width: "75%" }}
        selectedValue={wildLife}
        onValueChange={(itemValue, itemIndex) => setWildlife(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="true" value="true" />
        <Picker.Item label="false" value="false" />
      </Picker>

      <Text>{(Math.round(temperature * 100) / 100).toFixed(2)}</Text>
      <Slider
        minimumValue={-459.67}
        maximumValue={459.67}
        onValueChange={(value) => setTemperature(value)}
      />

      <Text style={styles.text}>{text}</Text>

      <TouchableOpacity onPress={addEntry}>
        <GreenButton title="Add Entry" />
      </TouchableOpacity>
    </SafeAreaView>
  );
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
      ios: {
        fontFamily: "Avenir",
      },
      android: {
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
