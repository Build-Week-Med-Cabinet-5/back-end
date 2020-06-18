const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");


// -- Make sure token is returned when registered as well.
// -- No point in making them sign in and verify again 

router.post('/register', (req, res) => {
    const credentials = req.body;

    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 6;
        const hash = bcryptjs.hashSync(credentials.password, rounds);
        credentials.password = hash;

        Users.add(credentials)
            .then(user => {
                const token = genToken(saved);
                res.status(201).json({ data: user, token });
            })
            .catch(Err => {
                res.status(500).json({ data: error.message });
            });
    } else {
        res.status(400).json({ errorMessage: 'Please provide username and  password.' });
    }
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (isValid(req.body)) {
        Users.findBy({ username: username })
            then(([user]) => {
                // -- Compares the DB stored password and hash
                if (user && bcryptjs.compareSync(password, user.password)) {
                    const token = generateToken(user);
                    res.status(200).json({ message: 'Welcome to our API.', token });
                } else {
                    res.status(401).json({ errorMessage: 'Invalid user credentials.' });
                }
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
        } else {
            res.status(400).json({ errorMessage: 'Please provide username and  password.'});
        }
});


// -- Used as a helper method for POST /api/auth/login & POST /api/auth/register
// -- Also used for our GET /token for server.js
function generateToken(user) {
    const payload = {
        // -- Assign privilages for the token
        subject: user.id,
        username: user.username,
        role: user.role
    };

    const options = {
        // -- Sets a time limit on the JWT auth
        expiresIn: "2h"
    };

    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;