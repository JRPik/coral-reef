//IMPORTS FROM OUR THIRD-PARTIES
import * as Location from  'expo-location';
import { StatusBar } from "expo-status-bar";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View 
  } from "react-native";
import MapView from 'react-native-maps';
import { SafeAreaView } from "react-native-safe-area-context";


//IMPORT FROM OUR CODE
import colors from "../config/colors";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import { app, db } from '../../firebase';


const CoralReefs = (props) => (
  <View style={[styles.entryContainer]}>
    <TouchableOpacity style={styles.entryImage} onPress={props.func}>
      <Image source={props.image} style={styles.entryImage} />
    </TouchableOpacity>
    <View>
      <AppText>{props.name}</AppText>
    </View>
    <View>
      <AppText>{props.location}</AppText>
    </View>
  </View>
);

//component to be rendered
function Home({ navigation }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    load()
 }, [])
 async function load() {
   try {
     let { status } = await Location.requestForegroundPermissionsAsync();

     if (status !== 'granted') {
       setErrorMessage('Access to location is needed to run the app')
       return
     }
     let location = await Location.getCurrentPositionAsync()

     setLocation(location);
     //console.log(location);
     //console.log(latitude);
     //console.log(longitude);
   }
   catch(error) {

   }
 }
 let displayName = "";
 let text = 'Waiting..';
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

 const pressMain = () => {
  navigation.navigate("Coral");
};

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mapContainer}>
          <MapView style={styles.map}
            region={{
              latitude: 24.92111663334837, //Center Point of map, and could be location of user
              longitude: -80.83632183783237,
              latitudeDelta: .9,
              longitudeDelta: .9,
            }}
          > 

          <MapView.Marker
            coordinate={{
              latitude: 25.257143291215307,
              longitude: -80.21837837858074,
            }}
            title={"Carysfort Reef"}
            description={"Site #1"}
          />

          <MapView.Marker
            coordinate={{
              latitude: 25.025561188665616,
              longitude: -80.40558242867321,
            }}
            title={"Pickles Reef"}
            description={"Site #2"}
          />      


          <MapView.Marker
            coordinate={{
              latitude: 24.93535454950194,
              longitude: -80.62167171268246,
            }}
            title={"Cheeca Rocks"}
            description={"Site #3"}
          />

          <MapView.Marker
            coordinate={{
              latitude: 24.659587286421992,
              longitude: -81.11189074725391,
            }}
            title={"Sombrero Reef"}
            description={"Site #4"}
          />         

          <MapView.Marker
            coordinate={{
              latitude: 24.594828748407213,
              longitude: -81.42359969775684,
            }}
            title={"Looe Key"}
            description={"Site #5"}
          />      

          </MapView>
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={defaultStyles.text} alignContent="center">
            Welcome to our App!
          </Text>
          <Text style={defaultStyles.text} alignContent="center">
            Where will your Dive take you today?
          </Text>
        
        <View style={styles.entriesInfo}>
          {data.corals.map((coral) => (
            <CoralReefs
              func={pressMain}
              key={coral.id}
              image={coral.image}
              location={"Location: " + coral.location}
            />
          ))}
        </View>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  entriesInfo: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: "2%",
  },
  entryContainer: {
    marginTop: 25,
    backgroundColor: colors.backGroundThree,
    justifyContent: "space-evenly",
    ...Platform.select({
      ios: {
        width: "35%",
        borderRadius: 50,
        overflow: "hidden",
      },
      android: {
        width: "47%",
        height: 170,
        borderRadius: 30,
        marginRight: 10,
        overflow: "hidden",
        elevation: 5,
      },
    }),
  },
  entryImage: {
    justifyContent: "center",
    width: "100%",
    ...Platform.select({
      ios: {
        height: 190,
        flexBasis: "115%",
      },
      android: {
        flexBasis: 170,
        paddingBottom: 15,
      },
    }),
  },
  mapContainer:{
    position: "absolute",
    top: 10,
    left: 10,
    bottom: "70%",
    right: 10,
    justifyContent: "flex-start",
    alignItems: "center",  
  },
  map:{
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  welcomeContainer:{
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    ...Platform.select({
      ios: {
        marginTop:"50%",
      },
      android: {
        marginTop:"70%",
      },
    }),
  },
});

const data = {
  corals: [
    {
      id: 1,
      image: require("../assets/images/Carysfort_Reef/Carysfort_Reef.jpg"),
      location: "Carysfort Reef",
    },
    {
      id: 2,
      image: require("../assets/images/Pickles_Reef/Pickles_Reef.jpg"),
      location: "Pickles Reef",
    },
    {
      id: 3,
      image: require("../assets/images/Cheeca_Rocks/Cheeca_Rocks.jpg"),
      location: "Cheeca Rocks",
    },
    {
      id: 4,
      image: require("../assets/images/Sombrero_Reef/Sombrero_Reef.jpg"),
      location: "Sombrero Reef",
    },
    {
      id: 5,
      image: require("../assets/images/Looe_Key/Looe_Key.jpg"),
      location: "Looe Key",
    },

  ],
};

export default Home;