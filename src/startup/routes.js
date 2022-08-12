const cors = require('cors')
const express = require('express')
const companyRoutes = require('../routes/companies')
const employeRoutes = require('../routes/employee')

module.exports = function (app) {
    app.use(cors())
    app.use(express.json())
    app.use('/api/v1/company', companyRoutes)
    app.use('/api/v1/employee', employeRoutes)
}