import { Router } from "express";
import { EmployeeController } from "../controller/employee.controller";

const { getAllEmployees, getAllAdminEmployees, getAllNormalEmployees, getEmployeeById, getEmployeeByEmail, getEmployeeByRut, createEmployee, updateEmployee, deleteEmployee } = EmployeeController

const employeeRouter = Router()

employeeRouter.route("/")
    .get(getAllEmployees)
    .post(createEmployee)
    .put(updateEmployee)
    .delete(deleteEmployee)
employeeRouter.route("/admins")
    .get(getAllAdminEmployees)
employeeRouter.route("/standards")
    .get(getAllNormalEmployees)
employeeRouter.route("/findById")
    .post(getEmployeeById)
employeeRouter.route("/findByEmail")
    .post(getEmployeeByEmail)
employeeRouter.route("/findByRut")
    .post(getEmployeeByRut)