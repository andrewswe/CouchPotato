import React from 'react';
import { LandingJoinStrip } from '../body_container';

const Body = ({ currentUser, openModal }) => {
  const LandingPageElements = () => {
    return (
      <div className="landing-body">
        <LandingJoinStrip />
      </div>
    );
  };

  return LandingPageElements();
};

export default Body;
