//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { ImageBackground, Image, ScrollView, StyleSheet, Text, TouchableOpacity, 
  View, Platform } from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular} from "@expo-google-fonts/dev";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";

//Main coral component. This will show the coral that was uploaded most recent.
const MainCoral = (props) => (
  <View style={[styles.newestCoralContainer]}>
    <Image source={props.image} style={styles.newestCoralImage} />
    <Text style={styles.newestCoralText}>{props.name} </Text>
  </View>
);

//Information that is gathered to present our other entries. These entries are from
//everyone who has the app and has uploaded information to it
CoralPosts = (props) => (
  <View style={[styles.entryContainer]}>
    <TouchableOpacity style={styles.entryImage} onPress={props.func}>
      <Image source={props.image} style={styles.entryImage}/>
    </TouchableOpacity>
    <View >
      <AppText>{props.name}</AppText>
      </View>
      <View>
      <AppText>{props.location}</AppText>
    </View>
  </View>
);

//component to be rendered
export default function Home({ navigation }) {
  const pressMain = () => {
    navigation.navigate("Coral");
  };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/images/coralBackground.jpg")}
      >
        <SafeAreaView>
          <ScrollView>
            <TouchableOpacity onPress={pressMain}>
              <View style={styles.mainCoralInfo}>
                <MainCoral
                  name={data.corals[0].name}
                  image={data.corals[0].image}
                  location={data.corals[0].location}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.entriesInfo}>
              {data.corals.map((coral) => (
                <CoralPosts
                  func={pressMain}
                  key={coral.id}
                  name={"Coral Name: " + coral.name}
                  image={coral.image}
                  location={"Location: " + coral.location}
                />
              ))}
            </View>

          <StatusBar style="auto" />

          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: colors.backGroundTwo,
    alignContent: "center",
    padding: 40,
  },
  entriesInfo: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  entryContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: colors.backGroundTwo,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: "space-evenly",
    ...Platform.select({
      ios:{
        width: "35%",
        borderRadius: 50,
        overflow: "hidden",
      },
      android:{
        width: "45%",
        height: 120,
        borderRadius: 30,
        marginRight: 10,
        overflow: "hidden",
      },
    }),
  },
  entryImage: {
    justifyContent: "center",
    ...Platform.select({
      ios:{
        width:"100%",
        height: 150,
        flexBasis: "100%",
      },
      android:{
        width: "100%",
        height: "10%",
        flexBasis: "92%",
        paddingBottom: 15,
      },
    }),
  },
  mainCoralInfo: {
    flex: 1, 
    alignItems: "center" ,
  },
  newestCoralContainer: {
    height: "100%",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: colors.primary,
    flexDirection: "row",
    backgroundColor: colors.backGroundOne,
    borderRadius: 5,
    padding: 10,
    ...Platform.select({
      ios:{
        width: "85%",
      },
      android:{
        width: "100%",
      },
    }),
  },
  newestCoralImage: {
    resizeMode: "contain",
    ...Platform.select({
      ios:{
        width: "55%",
        height: 250,
      },
      android:{
        width: "60%",
        height: 150,
      },
    }),
  },
  newestCoralText: {
    position: "relative",
    fontWeight: "bold",
    ...Platform.select({
      ios:{
        fontSize: 20,
        paddingLeft: 8,
      },
      android:{
        fontSize: 21,
        paddingLeft: 10,
      },
    }),
  },  
});

const data = {
  corals: [
    {
      id: 1,
      name: "Elkhorn",
      image: require("../assets/images/Carysfort_Reef/Elkhorn_Coral_CReef.jpg"),
      location: "Carysfort Reef"
    },
    {
      id: 2,
      name: "Boulder Star",
      image: require("../assets/images/Carysfort_Reef/Boulder_Star_Coral_(OA)_Day_1.jpg"),
      location: "Carysfort Reef"
    },
    {
      id: 3,
      name: "Boulder Star",
      image: require("../assets/images/Carysfort_Reef/Boulder_Star_Coral_(OA)_003.jpg"),
      location: "Carysfort Reef"
    },
    {
      id: 4,
      name: "Mountainous Star",
      image: require("../assets/images/Carysfort_Reef/Mountainous_Star_Coral_(OF)_158.jpg"),
      location: "Carysfort Reef"
    },
    {
      id: 5,
      name: "Staghorn",
      image: require("../assets/images/Carysfort_Reef/Staghorn_CoraL_CReef.jpg"),
      location: "Carysfort Reef"
    },
    {
      id: 6,
      name: "Mountainous Star",
      image: require("../assets/images/Cheeca_Rocks/Mountainous_Star_Coral_(OF)_ChR.jpg"),
      location: "Cheeca Rocks"
    },
    {
      id: 7,
      name: "Staghorn",
      image: require("../assets/images/Looe_Key/Staghorn_Coral_LKey.jpg"),
      location: "Looe Key"
    },
    {
      id: 8,
      name: "Staghorn",
      image: require("../assets/images/Pickles_Reef/Staghorn_Coral_PReef.jpg"),
      location: "Pickles Reef"
    },
    {
      id: 9,
      name: "Elkhorn",
      image: require("../assets/images/Sombrero_Reef/Elkhorn_Coral_SReef.jpg"),
      location: "Sombrero Reef"
    },
  ],
};
