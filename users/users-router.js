const router = require('express').Router();
const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
// const { findAll } = require('./users-model.js');


// -- User endpoints here!! -- //

// Get all users
router.get('/', restricted, (req, res) => {
    Users.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json({errorMessage: 'Users could not be retrieved from the server.'}));
});

router.put('/:id', (req, res) => {
    Users.update(req.params.id, req.body)
        .then(user => {
            if (user) {
                res.status(200).json({ message: `${user}'s profile has been updated.`});
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
router.delete('/:id', (req, res) => {
    const user = req.body
    const { id } = req.params 
    Users.remove(user)
        .then(id => {
            if (id === 0) {
                res.status(400).json({ errorMessage: 'The user could not be deleted.'})
            } else {
                res.status(200).json({ message: 'The user has been deleted.'});
            }
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({ errorMessage: 'Error removing the user.' });
        });
});


module.exports = router;