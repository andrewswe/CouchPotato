import React from 'react';
import { connect } from 'react-redux';
import {
  fetchCities,
  fetchCity
} from '../../../../actions/cities_actions';
import CitiesPreview from './cities';
import CityView from './city';

const mapStateToProps = (state, ownProps)=> {
  return {
  currentUser: state.session.id,
  cities: state.entities.cities,
  city: state.entities.city
};
};

const mapDispatchToProps = dispatch => {
  return {
  getCities: searchString => dispatch(fetchCities(searchString)),
  getCity: cityId => dispatch(fetchCity(cityId))
  };
};

export const ExploreCitiesBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesPreview);

export const CityViewPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CityView);
