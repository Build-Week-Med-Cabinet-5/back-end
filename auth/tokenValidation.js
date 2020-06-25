// -- Use JWT and secrets to verify user
const jwt = require('jsonwebtoken');

// -- Method to verify that an auth token is:
// 1) Included as a header
// 2) Is valid
// 3) Not expired (time limit based on options)

function authenticate(req, res, next) {
    // const { authorization } = req.headers
    const token = req.get('Authorization');

    if (token) {
        const secret = process.env.JWT_SECRET || 'air is a liquid';

        //verify if token is valid
        jwt.verify({ token, secret, function(error, decodedToken) {
            if (error) {
                res.status(401).json({ error: 'Token is invalid.' })
            } else {
                req.token = decodedToken;
                user;
                next();
            }
        });
    } else {
        res.status(404).json({ error: 'Please login first to access this information.', });
    }
};

module.exports = authenticate;