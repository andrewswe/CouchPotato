import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor(props){
    super(props);

    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleLogoClick(){
    if(this.props.history.location.pathname === '/dashboard'){
      window.scrollTo(0,0);
    }else {
      this.props.history.replace('/dashboard');
    }
  }

  render(){
    const sessionElements = (
      <div className='session-header'>
        <div className='logo'
          onClick={() => this.handleLogoClick() }></div>
        <ul className="session-options">
          <li>
            <button className='signup-btn'
              onClick={() => this.props.openModal('signup')}>
              <a>Join</a>
            </button>
          </li>
          <li>
            <button className='login-btn'
              onClick={() => this.props.openModal('login')}>
              <a>Log In</a>
            </button>
          </li>
        </ul>
      </div>
    );

    const userNav = (
      <div className='session-header'>
        <div className='logo'
          onClick={() => this.handleLogoClick() }></div>
        <ul className="user-nav-elements">
          <li>
            <a className='user-nav-events-btn'>
              Events
            </a>
          </li>
          <li>
            <a className='user-nav-groups-btn'>
              Groups
            </a>
          </li>
          <li className='user-nav-message-box'>
            <a className='far fa-envelope'></a>
          </li>
          <li className='log-out-btn'>
            <button className='user-nav-logout-btn' onClick={() => {
                this.props.history.replace('/');
                return this.props.logout();
              }
              }>
              <a>Log Out</a>
            </button>
          </li>
        </ul>
      </div>
    );

    if(!this.props.currentUser){
      return sessionElements;
    }else{
      return userNav;
    }
  }
}

export default withRouter(Header);
