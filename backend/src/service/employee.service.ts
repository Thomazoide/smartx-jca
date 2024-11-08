import { bbdd } from "../config/dataSource";
import { Repository } from "typeorm";
import { Employee } from "../models/employee.entity";

const repository: Repository<Employee> = bbdd.getRepository(Employee)

export const EmployeeService = {
    GetAllEmployees: async function(): Promise<Employee[]> {
        return await repository.find()
    },
    GetEmployeeById: async function(id: number): Promise<Employee | null> {
        return await repository.findOneBy({id})
    },
    GetAllAdminEmployees: async function(): Promise<Employee[]> {
        return await repository.findBy({isAdmin: true})
    },
    GetAllNormalEmployees: async function(): Promise<Employee[]> {
        return await repository.findBy({isAdmin: false})
    },
    GetEmployeeByRut: async function(rut: string): Promise<Employee | null> {
        return await repository.findOneBy({rut})
    },
    GetEmployeeByEmail: async function(email: string): Promise<Employee | null> {
        return await repository.findOneBy({email})
    },
    CreateEmployee: async function(employee: Partial<Employee>): Promise<Employee> {
        const rutExists: Employee | null = await repository.findOneBy({rut: employee.rut})
        const emailExists: Employee | null = await repository.findOneBy({email: employee.email})
        if(rutExists || emailExists) {
            throw new Error("Empleado ya registrado...")
        }
        return await repository.save(employee)
    },
    UpdateEmployee: async function(employee: Partial<Employee>): Promise<Employee> {
        if(!employee.id) {
            throw new Error("Empleado posiblemente no registrado...")
        }
        return await repository.save(employee)
    },
    DeleteEmployee: async function(employee: Partial<Employee>): Promise<string> {
        if(!employee.id) {
            throw new Error("Empleado no existente...")
        }
        await repository.delete({id: employee.id})
        return "Empleado eliminado..."
    }
}