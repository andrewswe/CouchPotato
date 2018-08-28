import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const Modal = ({ modal, closeModal }) => {
  if(!modal){
    return null;
  }

  let component;
  switch(modal){
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="session-modal-main" onClick={closeModal}>
      <div className="session-modal-box" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
