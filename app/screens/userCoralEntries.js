//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import AppText from "../components/AppText";
//import MyHeading from "../components/MyHeading";

function UserCoralEntries({ navigation }) {
  
  const pressedHandler = () => {
    navigation.navigate("Logon");
  }; //END OF PRESSEDHANDLER

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: "10%" }}>
        <AppText>My Coral Entries</AppText>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  ); //END OF RETURN
} //END OF CORALENTRIES

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    width: "45%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
  }, //END OF BUTTON CONTAINER
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  }, //END OF CONTAINER
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  }, //END OF IMAGE
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
    }), //END OF PLATFORM.SELECT
  }, //END OF TEXT
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
    }), //END OF PLATFORM.SELECT
  }, //END OF TEXT2
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
    }), //END OF PLATFORM.SELECT
  }, //END OF TEXTBOX
}); //END OF STYLES.CREATE

export default UserCoralEntries;