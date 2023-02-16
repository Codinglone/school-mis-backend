import { createCategoryOpts } from './../schemas/category.schema';
import { userEndpoints } from "../utils/enums";
import { createUserOpts, getUsersOpts, loginOpts } from "../schemas/user.schema";

const usersRoutes = (fastify, opts, done) => {
    fastify.post(userEndpoints.USERS, createUserOpts);
    fastify.get(userEndpoints.USERS, getUsersOpts);
    fastify.post(`${userEndpoints.USERS}/login`, loginOpts);
    fastify.post(`${userEndpoints.USERS}/`)
    done()
}

module.exports = usersRoutes