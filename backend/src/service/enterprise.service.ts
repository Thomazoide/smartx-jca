import { Repository } from "typeorm";
import { bbdd } from "../config/dataSource";
import { Enterprise } from "../models/enterprise.entity";

const repository: Repository<Enterprise> = bbdd.getRepository(Enterprise)

export const EnterpriseRepository = {
    GetAllEnterprises: async function(): Promise<Enterprise[]> {
        return await repository.find()
    },
    GetEnterpriseById: async function(id: number): Promise<Enterprise | null> {
        return await repository.findOneBy({id})
    },
    CreateEnterprise: async function(enterprise: Partial<Enterprise>): Promise<Enterprise> {
        const exists: Enterprise | null = await repository.findOneBy({name: enterprise.name})
        if(exists){
            throw new Error("Nombre de empresa ya registrado...")
        }
        return await repository.save(enterprise)
    },
    UpdateEnterprise: async function(enterprise: Partial<Enterprise>): Promise<Enterprise> {
        if(!enterprise.id) {
            throw new Error("Empresa probablemente no registrada...")
        }
        return await repository.save(enterprise)
    }
}