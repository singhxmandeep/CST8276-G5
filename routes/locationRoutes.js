const express = require('express');
const { saveLocation, getLocationsByRoute } = require('../controllers/locationController');
const router = express.Router();

// Route to save location data
router.post('/location', saveLocation);

// Route to retrieve location data by route ID
router.get('/location/:routeId', getLocationsByRoute);

module.exports = router;