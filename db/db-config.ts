import { Sequelize } from 'sequelize';
import { EmployeeFactory } from '../models/employee.model';

export const dbConfig = new Sequelize(
    {
        username: 'root',
        password: '',
        database: 'employees_cidenet',
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

export const Employee = EmployeeFactory(dbConfig);