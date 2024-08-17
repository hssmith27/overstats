import requests
import json
from flask import Flask

app = Flask(__name__)

@app.route('/summary/<battleNetID>')
def get_summary(battleNetID):
    try:
        url = "https://overfast-api.tekrop.fr/players/" + battleNetID + "/summary"
        response = requests.get(url)
        response_json = response.json()

        url_stats = "https://overfast-api.tekrop.fr/players/" + battleNetID + "/stats/summary"
        response_stats = requests.get(url_stats)
        response_stats_json = response_stats.json()

        return response_json | response_stats_json

    except NewConnectionError:
        return json.dumps({"username": "-"})

    
    
    