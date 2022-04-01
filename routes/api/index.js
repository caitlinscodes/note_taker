/*
  Any route beginning with /api comes to this file
*/

const express = require('express');
const app = express();

// Set up sub-routing (rename these filenames!)
app.use('/entity1', require('./entity1'));
app.use('/entity2', require('./entity2'));

module.exports = app;
