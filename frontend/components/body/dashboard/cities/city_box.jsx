import React from 'react';
import { withRouter } from 'react-router';


class CityBox extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const divName = `city-box-${this.props.cityName}`;
    return(
      <div className={divName} onClick={() =>
          this.props.history.push(`/cities/${this.props.cityId}`)}>
        <section className='city-box-header'>
          <a>
            {this.props.cityName}
          </a>
        </section>
      </div>
    );
  }
}

export default withRouter(CityBox);
