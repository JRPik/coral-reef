import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react'
import Login from '../screens/login';
import Logon from '../screens/logon';
import Drawer from '../routes/drawer';
import Header from '../shared/header';
const screens={
    Login:{
        screen: Login
    },
    Logon:{
        screen: Logon
    },
    Home:{
        screen: Drawer,
        navigationOptions:({navigation})=>{
            return{
            headerLeft:()=>null,
            headerTitle:()=><Header navigation={navigation}/>,
            gestureEnabled: false
            }
        }
        
    }
}

const HomeStack= createStackNavigator(screens);

export default createAppContainer(HomeStack);