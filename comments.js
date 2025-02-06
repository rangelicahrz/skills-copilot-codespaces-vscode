// Create web server
const express = require('express');
const app = express();

// Create a route for GET request
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Create a route for POST request
app.post('/comments', function(req, res) {
  res.send('You are trying to post a comment');
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});