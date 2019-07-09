import React from "react";

export default function FastAsteroidList(props) {
  const listFastAsteroids = props.list.map(asteroid => (
    <li key={asteroid.id}>{asteroid.name} </li>
  ));

  return (
    <div className="faList">
      <h2>Fast Asteroids This Week</h2>
      <ul>{listFastAsteroids}</ul>
    </div>
  );
}
