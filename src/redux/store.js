import {combineReducers, createStore} from 'redux';
import selectUserReducer from './selectUserReducer';
import setNetworkStatusReducer from './setNetworkStatusReducer';

let rootReducer = combineReducers({
  selectUser: selectUserReducer,
  network: setNetworkStatusReducer,
});

const store = createStore(rootReducer);

export default store;
