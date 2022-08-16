const companyRoutes = require('../routes/companies');
const employeRoutes = require('../routes/employee');
const AppError = require('../common/appError');

module.exports = function (app) {
  app.use('/api/v1/company', companyRoutes);
  app.use('/api/v1/employee', employeRoutes);

  // Error middleware for non-existent routes
  app.all('*', (req, res, next) => next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404)));
};
