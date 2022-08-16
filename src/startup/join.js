const db = require('../models/index');

const Company = db.companies;
const Employee = db.employee;

// Relation between Company And Employee
module.exports = function () {
  // eslint-disable-next-line no-unused-expressions, no-sequences
  Employee.belongsTo(Company, { constraints: true, onDelete: 'CASCADE' }),
  Company.hasMany(Employee);
};
