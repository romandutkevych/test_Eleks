const SET_NETWORK_DATA_STATE = 'SET_NETWORK_DATA_STATE';

let initialState = {
  networkStatus: null
};

const setNetworkStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NETWORK_DATA_STATE:
      return {
        ...state,
        networkStatus: action.data
      };
    default:
      return state;
  }
};

export const setNetworkDataState = data => ({
         type: SET_NETWORK_DATA_STATE,
         data,
       });

export default setNetworkStatusReducer;
