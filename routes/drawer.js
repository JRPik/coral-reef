import{ createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home'
import NewEntry from '../screens/newEntry';
import EntrySearch from '../screens/entrySearch';
import CoralEntries from '../screens/coralEntries';
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
    },
}

const Drawer = createDrawerNavigator(
    screens,
    {
        drawerPosition: 'right'
    },
    );

export default Drawer