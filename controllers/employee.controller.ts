import { Employee } from "../db/db-config";
import { Request, Response } from 'express'
import { Op } from 'sequelize';
 
export default class EmployeeControllet {
    private static _instance: EmployeeControllet;

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    async listEmployee(req: Request, res: Response) {
        const from: number = Number(req.query.from) || 0;

        const general = req.query.general || '';
        const idType = req.query.idType || null;
        const country = req.query.country || null;
        const state = req.query.state || null;

        const w = {
            [Op.or]: {
                name: {
                    [Op.like]: `%${general}%`
                },
                otherName: {
                    [Op.like]: `%${general}%`
                },
                surname: {
                    [Op.like]: `%${general}%`
                },
                secondSurname: {
                    [Op.like]: `%${general}%`
                },
                idNumber: {
                    [Op.like]: `%${general}%`
                },
                email: {
                    [Op.like]: `%${general}%`
                },
            },
        };

        if (idType) {
            Object.assign(w, {idType: Number(idType)})
        }
        if (country) {
            Object.assign(w, {countryEmployment: Number(country)})
        }
        if (state) {
            Object.assign(w, {state: Number(state)})
        }

        console.log({general, idType, country, state});

        try {
            const {rows: employees, count: total} = await Employee.findAndCountAll({
                offset: from,
                limit: 10,
                where: w
            });

            res.status(201).json({
                ok: true,
                employees,
                total
            });
        } catch (error) {
            res.status(500).json({
                ok: false,
                error,
                message: 'Ocurrió un error al tratar de obtener la lista de empleados'
            });
        }
    }
    
    
    async deleteEmployee(req: Request, res: Response) {
        const { idType, idNumber } = req.params;
        try {
            const employee = await Employee.destroy({
                where: {
                    idType,
                    idNumber
                }
            });
            res.status(200).json({
                ok: true,
                employee
            });
        } catch (error) {
            res.status(500).json({
                ok: false,
                error,
                message: 'Ocurrió un error al tratar de obtener la lista de empleados'
            });
        }
    }
    
    async oneEmployee(req: Request, res: Response) {
        const { idType, idNumber } = req.params;
        try {
            const employee = await Employee.findOne({
                where: {
                    idType,
                    idNumber
                }
            });
            res.status(200).json({
                ok: true,
                employee
            });
        } catch (error) {
            res.status(500).json({
                ok: false,
                error,
                message: 'Ocurrió un error al tratar de obtener la lista de empleados'
            });
        }
    }

    async oneEmployeeForEmail(req: Request, res: Response) {
        const { email, idType, idNumber } = req.params;
        try {
            const employee =  await Employee.findOne({
                where: {
                    email,
                    [Op.or]: {
                        idType: {
                            [Op.ne]: idType
                        },
                        idNumber: {
                            [Op.ne]: idNumber
                        }
                    }
                }
            });

            res.status(200).json({
                ok: true,
                exist: employee ? true : false
            })
        } catch (error) {
            res.status(500).json({
                ok: false,
                error,
                message: 'Ocurrió un error al tratar de obtener la lista de empleados'
            });
        }
    }

    async editEmployee(req: Request, res: Response) {
        const { idType: idT, idNumber: idN } = req.params;
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
        try {
            console.log(email);
            
            const employee =  await Employee.update({
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
            }, {
                where: {
                    idType: idT,
                    idNumber: idN
                }
            })
            console.log(employee);
            res.status(200).json({
                ok: true,
                employee
            })
        } catch (error) {
            res.status(500).json({
                ok: false,
                error,
                message: 'Ocurrió un error al tratar modificar un empleado'
            });
        }
    }

}