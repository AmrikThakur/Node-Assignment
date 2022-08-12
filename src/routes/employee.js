const express = require('express')
const employeeController = require('../controllers/employee')
const { validateEmployee } = require('../middleware/validations/employee')

const router = express.Router()

router.get('/',employeeController.getAllEmployee)

router.post('/', employeeController.createEmployee)

router.put('/:id', employeeController.updateEmployee)

router.delete('/:id', employeeController.deleteEmployee)


module.exports = router;