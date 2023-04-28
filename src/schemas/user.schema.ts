import {Type as T} from "@sinclair/typebox";
import { createUserController, getUsersController, loginController } from "../controllers/user.controller";

const createUserSchema = T.Object({
    firstName: T.String(),
    lastName: T.String(),
    email: T.String(),
    password: T.String(),
    role: T.String(),
    school: T.String()
})

const userSchema = T.Object({
    id: T.Number(),
    firstName: T.String(),
    lastName: T.String(),
    email: T.String(),
    password: T.String(),
    role: T.String(),
    school: T.String(),
    createdAt: T.String(),
    updatedAt: T.String()
})

const createUserOpts = {
    schema: {
        body: T.Strict(createUserSchema),
        response: {
            201: userSchema
        }
    },
    handler: createUserController
}

const getUsersOpts = {
    schema: {
        response: {
            200: T.Array(userSchema)
        }
    },
    handler: getUsersController
}

const loginSchema = T.Object({
    email: T.String(),
    password: T.String(),
})

const loginOpts = {
    schema: {
        body: T.Strict(loginSchema),
        response: {
            200: userSchema
        }
    },
    handler: loginController
}




export {createUserOpts, getUsersOpts, loginOpts}