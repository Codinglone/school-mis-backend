import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const jwt = require('jsonwebtoken');

const checkauth = (req, res, next) => {
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
        }
        
    } catch (error) {
        res.code(401).send({ message: "Wrong Authentication!", error })
    }
}

export default checkauth

