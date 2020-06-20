const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const Users = require("../users/users-model.js");

// -- Make sure token is returned when registered as well.
// -- No point in making them sign in and verify again 

// api/auth endpoints
// POST authorized new user to DB
router.post('/register', (req, res) => {
    const user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 6;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash

    Users.add(user)
        .then(savedUser => {
            if (savedUser) {
                const token = generateToken(savedUser);
                res.status(201).json({ message: 'New user has been registered successfully.', data: savedUser, token });
            } else {
                res.status(400).json({ errorMessage: 'Please provide email and  password.' });
            }
        })
        .catch(err => {
            res.status(500).json({ data: err.message });
        });
});

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