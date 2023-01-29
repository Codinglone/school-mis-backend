import { userEndpoints } from "../utils/enums";
import { createUserOpts, getUsersOpts } from "../schemas/user.schema";

const usersRoutes = (fastify, opts, done) => {
    fastify.post(userEndpoints.USERS, createUserOpts);
    fastify.get(userEndpoints.USERS, getUsersOpts);
    done()
}

module.exports = usersRoutes