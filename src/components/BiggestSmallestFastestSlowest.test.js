import React from "react";
import ReactDOM from "react-dom";
import BiggestSmallestFastestSlowest from "./BiggestSmallestFastestSlowest.js";

it("BiggestSmallestFastestSlowest loads without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BiggestSmallestFastestSlowest
      stats={{
        fastest: {
          name: "Fastest"
        },
        slowest: {
          name: "Slowest"
        },
        biggest: {
          name: "Biggest"
        },
        smallest: {
          name: "Smallest"
        }
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
