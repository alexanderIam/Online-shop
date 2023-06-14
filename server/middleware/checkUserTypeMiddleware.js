const jwt = require('jsonwebtoken')

module.exports = function(user_type) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] 

            if (!token) {
                return res.status(401).json({message: "Authorization is required"})
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY)

            if (decoded.user_type !== user_type) {
                return res.status(403).json({message: "Access denied"})
            }
            req.user = decoded;
            next()
        } catch (e) {
            res.status(401).json({message: "Authorization is required"})
        }
    };
}
