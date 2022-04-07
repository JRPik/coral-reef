//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import AppText from "../components/AppText";
import MyHeading from "../components/MyHeading";
//import MyHeading from "../components/MyHeading";

function CoralEntryInfo({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <View style={{backgroundColor:'black'}}>
        <MyHeading>Coral Specification Page</MyHeading>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    width: "45%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
  },
  closeIcon:{
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
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
  },
  text: {
    marginTop: 70,
    fontSize: 20,
    textAlign: "center",
    ...Platform.select({
      ios:{
          fontFamily: "Avenir",
      },
      android:{
          fontFamily: "Roboto",
      },
    }),
  },
  textbox: {
    backgroundColor: colors.backGroundOne,
    height: 40,
    width: "75%",
    margin: 10,
    borderRadius: 5,
    shadowColor: colors.shadowOne,
    shadowOpacity: 0.3,
    shadowOffset: { height: 1, width: 0.3 },
    ...Platform.select({
      ios:{
          fontFamily: "Avenir",
      },
      android:{
          fontFamily: "Roboto",
      },
    }),
  },
  text2: {
    marginBottom: 15,
    marginTop: 15,
    fontSize: 15,
    textAlign: "center",
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

export default CoralEntryInfo;