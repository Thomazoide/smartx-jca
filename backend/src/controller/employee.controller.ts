import { Request, Response } from "express";
import { EmployeeService } from "../service/employee.service";
import { crudEntityRequest, defaultPayload, searchEntityByAttributeRequest } from '../types/payloads';
import { Employee } from "../models/employee.entity";

const { GetAllEmployees, GetAllAdminEmployees, GetAllNormalEmployees, GetEmployeeById, GetEmployeeByEmail, GetEmployeeByRut, CreateEmployee, UpdateEmployee, DeleteEmployee } = EmployeeService

export const EmployeeController = {
    getAllEmployees: async (_request: Request, response: Response<defaultPayload<Employee[]>>) => {
        return await GetAllEmployees()
    },
    getAllAdminEmployees: async (_request: Request, response: Response<defaultPayload<Employee[]>>) => {
        return await GetAllAdminEmployees()
    },
    getAllNormalEmployees: async () => {}
}