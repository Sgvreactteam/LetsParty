import React, {useState} from 'react'
import {
    MapContainer,
    ScaleControl,
    TileLayer,
    ZoomControl,
    Marker,
    Popup,
  } from "react-leaflet";
  import { LatLng } from "leaflet";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import "./map.css";
  import icon from "leaflet/dist/images/marker-icon.png";
  import iconShadow from "leaflet/dist/images/marker-shadow.png";
import MapOverlay from './MapOverlay';
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;
const Map = () => {
    const position = new LatLng(28.6139, 77.209);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
  return (
    <div className='w-full mt-2 relative'>
        <MapContainer
          className="mapcontainer"
          attributionControl={false}
          center={position}
          zoom={10}
          style={{ height: "150px", width: "20vw", zIndex: "1" }}
        >

          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={DefaultIcon}></Marker>
        </MapContainer>
        <button onClick={() => openModal()} className='py-1 px-4 bg-[#1F2037] rounded-2xl text-white absolute z-50 top-28 left-[30%]'>Show on map</button>
        {modalOpen && <MapOverlay closeModal={closeModal} />}
    </div>
  )
}

export default Map