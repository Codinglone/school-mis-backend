import { UserModel } from "../models/users.model";
export const createUserController = async(req, reply) => {
    try {        
        const response = await UserModel.postCreateUser(req.body);
        reply.code(201).send(response);
    } catch (error) {
        reply.code(400).send(error)
    }
}