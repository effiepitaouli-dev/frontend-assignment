import React, { useContext, useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import { MapContext } from '../../contexts/MapContext';

export const Map = () => {
    // Get the map configuration from the MapContext
    const { config, data } = useContext(MapContext);

    // Create a ref to store the Leaflet map instance
    const mapRef = useRef(null);

    // Initialize the map when the component mounts
    useEffect(() => {
        const { center, zoom } = config;
        const map = L.map(mapRef.current).setView(center, zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
    }, []);

    // Update the map markers when the data changes
    useEffect(() => {
        const { data } = config;
        data.forEach((point) => {
            L.marker(point.latlng).addTo(mapRef.current);
        });
    }, [data]);

    return (
        <MapContainer ref={mapRef}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {data.map((point) => (
                <Marker position={point.latlng} key={point.id} />
            ))}
        </MapContainer>
    );
};