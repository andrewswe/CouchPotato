const Header = ( { history, currentUser, logout, openModal } ) => {
  const sessionElements = () => {
     return (
       <ul className="session-options">
         <li>
           <button className='signup-btn' onClick={() => openModal('signup')}>
             <a>Join</a>
           </button>
         </li>
         <li>
           <button className='login-btn' onClick={() => openModal('login')}>
             <a>Log In</a>
           </button>
         </li>
       </ul>);
  };

  const userNav = () => {
    return (
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
        <li>
          <button className='user-nav-logout-btn' onClick={() => {
              history.replace('/');
              return logout();
            }
            }>
            <a>Log Out</a>
          </button>
        </li>
      </ul>
    );
  };

  if(!currentUser){
    return sessionElements();
  }else{
    return userNav();
  }
};
