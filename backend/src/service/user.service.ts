import { Repository } from "typeorm";
import { bbdd } from "../config/dataSource";
import { User } from "../models/user.entity";
import bcrypt from 'bcrypt'
import 'dotenv/config'

const repository: Repository<User> = bbdd.getRepository(User)

export const UserService = {
    GetAllUsers: async function(): Promise<User[]> {
        return await repository.find()
    },
    GetUserById: async function(id: number): Promise<User | null> {
        return await repository.findOneBy({id})
    },
    CreateUser: async function(user: Partial<User>): Promise<User> {
        const exists: User | null = await repository.findOneBy({email: user.email})
        const salt: string = await bcrypt.genSalt(Number(process.env["SALT"]))
        const hash: string = await bcrypt.hash(user.password!, salt)
        const newUser: User = new User()
        newUser.name = user.name!
        newUser.username = user.username!
        newUser.email = user.email!
        newUser.password = hash
        if(exists) {
            throw new Error("Email ya registrado...")
        }
        return await repository.save(newUser)
    },
    UpdateUser: async function(user: Partial<User>): Promise<User> {
        if(!user.id) {
            throw new Error("Usuario posiblemente no registrado...")
        }
        return await repository.save(user)
    },
    DeleteUser: async function(user: Partial<User>): Promise<string> {
        if(!user.id) {
            throw new Error("Usuario no existente...")
        }
        repository.delete({id: user.id})
        return "Usuario eliminado..."
    }
}