//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView
} from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";
import {Picker} from '@react-native-picker/picker';

//IMPORT FROM OUR CODE
import colors from "../config/colors";
//import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";
import GreenButton from "../components/GreenButton";

export default function NewEntry({ navigation }) {
  //States used to set date and time
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState("Empty");
  const [timeText, setTimeText] = useState("Empty");
  const [selectedBoat, setSelectedBoat] = useState();
  const [selectedWeather, setSelectedWeather] = useState();
  const [selectedWater, setSelectedWater] = useState();

  //When changed show it
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    let amPM = "a.m";

    let properHour = tempDate.getHours();
    if (properHour > 12) {
      properHour = tempDate.getHours() - 12;
      amPM = "p.m.";
    } else {
      amPM = "a.m.";
    }

    if (properHour < 10) {
      properHour = "0" + properHour;
    }

    let properMinutes = tempDate.getMinutes();
    if (properMinutes < 10) {
      properMinutes = "0" + tempDate.getMinutes();
    }

    let properSecs = tempDate.getSeconds();
    if (properSecs < 10) {
      properSecs = "0" + tempDate.getSeconds();
    }

    //The format that the date is displayed
    let fDate =
      tempDate.getMonth() +
      1 +
      "/" +
      tempDate.getDate() +
      "/" +
      tempDate.getFullYear();
    //Format at which the time is displayed
    let fTime =
      properHour + ":" + properMinutes + ":" + properSecs + " " + amPM;

    setDateText(fDate);
    setTimeText(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const pressedHandler = () => {
    navigation.navigate("NewEntryTwo", {
        dateText: dateText,
        timeText: timeText,
        boat: selectedBoat,
        weather: selectedWeather,
        water: selectedWater
    });
  };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.text}>{dateText}</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => showMode("date")}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Roboto_400Regular",
                }}
              >
                Select Date
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.text}>{timeText}</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => showMode("time")}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Roboto_400Regular",
                }}
              >
                Select Time
              </Text>
            </TouchableOpacity>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              display="default"
              onChange={onChange}
            />
          )}

          <Text style={styles.text}>Choose a Boat:</Text>
          <Picker
            selectedValue={selectedBoat}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBoat(itemValue)
            }>
            <Picker.Item label="Boat A" value="Boat A" />
            <Picker.Item label="Boat B" value="Boat B" />
            <Picker.Item label="Boat C" value="Boat C" />
          </Picker>
          
          <Text style={styles.text}>Weather Conditions: </Text>
          <Picker
            selectedValue={selectedWeather}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedWeather(itemValue)
            }>
            <Picker.Item label="Overcast" value="Overcast" />
            <Picker.Item label="Rainy" value="Rainy" />
            <Picker.Item label="Sunny" value="Sunny" />
            <Picker.Item label="Partly Cloudy" value="Partly Cloudy" />
            <Picker.Item label="Windy" value="Windy" />
          </Picker>

          <Text style={styles.text}>Choose Water State: </Text>  
          <Picker
            selectedValue={selectedWater}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedWater(itemValue)
            }>
            <Picker.Item label="Calm" value="Calm" />
            <Picker.Item label="Rough" value="Rough" />
            <Picker.Item label="Choppy" value="Choppy" />
          </Picker>

          <TouchableOpacity onPress={pressedHandler}>
            <GreenButton title="Next" />
          </TouchableOpacity>

          <StatusBar style="auto" />
        </ScrollView>
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
