import {
  CHANGE_SEARCHFIELD,
  REQUEST_HOSTELS_PENDING,
  REQUEST_HOSTELS_SUCCESS,
  REQUEST_HOSTELS_FAILED,
} from './constants';

const initialStateSearch = {
  searchField: '',
};

export const searchHostels = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateHostels = {
  hostels: [],
  isPending: true,
};

export const requestHostels = (state = initialStateHostels, action = {}) => {
  console.log();
  switch (action.type) {
    case REQUEST_HOSTELS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_HOSTELS_SUCCESS:
      return Object.assign({}, state, {
        hostels: action.payload,
        isPending: false,
      });
    case REQUEST_HOSTELS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
