from fairnews.config import Config
from fairnews.news import News

config = Config()

news = News(config.api_key)

# Initialize web server
from flask import Flask, jsonify
app = Flask(__name__)

# Default route - display headlines from common sources
@app.route('/')
def headlines():
    response = news.headlines()
    return jsonify(response)

