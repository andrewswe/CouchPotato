import React from 'react';
import { connect } from 'react-redux';
import SideBar from '../sidebar/sidebar';
import { fetchSpot } from '../../../util/user_api_util';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: ownProps.currentUser,
    sessionUserId: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSpot: (ownerId) => {return dispatch(fetchSpot(ownerId));}
  };
};

export const UserSideBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
