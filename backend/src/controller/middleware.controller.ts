import { Request, Response } from "express";
import { GetAllItems, item } from "../middleware/getItems";
import { defaultPayload } from "../types/payloads";
import { requestService, serviceRequestBody } from "../middleware/callServiceOrder";
import { CallCheckIn, checkInBody } from "../middleware/callCheckIn";
import { CallCheckOut, checkOutBody } from "../middleware/callCheckOut";
import { CallItemTransfer, trasferBody } from "../middleware/callTransfer";

export const middleWareController = {
    getAllItems: async function(_request: Request, response: Response<defaultPayload<item[]>>) {
        try{
            response.json({
                success: true,
                data: await GetAllItems()
            })
        }catch(err: any){
            response.json({
                success: false,
                message: err.message
            })
        }
    },
    callServiceOrder: async function(request: Request<any, any, serviceRequestBody>, response: Response<defaultPayload<any>>){
        try{
            response.json({
                success: true,
                data: (await requestService(request.body)).data
            })
        }catch(err: any){
            response.json({
                success: false,
                message: err.message
            })
        }
    },
    callCheckIn: async function(request: Request<any, any, checkInBody>, response: Response<defaultPayload<any>>){
        try{
            const items = await GetAllItems()
            const requestedItemToChekIn = items.filter( (item) => item.id === request.body.items[0] )[0]
            if(requestedItemToChekIn.objDisposition.i18n !== "*CHECK-IN"){
                response.json({
                    success: true,
                    data: (await CallCheckIn(request.body)).data
                })
            } else {
                throw new Error("Item solo disponible para Check-Out...")
            }
        }catch(err: any){
            response.json({
                success: false,
                message: err.message
            })
        }
    },
    callCheckOut: async function(request: Request<any, any, checkOutBody>, response: Response<defaultPayload<any>>){
        try{
            response.json({
                success: true,
                data: (await CallCheckOut(request.body)).data
            })
        }catch(err: any){
            response.json({
                success: false,
                message: err.message
            })
        }
    },
    callItemTransfer: async function(request: Request<any, any, trasferBody>, response: Response<defaultPayload<any>>) {
        try{
            response.json({
                success: true,
                data: (await CallItemTransfer(request.body)).data
            })
        }catch(err: any){
            response.json({
                success: false,
                message: err.message
            })
        }
    }
}