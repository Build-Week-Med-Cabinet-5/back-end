const router = require('express').Router();
const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');


// -- User endpoints here!! -- //

// Get all users
// **WORKS**
router.get('/', restricted, (req, res) => {
    Users.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json({errorMessage: 'Users could not be retrieved from the server.', err}));
});

// GET user by ID
// **WORKS**
router.get('/:id', (req, res) => {
    const { id } = req.params

    Users.findById(id)
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(500).json({errorMessage: 'Users could not be retrieved from the server.'}));
});

// POST new user
// **WORKS**
// -- NOT NEEDED SINCE IT'S NOT ENCRYPTED -- //
// router.post('/', (req, res) => {
//     const newUser = req.body

//     Users.add(newUser)
//         .then((user => res.status(200).json({ message: 'The user has been added.', user})))
//         .catch(() => res.status(400).json({ message: 'Make sure the user has a first name, last name, email, and password.' }));
// });

// UPDATE users by id

router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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