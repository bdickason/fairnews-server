import dotenv from 'dotenv'

dotenv.config();	// Load environment variables from .env

console.log(process.env.NEWS_API);

import News from './lib/news.js'

const test = new News()
console.log(test)