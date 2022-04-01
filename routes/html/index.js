/*
  Any route beginning with / comes to this file
*/

const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


router.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

module.exports = router;
