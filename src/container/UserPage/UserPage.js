import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Container} from '../../styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Buttons from '../../components/Buttons/Buttons';
import moment from 'moment';
import {deleteItem, setItem} from '../../helpers/deviceStorage';
import {apiFunction} from '../../api/api';

const UserPage = props => {
  const {user, networkStatus, navigation} = props;

  const userAction = async () => {
    const time = moment().format('YYYY-MM-DD hh:mm:ss');
    const data = {
      walk_id: 91876772,
      walker_id: 43307,
      ts: time,
    };
    if (networkStatus) {
      await apiFunction(data)
        .then(async () => {
          await deleteItem('time');
          alert('Success');
        })
        .catch(e => {
          console.log(e.response, 'eeeeeeerrrrroooorrr');
          return;
        });
    } else {
      await setItem('time', time);
    }
  };

  const LogOut = async () => {
    await deleteItem('user');
    navigation.navigate('LoadingComponentScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <Text>Welcome {user === 'customer' ? 'Customer' : 'Employee'}</Text>
      </View>
      {user === 'customer' ? (
        <Buttons
          name={'I gave my dog'}
          value={'customer'}
          clickHandler={userAction}
        />
      ) : (
        <Buttons
          name={'I got dog'}
          value={'employee'}
          clickHandler={userAction}
        />
      )}
      <View>
        <Buttons name={'LogOut'} value={''} clickHandler={LogOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Container.container,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
});

UserPage.propTypes = {
  user: PropTypes.string,
  networkStatus: PropTypes.bool,
  navigation: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    user: state.selectUser.user,
    networkStatus: state.network.networkStatus,
  };
};

export default connect(
  mapStateToProps,
  null,
)(UserPage);
