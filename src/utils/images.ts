const multer = require("fastify-multer")

const upload = multer({ dest: 'uploads/' })

export default upload;