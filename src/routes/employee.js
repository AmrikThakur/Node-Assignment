const express = require('express')
const employeeController = require('../controllers/employee')
const validateEmployee = require('../middleware/validations/employee')
const auth = require('../middleware/authMiddleware')
const router = express.Router()

router.get('/', [auth], employeeController.getAllEmployee)

router.post('/', [auth, validateEmployee], employeeController.createEmployee)

router.put('/:id', [auth, validateEmployee], employeeController.updateEmployee)

router.delete('/:id', [auth], employeeController.deleteEmployee)

module.exports = router;