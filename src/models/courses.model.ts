import { AppDataSource } from "../data-source";
import { Courses } from "../entity/Courses";
import { coursesPayload } from "../utils/payloads";

const coursesRepo = AppDataSource.getRepository(Courses)

export class coursesModel {
    static postCreateCourse = async (payload: coursesPayload): Promise<any> => {

    }
}