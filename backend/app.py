from flask import Flask, request, jsonify
from flask_cors import CORS
from architecture.openai_handler import generate_system_architecture
import os
import json

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from frontend

SAVE_DIR = os.path.join(os.path.dirname(__file__), '../data/generated_architectures')
os.makedirs(SAVE_DIR, exist_ok=True)

@app.route('/api/generate_architecture', methods=['POST'])
def generate_architecture():
    print("🔄 Generating architecture...")
    try:
        data = request.get_json(force=True)
        axes = data.get("axes", [])
        description = data.get("description", "")

        result = generate_system_architecture(axes, description)

        # Parse the string result into a Python dictionary
        architecture_data = json.loads(result)

        with open(os.path.join(SAVE_DIR, 'architecture.json'), 'w') as f:
            f.write(result)

        return jsonify({"architecture": architecture_data})

    except Exception as e:
        print("❌ Error in generate_architecture:", e)
        return jsonify({"error": str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True)