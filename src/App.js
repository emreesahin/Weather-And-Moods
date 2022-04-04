import React from "react";
import { render } from "react-dom";
import GetData from "./getWeather";
const App = () => {
  return (
  <div>
    <GetData/>
  </div>
  );
};

render(<App />, document.getElementById("root"));
