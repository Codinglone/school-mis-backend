import { CoursesModel } from "../models/courses.model";

export const createCourseController = async (req, reply) => {
    try {
        const response = await CoursesModel.postCreateCourse(req.body, req.file)
        reply.code(201).send(response)
    } catch (error) {
        reply.code(204).send(error)
    }
}