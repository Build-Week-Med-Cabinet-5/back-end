const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const Users = require("../users/users-model.js");
const { validateUser } = require('../users/user-validation.js');

// -- Make sure token is returned when registered as well.
// -- No point in making them sign in and verify again 

// api/auth endpoints
// POST authorized new user to DB
router.post('/register', (req, res) => {
    const credentials = req.body;

    if (validateUser(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 6;
        const hash = bcrypt.hashSync(credentials.password, rounds);
        credentials.password = hash

        Users.add(credentials)
            .then(user => {
                const token = generateToken(saved);
                res.status(201).json({ message: 'New user has been registered successfully.', data: user, token });
            })
            .catch(err => {
                res.status(500).json({ data: err.message });
            })
        } else {
            res.status(400).json({ errorMessage: 'Please provide email and password.' });
        }
});

// POST login existing authenticated user from db
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (req.body) {
        Users.findBy({ email })
            .first()
            .then(user => {
                // -- Compares the DB stored password and hash
                if (user && bcrypt.compareSync(password, user.password)) {
                    // Give user a token
                    const token = generateToken(user);
                    res.status(200).json({ message: `Welcome to med-cabinet, ${user.first_name}.`, token });
                } else {
                    res.status(401).json({ errorMessage: 'Invalid credentials, please try again.' });
                }
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } else {
        res.status(400).json({ errorMessage: 'Please provide email and  password.'});
    }
});


// -- Used as a helper method for POST /api/auth/login & POST /api/auth/register
// -- Also used for our GET /token for server.js
function generateToken(user) {
    const payload = {
        // -- Assign privilages for the token
        id: user.id,
    };

    const secret = process.env.JWT_SECRET || 'air is a liquid'

    const options = {
        // -- Sets a time limit on the JWT auth
        expiresIn: "2h"
    };

    return jwt.sign(payload, secret, options);
}

module.exports = router;