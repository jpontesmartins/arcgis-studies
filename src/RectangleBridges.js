import { useState, useEffect } from "react";
import { loadModules } from "@esri/react-arcgis";

const RectangleBridges = props => {
  const [graphic, setGraphic] = useState(null);

  useEffect(() => {
    
    loadModules(["esri/Graphic"]).then(([Graphic]) => {
        
      const polygon = {
          type: "polygon", // autocasts as new Polygon()
          rings: [
            [-48.61106872558594, -27.63000717141121],
            [-48.504981994628906, -27.63000717141121],
            [-48.504981994628906, -27.558808144296407],
            [-48.61106872558594, -27.558808144296407]
          ]
        };

        const polygon_2 = {
          type: "polygon", // autocasts as new Polygon()
          rings: [
            [
              -48.502578735351555,
              -27.515274877553185
            ],
            [
              -48.41400146484375,
              -27.530498260184274
            ],
            [
              -48.47614288330078,
              -27.479339341068858
            ],
            [
              -48.502578735351555,
              -27.515274877553185
            ]
          ]
        };

        // Create a symbol for rendering the graphic
        const fillSymbol = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: [227, 139, 79, 0.8],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [255, 255, 255],
            width: 1
          }
        };

        // Add the geometry and symbol to a new graphic
        const graphic = new Graphic({
          geometry: polygon,
          symbol: fillSymbol
        });

        const graphic_2 = new Graphic({
          geometry: polygon_2,
          symbol: fillSymbol
        });
        
        setGraphic(graphic);
        props.view.graphics.add(graphic);
        props.view.graphics.add(graphic_2);
        //criar e adicionar outro grafico
        // props.view.graphics.add(graphic);
      })
      .catch(err => console.error(err));

    return function cleanup() {
      props.view.graphics.remove(graphic);
    };
  }, []);

  return null;
};

export default RectangleBridges;
