import * as CitiesApiUtil from '../util/cities_api_util';


export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_CITY = 'RECEIVE_CITY';
export const CLEAR_CITY = 'CLEAR_CITY';
export const LOAD_CITY = 'LOAD_CITY';
export const LOAD_CITIES = 'LOAD_CITIES';

export const receiveCities = cities => ({
  type: RECEIVE_CITIES,
  cities
});

export const receiveCity = city => ({
  type: RECEIVE_CITY,
  city
});

export const clearCity = city => ({
  type: CLEAR_CITY,
  city
});

export const loadCity = () => ({
  type: LOAD_CITY
});

export const loadCities = () => ({
  type: LOAD_CITIES
});

export const fetchCities = () => dispatch => {
  return CitiesApiUtil.fetchCities()
    .then(cities => dispatch(receiveCities(cities))
  );
};

export const fetchCity = (cityId) => dispatch => {
  return CitiesApiUtil.fetchCity(cityId)
    .then(city => dispatch(receiveCity(city)));
};
