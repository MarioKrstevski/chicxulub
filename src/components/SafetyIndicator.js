import React from "react";
import PropTypes from "prop-types";

function SafetyIndicator({ danger }) {
  return (
    <div className="safetyIndicatorItem">
      <h3>Safety Status</h3>

      {danger ? (
        <div className="box red"> </div>
      ) : (
        <div className="box green" />
      )}
    </div>
  );
}
SafetyIndicator.propTypes = {
  danger: PropTypes.bool.isRequired
};
export default SafetyIndicator;
