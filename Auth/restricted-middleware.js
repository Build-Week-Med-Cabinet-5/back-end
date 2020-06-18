// -- Use JWT and secrets to verify user
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');


// -- Method to verify that an auth token is:
// 1) Included as a header
// 2) Is valid
// 3) Not expired (time limit based on options)
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ");
        if (token) {
            jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
                if (err) {
                    res.status(401).json({ errorMessage: 'Token cannot be verified.'});
                } else {
                    req.decodedJwt = decodedToken;
                    console.log(req.decodedJwt);
                    next();
                }
            });
        } else {
            throw new error('Auth data is invalid.');
        }
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};