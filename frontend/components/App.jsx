import React from 'react';
import HeaderContainer from './header/header_container';
import Header from './header/header.jsx';
import {
  Route,
  Switch,
} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import LandingBody from './body/landing/landing_body';
import DashBoard from './body/dashboard/user_dash';
import { UserDashBoard } from './body/body_container';
import { UserView }  from './body/user_view/user_container';
import { CityViewPage } from './body/dashboard/cities/cities_container';

const App = () => {
  return (
    <div>
      <Modal />
      <header className='persistent-header'>
        <nav className='nav-elements'>
          <HeaderContainer />
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={ LandingBody }/>
        <ProtectedRoute path="/dashboard" component={ DashBoard }/>
        <ProtectedRoute path="/users/:userId" component={ UserView }/>
        <ProtectedRoute path="/cities/:cityId" component={ CityViewPage }/>
      </Switch>
    </div>
  );
};

export default App;
