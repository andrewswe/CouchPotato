import React from 'react';
import { connect } from 'react-redux';
import CityView from './city';
import { fetchCity } from '../../../../actions/cities_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.id,
    city: state.entities.city
  };
};

const mapDispatchToProps = () => dispatch => {
  return {
    getCity: (cityId) => {return dispatch(fetchCity(cityId));}
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityView);
