const Joi = require('joi')
const { phoneNumberRegex } = require('../../utils/shared')

module.exports = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(30).required().messages({
            'string.min': `firstName should have a minimum length of {#limit}!`,
            'string.max': `firstName should have a minimum length of {#limit}!`,
            'any.required': 'firstName is required!'
        }),
        lastName: Joi.string().min(3).max(30).required().messages({
            'string.min': `LastName should have a minimum length of {#limit}!`,
            'string.max': `LastName should have a minimum length of {#limit}!`,
            'any.required': 'LastName is required!'
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'Email is not invalid!',
            'any.required': 'Email is required!'
        }),
        phone: Joi.string().pattern(phoneNumberRegex).required().messages({
            'string.pattern.base': 'Invalid phone number!',
            'any.required': `Phone number is a required field!`
        }),
        companyId: Joi.string().required().messages({
            'any.required': `CompanyId is required!`
        })
    })
    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).send({ message: error.details[0].message })
    }
    return next()
}
