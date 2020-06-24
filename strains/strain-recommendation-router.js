const router = require('express').Router();
const Strains = require('./strain-recommendation-model');


// -- Strain Endpoints here!! -- //

// GET user strains
// untested
router.post('/', (req, res) => {
    Strains
        .find()
        .then(strains => res.status(200).json(strains))
        .catch(err => res.status(500).json({ message: 'Error with the request.', err }));
});

// POST user strains
// untested

router.post('/', (req, res) => {
    Strains
        .add(req.body)
        .then(strain => res.status(200).json(strain))
        .catch(err => res.status(500).json({ message: 'The strain could not be added.' }));
});


module.exports = router;