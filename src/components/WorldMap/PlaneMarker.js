import L from 'leaflet';
import Plane from './plane.svg';

const PlaneMarker = new L.icon({
    iconUrl: Plane,
    iconSize: [10, 10],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});

export {PlaneMarker};
