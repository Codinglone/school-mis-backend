import { AppDataSource } from "./data-source"
const fastify = require('fastify')({logger: true});
const PORT = parseInt(process.env.FASTIFY_PORT) || 5000;

fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/api-docs',
    swagger: {
        info: {
            title: 'School MIS Backend',
            description: 'School MIS Backend using TypeORM, Fastify and Postgres',
            version: "1.0.0",
        }
    }
})

fastify.register(require('./routes/school.routes'))

AppDataSource.initialize().then(async () => {

    const start = async () => {
        try {
          await fastify.listen({ port:  PORT})
        } catch (err) {
          fastify.log.error(err)
          process.exit(1)
        }
      }
      start()
    console.log("connected!!")

}).catch(error => console.log(error))
