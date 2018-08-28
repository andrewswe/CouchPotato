import { RECEIVE_CITIES } from '../actions/cities_actions';
import merge from 'lodash/merge';

const citiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CITIES:
      return merge({}, state, { cities: action.cities });
    default:
      return state;
  }
};

export default citiesReducer;
