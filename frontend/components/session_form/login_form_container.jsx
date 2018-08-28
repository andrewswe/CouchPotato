import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions.js';
import SessionForm from './session_form.jsx';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'login'
  });
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => {return dispatch(login(user));},
    otherForm: (
      <div>
        <span>Don't have an account?</span>
        <button onClick={() => dispatch(openModal('signup'))}>
          Join
        </button>
      </div>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
