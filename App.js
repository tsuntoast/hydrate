import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './Navigation/MainNavigator';

// Redux Imports
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