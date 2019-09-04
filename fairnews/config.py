# Import environment variables (API Keys, etc)
from dotenv import load_dotenv
import os

class Config:
    def __init__(self):
        load_dotenv()
        self.api_key = os.environ['NEWS_API']