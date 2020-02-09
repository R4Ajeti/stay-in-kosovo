import { apiCall } from './api/api';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_HOSTELS_PENDING,
  REQUEST_HOSTELS_SUCCESS,
  REQUEST_HOSTELS_FAILED,
} from './constants';

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const requestHostels = () => dispatch => {
  dispatch({ type: REQUEST_HOSTELS_PENDING });
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_HOSTELS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_HOSTELS_FAILED, payload: error }));
};
