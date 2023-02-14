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

    static loginUser = async(email: string, password: string):Promise<any> => {

        const foundUser = userRepo.findOneBy({email})
        const check = await bcrypt.compare(password, (await foundUser).password);

        console.log(check);

        if(check){
            return await userRepo.findOneBy({
                email
            })
        }

        return null;

    }
}