import React from "react";
import ReactDOM from "react-dom";
import SafetyIndicator from "./SafetyIndicator.js";

it("PotentuallyHazardousAsteroids loads without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SafetyIndicator danger={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
