const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");


// -- Make sure token is returned when registered as well.
// -- No point in making them sign in and verify again 

router.post('/register', (req, res) => {

})

router.post('/login', (req, res) => {

})


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