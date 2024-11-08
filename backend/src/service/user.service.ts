import { Repository } from "typeorm";
import { bbdd } from "../config/dataSource";
import { User } from "../models/user.entity";

const repository: Repository<User> = bbdd.getRepository(User)

export const UserRepository = {
    GetAllUsers: async function(): Promise<User[]> {
        return await repository.find()
    },
    GetUserById: async function(id: number): Promise<User | null> {
        return await repository.findOneBy({id})
    },
    CreateUser: async function(user: Partial<User>): Promise<User> {
        const exists: User | null = await repository.findOneBy({email: user.email})
        if(exists) {
            throw new Error("Email ya registrado...")
        }
        return await repository.save(user)
    },
    UpdateUser: async function(user: Partial<User>): Promise<User> {
        if(!user.id) {
            throw new Error("Usuario posiblemente no registrado...")
        }
        return await repository.save(user)
    }
}