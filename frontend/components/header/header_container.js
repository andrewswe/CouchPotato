import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Header from './header';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
      login: (user) => {dispatch(login(user));},
      logout: () => (
        dispatch(logout())
      ),
      openModal: modal => dispatch(openModal(modal))
      };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
