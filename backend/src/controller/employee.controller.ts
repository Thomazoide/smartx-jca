import { Request, Response } from "express";
import { EmployeeService } from "../service/employee.service";
import { crudEntityRequest, defaultPayload, searchEntityByAttributeRequest } from '../types/payloads';
import { Employee } from "../models/employee.entity";

const { GetAllEmployees, GetAllAdminEmployees, GetAllNormalEmployees, GetEmployeeById, GetEmployeeByEmail, GetEmployeeByRut, CreateEmployee, UpdateEmployee, DeleteEmployee } = EmployeeService

export const EmployeeController = {
    getAllEmployees: async (_request: Request, response: Response<defaultPayload<Employee[]>>) => {
        try{    
            const employees: Employee[] = await GetAllEmployees()
            response.json({
                success: true,
                data: employees
            })
        }catch(err: any){
            response.json({
                success: false,
                message: err.message
            })
        }

    },
    getAllAdminEmployees: async (_request: Request, response: Response<defaultPayload<Employee[]>>) => {
        try{
            const employees: Employee[] = await GetAllAdminEmployees()
            response.json({
                success: true,
                data: employees
            })
        }catch(err: any){
            response.json({
                success: false,
                message: err.message
            })
        }
    },
    getAllNormalEmployees: async (_request: Request, response: Response<defaultPayload<Employee[]>>) => {
        try{
            const employees: Employee[] = await GetAllNormalEmployees()
            response.json({
                success: true,
                data: employees
            })
        }catch(err: any){
            response.json({
                success: false,
                message: err.message
            })
        }
    },
    getEmployeeById: async (request: Request<any, any, searchEntityByAttributeRequest<number>>, response: Response<defaultPayload<Employee>>) => {
        try{
            const result: Employee | null = await GetEmployeeById(request.body.key)
            if(!result) {
                throw new Error("Empleado no existente...")
            }
            response.json({
                success: true,
                data: result
            })
        }catch(err: any){
            response.json({
                success:false,
                message: err.message
            })
        }
    },
    getEmployeeByEmail: async (request: Request<any, any, searchEntityByAttributeRequest<string>>, response: Response<defaultPayload<Employee>>) => {
        try{
            const result: Employee | null = await GetEmployeeByEmail(request.body.key)
            if(!result) {
                throw new Error("Empleado no existente...")
            }
            response.json({
                success: true,
                data: result
            })
        }catch(err: any){
            response.json({
                success:false,
                message: err.message
            })
        }
    },
    getEmployeeByRut: async (request: Request<any, any, searchEntityByAttributeRequest<string>>, response: Response<defaultPayload<Employee>>) => {
        try{
            const result: Employee | null = await GetEmployeeByRut(request.body.key)
            if(!result) {
                throw new Error("Empleado no existente...")
            }
            response.json({
                success: true,
                data: result
            })
        }catch(err: any){
            response.json({
                success:false,
                message: err.message
            })
        }
    },
    createEmployee: async (request: Request<any, any, crudEntityRequest<Employee>>, response: Response<defaultPayload<Employee>>) => {
        try {
            const result: Employee = await CreateEmployee(request.body.entity)
            response.json({
                success: true,
                data: result
            })
        } catch (err: any) {
            response.json({
                success: false,
                message: err.message
            })
        }
    },
    updateEmployee: async (request: Request<any, any, crudEntityRequest<Employee>>, response: Response<defaultPayload<Employee>>) => {
        try{
            const result: Employee = await UpdateEmployee(request.body.entity)
            response.json({
                success: true,
                data: result
            })
        }catch(err: any){
            response.json({
                success: false,
                message: err.message
            })
        }
    },
    deleteEmployee: async (request: Request<any, any, crudEntityRequest<Employee>>, response: Response<defaultPayload<null>>) => {
        try {
            const message: string = await DeleteEmployee(request.body.entity)
            response.json({
                success: true,
                message
            })
        } catch (err: any) {
            response.json({
                success: false,
                message: err.message
            })
        }
    }
}