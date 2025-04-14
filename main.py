from flask import Flask, jsonify
from flask_cors import CORS

import string;
import random;

app = Flask(__name__) #flask application setup
CORS(app)

@app.route('/run-python-script', methods=['GET'])
def run_python_script():
    return jsonify({'output': 'Hello from Python backend!'})

@app.route('/random-generator', methods=['GET'])
def random_generator():
    return jsonify({'random': ''.join(random.choice(string.ascii_uppercase + string.digits + string.ascii_lowercase + "!.?,") for _ in range(10))})

if __name__ == '__main__': #running flask server
    app.run(debug=True)