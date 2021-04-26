import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Screens Imports
import HomeScreen from '../Screens/HomeScreen';
import ActivityScreen from '../Screens/ActivityScreen';
import SettingsScreen from '../Screens/SettingsScreen';

const Stack = createStackNavigator();
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

function MyDrawer() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen}  />
            <Drawer.Screen name="ActivityScreen" component={ActivityScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen}  />
        </Drawer.Navigator>
    );

}

export {HomeScreenStack, MyDrawer};