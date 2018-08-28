import React from 'react';
import { withRouter } from 'react-router';

class HostBox extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let hosting = (<h3 className='host-info-hosting-no'>
      Not Accepting Guests
      </h3>);

    if(this.props.hostStatus){
      hosting = (<h3 className='host-info-hosting-yes'>
      Accepting Guests
      </h3>);
    }

    return(
      <div className='city-view-host-box' onClick={() =>
          this.props.history.push(`/users/${this.props.hostId}`)
          }>
        <ul className='city-host-info'>
          <li className='city-host-info-photo'>
          </li>
          <li className='city-host-info-container'>
            <h2>{ this.props.hostName }</h2>
            { hosting }
          </li>
        </ul>
      </div>
    );
  }
}


export default withRouter(HostBox);
