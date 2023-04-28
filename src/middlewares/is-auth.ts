import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const jwt = require('jsonwebtoken');

const checkauth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader.substring(7)
        console.log("Received token ==> ", token);
        if(!token){
            return res.code(401).send({ message: "Access denied, Try again!" })
        }
        else {
            const verifyToken = jwt.verify(
                token,
                process.env.AUTH_SECRET
            )
            const userId = verifyToken.id
            const userRepository = AppDataSource.getRepository(User)
            const findUser = await userRepository.findOneBy({
                id: userId
            })

            if(findUser){
                req.user = findUser
                next()
            }
            else {
                res.code(401).send({ message: "Token is not valid!" })
            }
        }
        
    } catch (error) {
        res.code(401).send({ message: "Wrong Authentication!", error })
    }
}

export default checkauth

