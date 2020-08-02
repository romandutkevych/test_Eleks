const SET_USER_DATA_STATE = 'SET_USER_DATA_STATE';

let initialState = {
  user: ''
};

const selectUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA_STATE:
      return {
        ...state,
        user: action.data
      };
    default:
      return state;
  }
};

export const setUserDataState = (data) => ({ type: SET_USER_DATA_STATE, data });

export default selectUserReducer;
