import { Router } from "express";
import { UserController } from "../controller/user.controller";

const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = UserController

export const userRouter = Router()
userRouter.route("/")
    .get(getAllUsers)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser)

userRouter.route("/findById")
    .post(getUserById)