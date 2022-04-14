import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Picker,
} from "react-native";
import React, { useState, userEffect } from "react";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  useFonts,
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from "@expo-google-fonts/dev";
//import {Picker} from '@react-native-picker/picker';


export default function NewEntry({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState("Empty");
  const [timeText, setTimeText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    let properHour = tempDate.getHours();
    if (properHour < 10) {
      properHour = "0" + tempDate.getHours();
    }

    let properMinutes = tempDate.getMinutes();
    if (properMinutes < 10) {
      properMinutes = "0" + tempDate.getMinutes();
    }

    let properSecs = tempDate.getSeconds();
    if (properSecs < 10) {
      properSecs = "0" + tempDate.getSeconds();
    }

    let fDate =
      tempDate.getMonth() +
      1 +
      "/" +
      tempDate.getDate() +
      "/" +
      tempDate.getFullYear();

    let fTime = properHour + ":" + properMinutes + ":" + properSecs;

    setDateText(fDate);
    setTimeText(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const Login = () => {
    navigation.navigate("Logon");
  };

  const takePicture = () => {
    navigation.navigate("Picture");
  };

  const gallery = () => {
    navigation.navigate("Gallery");
  };

  const [selectedLanguage, setSelectedLanguage] = useState();

  const selectedItem = {
    title: 'Selected item title',
    description: 'Secondary long descriptive text ...',
};

const Dropdown = () => {
  return (
      <RNPickerSelect
          pickerProps={{
              accessibilityLabel: selectedItem.title,
          }}
      >
          <Text>{selectedItem.title}</Text>
          <Text>{selectedItem.description}</Text>
      </RNPickerSelect>
  );
};

  

  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
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
                fontFamily: "RobotoCondensed_400Regular",
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
                fontFamily: "RobotoCondensed_400Regular",
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

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}></Text> 
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={(takePicture)}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "RobotoCondensed_400Regular",
              }}
            >
              Take Picture 
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}></Text> 
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={(gallery)}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "RobotoCondensed_400Regular",
              }}
            >
              Upload Picture 
            </Text>
          </TouchableOpacity>
        </View>


    

      </SafeAreaView>
    );
  }
}


/* Picker for color

<View> 
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Blue" value="java" />
            <Picker.Item label="Green" value="js" />
            </Picker>
        </View>


*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    shadowColor: "gray",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 0.3 },
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  text: {
    padding: 10,
    fontSize: 18,
    fontFamily: "RobotoCondensed_400Regular",
  },
  textbox: {
    backgroundColor: "white",
    height: 40,
    width: "75%",
    margin: 10,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { height: 1, width: 0.3 },
  },
  text2: {
    marginBottom: 15,
    marginTop: 15,
    fontSize: 15,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: "#22CA7B",
    width: "25%",
    alignSelf: "flex-end",
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    marginTop: 10,
    backgroundColor: "#22CA7B",
    width: "25%",
    alignSelf: "flex-end",
    borderRadius: 20,
    padding: 10,
  },
  
  

});
