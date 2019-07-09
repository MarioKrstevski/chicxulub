import React from "react";
import PropTypes from 'prop-types';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

 function FastAsteroidList({list}) {
  const listFastAsteroids = list.map(asteroid => (
    <ListItem key={asteroid.id} value={asteroid.name}/>
  ));

  return (
    <div className="faList">
      <h2>Fast Asteroids This Week</h2>
      <ul>{listFastAsteroids}</ul>
    </div>
  );
}

FastAsteroidList.propTypes = {
  list:PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FastAsteroidList;
