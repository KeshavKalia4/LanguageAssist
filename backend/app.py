import os
from openai import OpenAI
from dotenv import load_dotenv

# Load the API key from .env
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=api_key)

user_question = input("Ask something: ")

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a Language Assistant"},
        {"role": "user", "content": user_question}
    ],
    max_tokens=100
)

print(response.choices[0].message.content.strip())
