import { AppDataSource } from "../data-source";
import { Courses } from "../entity/Courses";
import { coursesPayload } from "../utils/payloads";

const coursesRepo = AppDataSource.getRepository(Courses)

export class CoursesModel {
    static postCreateCourse = async (payload: coursesPayload, profile:any): Promise<any> => {
        const course = new Courses()
        return await coursesRepo.save({
            ...payload,
            ...course,
            profile
        })
    }
}