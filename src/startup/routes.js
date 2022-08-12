const companyRoutes = require('../routes/companies')
const employeRoutes = require('../routes/employee')

module.exports = function (app) {
    app.use('/api/v1/company', companyRoutes)
    app.use('/api/v1/employee', employeRoutes)
}