const Joi = require('joi')
const { phoneNumberRegex } = require('../../utils/shared')
const AppError = require('../../common/appError')

module.exports = function (req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required().messages({
            'string.min': `name should have a minimum length of {#limit}!`,
            'string.max': `name should have a minimum length of {#limit}!`,
            'any.required': 'name is required!'
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'Email is not invalid!',
            'any.required': 'Email is required!'
        }),
        phone: Joi.string().pattern(phoneNumberRegex).required().messages({
            'string.pattern.base': 'Invalid phone number!',
            'any.required': `Phone number is a required field!`
        }),
        website: Joi.string().min(3).max(30).optional().allow('').messages({
            'string.min': `website should have a minimum length of {#limit}!`,
            'string.max': `website should have a minimum length of {#limit}!`,
        }),
    })
    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).send({ message: error.details[0].message })
    }
    return next()
}

// module.exports = validateCompanies
// export default validateCompanies
