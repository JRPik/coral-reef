import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: '60%' }}>
        <Text style={styles.text}>Coral Reef Project Testing</Text>
        <View style={{ paddingLeft: '15%' }}>
          <TextInput style={styles.textbox} placeholder="User ID" />
          <TextInput style={styles.textbox} placeholder="Password" />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log("Button Pressed")}>
          <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33E8FF',
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
    borderRadius: 5
  },
  buttonContainer: {
    backgroundColor: '#22CA7B',
    width: '45%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 10
  }
});
