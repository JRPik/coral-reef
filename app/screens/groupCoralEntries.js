//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";

//Main coral component. This will show the coral that was uploaded most recent.
const MainCoral = (props) => (
  <View style={[styles.newestCoralContainer]}>
    <Image source={props.image} style={styles.newestCoralImage} />
    <Text style={defaultStyles.newestCoralText}>
      {props.location}: {props.name}{" "}
    </Text>
  </View>
);

//Information that is gathered to present our other entries. These entries are from
//everyone who has the app and has uploaded information to it
CoralPosts = (props) => (
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
export default function GroupCoralEntries({ navigation }) {
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
    );
  }
}

const styles = StyleSheet.create({
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
        width: "45%",
        height: 150,
        borderRadius: 30,
        marginRight: 10,
        overflow: "hidden",
        elevation: 5,
      },
    }),
  },
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
  },
  mainCoralInfo: {
    flex: 1,
    alignItems: "center",
  },
  newestCoralContainer: {
    height: "100%",
    justifyContent: "flex-start",
    borderColor: colors.primary,
    flexDirection: "column",
    backgroundColor: colors.backGroundThree,
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
  },
  newestCoralImage: {
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
  },
});

const data = {
  corals: [
    {
      id: 1,
      name: "Elkhorn",
      image: require("../assets/images/Carysfort_Reef/Elkhorn_Coral_CReef.jpg"),
      location: "Carysfort Reef",
    },
    {
      id: 2,
      name: "Boulder Star",
      image: require("../assets/images/Carysfort_Reef/Boulder_Star_Coral_(OA)_Day_1.jpg"),
      location: "Carysfort Reef",
    },
    {
      id: 3,
      name: "Boulder Star",
      image: require("../assets/images/Carysfort_Reef/Boulder_Star_Coral_(OA)_003.jpg"),
      location: "Carysfort Reef",
    },
    {
      id: 4,
      name: "Mountainous Star",
      image: require("../assets/images/Carysfort_Reef/Mountainous_Star_Coral_(OF)_158.jpg"),
      location: "Carysfort Reef",
    },
    {
      id: 5,
      name: "Staghorn",
      image: require("../assets/images/Carysfort_Reef/Staghorn_CoraL_CReef.jpg"),
      location: "Carysfort Reef",
    },
    {
      id: 6,
      name: "Mountainous Star",
      image: require("../assets/images/Cheeca_Rocks/Mountainous_Star_Coral_(OF)_ChR.jpg"),
      location: "Cheeca Rocks",
    },
    {
      id: 7,
      name: "Staghorn",
      image: require("../assets/images/Looe_Key/Staghorn_Coral_LKey.jpg"),
      location: "Looe Key",
    },
    {
      id: 8,
      name: "Staghorn",
      image: require("../assets/images/Pickles_Reef/Staghorn_Coral_PReef.jpg"),
      location: "Pickles Reef",
    },
    {
      id: 9,
      name: "Elkhorn",
      image: require("../assets/images/Sombrero_Reef/Elkhorn_Coral_SReef.jpg"),
      location: "Sombrero Reef",
    },
  ],
};
