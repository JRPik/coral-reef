import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function Logon (){
    return(

<SafeAreaView style={styles.container}>

<View style={{ paddingTop: '60%' }}>
  <Text style={styles.text}>Create an Account</Text>
  <View style={{ paddingLeft: '15%' }}>
    <TextInput style={styles.textbox} placeholder="Email" />
    <TextInput style={styles.textbox} placeholder="Password" />
    <TextInput style={styles.textbox} placeholder="Confirm Password" />
  </View>
  <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log("Button Pressed")}>
    <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
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
        text: {
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
      shadowRadius: 8,
      shadowOffset: { height: 1, width: 0.3 }
        },
        buttonContainer: {
          backgroundColor: '#22CA7B',
          width: '45%',
          alignSelf: 'center',
          borderRadius: 20,
          padding: 10
        }
      });
    