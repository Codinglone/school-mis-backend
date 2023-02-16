import { createCategoryOpts, getCategoriesOpts } from './../schemas/category.schema';
import { userEndpoints, categoryEndpoints } from "../utils/enums";
import { createUserOpts, getUsersOpts, loginOpts } from "../schemas/user.schema";

const usersRoutes = (fastify, opts, done) => {
    fastify.post(userEndpoints.USERS, createUserOpts);
    fastify.get(userEndpoints.USERS, getUsersOpts);
    fastify.post(`${userEndpoints.USERS}/login`, loginOpts);
    fastify.post(categoryEndpoints.CATEGORIES, createCategoryOpts);
    fastify.get(categoryEndpoints.CATEGORIES, getCategoriesOpts)
    done()
}

module.exports = usersRoutes