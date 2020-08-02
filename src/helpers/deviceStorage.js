import AsyncStorage from '@react-native-community/async-storage';

const getItem = async key => {
  let res = null
  try {
    res = await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
  return res
};

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
};

const deleteItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
};

export {setItem, deleteItem, getItem};
