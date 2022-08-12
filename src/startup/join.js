const db = require('../models/index')
const Company = db.companies;
const Employee = db.employee;

module.exports = function () {
    Employee.belongsTo(Company, { constraints: true, onDelete: 'CASCADE' }),
        Company.hasMany(Employee);
}