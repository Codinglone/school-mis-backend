export const successController = (req, reply) => {
    try {
        const response = "Wow my site is running🥰"
      
        reply.code(200).send(response)

    } catch (error) {
        reply.code(400).send(error)
    }
}