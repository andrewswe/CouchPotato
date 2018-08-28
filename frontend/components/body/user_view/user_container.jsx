import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/user_actions';
import ProfileView from './profile';
import { fetchSpot } from '../../../actions/spot_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users.sessionUser,
    user: state.entities.users.otherUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (userId) => {return dispatch(fetchUser(userId));},
    getSpot: (ownerId) => {return dispatch(fetchSpot(ownerId));}
  };
};

export const UserView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileView);
