
const jwt = require("jsonwebtoken");
const db = require('../models/index')
const Company = db.companies;
const asyncMiddleware = require('../middleware/async')
const AppError = require('../common/appError')
const validateCompanies = require('../middleware/validations/companies')

// Get Companies API
exports.getAllCompanies = asyncMiddleware(async (req, res) => {
    const data = await Company.findAll()
    return res.status(200).send({
        message: 'Companies lists fetched',
        values: data
    })
})

// Create Company API
exports.createCompany = asyncMiddleware(async (req, res, next) => {

    const { error } = validateCompanies(req.body)
    if (error) return next(new AppError(error.details[0].message, 400))

    let body = { ...req.body }
    let data = await Company.create(body);
    const token = jwt.sign({ companyId: data.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    data = JSON.parse(JSON.stringify(data));

    data["token"] = token;
    return res.status(200).send({
        message: 'Company Created Successfully',
        values: data
    })
})

// Update Company API
exports.updateCompany = asyncMiddleware(async (req, res) => {
    const companyId = req.params.id

    let data = await Company.findByPk(companyId)
    if (!data) return res.status(400).send({ message: 'Comapny does not exist with this id' })

    const { name, email, phone, website } = req.body
    data.name = name
    data.email = email
    data.phone = phone
    data.website = website
    data.save()

    return res.status(200).send({
        message: "Company Updated Successfully",
        values: data
    })
})


// Delete Company API
exports.deleteCompanyAPI = asyncMiddleware(async (req, res) => {
    let data = await Company.destroy({
        where: {
            id: req.params.id
        }
    })
    return res.status(200).send({
        message: "Company Deleted Successfully",
        values: data
    })
})
