import { Router } from "express";
import { EnterpriseController } from "../controller/enterprise.controller";

const { getAllEnterprises, getEnterpriseById, createEnterprise, updateEnterprise, deleteEnterprise } = EnterpriseController

export const enterpriseRouter = Router()

enterpriseRouter.route("/")
    .get(getAllEnterprises)
    .post(createEnterprise)
    .put(updateEnterprise)
    .delete(deleteEnterprise)

enterpriseRouter.route("/findById")
    .post(getEnterpriseById)