import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions.js';
import SessionForm from './session_form.jsx';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
  return ({
    errors: errors.session,
    formType: 'signup'
  });
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => {return dispatch(signup(user));},
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
