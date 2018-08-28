import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { sessionUser: action.currentUser});
    case LOGOUT_CURRENT_USER:
      return { sessionUser: null };
    case RECEIVE_USER:
      return merge({}, state, { otherUser: action.user});
    default:
      return state;
  }
};

export default usersReducer;
