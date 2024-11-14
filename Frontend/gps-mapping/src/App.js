// src/App.js
import React, { useState } from 'react';
import Map from './map.js';

const App = () => {
    const [routeId, setRouteId] = useState('route001');  // Default routeId for testing

    const handleRouteIdChange = (e) => {
        setRouteId(e.target.value);
    };

    return (
        <div className="App">
            <h1>GPS Location Mapping</h1>
            <input
                type="text"
                placeholder="Enter Route ID"
                value={routeId}
                onChange={handleRouteIdChange}
            />
            <Map routeId={routeId} />
        </div>
    );
};

export default App;
