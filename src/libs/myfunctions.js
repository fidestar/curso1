const jwt = require('jsonwebtoken');

module.exports = {

    refresh_token: (req, res, data, message) => {
        const user = jwt.verify(req.header('acces_token'), process.env.ACCES_SECRET)
        const acces_token = jwt.sign({first_name: user.first_name, _id: user._id}, process.env.ACCES_SECRET, {expiresIn : '1d'})
        tokens={"acces_token": acces_token, "refresh_token": req.header('refresh_token')}
        res.header(tokens).json({
            error: null,
            data,
            message
        })
    },

    suma: (a, b) => {
        return a+b
    }

}