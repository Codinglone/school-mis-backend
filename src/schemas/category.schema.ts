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




const createCategoryOpts = {
    schema: {
        body: T.Strict(categorySchema),
        response: {
            201: categorySchema
        }
    }
}