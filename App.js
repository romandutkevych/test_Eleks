import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import {RouterStack} from './src/router/Router';
import {setNetworkDataState} from './src/redux/setNetworkStatusReducer';
import {deleteItem, getItem, setItem} from './src/helpers/deviceStorage';
import {apiFunction} from './src/api/api';
import PropTypes from 'prop-types';

const App = props => {
  const {setNetworkDataState, networkStatus} = props;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetworkDataState(state.isConnected);
    });

    if (networkStatus === true) {
      setTime();
    }

    return unsubscribe;
  }, [networkStatus]);

  const setTime = async () => {
    const time = await getItem('time');
    const data = {
      walk_id: 91876772,
      walker_id: 43307,
      ts: time,
    };
    if (time) {
      await apiFunction(data)
        .then(async () => {
          await deleteItem('time');
          alert('Success');
        })
        .catch(e => {
          console.log(e.response, 'eeeeeeerrrrroooorrr');
          return;
        });
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RouterStack />
    </>
  );
};

App.propTypes = {
  setNetworkDataState: PropTypes.func,
  networkStatus: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    networkStatus: state.network.networkStatus,
  };
};

export default connect(
  mapStateToProps,
  {setNetworkDataState},
)(App);
