import { MapContainer, TileLayer } from 'react-leaflet';
import Markers from './Markers';

import 'leaflet/dist/leaflet.css';

const WorldMap = ({ flights }) => {
  return (
    <div>
      <MapContainer
        center={[52.237049, 21.017532]}
        zoom={6}
        style={{ height: '100vh' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Markers flights={flights}/>
      </MapContainer>
    </div>
  );
};

export default WorldMap;
