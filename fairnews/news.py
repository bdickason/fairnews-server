# Pull news from sources

# Setup News API
from newsapi import NewsApiClient

class News:
    def __init__(self, api_key):
        self.newsapi = NewsApiClient(api_key)
    
    def headlines(self):
        headlines = self.newsapi.get_top_headlines(sources='cnn, fox-news')
        return(headlines)