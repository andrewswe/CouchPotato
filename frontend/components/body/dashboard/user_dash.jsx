import React from 'react';
import { withRouter } from 'react-router';
import { UserSideBar } from '../body_container';
import SideBar from '../sidebar/sidebar';
import { ExploreCitiesBox } from './cities/cities_container';


class DashBoard extends React.Component {
  render() {
    const UserDash = (
      <div className="user-dashboard">
        <div className='user-dashboard-sidebar'>
          <UserSideBar />
        </div>
        <div className='user-dashboard-main'>
          <ExploreCitiesBox />
        </div>
      </div>
    );

    return UserDash;
  }
}

export default withRouter(DashBoard);
