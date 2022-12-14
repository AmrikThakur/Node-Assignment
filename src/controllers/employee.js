const db = require('../models/index');

const Employee = db.employee;
const Company = db.companies;
const asyncMiddleware = require('../middleware/async');

// Get Employee API
exports.getAllEmployee = asyncMiddleware(async (req, res) => {
  const data = await Employee.findAll();
  return res.status(200).send({
    message: 'Employee lists fetched',
    values: data,
  });
});

// Create Employee API
exports.createEmployee = asyncMiddleware(async (req, res) => {
  const body = { ...req.body };
  const company = await Company.findByPk(body.companyId);
  if (!company) return res.status(400).send({ message: 'Company Id is required' });
  const data = await company.createEmployee(body);
  return res.status(200).send({
    message: 'Employee Created Successfully',
    values: data,
  });
});

// Update Employee API
exports.updateEmployee = asyncMiddleware(async (req, res) => {
  const employeeId = req.params.id;
  const {
    firstName, lastName, email, phone,
  } = req.body;

  const data = await Employee.findByPk(employeeId);
  if (!data) return res.status(400).send({ message: 'Employee does not exist with this id' });

  data.firstName = firstName;
  data.lastName = lastName;
  data.email = email;
  data.phone = phone;

  data.save();
  return res.status(200).send({
    message: 'Employee Updated Successfully',
    values: data,
  });
});

// Delete Employee API
exports.deleteEmployee = asyncMiddleware(async (req, res) => {
  const data = await Employee.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).send({
    message: 'Employee Deleted Successfully',
    values: data,
  });
});
