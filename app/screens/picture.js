import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

//Camera Feature function
export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
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
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
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
      </Camera>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={gallery}>
          <Text style={styles.text}> Photo {"\n"} Gallery </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* Take picture function
  const takePhoto = async () => {
    if (cameraRef){
      console.log("in take picture");
      try {
        let photo = await cameraRef.current.takePictureAsync({
          allowedEditing: true,
          aspect: [4,3],
          quality: 1,
        });
        return photo;
      } catch (e){
        console.log(e);
      }
    }
  }
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
    fontFamily: "Roboto",
  },
});
