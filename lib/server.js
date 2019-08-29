import Fastify from 'fastify'

export default class Server {
    constructor(news) {
        this.news = news
        let fastify = Fastify({logger: true})

        fastify.get('/', async (request, reply) => {
            // Get All Headlines
            reply.type('application/json').code(200)

            const headlines = await this.news.headlines()
            return(headlines)
        })

        fastify.get('/source/:source', async (request, reply) => {
            // Get Headlines from a single source

            reply.type('application/json').code(200)



            const source = request.params.source
            if(source == 'cnn' || source == 'fox-news') {
                // Valid Sources
                const headlines = await this.news.headlinesBySource(source)
                return(headlines)
            }
            else return(null)
        })

          
        fastify.listen(3000, (err, address) => {
            if (err) throw err
        })
    }
}