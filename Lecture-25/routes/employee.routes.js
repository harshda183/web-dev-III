const express = require('express');

const router = express.Router();

const {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controller/employee.controller');


// GET ALL EMPLOYEES
router.get('/', getEmployees);


// GET EMPLOYEE BY ID
router.get('/:id', getEmployeeById);


// CREATE EMPLOYEE
router.post('/', createEmployee);


// UPDATE EMPLOYEE
router.put('/:id', updateEmployee);


// DELETE EMPLOYEE
router.delete('/:id', deleteEmployee);


module.exports = router;