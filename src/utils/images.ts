const multer = require("fastify-multer")

const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname)
    } 
})

const upload = multer({ storage })

export default upload;