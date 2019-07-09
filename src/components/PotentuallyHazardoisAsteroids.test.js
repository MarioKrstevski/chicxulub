import React from "react";
import ReactDOM from "react-dom";
import PotentuallyHazardousAsteroids from "./PotentuallyHazardousAsteroids.js";

it("PotentuallyHazardousAsteroids loads without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PotentuallyHazardousAsteroids value={5} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
