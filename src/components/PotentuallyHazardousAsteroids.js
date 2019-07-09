import React from "react";

export default function PotentuallyHazardousAsteroids(props) {
  return (
    <div className="hazardousAsteroids">
     <p> There are <span> {props.value}</span> potentually hazardous asteroids for the next week.</p>
    </div>
  );
}
