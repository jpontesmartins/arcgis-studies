import React from "react";
import ReactDOM from "react-dom";
import { Map, Scene, WebMap } from "@esri/react-arcgis";
import RectangleBridges from "./RectangleBridges";
import MapWrapper from "./MapWrapper";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MapWrapper />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
