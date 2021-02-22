import { BuildOptions, Model } from 'sequelize';


export interface EmployeeAttributes {
    name: string;
    otherName: string;
    surname: string;
    secondSurname: string;
    idType: number;
    idNumber: string;
    countryEmployment: number;
    email: string;
    dateAdmission: Date;
    area: number;
    state: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface EmployeeModel extends Model<EmployeeAttributes>, EmployeeAttributes {}

export class Employee extends Model<EmployeeModel, EmployeeAttributes> {}

export type EmployeeStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): EmployeeModel;
}
