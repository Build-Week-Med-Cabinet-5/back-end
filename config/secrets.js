// Centralizes our JWT signing secret

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'airisaliquid'
}