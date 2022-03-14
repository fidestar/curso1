const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const acces_token = req.header('acces_token')
    const refresh_token = req.header('refresh_token')
    if (!acces_token && !refresh_token) return res.status(401).json({ error: 'Acceso restringidooo' })
    try {
        jwt.verify(acces_token, process.env.ACCES_SECRET)
        jwt.verify(refresh_token, process.env.REFRESH_SECRET)
        next()
    } catch (error) {
        res.status(400).json({error: 'acceso restringido'})
    }
}

module.exports = verifyToken;