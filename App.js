import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

// My Navigational Flow
import { HomeScreenStack, MyBottomTabNavigator, MyDrawer } from './Navigation/MainNavigator';

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import countReducer from './store/reducers/countReducer';
import unitReducer from './store/reducers/unitReducer';

const rootReducer = combineReducers({
  count: countReducer,
  unit: unitReducer
});

const store = createStore(rootReducer);

export default function App() {

  return (
    // <NavigationContainer>
    //   <HomeScreenStack />
    // </NavigationContainer>

    <Provider store={store}>

      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>

    </Provider>


    // <NavigationContainer>
    //   <MyBottomTabNavigator />
    // </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default App;