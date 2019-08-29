import dotenv from 'dotenv'

dotenv.config();	// Load environment variables from .env

import News from './lib/news.js'

const test = new News(process.env.NEWS_API)
console.log(test)