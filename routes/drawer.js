import{ createDrawerNavigator} from 'react-navigation-drawer';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity,Image,FlatList } from 'react-native';
import Home from '../screens/home'
import NewEntry from '../screens/newEntry';
import EntrySearch from '../screens/entrySearch';
import CoralEntries from '../screens/coralEntries';
import { StackActions } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";

import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const screens={
    
    Home: {
        screen: Home,
        navigationOptions:({navigation})=>{
            return{
                title:'Coral Spotlight'
            }
        }
    },
    NewEntry: {
        screen: NewEntry,
        navigationOptions:({navigation})=>{
            return{
                title:'New Entry'
            }
        }
    },
    EntrySearch: {
        screen: EntrySearch,
        navigationOptions:({navigation})=>{
            return{
                title:'Entry Search'
            }
        }
    },
    CoralEntries: {
        screen: CoralEntries,
        navigationOptions:({navigation})=>{
            return{
                title:'Coral Entries'
            }
        }
    }
    
   
    
}




const Drawer = createDrawerNavigator(
    screens,
    {
        drawerPosition: 'right',
        contentComponent: DrawerMenu
    },
    
   
   );

   const menuData = [
    { icon:'home', name: "Home", screenName: "Home", key: 1 },
    { icon:'book', name: " New Entry", screenName: "NewEntry", key: 2 },
    { icon:'search',  name: "Entry Search", screenName: "EntrySearch", key: 3},
    { icon:'folder-open', name: "Coral Entries", screenName: "CoralEntries", key: 4},
    {icon:'sign-out',name:'Log Out', key:5}
  ];



   function DrawerMenu ({navigation}){
      
       return(
        <View style={styles.container} >
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <DrawerItem
            navigation={navigation}
            icon={item.icon}
              screenName={item.screenName}
              name={item.name}
              key={item.key}
            />
          )}
        />
      </View>
       )}

       function DrawerItem ({ navigation, name, screenName,icon }) {
        const navHandler=(screenName,name)=>{
            if(name==='Log Out'){
                navigation.navigate('Login')
            }else{
                navigation.navigate(screenName)
            }
       }
       return(
           
        <TouchableOpacity style={styles.menuItem}
        onPress={()=>navHandler(screenName,name)}
        >
          <Icon style={styles.icon} name={icon} size={25} color="#333" />
          <Text style={styles.menuItemText}>{name}</Text>
        </TouchableOpacity>
      );
        }



        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: "rgba(255,255,255,0.43)",
              paddingTop: 70
            },
            menuItem: {
              flexDirection: "row",
              
              borderStyle:"solid",
              borderBottomWidth:2,
              borderBottomColor:'black'
            },
            icon:{
                paddingTop:10,
                paddingLeft:5
            },
            menuItemText: {
              fontSize: 15,
              fontWeight: "300",
              margin: 15,
              
            },
           
            menuItemText: {
              fontSize: 15,
              fontWeight: "300",
              margin: 15
            }
          });
export default Drawer;