import React from 'react';
import { withRouter } from 'react-router';
import CityBox from './city_box';

class CitiesPreview extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getCities("");
  }

  render() {

    let cities;
    if(this.props.cities.cities){
      let list = Object.values(this.props.cities.cities);
      let newCities = [];
      for(let i = 0; i < list.length && i < 6; i++){
        let city = list[i];
        newCities.push(
          <CityBox key={city.id}
            cityId={city.id}
            cityName={city.name}
            cityImg={city.image_url}
          />
        );
      }
      cities = newCities;
    }

    return(
      <div className="dashboard-cities">
        <div className='explore-cities-header'>
          <i className="fas fa-plane"></i>
          <h2>Explore and Meet Travelers Around the World!</h2>
        </div>
        <div className='explore-cities-body'>
          {cities}
        </div>
      </div>
    );
  }
}

export default CitiesPreview;
