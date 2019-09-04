from lib.config import Config

# Setup News API
from newsapi import NewsApiClient

config = Config()

newsapi = NewsApiClient(config.api_key)

top_headlines = newsapi.get_top_headlines(sources='cnn, fox-news')

# Initialize web server
from flask import Flask
app = Flask(__name__)

# Default route - display headlines from common sources
@app.route('/')
def hello_world():
    return top_headlines