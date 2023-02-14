import { AppDataSource } from "../data-source";
import { Categories } from "../entity/Categories";
import { categoryPayload } from "../utils/payloads";

const categoriesRepo = AppDataSource.getRepository(Categories);

export class CategoriesModel {
    static postCreateCategory = async (payload: categoryPayload): Promise<any> => {
     
            const category = new Categories()
            return await categoriesRepo.save({
                ...category,
                ...payload
            })
     
    }
}