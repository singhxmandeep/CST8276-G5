require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import CORS for cross-origin support
const connectDB = require('./config/db');
const locationRoutes = require('./routes/locationRoutes');

// Confirm that the MongoDB URI is loaded
console.log("MongoDB URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/api', locationRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
