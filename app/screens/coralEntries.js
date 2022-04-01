//import from our third-party libraries
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image 
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';

//import from our code
import colors from '../config/colors';

export default function CoralEntries({navigation}){



  const pressedHandler=()=>{
    navigation.navigate('Logon');
  }

    return(
<SafeAreaView style={styles.container}>
<View style={{ paddingTop: '10%' }}>
<Text>My Coral Entries</Text>
</View>
<StatusBar style="auto" />
</SafeAreaView>

    )
    }



const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    width: '45%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: colors.backGroundOne,
    alignContent: 'center'
  },
  image:{
    width:250,
    height:250,
    resizeMode:'contain',
  },
  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backGroundOne,
    margin: 16,
    borderRadius: 8,
    shadowColor: colors.shadowTwo,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 0.3 }
  },
  text: {
    marginTop:70,
    fontSize: 20,
    textAlign: 'center'
  },
  text2: {
    marginBottom:15,
    marginTop:15,
    fontSize: 15,
    textAlign: 'center'
  },
  textbox: {
    backgroundColor: colors.backGroundOne,
    height: 40,
    width: '75%',
    margin: 10,
    borderRadius: 5,  
    shadowColor: colors.shadowOne,
    shadowOpacity: 0.3,
    shadowOffset: { height: 1, width: 0.3 }
  },
});
