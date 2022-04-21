import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet-canvas-marker';
import L from 'leaflet';
import Plane from './plane.png';

const Markers = ({ flights }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const canvasIconLayer = L.canvasIconLayer({}).addTo(map);

    let icon = L.icon({
      iconUrl: Plane,
      iconSize: [40, 36],
      iconAnchor: [10, 9],
    });

    const markers = [];
    flights.forEach(flight => {
      const marker = L.marker([flight.latitude, flight.longitude], {
        icon: icon
      });

      markers.push(marker);
    });

    canvasIconLayer.addMarkers(markers);
  }, [flights, map]);

  return null;
};

export default Markers;
