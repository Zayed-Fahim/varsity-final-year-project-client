import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import locationMarker from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const GoogleMap = () => {
  return (
    <div className="container mx-auto xl:my-20">
      <MapContainer
        style={{ height: "40vh" }}
        center={[23.7271409, 90.3654296]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={
            new Icon({
              iconUrl: locationMarker,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
          position={[23.7271409, 90.3654296]}
        >
          <Popup>Our office:</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GoogleMap;