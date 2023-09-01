require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 5000; // Define the port to listen on

// Serve static files from the 'public' directory
app.use('/images/liveshow', express.static(path.join(__dirname, 'public', 'liveshow')));

app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Server running"
  }) 
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
