import React, { useEffect } from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import {Container} from '../../styles';
import {getItem} from '../../helpers/deviceStorage';
import {connect} from 'react-redux';
import {setUserDataState} from '../../redux/selectUserReducer';
import PropTypes from 'prop-types';

const LoadingPage = (props) => {

  const {navigation,setUserDataState} = props;

  useEffect( () => {
    getUserInfo();
  }, [])

  const getUserInfo = async () => {
    const user = await getItem("user");

    if(user){
      setUserDataState(user);
      navigation.navigate('UserPageScreen');
    }else{
      navigation.navigate('MainPageScreen');
    }
  };


  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0072BB" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Container.container,
    justifyContent: "center"
  }
});


LoadingPage.propTypes = {
  setUserDataState: PropTypes.func,
  navigation: PropTypes.object
};

export default connect(null, {setUserDataState})(LoadingPage);
