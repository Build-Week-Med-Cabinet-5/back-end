const router = require('express').Router();
const Strains = require('./strain-recommendation-model');
const authenticate = require('../auth/tokenValidation.js');


// -- Strain Endpoints here!! -- //

// GET user strains
// untested
router.get('/', authenticate,  (req, res) => {
    Strains
        .find()
        .then(strains => res.status(200).json(strains))
        .catch(err => res.status(500).json({ message: 'Error with the request.', err }));
});

router.get('/:id', authenticate,  (req, res) => {
const { id } = req.params;

    Strains
        .findById(id)
        .then(strains => res.status(200).json(strains))
        .catch(err => res.status(500).json({ message: 'Error with the request.', err }));
});

// POST user strains
// untested
router.post('/', authenticate, (req, res) => {
    Strains
        .add(req.body)
        .then(strain => res.status(200).json(strain))
        .catch(err => res.status(500).json({ message: 'The strain could not be added.', err }));
});

// DELETE user strains
// untested
router.delete('/:id', authenticate, (req, res) => {
    const { id } = req.params

    Users.remove(id)
        .then(id => {
            if (id === 0) {
                res.status(400).json({ errorMessage: 'The strain with that id does not exist.'})
            } else {
                res.status(200).json({ message: 'The strain has been deleted.'});
            }
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({ errorMessage: 'Error removing the strain.', err });
        });
});


module.exports = router;