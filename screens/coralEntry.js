import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function CoralEntry ({navigation}){



  

    return(
<SafeAreaView style={styles.container}>
<View style={{ paddingTop: '10%' }}>
<Text>Coral Specification Page</Text>
</View>
<StatusBar style="auto" />
</SafeAreaView>

    )
    }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignContent: 'center'
    },
    imageContainer:{

      justifyContent: 'center',
      alignItems: 'center',
      
      backgroundColor: 'white',
      margin: 16,
      borderRadius: 8,
      shadowColor: 'gray',
      shadowOpacity: 0.3,
      shadowRadius: 8,
      shadowOffset: { height: 1, width: 0.3 }
     },

     image:{
      width:250,
      height:250,
      resizeMode:'contain',
    
    },
    text: {
      marginTop:70,
      fontSize: 20,
      textAlign: 'center'
    },
    textbox: {
      backgroundColor: 'white',
      height: 40,
      width: '75%',
      margin: 10,
      borderRadius: 5,  
      shadowColor: 'black',
      shadowOpacity: 0.3,
     
      shadowOffset: { height: 1, width: 0.3 }
      },
      text2: {
        marginBottom:15,
        marginTop:15,
        fontSize: 15,
        textAlign: 'center'
      },
    buttonContainer: {
      backgroundColor: '#22CA7B',
      width: '45%',
      alignSelf: 'center',
      borderRadius: 20,
      padding: 10
    }
  });
