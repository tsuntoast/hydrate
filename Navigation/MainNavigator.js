import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'react-native-elements';

// Screens Imports
import HomeScreen from '../Screens/HomeScreen';
import ActivityScreen from '../Screens/ActivityScreen';
import SettingsScreen from '../Screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreenStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Tracker'}} />
            <Stack.Screen name="ActivityScreen" component={ActivityScreen} options={{title: 'Activity'}}/>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title: 'Settings'}} />
        </Stack.Navigator>
    );

};

function MyBottomTabNavigator() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Tracker'}} />
            <Tab.Screen name="ActivityScreen" component={ActivityScreen} options={{title: 'Activity'}} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{title: 'Settings'}} />
        </Tab.Navigator>
    );

}

function MyDrawer() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{
                title: 'Home',
                // drawerIcon: <Icon

                //     name='bars'
                //     type='font-awesome'
                //     size={26}
                // />
                }} />
            <Drawer.Screen name="ActivityScreen" component={ActivityScreen} options={{title: 'Activity'}} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{title: 'Settings'}} />
        </Drawer.Navigator>
    );

}

export {HomeScreenStack, MyBottomTabNavigator, MyDrawer};