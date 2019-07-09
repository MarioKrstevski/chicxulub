import React from "react";
import ReactDOM from "react-dom";
import FastAsteroidList from "./FastAsteroidList.js";

it("FastAsteroidList without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FastAsteroidList list={[{}, {}]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
