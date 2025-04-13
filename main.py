from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__) #flask application setup
CORS(app)

@app.route('/run-python-script', methods=['POST'])
def run_python_script():
    return jsonify({'output': 'Hello from Python backend!'})

if __name__ == '__main__': #running flask server
    app.run(debug=True)