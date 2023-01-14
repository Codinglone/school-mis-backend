import { userEndpoints } from "../utils/enums";
import { createUserOpts } from "../schemas/user.schema";

const usersRoutes = (fastify, opts, done) => {
    fastify.post(userEndpoints.USERS, createUserOpts);
}