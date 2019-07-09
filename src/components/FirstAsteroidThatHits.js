import React from 'react';
import PropTypes from 'prop-types';

function FirstAsteroidThatHits({asteroid}){
    const {name} = asteroid;
    let date = "";
    if (asteroid.close_approach_data){
        date = asteroid && asteroid.close_approach_data[0].close_approach_date;
    }

    // if props.asteroid && const {date} = props.asteroid && props.asteroid.close_approach_data[0].close_approach_date;
    return <div className="firstAsteroid">The first asteroid that hits is {name} estemated to impact on {date}</div>
}

FirstAsteroidThatHits.propTypes = {
    asteroid: PropTypes.object.isRequired,
  };

export default FirstAsteroidThatHits;