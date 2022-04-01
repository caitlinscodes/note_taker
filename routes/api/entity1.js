/* All routes beginning in /api/entity1 end up here */

const router = require('express').Router();
const { clog } = require('../../middleware/clog');
const { auth } = require('../../middleware/auth');

// GET  api/entity1
router.get('/', auth, (req, res) => {
  console.log(req.authUser)
  res.json({
    name: "hello"
  })
});

// POST Route
router.post('/', (req, res) => {

});

module.exports = router;
