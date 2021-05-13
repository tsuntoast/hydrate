import React from 'react';
import { StyleSheet } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

// My Navigational Flow
import { MyDrawer } from './Navigation/MainNavigator';

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import unitReducer from './store/reducers/unitReducer';
import recordReducer from './store/reducers/recordReducer';

const rootReducer = combineReducers({
  unit: unitReducer,
  record: recordReducer,
});

const store = createStore(rootReducer);

export default function App() {

  return (

    <Provider store={store}>

      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>

    </Provider>

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