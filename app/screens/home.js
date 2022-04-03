//import from our third-party libraries
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular, Roboto_400Regular_Italic, Roboto_700Bold_Italic
} from "@expo-google-fonts/dev";

//import from our code
import colors from "../config/colors";

//main coral component
const MainCoral = (props) => (
  <View style={[styles.newestCoralContainer]}>
    <Image source={props.image} style={styles.newestCoralImage} />
    <Text style={styles.newestCoralText}>{props.name}</Text>
  </View>
);

CoralPosts = (props) => (
  <View style={[styles.entryContainer]}>
    <TouchableOpacity style={styles.entryImage} onPress={props.func}>
      <Image source={props.image} style={styles.entryImage} />
    </TouchableOpacity>
    <View >
      <Text style={styles.entriesText}>{props.name}</Text>
      <Text style={styles.entriesText}>{props.location}</Text>
      <Text style={styles.entriesText}>{props.diver}</Text>
    </View>
  </View>
);

//component to be rendered
export default function Home({ navigation }) {
  const pressMain = () => {
    navigation.navigate("Coral");
  };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular_Italic,
    Roboto_700Bold_Italic,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={pressMain}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <MainCoral
                name={data.corals[0].name}
                image={data.corals[0].image}
                location={data.corals[0].location}
                //diver={data.corals[0].diver}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.entriesContainer}>
            {data.corals.map((coral) => (
              <CoralPosts
                func={pressMain}
                key={coral.id}
                name={"Coral Name: " + coral.name}
                image={coral.image}
                location={"Location: " + coral.location}
                //diver={"Diver's Name: " + coral.diver}
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
  entriesContainer: {
    flex: 1.5,
    marginTop: 20,
    backgroundColor: "#F0FFF0",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  entryContainer: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 5,
    elevation: 3,
    backgroundColor: colors.backGroundOne,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: "space-evenly",
  },
  entryImage: {
    width: "100%",
    height: 170,
    resizeMode: "contain",
    flexBasis: "70%",
    justifyContent: "center",
  },
  entryText: {
    marginBottom: 5,
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  newestCoralContainer: {
    height: "100%",
    width: "94%",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: colors.primary,
    flexDirection: "row",
    backgroundColor: colors.backGroundOne,
    borderRadius: 5,
    elevation: 5,
    padding: 10,
  },
  newestCoralImage: {
    //width: 250,
    width: "45%",
    height: 250,
    resizeMode: "contain",
  },
  newestCoralText: {
    position: "relative",
    fontWeight: "bold",
    fontSize: 15,
    padding: 15,
  },


  container: {
    flex: 1,
    backgroundColor: colors.backGroundTwo,
    alignContent: "center",
  },
  

  
  
  
});

const data = {
  corals: [
    {
      id: 1,
      name: "Elkhorn Coral",
      image: require("../assets/images/Carysfort_Reef/Elkhorn_Coral_CReef.jpg"),
      location: "Carysfort Reef",
      //diver: "Diver 1",
    },
    {
      id: 2,
      name: "Boulder Star Coral",
      image: require("../assets/images/Carysfort_Reef/Boulder_Star_Coral_(OA)_Day_1.jpg"),
      location: "Carysfort Reef",
      //diver: "Diver 2",
    },
    {
      id: 3,
      name: "Boulder Star Coral",
      image: require("../assets/images/Carysfort_Reef/Boulder_Star_Coral_(OA)_003.jpg"),
      location: "Carysfort Reef",
      //diver: "Diver 2",
    },
    {
      id: 4,
      name: "Mountainous Star Coral",
      image: require("../assets/images/Carysfort_Reef/Mountainous_Star_Coral_(OF)_158.jpg"),
      location: "Carysfort Reef",
      //diver: "Diver 3",
    },
    {
      id: 5,
      name: "Staghorn Coral",
      image: require("../assets/images/Carysfort_Reef/Staghorn_CoraL_CReef.jpg"),
      location: "Carysfort Reef",
      //diver: "Diver 2",
    },
    {
      id: 6,
      name: "Mountainous Star Coral",
      image: require("../assets/images/Cheeca_Rocks/Mountainous_Star_Coral_(OF)_ChR.jpg"),
      location: "Cheeca Rocks",
      //diver: "Diver 1",
    },
    {
      id: 7,
      name: "Staghorn Coral",
      image: require("../assets/images/Looe_Key/Staghorn_Coral_LKey.jpg"),
      location: "Looe Key",
      //diver: "Diver 3",
    },
    {
      id: 8,
      name: "Staghorn Coral",
      image: require("../assets/images/Pickles_Reef/Staghorn_Coral_PReef.jpg"),
      location: "Pickles Reef",
      //diver: "Diver 1",
    },
    {
      id: 9,
      name: "Elkhorn Coral",
      image: require("../assets/images/Sombrero_Reef/Elkhorn_Coral_SReef.jpg"),
      location: "Sombrero Reef",
      diver: "Diver 2",
    },
  ],
};
