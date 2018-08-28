import {
  RECEIVE_CITY,
  CLEAR_CITY
} from '../actions/cities_actions';
import merge from 'lodash/merge';

const cityReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CITY:
      return merge({}, state, {city: action.city});
    case CLEAR_CITY:
      return action.city;
    default:
      return state;
  }
};

export default cityReducer;
