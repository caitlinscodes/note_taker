/* All routes beginning in /api/entity2 end up here */

const router = require('express').Router();


// GET Route
router.get('/', (req, res) => {
  res.json({
    name: "hello2"
  })
});

// POST Route
router.post('/', (req, res) => {

});

module.exports = router;
