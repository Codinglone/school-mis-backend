import {Type as T} from "@sinclair/typebox";

const createUserSchema = T.Object({
    firstName: T.String(),
    lastName: T.String(),
    email: T.String(),
    password: T.String(),
    role: T.String(),
    school: T.String()
})
