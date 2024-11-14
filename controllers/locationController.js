const Location = require('../models/location');

// Save GPS data
const saveLocation = async (req, res) => {
    try {
        const location = new Location(req.body);
        await location.save();
        res.status(201).json(location);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get locations by route ID
const getLocationsByRoute = async (req, res) => {
    try {
        const locations = await Location.find({ routeId: req.params.routeId });
        res.json(locations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { saveLocation, getLocationsByRoute };
