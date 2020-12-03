import * as React from "react";
import { Map } from "@esri/react-arcgis";
import RectangleBridges from "./RectangleBridges"; // The Graphic component we just made

export default props => (

  <Map class="full-screen-map"
    mapProperties={{
      basemap: 'gray-vector'
    }}

    viewProperties={{
      center: [-48.51390838623047, -27.595934774495042],
      zoom: 10,
    }}
  >
    <RectangleBridges />
  </Map>
);
