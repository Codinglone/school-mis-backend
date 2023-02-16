import { CategoriesModel } from "../models/categories.model";

export const createCategoryController = async(req, reply) => {
    try {
        const response = await CategoriesModel.postCreateCategory(req.body);
        reply.code(201).send(response);
        
    } catch (error) {
        reply.code(400).send(error)
    }
}

export const getCategoriesController = async(req, reply) => {
    try {
        
    } catch (error) {
        
    }
}