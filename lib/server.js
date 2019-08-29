import Fastify from 'fastify'

export default class Server {
    constructor() {
        let fastify = Fastify({logger: true})
        fastify.get('/', async (request, reply) => {
            reply.type('application/json').code(200)
            return { hello: 'world' }
          })
          
        fastify.listen(3000, (err, address) => {
            if (err) throw err
        })
    }
}