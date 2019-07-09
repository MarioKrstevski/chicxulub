import React from "react";

export default function BigAsteroidList(props) {
  const listBigAsteroids = props.list.map(asteroid => (
    <li key={asteroid.id}>{asteroid.name} </li>
  ));

  return (
    <div className="baList">
      <h2>Big Asteroids This Week</h2>
      <ul>{listBigAsteroids}</ul>
    </div>
  );
}
