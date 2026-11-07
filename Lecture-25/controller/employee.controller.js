const Employee = require('../model/employee.model');

// 1. GET ALL EMPLOYEES
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json(employees);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 2. GET EMPLOYEE BY ID
const getEmployeeById = async (req, res) => {
    const id = req.params.id;

    try {
        const employee = await Employee.findById(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found'
            });
        }

        res.json(employee);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 3. CREATE EMPLOYEE
const createEmployee = async (req, res) => {
    try {
        const employees = await Employee.find();

        const maxEmpId = employees.reduce(
            (max, emp) => Math.max(max, emp.empId || 0),
            100
        );

        const employee = await Employee.create({
            empId: maxEmpId + 1,
            ...req.body
        });

        res.status(201).json(employee);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 4. UPDATE EMPLOYEE
const updateEmployee = async (req, res) => {
    const id = req.params.id;

    try {
        const employee =
            await Employee.findByIdAndUpdate(
                id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found'
            });
        }

        res.json(employee);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 5. DELETE EMPLOYEE
const deleteEmployee = async (req, res) => {
    const id = req.params.id;

    try {
        const employee =
            await Employee.findByIdAndDelete(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found'
            });
        }

        res.json(employee);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// EXPORT ALL FUNCTIONS
module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};