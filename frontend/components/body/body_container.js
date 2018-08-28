import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import BodyJoinStrip from './landing/body_join_strip';
import SideBar from './sidebar/sidebar';
import UserDash from './dashboard/user_dash';


const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.id,
    currentUser: state.entities.users.sessionUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};

export const LandingJoinStrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyJoinStrip);

export const UserSideBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export const UserDashBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDash);
