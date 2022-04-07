//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//IMPORT FROM OUR CODE
import colors from "../config/colors";
import AppText from "../components/AppText";
import MyHeading from "../components/MyHeading";
//import MyHeading from "../components/MyHeading";

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MyHeading>Welcome Home!</MyHeading>
        <Text> Welcome to our application! We are in the process of creating the home page but
          we do have other pages that are accessible.
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: "center",
  },
});

export default Home;