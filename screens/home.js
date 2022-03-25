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
import { useFonts, CantoraOne_400Regular } from "@expo-google-fonts/dev";

//main coral component
const MainCoral = (props) => (
  <View style={[styles.card]}>
    <Image source={props.image} style={styles.image} />
    <Text style={{ fontFamily: "CantoraOne_400Regular" }}>{props.name}</Text>
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
  const pressMain=()=>{
    navigation.navigate("Coral");
  }


  let [fontsLoaded] = useFonts({
    CantoraOne_400Regular,
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
              backgroundColor: "#F0FFF0",
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
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F0FFF0",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 0.3 },
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
    paddingLeft: 15,
    fontFamily: "CantoraOne_400Regular",
  },
  square: {
    width: "45%",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    borderColor: "rgba(158, 150, 150, .5)",
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
    backgroundColor: "white",
    alignContent: "center",
  },
});

const data = {
  corals: [
    {
      id: 1,
      name: "Elkhorn Coral",
      image: require("../images/Elkhorncoral.jpg"),
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
