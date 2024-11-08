import { Request, Response } from 'express';
import { EnterpriseService } from '../service/enterprise.service';
import { defaultPayload, crudEntityRequest, searchEntityByAttributeRequest } from '../types/payloads';
import { Enterprise } from '../models/enterprise.entity';

const { GetAllEnterprises, GetEnterpriseById, CreateEnterprise, UpdateEnterprise, DeleteEnterprise } = EnterpriseService

export const EnterpriseController = {
    getAllEnterprises: async (_request: Request, response: Response<defaultPayload<Enterprise[]>>) => {
        try{
            const enterprises: Enterprise[] = await GetAllEnterprises()
            response.json({
                data: enterprises,
                success: true
            })
        }catch(err: any){
            response.json({
                message: err.message,
                success: false
            })
        }
    },
    getEnterpriseById: async (request: Request<any, any, searchEntityByAttributeRequest<number>>, response: Response<defaultPayload<Enterprise>>) => {
        try {
            const enterprise: Enterprise | null = await GetEnterpriseById(request.body.key)
            if(!enterprise) {
                throw new Error("Empresa no existente...")
            }
            response.json({
                data: enterprise,
                success: true
            })
        } catch (err: any) {
            response.json({
                message: err.message,
                success: false
            })
        }
    },
    createEnterprise: async (request: Request<any, any, crudEntityRequest<Enterprise>>, response: Response<defaultPayload<Enterprise>>) => {
        try{
            const result: Enterprise = await CreateEnterprise(request.body.entity)
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
    updateEnterprise: async (request: Request<any, any, crudEntityRequest<Enterprise>>, response: Response<defaultPayload<Enterprise>>) => {
        try {
            const result: Enterprise = await UpdateEnterprise(request.body.entity)
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
    deleteEnterprise: async (request: Request<any, any, crudEntityRequest<Enterprise>>, response: Response<defaultPayload<null>>) => {
        try {
            const message: string = await DeleteEnterprise(request.body.entity)
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