import { AppDataSource } from "./data-source"
const fastify = require('fastify');


AppDataSource.initialize().then(async () => {

    const start = async () => {
        try {
          await fastify.listen({ port: 3000 })
        } catch (err) {
          fastify.log.error(err)
          process.exit(1)
        }
      }
      start()
    console.log("connected!!")

}).catch(error => console.log(error))
