const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    routeId: { type: String, required: true }
});

module.exports = mongoose.model('Location', locationSchema);
