import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Logon from '../screens/logon';
const screens={
    Login:{
        screen: Login
    },
    Logon:{
        screen: Logon
    }
}

const HomeStack= createStackNavigator(screens);

export default createAppContainer(HomeStack);