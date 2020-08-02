import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

const Buttons = ({name, value, clickHandler}) => {
  return (
    <TouchableOpacity
      style={styles.buttonsStyle}
      onPress={() => clickHandler(value)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonsStyle: {
    justifyContent: 'center',
    backgroundColor: '#bcbcbc',
    padding: 20,
    borderRadius: 8,
    margin: 10,
  },
});

Buttons.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  value: PropTypes.string,
};

export default Buttons;
