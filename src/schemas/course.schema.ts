import { Type as T } from "@sinclair/typebox";
import upload from "../utils/images";
import { createCourseController } from "../controllers/course.controller";

const courseSchema = T.Object({
    name: T.String(),
    profile: T.String()
})

const courseOpts = {
    schema: {
        // body: T.Strict(courseSchema)
        response: {
            201: courseSchema
        }
    },
    preHandler: upload.fields([{ name: "profile" }]),
    handler: createCourseController
}

export { courseOpts }