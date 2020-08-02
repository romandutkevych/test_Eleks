import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Container} from '../../styles';
import {connect} from 'react-redux';
import Buttons from '../../components/Buttons/Buttons';
import {setItem} from '../../helpers/deviceStorage';
import {setUserDataState} from '../../redux/selectUserReducer';
import PropTypes from 'prop-types';

const MainPage = props => {
  const {navigation, setUserDataState} = props;

  const setUserValue = async value => {
    await setItem('user', value);
    setUserDataState(value);
    navigation.navigate('UserPageScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <Buttons
          name={'I am Customer'}
          value={'customer'}
          clickHandler={setUserValue}
        />
        <Buttons
          name={'I am Employee'}
          value={'employee'}
          clickHandler={setUserValue}
        />
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

MainPage.propTypes = {
  setUserDataState: PropTypes.func,
  navigation: PropTypes.object,
};

export default connect(
  null,
  {setUserDataState},
)(MainPage);
