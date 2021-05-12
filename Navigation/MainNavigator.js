import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';


// Screens Imports
import HomeScreen from '../Screens/HomeScreen';
import HistoryScreen from '../Screens/HistoryScreen';
import ActivityScreen from '../Screens/ActivityScreen';
import SettingsScreen from '../Screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//might not use
function HomeScreenStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Tracker'}} />
            <Stack.Screen name="ActivityScreen" component={ActivityScreen} options={{title: 'Activity'}}/>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title: 'Settings'}} />
        </Stack.Navigator>
    );

};

//might not use
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
        <Drawer.Navigator onPress={() => { this.props.navigation.openDrawer(); Keyboard.dismiss() }}
        // screenOptions={{
        //     header: ({ scene }) => {
        //         const { options } = scene.descriptor;
        //         const title = 'header';
              
        //         return (
        //           <MyHeader
        //             title='header'
        //             leftButton={
        //               <DrawerToggleButton
        //                 onPress={scene.descriptor.navigation.toggleDrawer}
        //               />
        //             }
        //             style={options.headerStyle}
        //           />
        //         );
        //       }
        // }}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
              },
         
         }} />
            <Drawer.Screen name="ActivityScreen" component={ActivityScreen} options={{title: 'Activity' }} />
            <Drawer.Screen name="HistoryScreen" component={HistoryScreen} options={{title: 'History' }} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{title: 'Settings' }} />
        </Drawer.Navigator>
    );

}

export {HomeScreenStack, MyBottomTabNavigator, MyDrawer};