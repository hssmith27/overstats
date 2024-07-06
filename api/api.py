import requests
import json
from flask import Flask

app = Flask(__name__)

url = "https://ow-api.com/v1/stats/pc/us/zinthos-12370/profile"
response = requests.get(url)
response_json = response.json()

@app.route('/endorsement')
def get_endorsement():
    return {'endorsement': response_json["endorsement"]}