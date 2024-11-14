import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import axios from 'axios';

const Map = ({ routeId }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/location/${routeId}`);
                setLocations(response.data);
            } catch (error) {
                console.error("Error fetching location data:", error);
            }
        };

        fetchLocations();
    }, [routeId]);

    const mapContainerStyle = {
        width: '100%',
        height: '500px'
    };

    const center = {
        lat: locations[0]?.latitude || 0,
        lng: locations[0]?.longitude || 0
    };

    const path = locations.map(loc => ({ lat: loc.latitude, lng: loc.longitude }));

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>


            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
                {locations.map((location, index) => (
                    <Marker key={index} position={{ lat: location.latitude, lng: location.longitude }} />
                ))}
                <Polyline path={path} options={{ strokeColor: '#FF0000' }} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
