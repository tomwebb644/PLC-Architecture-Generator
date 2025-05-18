import json
from openai import OpenAI
import os

client = OpenAI()

def format_input_for_openai(axes, description):
    axis_details = "\n".join([f"- {a['name']}: {a.get('hardware', 'unspecified')}" for a in axes])
    return f"""
You are an expert in TwinCAT + Delphi PLC systems.

Axes to control:
{axis_details}

System Description:
{description}

Please generate a high-level software architecture, suggest needed libraries and hardware, and break the code into modular classes.
Also include function lists with inputs and outputs. Format your response in JSON like:
{{
  "overview": "...",
  "hardware": [...],
  "libraries": [...],
  "classes": [
    {{
      "name": "MotorController",
      "functions": [
        {{"name": "set_speed", "inputs": ["int"], "outputs": ["bool"]}}
      ]
    }}
  ]
}}
"""

def generate_system_architecture(axes, description):
    prompt = format_input_for_openai(axes, description)

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a PLC software architect."},
            {"role": "user", "content": prompt}
        ]
    )
    reply = response.choices[0].message.content
    print (reply)
    return reply