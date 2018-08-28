import React from 'react';
import { UserSideBar } from './user_sidebar_container';
import { withRouter } from 'react-router';

class ProfileView extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.getUser(this.props.match.params.userId);
    this.props.getSpot(this.props.match.params.userId);

  }

  componentDidMount(){

  }

  render() {
    let userProfile = this.props.currentUser;
    let spotDescription = (
      'Hello'
    );

    if(this.props.user){
      userProfile = this.props.user;
      spotDescription = this.props.user.spot.description;
    }

    let hostingStatus = (
      <a className='user-hosting-false'>
        Not Accepting Guests
      </a>
    );



    if(userProfile.hosting_status){
      hostingStatus = (
        <a className='user-hosting-true'>
          Accepting Guests
        </a>
      );
    }

    return (
      <div className='user-profile-view'>
        <div className='user-dashboard-sidebar'>
          <UserSideBar currentUser={userProfile}/>
        </div>
        <div className='user-profile-main-dashboard'>
          <div className='user-profile-hosting'>
            {hostingStatus}
          </div>
          <div className='user-profile-info'>
            <section className='user-info-header'>
              <a>About Me</a>
            </section>
            <section className='user-info-body'>
              <p>{userProfile.description}</p>
            </section>
          </div>
          <div className='user-spot-info'>
            <section className='user-spot-info-header'>
              <a>My Home</a>
            </section>
            <section className='user-spot-info-body'>
              <p>{spotDescription}</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileView);
