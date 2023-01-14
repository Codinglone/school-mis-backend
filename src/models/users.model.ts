import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { userPayload } from "../utils/payloads";

const userRepo = AppDataSource.getRepository(User);

export class UserModel {

    static postCreateUser = async(payload: userPayload): Promise<any> => {
        const user = new User();

        return await userRepo.save({
            ...user,
            ...payload
        })
    }
}