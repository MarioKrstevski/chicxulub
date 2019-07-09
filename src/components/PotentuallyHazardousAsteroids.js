import React from "react";
import PropTypes from "prop-types";

function PotentuallyHazardousAsteroids({ value }) {
  return (
    <div className="hazardousAsteroids">
      <p>
        There are <span> {value}</span> potentually hazardous asteroids for the
        next week.
      </p>
    </div>
  );
}

PotentuallyHazardousAsteroids.propTypes = {
  value: PropTypes.number.isRequired
};

export default PotentuallyHazardousAsteroids;
