import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './routes/homeStack';

export default function App() {
  return (
   <Navigator/>
  );
}

