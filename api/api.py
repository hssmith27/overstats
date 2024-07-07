import requests
import json
from flask import Flask

app = Flask(__name__)

@app.route('/stats/<battleNetID>')
def get_endorsement(battleNetID):
    url = "https://ow-api.com/v1/stats/pc/us/" + battleNetID + "/profile"
    response = requests.get(url)
    response_json = response.json()
    return {'stats': response_json}