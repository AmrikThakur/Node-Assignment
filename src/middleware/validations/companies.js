const Joi = require('joi')
const { phoneNumberRegex } = require('../../utils/shared')

const validateCompanies = (reqBody) => {
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
        phone: Joi.string().pattern(new RegExp(phoneNumberRegex)).required().messages({
            'string.pattern.base': 'Invalid phone number!',
            'any.required': `Phone number is a required field!`
        }),
        website: Joi.string().min(3).max(30).optional().allow('').messages({
            'string.min': `website should have a minimum length of {#limit}!`,
            'string.max': `website should have a minimum length of {#limit}!`,
        }),
    })
   return schema.validate(reqBody)
}

module.exports = validateCompanies