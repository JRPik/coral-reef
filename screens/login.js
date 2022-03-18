import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function Login ({navigation}){



  const pressedHandler=()=>{
    navigation.navigate('Logon');
  }

    return(
<SafeAreaView style={styles.container}>
<View style={{ paddingTop: '10%' }}>
  <View style={styles.imageContainer}>
  <Image style={styles.image} source={require('../images/logo.jpg')} />
  </View>
 
  
  <View style={{ paddingLeft: '15%'}}>
    <TextInput style={styles.textbox} placeholder="User ID" />
    <TextInput style={styles.textbox} placeholder="Password" />
  </View>
  <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log("Button Pressed")}>
    <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
  </TouchableOpacity>
  <Text style={styles.text2} >Don't Have an Account?</Text>
  <TouchableOpacity style={styles.buttonContainer} onPress={pressedHandler}>
    <Text style={{textAlign: 'center', color: 'white'}}>Create Account</Text>
  </TouchableOpacity>
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
