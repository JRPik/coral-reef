//IMPORTS FROM OUR THIRD-PARTIES
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity,
    View } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";



//IMPORT FROM OUR CODE
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";

//import MyHeading from "../components/MyHeading";

//Main coral component. This will show the coral that was uploaded most recent.
const RecentCoral = (props) => (
  <View style={[styles.recentCoralContainer]}>
    <Image source={props.image} style={styles.recentCoralImage}  />
    
    <Text style={defaultStyles.recentCoralText}>
      {props.location}: {props.name}
    </Text>
    
  </View>
);

//Information that is gathered to present our other entries. These entries are from
//everyone who has the app and has uploaded information to it
const MyCoralPosts = (props) => (
    <View style={[styles.entryContainer]}>
      
      <TouchableOpacity style={styles.entryImage} onPress={props.func}>
        <Image 
        source={props.image} 
        style={styles.entryImage}
        
        />
      </TouchableOpacity>
      <View>
        <AppText>{props.name}</AppText>
      </View>
      <View>
        <AppText>{props.location}</AppText>
      </View>
    </View>
  );

 
  
  function CraysfortReef({ navigation })  {
  
    const pressMain = () => {
        navigation.navigate("Coral");
    };

    return (
        <SafeAreaView style={styles.container}>      
            <ScrollView>
              <TouchableOpacity onPress={pressMain}>
                <View style={styles.recentCoralInfo}>
                  <RecentCoral
                    name={data.myCoralEntries[0].name}
                    image={data.myCoralEntries[0].image}
                    location={data.myCoralEntries[0].location}
                  />
                </View> 
              </TouchableOpacity>
                <View style={styles.entriesInfo}>
                {data.myCoralEntries.map((coral) => (
                  <MyCoralPosts
                    func={pressMain}
                    key={coral.id}
                    name={"Coral Name: " + coral.name}
                    image={coral.image}
                    location={"Location: " + coral.location}
                  />
                ))}
              </View>
            </ScrollView>
          <StatusBar style="auto" />
        </SafeAreaView>
      ); //END OF RETURN
    } //END OF CRAYSFORTREEF

    const data = {
        myCoralEntries: [
          {
            id: 1,
            name: "Boulder Star",
            image: require("../assets/images/Carysfort_Reef/Boulder_Star_Coral_(OA)_Day_1.jpg"),
            location: "Craysfort Reef",
          },
          {
            id: 2,
            name: "Boulder Star",
            image: require("../assets/images/Carysfort_Reef/Elkhorn_Coral_CReef.jpg"),
            location: "Craysfort Reef",
          },
          {
            id: 3,
            name: "Mountainous Star",
            image: require("../assets/images/Carysfort_Reef/Mountainous_Star_Coral_(OF)_158.jpg"),
            location: "Craysfort Reef",
          },
          {
            id: 4,
            name: "Staghorn",
            image: require("../assets/images/Carysfort_Reef/Staghorn_CoraL_CReef.jpg"),
            location: "Craysfort Reef",
          }
        ],
      };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: defaultStyles.colors.backGroundOne,
          alignContent: "center",
        }, //END OF CONTAINER
        entriesInfo: {
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingLeft: "2%",
        },//END OF ENTRIESINFO
        entryContainer: {
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
          backgroundColor: defaultStyles.colors.backGroundThree,
          justifyContent: "space-evenly",
          ...Platform.select({
            ios: {
              width: "35%",
              borderRadius: 50,
              overflow: "hidden",
            },
            android: {
              width: "45%",
              height: 150,
              borderRadius: 30,
              marginRight: 10,
              overflow: "hidden",
              elevation: 5,
            },
          }),
        },//END OF ENTRYCONTAINER
        entryImage: {
          justifyContent: "center",
          ...Platform.select({
            ios: {
              width: "100%",
              height: 150,
              flexBasis: "100%",
            },
            android: {
              width: "100%",
              height: "10%",
              flexBasis: "92%",
              paddingBottom: 15,
            },
          }),
        },//END OF ENTRYIMAGE
        recentCoralContainer: {
          height: "100%",
          justifyContent: "flex-start",
          borderColor: defaultStyles.colors.primary,
          flexDirection: "column",
          backgroundColor: defaultStyles.colors.backGroundThree,
          borderRadius: 20,
          padding: 10,
          ...Platform.select({
            ios: {
              paddingTop: 10,
              width: "80%",
            },
            android: {
              width: "92%",
              elevation: 5,
            },
          }),
        },//END OF RECENTCORALCONTAINER
        recentCoralImage: {
          resizeMode: "cover",
          overflow: "hidden",
          width: "75%",
          left: "12%",
          ...Platform.select({
            ios: {
              height: 250,
              marginTop: 24,
            },
            android: {
              marginTop: 23,
              height: 150,
            },
          }),
        },//END OF RECENTCORALIMAGE
        recentCoralInfo: {
          flex: 1,
          alignItems: "center",
        },//END OF RECENTCORALINFO
      }); //END OF STYLES.CREATE

      export default CraysfortReef;