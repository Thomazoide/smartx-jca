import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { crudEntityRequest, defaultPayload, searchEntityByAttributeRequest } from "../types/payloads";
import { User } from "../models/user.entity";

const { GetAllUsers, GetUserById, CreateUser, UpdateUser, DeleteUser } = UserService

export const UserController = {
    getAllUsers: async (_request: Request, response: Response) => {
        try{
            const users: User[] = await GetAllUsers()
            const res: defaultPayload<User[]> = {
                data:users,
                success: true
            }
            response.json(res)
        }catch(err: any){
            const res: defaultPayload<null> ={
                message: err.message,
                success: false
            }
            response.json(res)
        }
    },
    getUserById: async (request: Request<any, any, searchEntityByAttributeRequest<number>>, response: Response<defaultPayload<User>>) => {
        try{
            const id: number = request.body.key
            const user: User | null = await GetUserById(id)
            if(!user) {
                throw new Error("Usuario no existente")
            }
            response.json({
                data: user,
                success: true
            })
        }catch(err: any){
            response.json({
                message: err.message,
                success: false
            })
        }
    },
    createUser: async (request: Request<any, any, crudEntityRequest<User>>, response: Response<defaultPayload<User>>) => {
        try{
            const newUserReq: Partial<User> = request.body.entity
            const newUser: User = await CreateUser(newUserReq)
            response.json({
                data: newUser,
                success: true
            })
        }catch(err: any){
            response.json({
                message: err.message,
                success: false
            })
        }
    },
    updateUser: async (request: Request<any, any, crudEntityRequest<User>>, response: Response<defaultPayload<User>>) => {
        try{
            const userPayload: Partial<User> = request.body.entity
            const result: User = await UpdateUser(userPayload)
            response.json({
                data: result,
                success: true
            })
        }catch(err: any){
            response.json({
                message: err.message,
                success: false
            })
        }
    },
    deleteUser: async (request: Request<any, any, crudEntityRequest<User>>, response: Response<defaultPayload<null>>) => {
        try{
            const entity: Partial<User> = request.body.entity
            if(!entity.id) {
                throw new Error("Usuario no existente...")
            }
            const message: string = await DeleteUser(entity)
            response.json({
                message,
                success: true
            })
        }catch(err: any){
            response.json({
                message: err.message,
                success: false
            })
        }
    }
}