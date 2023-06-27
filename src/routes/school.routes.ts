import { createCategoryOpts, getCategoriesOpts } from './../schemas/category.schema';
import { userEndpoints, categoryEndpoints, courseEndpoints } from "../utils/enums";
import { createUserOpts, getUsersOpts, loginOpts, successOpts } from "../schemas/user.schema";
import { courseOpts } from '../schemas/course.schema';

const usersRoutes = (fastify, opts, done) => {
    fastify.post(userEndpoints.USERS, createUserOpts);
    fastify.get(userEndpoints.USERS, getUsersOpts);
    fastify.get('/success', successOpts)
    fastify.post(`${userEndpoints.USERS}/login`, loginOpts);
    fastify.post(categoryEndpoints.CATEGORIES, createCategoryOpts);
    fastify.get(categoryEndpoints.CATEGORIES, getCategoriesOpts)
    fastify.post(courseEndpoints.COURSES, courseOpts)
    done()
}

module.exports = usersRoutes