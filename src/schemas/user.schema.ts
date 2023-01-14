import {Type as T} from "@sinclair/typebox";
import { createUserController } from "../controllers/user.controller";

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
            200: userSchema
        }
    },
    handler: createUserController
}


export {createUserOpts}