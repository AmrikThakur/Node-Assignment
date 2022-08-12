const jwt = require('jsonwebtoken')

exports.jwtToken = process.env.JWT_TOKEN

exports.VerifyJWTToken = (token) => {
    return new Promise(function (resolve, reject) {
        jwt.verify(token, jwtToken, function (err, decoded) {
            if (decoded) return resolve(decoded)
            return reject(err)
        })
    })
}
exports.phoneNumberRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
