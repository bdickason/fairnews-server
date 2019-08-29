import NewsAPI from 'newsapi'

export default class News {
    constructor(key) {
        let newsAPI
        if(!key) {
            throw new Error('News API Key Missing')
        }
        
        newsAPI = new NewsAPI(key).v2

        newsAPI.topHeadlines({
            sources: 'fox-news'
        }).then(response => {
            console.log(response)
        })

    }
}