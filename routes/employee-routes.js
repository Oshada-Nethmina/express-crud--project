const express = require('express')
const router = express.Router()
const { saveEmployee } = require('../controller/employee-controller')
const { getEmployees } = require('../controller/employee-controller')
const { updateEmployee } = require('../controller/employee-controller')

router.post('/save', saveEmployee)
router.get('/get', getEmployees)
router.put('/update', updateEmployee)

    
module.exports = router