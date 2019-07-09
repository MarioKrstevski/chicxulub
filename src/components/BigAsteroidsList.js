import React from "react";
import PropTypes from "prop-types";

function ListItem(props) {
  return <li>{props.value}</li>;
}

function BigAsteroidList({ list }) {
  const listBigAsteroids = list.map(asteroid => (
    <ListItem key={asteroid.id} value={asteroid.name} />
  ));

  return (
    <div className="baList">
      <h2>Big Asteroids This Week</h2>
      <ul>{listBigAsteroids}</ul>
    </div>
  );
}

BigAsteroidList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BigAsteroidList;
