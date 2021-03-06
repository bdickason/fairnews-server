import dotenv from 'dotenv'

dotenv.config();	// Load environment variables from .env

import News from './lib/news.js'

let news = new News(process.env.NEWS_API)

import Server from './lib/server.js'

new Server(news)