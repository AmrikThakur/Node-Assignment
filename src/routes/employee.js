const express = require('express')
const employeeController = require('../controllers/employee')
const { validateEmployee } = require('../middleware/validations/employee')
const { Auth } = require("../utils/shared")
const router = express.Router()

router.get('/', Auth ,employeeController.getAllEmployee)

router.post('/', Auth ,employeeController.createEmployee)

router.put('/:id', Auth ,employeeController.updateEmployee)

router.delete('/:id', Auth ,employeeController.deleteEmployee)


module.exports = router;