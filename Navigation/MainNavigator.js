import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Screens Imports
import HomeScreen from '../Screens/HomeScreen';
import ActivityScreen from '../Screens/ActivityScreen';
import SettingsScreen from '../Screens/SettingsScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {

    return (
        <Drawer.Navigator onPress={() => { this.props.navigation.openDrawer(); Keyboard.dismiss() }}
            screenOptions={{
                headerShown: 'true',
                headerStyle: {
                    backgroundColor: '#48dbfb',
                }
            }}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
            <Drawer.Screen name="ActivityScreen" component={ActivityScreen} options={{ title: 'Activity' }} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />

        </Drawer.Navigator>
    );

}

export {MyDrawer};