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
                name={coral.name}
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
    marginTop: 10,
    elevation: 3,
    backgroundColor: "white",
  },
  imageSquare: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    flexBasis: "70%",
    marginTop: 4,
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
      image: require("../images/Elkhorn_Coral_CR.jpg"),
    },
    {
      id: 2,
      name: "Arcopora",
      image: require("../images/Acropora.jpg"),
    },
    {
      id: 3,
      name: "Acropora Humilis",
      image: require("../images/Acropora_humilis.jpg"),
    },
    {
      id: 4,
      name: "Acropora Divaricata",
      image: require("../images/Arcopora2.jpg"),
    },
    {
      id: 5,
      name: "Arcopora",
      image: require("../images/Acropora.jpg"),
    },
    {
      id: 6,
      name: "Acropora Humilis",
      image: require("../images/Acropora_humilis.jpg"),
    },
    {
      id: 7,
      name: "Acropora Divaricata",
      image: require("../images/Arcopora2.jpg"),
    },
    {
      id: 8,
      name: "Arcopora",
      image: require("../images/Acropora.jpg"),
    },
  ],
};
