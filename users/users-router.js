const router = require('express').Router();
const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');


// -- User endpoints here!! -- //

// GET users
router.get('/', (req, res) => {

});

// router.get('/id/recommendation', (req, res) => {

// });

// router.post('/:id/recommendation', (req, res) => {

// });

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});


module.exports = router;