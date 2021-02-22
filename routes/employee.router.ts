import { Router, Request, Response } from 'express';
import { Employee } from '../db/db-config';

import EmployeeController from '../controllers/employee.controller';

const router = Router();
const employeeController = EmployeeController.instance;

router.get('/', (req: Request, res: Response) => {
    res.status(201).json({
        ok: true,
        msg: 'GET - SUCCESS'
    });
});

router.post('/create-employee', async (req: Request, res: Response) => {
    try {
        const {
            name,
            otherName,
            surname,
            secondSurname,
            idType,
            idNumber,
            countryEmployment,
            email,
            dateAdmission,
            area,
            state,
        } = req.body;
        
        const employee = await Employee.create({
            name,
            otherName,
            surname,
            secondSurname,
            idType,
            idNumber,
            countryEmployment,
            email,
            dateAdmission,
            area,
            state,
        });

        if (employee) {
            res.status(201).json({
                ok: true,
                employee
            });
        } else {
            res.status(400).json({
                ok: false,
                message: 'Ocurrió un error al tratar de guardar el empleado'
            })
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            error,
            message: 'Ocurrió un error al tratar de crear un nuevo empleado'
        });
    }
});

router.get('/list-employees', employeeController.listEmployee);

router.delete('/delete-employee/:idType/:idNumber', employeeController.deleteEmployee);

router.get('/one-employee/:idType/:idNumber', employeeController.oneEmployee);

router.get('/check-email/:email/:idType/:idNumber', employeeController.oneEmployeeForEmail);

router.put('/edit-employee/:idType/:idNumber', employeeController.editEmployee);

export default router;