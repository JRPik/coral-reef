//import from our third-party libraries
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//import from our code
import colors from "../config/colors";

export default function NewEntry({ navigation }) {
  //States used to set date and time
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState("Empty");
  const [timeText, setTimeText] = useState("Empty");

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
    navigation.navigate("Logon");
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

        <StatusBar style="auto" />
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
    fontFamily: "Roboto_400Regular",
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
