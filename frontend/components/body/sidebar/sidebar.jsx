import React from 'react';


class SideBar extends React.Component {
  constructor(props){
    super(props);


    this.state = {
      currentUser: ''
    };

  }

  render(){
    let userName = '';
    let status = 'Not Accepting Guests';
    if(this.props.loggedIn){
      userName = this.props.loggedIn.username;
      if(this.props.loggedIn.hosting_status){
        status = 'Accepting Guests';
      }
    }

    if(this.props.currentUser){
      userName = this.props.currentUser.username;
      if(this.props.currentUser.hosting_status){
        status = 'Accepting Guests';
      }
    }


    const SideBarElements = (
      <div className="sidebar-elements-user-info">
        <div className='sidebar-user-info-header'>
          <a className="sidebar-user-icon">
          </a>
          <span>{userName}</span>
        </div>
        <div className='sidebar-user-info-hosting-status'>
          <span>{status}</span>
        </div>
      </div>
    );

    const ProfileSideBarElements = (
      <div className="sidebar-elements-user-info">
        <div className='sidebar-user-info-header'>
          <a className="sidebar-user-icon">
          </a>
          <span>{userName}</span>
        </div>
      </div>
    );

    if(this.props.sessionUserId){
      return ProfileSideBarElements;
    }
    else{
      return SideBarElements;
    }
  }
}

export default SideBar;
