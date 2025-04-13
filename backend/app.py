
from flask import Flask, request, jsonify
import os
from openai import OpenAI
from dotenv import load_dotenv

app = Flask(__name__)

# Load the API key from .env
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise ValueError("OPENAI_API_KEY not found in .env file")

client = OpenAI(api_key=api_key)

@app.route('/api/get_answer', methods=['POST'])
def get_answer():
    try:
        data = request.get_json()
        if not data or 'question' not in data:
            return jsonify({'error': 'Missing "question" field in request body'}), 400

        user_question = data['question']

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a Language Assistant"},
                {"role": "user", "content": user_question}
            ],
            max_tokens=1000
        )

        return jsonify({"answer": response.choices[0].message.content.strip()})

    except Exception as e:
        print("Error in /api/get_answer:", str(e))  # Log the error in the terminal
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

