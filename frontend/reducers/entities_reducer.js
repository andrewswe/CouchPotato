import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import spotReducer from './spot_reducer';
import citiesReducer from './cities_reducer';
import cityReducer from './city_reducer';

export default combineReducers({
  users: usersReducer,
  spots: spotReducer,
  cities: citiesReducer,
  city: cityReducer
});
