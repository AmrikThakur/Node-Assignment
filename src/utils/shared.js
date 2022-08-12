const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET
const phoneNumberRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

function Auth(req, res, next) {

    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).send({ message: 'Access denied, No token provided' })

    const { authorization } = req.headers;
    const isVerfied = jwt.verify(authorization, jwtSecret);

    if (isVerfied) {
        try {
            const decoded = jwt.decode(authorization);
            req.companyId = decoded.companyId;
            next();
        } catch (ex) {
            if (ex.message === "jwt expired") {
                return res.status(403).send({ message: "Authorization token expired" })
            }
            return res.status(400).send({ message: "Invalid Token" })
        }
    } else {
        return res.status(400).send({ message: "Invalid Token" })
    }
}

module.exports = {
    Auth,
    phoneNumberRegex
}