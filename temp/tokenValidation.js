// -- Use JWT and secrets to verify user
const jwt = require('jsonwebtoken');

// -- Method to verify that an auth token is:
// 1) Included as a header
// 2) Is valid
// 3) Not expired (time limit based on options)

module.exports = (req, res, next) => {

    try {
        const secret = process.env.JWT_SECRET
        const token = req.headers.authorization.split(' ')[1];

        if (token) {
            jwt.verify(token, secret, (err, decodedToken) => {
                if (err) {
                    res.status(401).json({ errorMessage: 'Token is invalid.' });
                } else {
                    req.decodedJwt = decodedToken;
                    console.log(req.decodedJwt);
                    next();
                }
            })
        } else {
            throw new error('Invalid auth data');
        }
    } catch (err) {
        res.status(401).json({ error: err.message });
    }

};