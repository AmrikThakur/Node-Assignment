const express = require('express')
const companyController = require('../controllers/companies')
const { validateCompanies } = require('../middleware/validations/companies')
const router = express.Router()


router.get('/', companyController.getAllCompanies)

router.post('/',companyController.createCompany)
// router.post('/', function () {
//  companyController.createCompany
// });

router.put('/:id', companyController.updateCompany)

router.delete('/:id', companyController.deleteCompanyAPI)


module.exports = router;