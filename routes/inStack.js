import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react'

import Home from '../screens/home';
import CoralEntry from '../screens/coralEntry';
const screens={
       Home: {
        screen: Home,
        navigationOptions:({navigation})=>{
            return{
                headerLeft:()=>null,
                headerTitle:'Coral Spotlight',
                gestureEnabled: false,
            }
        }
    },  
    Coral: {
        screen: CoralEntry,
        navigationOptions:({navigation})=>{
            return{
               
                headerTitle:'Coral',
                gestureEnabled: false,
            }
        }
    }
 
        
    }




export const InStack= createStackNavigator(screens);