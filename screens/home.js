import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from "@expo-google-fonts/dev";

//main coral component
const MainCoral = (props) => (
  <View style={[styles.card]}>
    <Text style={styles.cardText}>{props.name}</Text>
    <Image source={props.image} style={styles.image} />
  </View>
);

CoralPosts = (props) => (
  <View style={[styles.square]}>
    <TouchableOpacity style={styles.imageSquare} onPress={props.func}>
      <Image source={props.image} style={styles.imageSquare} />
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.text}>{props.location}</Text>
      <Text style={styles.text}>{props.diver}</Text>
    </TouchableOpacity>
  </View>
);

//component to be rendered
export default function Home({ navigation }) {
  const pressMain = () => {
    navigation.navigate("Coral");
  };

  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold_Italic,
    RobotoCondensed_400Regular,
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
                diver={data.corals[0].diver}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flex: 1.5,
              marginTop: 10,
              //backgroundColor: "#F0FFF0",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {data.corals.map((coral) => (
              <CoralPosts
                func={pressMain}
                key={coral.id}
                name={"Name of Coral: " + coral.name}
                image={coral.image}
                location={"Location: " + coral.location}
                diver={"Diver's Name: " + coral.diver}
              />
            ))}
          </View>

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export function pictureButton({text, onPress })
{
  return (
    <TouchableOpacity> onPress = {onPress}
      <view style = {styles.buttonContainer}>
        <Text> style = {styles.text}{text}</Text>
      </view>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 5,
  },
  cardText: {
    position: "absolute",
    textAlign: "center",
    top: "3%",
    fontFamily: "RobotoCondensed_700Bold_Italic",
    fontSize: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginRight: 10,
  },
  text: {
    width: "100%",
    marginBottom: 2,
    textAlign: "center",
    fontFamily: "RobotoCondensed_400Regular_Italic",
  },
  square: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 5,
    elevation: 3,
    backgroundColor: "white",
  },
  imageSquare: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
    flexBasis: "70%",
    marginTop: 4,
    marginBottom: 2,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignContent: "center",
  },
});

const data = {
  corals: [
    {
      id: 1,
      name: "Elkhorn Coral",
      image: require("../images/Carysfort_Reef/Elkhorn_Coral_CReef.jpg"),
      location: "Carysfort Reef",
      diver: "Diver 1",
    },
    {
      id: 2,
      name: "Boulder Star Coral",
      image: require("../images/Carysfort_Reef/Boulder_Star_Coral_(OA)_Day_1.jpg"),
      location: "Carysfort Reef",
      diver: "Diver 2",
    },
    {
      id: 3,
      name: "Boulder Star Coral",
      image: require("../images/Carysfort_Reef/Boulder_Star_Coral_(OA)_003.jpg"),
      location: "Carysfort Reef",
      diver: "Diver 2",
    },
    {
      id: 4,
      name: "Mountainous Star Coral",
      image: require("../images/Carysfort_Reef/Mountainous_Star_Coral_(OF)_158.jpg"),
      location: "Carysfort Reef",
      diver: "Diver 3",
    },
    {
      id: 5,
      name: "Staghorn Coral",
      image: require("../images/Carysfort_Reef/Staghorn_CoraL_CReef.jpg"),
      location: "Carysfort Reef",
      diver: "Diver 2",
    },
    {
      id: 6,
      name: "Mountainous Star Coral",
      image: require("../images/Cheeca_Rocks/Mountainous_Star_Coral_(OF)_ChR.jpg"),
      location: "Cheeca Rocks",
      diver: "Diver 1",
    },
    {
      id: 7,
      name: "Staghorn Coral",
      image: require("../images/Looe_Key/Staghorn_Coral_LKey.jpg"),
      location: "Looe Key",
      diver: "Diver 3",
    },
    {
      id: 8,
      name: "Staghorn Coral",
      image: require("../images/Pickles_Reef/Staghorn_Coral_PReef.jpg"),
      location: "Pickles Reef",
      diver: "Diver 1",
    },
{
      id: 9,
      name: "Elkhorn Coral",
      image: require("../images/Sombrero_Reef/Elkhorn_Coral_SReef.jpg"),
      location: "Sombrero Reef",
      diver: "Diver 2",
    },
  ],
};