import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const MapBox = ({ coords }) => {

    return (
        <MapContainer center={coords} zoom={17} scrollWheelZoom={false} style={{ height: '600px', width: '800px' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coords}>
            </Marker>
        </MapContainer>
    )
}


export default MapBox;