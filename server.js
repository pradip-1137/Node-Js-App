// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

// Use environment variables
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "!!!!!...Hi Pavan sir, I changed this code 2 time..!!!!!!";

// Basic route
app.get('/', (req, res) => {
    res.send(MESSAGE);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
