//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, TouchableOpacity, Image, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";

//Main coral component. This will show the coral that was uploaded most recent.
const RecentCoral = (props) => (
  <View style={[styles.recentCoralContainer]}>
    <Image source={props.image} style={styles.recentCoralImage} />
    <Text style={styles.recentCoralText}>
      {props.location}: {props.name}{" "}
    </Text>
  </View>
);

//Information that is gathered to present our other entries. These entries are from
//everyone who has the app and has uploaded information to it
const MyCoralPosts = (props) => (
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

function UserCoralEntries({ navigation }) {
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
} //END OF CORALENTRIES

const data = {
  myCoralEntries: [
    {
      id: 1,
      name: "Elkhorn",
      image: require("../assets/images/Carysfort_Reef/Elkhorn_Coral_CReef.jpg"),
      location: "Carysfort Reef",
    },
    {
      id: 6,
      name: "Mountainous Star",
      image: require("../assets/images/Cheeca_Rocks/Mountainous_Star_Coral_(OF)_ChR.jpg"),
      location: "Cheeca Rocks",
    },
    {
      id: 8,
      name: "Staghorn",
      image: require("../assets/images/Pickles_Reef/Staghorn_Coral_PReef.jpg"),
      location: "Pickles Reef",
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  }, //END OF CONTAINER
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
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backGroundOne,
    margin: 16,
    borderRadius: 8,
    shadowColor: colors.shadowTwo,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 0.3 },
  }, //END OF IMAGECONTAINER
  recentCoralContainer: {
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
  },
  recentCoralInfo: {
    flex: 1,
    alignItems: "center",
  },
  recentCoralText: {
    position: "absolute",
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontSize: 20,
        paddingTop: 5,
        left: "34%",
        fontFamily: "Avenir",
      },
      android: {
        marginTop: 5,
        left: "28%",
        fontSize: 21,
      },
    }),
  },
}); //END OF STYLES.CREATE

export default UserCoralEntries;