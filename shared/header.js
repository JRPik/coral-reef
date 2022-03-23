import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation}){
const openMenu=()=>{
    navigation.toggleDrawer();
}
return(
    <View style={styles.header}>
        <View>
            <Text>Coral Spotlight</Text>
        </View>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
    </View>

)



}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        
    },
    icon:{
        position:'absolute',
        right: 20,
    }
})