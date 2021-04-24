import React, { useState } from "react";
import ReactMapGL,{NavigationControl} from "react-map-gl";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 12.910582,
    longitude: 77.564005,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  const navControlStyle= {
    right: 10,
    top: 10
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken='pk.eyJ1Ijoicml0d2lrc2hhdyIsImEiOiJja252ajNkdHEwbmZpMnBvYXk3cjA0bXJhIn0.B4U5Vq1wv_TExdRy0QmKFA'
        mapStyle="mapbox://styles/ritwikshaw/cknvkr1341qec17oab30uzrm6"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <NavigationControl style={navControlStyle} />
      </ReactMapGL>
    </div>
  );
}