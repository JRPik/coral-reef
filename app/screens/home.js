//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform
  } from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";


//IMPORT FROM OUR CODE
import colors from "../config/colors";
import AppText from "../components/AppText";
import MyHeading from "../components/MyHeading";
//import MyHeading from "../components/MyHeading";

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
      <SafeAreaView>
        <ScrollView >
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              Welcome to our App!
            </Text>
            <Text style={styles.welcomeText}>
              Where will your Dive take you today?
            </Text>
          </View>
          <View style={styles.entriesInfo}>
            {data.corals.map((coral) => (
              <CoralReefs
                func={pressMain}
                key={coral.id}
                image={coral.image}
              />
            ))}
          </View>

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
  entriesInfo: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: "2%",
  },
  entryContainer: {
    justifyContent: "center",
    alignItems: "center",
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
        height: 150,
        flexBasis: "100%",
      },
      android: {
        flexBasis: 198,
        paddingBottom: 15,
      },
    }),
  },
  welcomeContainer:{
    alignItems: "center",
  },
  welcomeText: {
      fontSize:18,
      alignContent: "center",
    ...Platform.select({
      ios:{
          fontFamily: "Avenir",
      },
      android:{
          fontFamily: "Roboto",
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
      image: require("../assets/images/Cheeca_Rocks/Cheeca_Rocks.jpg"),
      location: "Cheeca Rocks",
    },
    {
      id: 3,
      image: require("../assets/images/Looe_Key/Looe_Key.jpg"),
      location: "Looe Key",
    },
    {
      id: 4,
      image: require("../assets/images/Pickles_Reef/Pickles_Reef.jpg"),
      location: "Pickles Reef",
    },
    {
      id: 5,
      image: require("../assets/images/Sombrero_Reef/Sombrero_Reef.jpg"),
      location: "Sombrero Reef",
    },
  ],
};

export default Home;