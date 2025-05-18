import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_architecture(data):
    # Format prompt based on input data (simplified example)
    prompt = f"""
    You are a software architect. Given the following PLC system description and axis/sensor config, generate:
    1. System overview
    2. Required libraries
    3. Class/function definitions with input/output types
    4. Hardware recommendations
    
    Input data:
    {data}
    """
    # Call OpenAI Completion (you can customize model and params)
    completion = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=1000,
        temperature=0.2,
    )
    return completion.choices[0].message.content
