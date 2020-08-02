import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainPage from '../container/MainPage/MainPage';
import LoadingPage from '../container/LoadingPage/LoadingPage';
import UserPage from '../container/UserPage/UserPage';

const AppPages = createStackNavigator(
  {
    MainPageScreen: {
      screen: MainPage,
      navigationOptions: {
        title: 'Welcome to our App',
        headerTitleStyle: {alignSelf: 'center'},
      },
    },
    UserPageScreen: {
      screen: UserPage,
      navigationOptions: {
        title: 'Welcome to our App',
        headerTitleStyle: {alignSelf: 'center'},
        headerLeft: null,
      },
    },
  },
  {
    initialRouteName: 'MainPageScreen',
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#FFFFFF',
        // height: 50
      },
      gestureEnabled: true,
      cardOverlayEnabled: true,
    }),
  },
);

const LoadingNavigator = createStackNavigator(
  {
    LoadingComponentScreen: LoadingPage,
  },
  {
    initialRouteName: 'LoadingComponentScreen',
    headerMode: 'none',
  },
);

const RouterStack = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingNavigator,
      App: AppPages,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

export {RouterStack};
