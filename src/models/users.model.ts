require("dotenv").config()

import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { userPayload, loginPayload } from "../utils/payloads";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userRepo = AppDataSource.getRepository(User);

export class UserModel {

    static postCreateUser = async(payload: userPayload): Promise<any> => {
        const user = new User();

        return await userRepo.save({
            ...user,
            ...payload
        })
    }

    static getAllUsers = async(): Promise<any> => {
        return await userRepo.find({
            order: {
                createdAt: 'DESC'
            }
        })
    }

    static loginUser = async(payload: loginPayload):Promise<any> => {
        const email = payload.email
        const password = payload.password
        const foundUser = await userRepo.findOneBy({email})
        const check = await bcrypt.compare(password, (await foundUser).password);

        console.log(check);

        if(check){
            const token = jwt.sign(
                {
                    email: foundUser.email,
                    firstName: foundUser.firstName,
                    lastName: foundUser.lastName,
                    role: foundUser.role,
                    school: foundUser.school,
                },
                process.env.AUTH_SECRET
            )
        }

        return null;

    }
}