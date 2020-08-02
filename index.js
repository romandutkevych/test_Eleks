/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import store from './src/redux/store';
import {name as appName} from './app.json';
import Provider from 'react-redux/lib/components/Provider';


const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithStore);
