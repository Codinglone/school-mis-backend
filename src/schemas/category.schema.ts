import {Type as T} from "@sinclair/typebox";
import { createCategoryController } from "../controllers/category.controller";


const categorySchema = T.Object({
    id: T.String(),
    categoryName: T.String(),
    duration: T.String(),
    registeredOn: T.Date(),
    updatedOn: T.Date()
})

const createCategorySchema = T.Object({
    categoryName: T.String(),
    duration: T.String()
})




export const createCategoryOpts = {
    schema: {
        body: T.Strict(createCategorySchema),
        response: {
            201: categorySchema
        }
    },
    handler: createCategoryController
}

export const getCategoriesOpts = {
    schema: {
        response: {
            200: categorySchema
        }
    }
}