import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      logged_in: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      () => this.props.closeModal()).then(
      () => {this.props.history.replace('/dashboard');}
      );

    return this.setState({
      ['logged_in']: true
    });
  }

  renderLoginErrors(){
    return (
      <ul className='login-errors'>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						<a>{error}</a>
					</li>
				))}
			</ul>
    );
  }

  renderSignupErrors(){
    return (
      <ul className='signup-errors'>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						<a>{error}</a>
					</li>
				))}
			</ul>
    );
  }

  demoLogin(){
    this.setState({
      username: 'Ostrich',
      password: 'andrewswe'
    });
  }

  render(){
    if(this.props.formType === 'login'){
      return(
        <div className='session-login-box'>
          <div className='session-login-header'>
            <div className='login-heading'>
              <h3>Log in to CouchPotato</h3>
            </div>
          </div>
          {this.renderLoginErrors()}
          <form onSubmit={this.handleSubmit} className='login-form'>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
              className="login-input"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className="login-input"
            />
            <input className="login-submit" type="submit" value="Log In" />
            <button className="demo-submit" onClick={() => this.demoLogin() }>
              <a>Demo</a>
            </button>
          </form>
        </div>
      );
    }else{
      return(
        <div className='session-signup-box'>
          <div className='session-signup-header'>
            <div className='signup-heading'>
              <h3>Join CouchPotato for free</h3>
            </div>
          </div>
          {this.renderSignupErrors()}
          <form onSubmit={this.handleSubmit} className='signup-form'>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              className="signup-input"
              />
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
              className="signup-input"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className="signup-input"
            />
            <input className="signup-submit"
              type="submit"
              value="Join with Email" />
          </form>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
