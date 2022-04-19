import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { PlaneMarker } from './PlaneMarker';
import React, { useState, useEffect } from 'react';
import { map } from 'd3';

const WorldMap = ({flights}) => {
    const [flightLocations, setFlightLocations] = useState([]);
    useEffect(() => {
        setFlightLocations(flights);
    }, [flights]);

    return (
        <div>
            <MapContainer
                center={[50.0121, 20.9858]}
                zoom={2}
                style={{ height: '100vh'}}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                /> 
                {/* {flightLocations.map(flight => {
                    return (
                        <Marker position={[flight.latitude, flight.longitude]} icon={PlaneMarker} /> 
                    )}
                )} */}

                

            </MapContainer>

        </div>
    );
}

export default WorldMap;