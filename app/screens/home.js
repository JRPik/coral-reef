//IMPORTS FROM OUR THIRD-PARTIES
import { map } from '@firebase/util';
import * as Location from  'expo-location';
//import * as Permissions from 'expo-permissions';
import { getAuth } from "firebase/auth";
import {  useEffect } from 'react';
import { Alert, Dimensions, Image, Platform, StyleSheet, Text,
  TouchableOpacity, View } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';




//IMPORT FROM OUR CODE
import colors from "../config/colors";
import { app, db } from '../../firebase';
import CoralEntryInfo from './coralEntryInfo';
import { NavigationEvents } from 'react-navigation';

export default function Home ({ navigation }) {

  const state = {
    coordinates: [
      { id: 1, 
        image: require("../assets/images/Carysfort_Reef/Carysfort_Reef_LightHouse.jpg"), 
        title: "Carysfort Reef",
        description: "Site #1",
        latitude: 25.266252761346873, 
        longitude: -80.2037020105647
      },
      {
        id: 2,
        image: require("../assets/images/Pickles_Reef/Pickles_Reef_Carousel.jpg"),
        title: "Pickles Reef",
        description: "Site #2",
        latitude: 25.035037492918256, 
        longitude: -80.41518883328074
      },
      {
        id: 3,
        image: require("../assets/images/Cheeca_Rocks/Cheeca_Rocks_Carousel.jpg"),
        title: "Cheeca Rocks",
        description: "Site #3",
        latitude: 24.94790775726182, 
        longitude: -80.62392907388357
      },
      {
        id: 4,
        image: require("../assets/images/Sombrero_Reef/Sombrero_Reef_Carousel.jpg"),
        title: "Sombrero Reef",
        description: "Site #4",
        latitude: 24.671174776090865,  
        longitude: -81.1128206900323
      },
      {
        id: 5,
        image: require("../assets/images/Looe_Key/Looe_Key_Carousel.jpg"),
        title: "Looe Key",
        description: "Site #5",
        latitude: 24.5987735822097,  
        longitude: -81.42043788671018
      },
    ],
    landMarks: [
      {
        id: 6,
        title: "Coral Restoration Headquarters",
        description: "CRF HQ",
        latitude: 24.983136944828253,  
        longitude: -80.54633408066032
      },
      {
        id: 7,
        title: "Coral Restoration Foundation Exploration Center",
        description: "CRF Exploration Center",
        latitude: 25.088260875057543,  
        longitude: -80.44105376124482
      }
    ],
    markers: []
  }

  //need this to go to each of the respective pages
  const pressMain = () => {
    navigation.navigate("Coral");
  };

  const load = async () => {
    try {
      let { granted } = await Location.requestForegroundPermissionsAsync();
      
      if (!granted) {
       setErrorMessage('Access to location is needed to run the app')
       return
      }
      let location = await Location.getCurrentPositionAsync()
      setLocation(location);
    }
    catch(error) {
    }
  }

  useEffect(() => {
    load();
  }, [])

  const auth = getAuth(app);
  const user = auth.currentUser;
  if (user) {
    console.log(JSON.stringify(user.displayName));
  } else {
   // No user is signed in.
  }

  //This function will allow you to click on a marker and once
  //you do that it will move the carousel to the correct one
  //that is associated with the marker.
  const onMarkerPressed = (location, index) => {
    MapView.mapView.animateToRegion({
      latitude: location.latitude, 
      longitude: location.longitude,
      latitudeDelta: 1.6,
      longitudeDelta: .9,
    })
    Carousel.carousel.snapToItem(index);
  }//END OF ONMARKERPRESSED

  //This function will let you scroll through the carousel and as
  //do it will highlight the maker point and bring up that markers
  //information.
  const onCarouselItemChange = (index) => {
    let location = state.coordinates[index];
    MapView.mapView.animateToRegion({
      latitude: location.latitude, 
      longitude: location.longitude,
      latitudeDelta: 1.6,
      longitudeDelta: .9,
    })

    state.markers[index].showCallout();
  }//END OF ONCAROUSELITEMCHANGE

  //This function is what you see in the carousel. You have tiitle and
  //image.
  const renderCarouselItem = ({item}) =>
  <TouchableOpacity onPress={pressMain}>
    <View style={styles.reefContainer}>
      <Text style={styles.reefText}>{item.title}</Text>
      <Image style={styles.reefImage} source={item.image}/>
    </View>
  </TouchableOpacity>
  //END OF RENDERCAROUSELITEM

  return(
        <View style={styles.container}>
          <MapView style={styles.map}
          ref = {(ref)=>MapView.mapView=ref}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true} // This will show the users location
            region={{
              latitude: 24.92111663334837, //Center Point of map
              longitude: -80.83632183783237,
              latitudeDelta: 1.6,
              longitudeDelta: .9,
            }}
          > 
          <View >
            {state.coordinates.map((marker, index) => (                  
            <Marker
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              description={marker.description}
              key={marker.title}
              onPress={() => onMarkerPressed(marker, index)}
              ref={ref => state.markers[index] = ref}
              title={marker.title}>
            </Marker>
          ))}
          </View>
          <View>
            {state.landMarks.map((marker) => (                  
              <Marker
                coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                description={marker.description}
                key={marker.title}
                title={marker.title}>
              <Image style={styles.imgMarker} 
              source={require('../assets/images/blueCoralLogo.jpg')}/>
              </Marker>
            ))}
          </View>
          </MapView>
          <Carousel
            containerCustomStyle={styles.carousel}
            data={state.coordinates}
            itemWidth={200}
            onSnapToItem={(index) => onCarouselItemChange(index)}
            ref={(c) => { Carousel.carousel = c; }}
            renderItem={renderCarouselItem}
            //removeClippedSubviews={false}
            sliderWidth={Dimensions.get('window').width}
          />
        </View>
  );//END OF RETURN
}//END OF HOME

const styles = StyleSheet.create({
  carousel:{
    position: "absolute",
    bottom: 0,
    marginBottom:48 
  },
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  imgMarker: {
    height: 30,
    width: 30
  },
  
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  reefContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 24,
    ...Platform.select({
      ios: {
        height: 220,
        padding: 17,
        width:200, 
        
      },
      android: {
        height: 140,
        padding: 14,
        width: 200,
      },
    }),
  },
  reefImage: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    position: "absolute",
    ...Platform.select({
      ios: {
        bottom: 0,
        height: 160,
        width: 200,
      },
      android: {
        bottom: 0,
        height: 80,
        width: 200,
      },
    }),
  },
  reefText: {
    alignSelf: "center",
    color: colors.backGroundOne,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 22,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 22,
      },
    }),
  },
});