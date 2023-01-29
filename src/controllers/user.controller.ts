import { UserModel } from "../models/users.model";
const bcrypt = require('bcrypt');
export const createUserController = async(req, reply) => {
    try {        
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const response = await UserModel.postCreateUser(req.body)
        reply.code(201).send(response);
    } catch (error) {
        reply.code(400).send(error)
    }
}

export const getUsersController = async(req, reply) => {
    try {
        const response = await UserModel.getAllUsers()
        reply.code(200).send(response);
        
    } catch (error) {
        reply.code(400).send(error)
    }
}

export const loginController = async(req, reply) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const response = await UserModel.loginUser(req.body.email, req.body.password)
        reply.code(200).send(response)
    } catch (error) {
        reply.code(400).send(error)
    }
}
