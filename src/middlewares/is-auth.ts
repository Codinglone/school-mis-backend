import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const jwt = require('jsonwebtoken');

const checkauth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
    } catch (error) {
        res.code(401).send({ message: "Wrong Authentication!", error })
    }
}

export default checkauth

