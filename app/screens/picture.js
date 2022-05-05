import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert,  } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

import { getStorage, ref } from "firebase/storage";
import {app} from '../../firebase';




//Camera Feature function
export default function Picture({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const[useCamera, setUseCamera] = useState (false);
  const cameraRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const gallery = () => {
    navigation.navigate("Gallery");
  };

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


  // Function to display taken photo / gallery photo
  /*const DisplayImage = async(a) => {
    return (
      <View>
        <Image
        style = {styles.stretch}
        source = {require(a)}
        />
      </View>
    )
  }*/


  return (
    
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip {"\n"} Camera </Text>
          </TouchableOpacity>
        </View>
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={
          gallery}>
          <Text style={styles.text}> Photo {"\n"} Gallery </Text>
        </TouchableOpacity>
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={async () => {
          const r = await takePic();
          setUseCamera(true);
          
          setImage(r.uri);
          console.log("Photo Taken", JSON.stringify(r));
          Alert.alert("Picture Taken", JSON.stringify(r));
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {image && <Image source={{ uri: image }} style={{ width: 500, height: 500 }} />}
            </View>
        }}>
          <Text style={styles.text}> Take Photo </Text>
        </TouchableOpacity>
      </View>
     </Camera> 
    </View>
  ) 
}

/*

<View> style={{flex: 1}}
         {true && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200}}
                />
              )}
        </View>

        */


// Styles for text and container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  // Button for  feature
  buttonContainer: {
    width: "50%",
    height: "10%",
    backgroundColor: "powderblue",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { height: 1, width: 0.3 },
  },

  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
   //fontFamily: "Roboto",
  },

  picNail:{
    width: 200,
    height: 200,
  }
});