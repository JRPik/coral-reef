//IMPORTS FROM OUR THIRD-PARTIES
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
  ImagePickerIOS,
  Alert,
} from "react-native";
import React, { useState, userEffect, useEffect, useRef } from "react";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
//import {Picker} from '@react-native-picker/picker';

//IMPORT FROM OUR CODE
import colors from "../config/colors";
//import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";

import { Camera } from 'expo-camera';


export default function NewEntry({ navigation }) {
  //States used to set date and time
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState("Empty");
  const [timeText, setTimeText] = useState("Empty");

  const [country, setCountry] = useState('Unknown');

  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const[useCamera, setUseCamera] = useState (false);
  const cameraRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);



  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  // Function to take picture
  const takePic = async () => {
    if (cameraRef){
      console.log('Picture taken');
      try {
        let photo = await cameraRef.current.takePictureAsync({
          allowsEditing: true,
          aspect: [4,3],
          quality: 1,
        });
        return photo;
      } catch (e) {
        console.log(e);
      }
    }
  }

  // Function to get picture from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePickcer.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    })
  }



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

  const Login = () => {
    navigation.navigate("Logon");
  };

  /*const takePicture = () => {
    navigation.navigate("Picture");
  };
  */

  const gallery = () => {
    navigation.navigate("Gallery");
  };

  const selectedItem = {
    title: "Selected item title",
    description: "Secondary long descriptive text ...",
  };

  
  {
    return (
      <SafeAreaView style={styles.container}>
        <View> 
         {useCamera ? (
        <View>
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setUseCamera(false);
                }}>
                <Text style={styles.text}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={styles.text}>Flip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={async () => {
                  console.log('in take pic');
                  const r = await takePic();
                  setUseCamera(false);
                  if (!r.cancelled) {
                    setImage(r.uri);
                  }
                  Alert.alert("Picture Taken", JSON.stringify(r));
                }}>
                <Text style={styles.text}>Take Picture</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      ) : (
        <>
          <View style={{ width: '100%' }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={async () => {
                  console.log('in pick photo');
                  const r = await pickImage();
                  if (!r.cancelled) {
                    setImage(r.uri);
                  }
                  console.log('response', JSON.stringify(r));
                }}>
                <Text style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Roboto"}}> Photo Gallery </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={async () => {
                  console.log('in pick camera');
                  setUseCamera(true);
                }}>
                <Text style={{  
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Roboto"}}> Take Picture </Text>
              </TouchableOpacity>
            </View>

            
            <View style={{ width: '100%', alignItems: 'center' }}>
              {true && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200, backgroundColor: 'aquamarine' }}
                />
              )}
            </View>
          </View>
        </>
      )}
  

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
                fontFamily: "Roboto",
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
                fontFamily: "Roboto",
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

        </View>
      </SafeAreaView>
    );
  }
}


/*


<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.buttonContainer}>Select color</Text>
          <Picker
            selectedValue={country}
            onValueChange={(value, index) => setCountry(value)}
            mode="dropdown" // Android only
            style={styles.picker}
          >
          <Picker.Item label="Please select your country" value="Unknown" />
          <Picker.Item label="Australia" value="Australia" />
          <Picker.Item label="Belgium" value="Belgium" />
          <Picker.Item label="Canada" value="Canada" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="Japan" value="Japan" />
         </Picker>
        <Text style={styles.buttonContainer}>Your conuntry: {country}</Text>
      </View>



           <View>style={{ flexDirection: "row", alignSelf: 'center' }}
          <Text> style={styles.text}
            <Picker>
              <Picker.Item label = "Please select a color" value ="disabled"/> 
              <Picker.Item label = "Blue" value ="Blue"/> 
              <Picker.Item label = "Red" value ="Red"/> 
              <Picker.Item label = "Green" value ="Green"/> 
              <Picker.Item label = "Yellow" value ="Yellow"/> 
            
            </Picker>
            Color
            </Text> 
          
        </View>

      */

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

  picker: {
    marginVertical: 30,
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});
