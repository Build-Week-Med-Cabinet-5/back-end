const router = require('express').Router();
const Users = require('./users-model.js');
const Recommendations = require('../recommendations/users-strain-recommendations-model.js');
const authenticate = require('../auth/tokenValidation.js');


// -- User endpoints here!! -- //

// Get all users
// **Works with no restricted, doesn't work with**
router.get('/', authenticate, (req, res) => {
    Users.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json({errorMessage: 'Users could not be retrieved from the server.', err}));
});

// GET user by ID
// **WORKS**
router.get('/:id', authenticate, (req, res) => {
    const { id } = req.params

    Users.findById(id)
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json({errorMessage: 'Users could not be retrieved from the server.'}));
});

router.get('/:id/recommendations', (req, res) => {
    Recommendations
        .findByUserId(req.params.id)
        .then(recommendation => {
            if (recommendation.length) {
                res.status(200).json(recommendation)
            } else {
                res.status(404).json({ message: 'Recommendations could not be found.' });
            }
        })
        .catch(error => res.status(500).json({ message: 'Error getting the user recommendations', error }));
});

router.post('/:id/recommendations', (req, res) => {
    const recommendations = { user_id: parseInt(req.params.id), ...req.body }
    return Recommendations.add(recommendation)
        .then(async () => {
            const strain = await usersStrainRecommendationsModel.findByUserId({ id: recommendations.strain_id }).first()
            res.status(201).json({ message: `The strain ${strain.strain} has been added.`, recommendation });
        })
        .catch(err => console.log(500).json({ errorMessage: 'Error adding the recommendation.', err }));
});

router.put('/:id', authenticate, (req, res) => {
    Users.update(req.params.id, req.body)
        .then(user => {
            if (user) {
                res.status(200).json({ message: 'The user profile has been updated.'});
            } else {
                res.status(404).json({ errorMessage: 'The user could not be found.'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Server error updating the user.'});
        });
});

// Delete user by ID
// **WORKS**
router.delete('/:id', authenticate, (req, res) => {
    const { id } = req.params

    Users.remove(id)
        .then(id => {
            if (id === 0) {
                res.status(400).json({ errorMessage: 'The user with that id does not exist.'})
            } else {
                res.status(200).json({ message: 'The user has been deleted.'});
            }
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({ errorMessage: 'Error removing the user.', err });
        });
});


module.exports = router;