import NewsAPI from 'newsapi'

export default class News {
    constructor(key) {
        if(!key) {
            throw new Error('News API Key Missing')
        }
        
        this.newsAPI = new NewsAPI(key).v2

    }

    async headlines() {
        if(!this.newsAPI) {
            throw new Error('news API cannot be defined')
        }

        let response = await this.newsAPI.topHeadlines({
            sources: 'fox-news, cnn'
        })
    
        return response
    }

    async headlinesBySource(source) {
        if(!this.newsAPI) {
            throw new Error('news API cannot be defined')
        }

        let response = await this.newsAPI.topHeadlines({
            sources: source
        })
    
        return response
    }

}