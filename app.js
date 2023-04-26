const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/notes', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB'));

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set up ejs as the view engine
app.set('view engine', 'ejs');

// Set up the static files middleware
app.use(express.static('public'));

// Import routes
const notesRoutes = require('./routes/notes');

// Set up the routes middleware
app.use('/notes', notesRoutes);
// Home page route
app.get('/', (req, res) => {
    res.redirect('/notes');
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
