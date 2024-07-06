import requests

url = "https://ow-api.com/v1/stats/pc/us/zinthos-12370/profile"
response = requests.get(url)
response_json = response.json()

print(response_json["endorsement"]) 