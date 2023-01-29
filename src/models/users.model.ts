import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { userPayload, loginPayload } from "../utils/payloads";
const bcrypt = require('bcrypt');

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
        const check = await bcrypt.compare(password, (await foundUser).password, (err, res) => {
            if(err){
                return false;
            }
            if(res){
                return true;
            }
        });

        return await userRepo.findOneBy({
            email,
            password
        })

    }
}