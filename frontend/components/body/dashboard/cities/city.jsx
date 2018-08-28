import React from 'react';
import { withRouter } from 'react-router';
import HostBox from './host_box';

class CityView extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getCity(this.props.match.params.cityId);
  }

  render() {

    let hosts = [];
    if(this.props.city.city){
      let city = this.props.city.city;
      const divName = `${city.name}-view-banner`;
      let cityHosts = this.props.city.city.hosts;
      for(let i = 0; i < cityHosts.length; i++){
        let host = cityHosts[i];
        if(host.id === this.props.currentUser){
          continue;
        }else{
          hosts.push(
            <HostBox key={i}
              hostId={host.id}
              hostName={host.username}
              hostImg={host.main_image_url}
              hostStatus={host.hosting_status}
              />
          );
        }
      }
      debugger
      return(
        <div className='city-view-main-body'>
          <div className={divName}>
            <section className='city-view-body-header'>
              <h2>
                {city.name}
              </h2>
            </section>
          </div>
          <div className='city-hosts-body'>
            <section className='city-hosts-header'>
              <h2>
                Find Hosts in the City!
              </h2>
            </section>
            <div className='city-hosts-list'>
              { hosts }
            </div>
          </div>
        </div>
      );
    }
    return(
      <a></a>
    );
  }
}

export default withRouter(CityView);
