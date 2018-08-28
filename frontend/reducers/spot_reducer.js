import merge from 'lodash/merge';
import { RECEIVE_USER_SPOT } from '../actions/spot_actions';


const spotReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_SPOT:
      return merge({}, state, { userSpot: action.spot });
    default:
      return state;
  }
};

export default spotReducer;
