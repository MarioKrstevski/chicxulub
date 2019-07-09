import React from "react";
import PropTypes from "prop-types";

function BiggestSmallestFastestSlowest({ stats }) {
  const { biggest, smallest, fastest, slowest } = stats;

  return (
    <div className="bsfs">
      <p>Biggest asteroid is {biggest.name} </p>
      <p>Smallest asteroid is {smallest.name} </p>
      <p>Fastest asteroid is {fastest.name} </p>
      <p>Slowest asteroid is {slowest.name} </p>
    </div>
  );
}

BiggestSmallestFastestSlowest.propTypes = {
  stats: PropTypes.object.isRequired
};

export default BiggestSmallestFastestSlowest;
