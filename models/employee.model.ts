import { DataTypes, Sequelize } from 'sequelize';
import { EmployeeStatic } from '../types/employee.type';

export function EmployeeFactory(sequelize: Sequelize): EmployeeStatic {
    return <EmployeeStatic>sequelize.define('employee', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        otherName: {
            type: DataTypes.STRING(50),
        },
        surname: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        secondSurname: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        idType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idNumber: {
            type: DataTypes.CHAR,
            allowNull: false,
            primaryKey: true
        },
        countryEmployment: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(300),
            allowNull: false,
            validate: {
                isEmail: {
                    msg: 'Debe ingresar un correo válido'
                },
            },  
            unique: true
        },
        dateAdmission: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        area: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
}