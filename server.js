const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');

const PORT = process.env.PORT || 3001;
const app = express();

// Insert global middleware here
// app.use(clog);

// Allow for static files to be accessed
app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up extra routing files
app.use('/api', require('./routes/api/index.js'));
app.use('/', require('./routes/html/index.js'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
