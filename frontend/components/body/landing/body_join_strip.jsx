import React from 'react';

const BodyJoinStrip = ({ openModal }) => {
  const joinStrip = () => {
    return (
      <section className='landing-join-strip'>
        <div className='landing-join-strip-contents'>
          <h2 className='landing-join-strip-header'>
            Stay with Locals and Meet Travelers
          </h2>
          <h2 className='landing-join-strip-subheader'>
            Share Authentic Travel Experiences
          </h2>
          <ul className='landing-join-strip-sessions'>
            <li>
              <button className='facebook-signup-btn'
                onClick={() => openModal('signup')}>
                <a>Join with Facebook</a>
              </button>
              <button className='email-signup-btn'
                onClick={() => openModal('signup')}>
                <a>Join with Email</a>
              </button>
            </li>
          </ul>
        </div>
      </section>
    );
  };

  return joinStrip();
};

export default BodyJoinStrip;
