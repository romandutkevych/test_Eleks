import axios from 'axios';

export const apiFunction = data =>
  axios.post(
    'http://api2.petchecktechnology.com/walk/start_walk?jwt=jwtTokenHere',
    data,
  );
