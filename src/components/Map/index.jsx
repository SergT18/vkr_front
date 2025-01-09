import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ coord }) => {
  if (
    coord.indexOf(";") === -1 ||
    coord.indexOf("lat>") === -1 ||
    coord.indexOf("lon>") === -1
  ) {
    console.log("Error format coordinates");
    return;
  }
  const coordArray = coord.split(";");
  const lon = coordArray[0].substr(coordArray[0].indexOf(">") + 1).trim();
  const lat = coordArray[1].substr(coordArray[1].indexOf(">") + 1).trim();

  return (
      <MapContainer
        center={[lat, lon]}
        zoom={30}
        scrollWheelZoom={true}
        className="h-screen"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]} icon={iconMarker}></Marker>
      </MapContainer>
  );
};


const iconMarker = new L.Icon({
    iconUrl: require('../../assets/img/marker-icon.png'),
    iconRetinaUrl: require('../../assets/img/marker-icon.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(25, 41),
    className: 'leaflet-div-icon'
});

//   (isMe &&
//     (isReaded ? (
//       <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />
//     ) : (
//       <img
//         className="message__icon-readed message__icon-readed--no"
//         src={noReadedSvg}
//         alt="No readed icon"
//       />
//     ))) ||
//   null;

export default Map;
