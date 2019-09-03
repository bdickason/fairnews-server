# Import environment variables (API Keys, etc)
from dotenv import load_dotenv
load_dotenv()


# Read environment variables
import os
api_key = os.environ['NEWS_API'] 

# Setup News API
from newsapi import NewsApiClient

newsapi = NewsApiClient(api_key)

top_headlines = newsapi.get_top_headlines(sources='cnn, fox-news')

print(top_headlines)