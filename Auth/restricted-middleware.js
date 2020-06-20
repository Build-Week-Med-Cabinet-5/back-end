// -- Use JWT and secrets to verify user
const jwt = require('jsonwebtoken');

// -- Method to verify that an auth token is:
// 1) Included as a header
// 2) Is valid
// 3) Not expired (time limit based on options)

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        const secret = process.env.JWT_SECRET || 'air is a liquid';

        jwt.verify(authorization, secret, function(err, decodedToken) {
            if (err) {
                res.status(401).json({ errorMessage: 'Token is invalid.' });
            } else {
                req.token = decodedToken;

                next();
            }
        });
    } else {
        res.status(400).json({ errorMessage: 'Please login and try again.' })
    }
};