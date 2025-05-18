import os
import json
from datetime import datetime

BASE_DIR = os.path.join(os.path.dirname(__file__), 'projects')
os.makedirs(BASE_DIR, exist_ok=True)

def save_project_input(data):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    project_dir = os.path.join(BASE_DIR, f"project_{timestamp}")
    os.makedirs(project_dir, exist_ok=True)
    input_path = os.path.join(project_dir, 'input.json')
    with open(input_path, 'w') as f:
        json.dump(data, f, indent=2)
