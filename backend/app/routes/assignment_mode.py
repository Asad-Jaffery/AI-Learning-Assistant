from openai import OpenAI
import os
from flask import Blueprint, jsonify, request


assignment_llm = Blueprint("assignment_llm", __name__)


@assignment_llm.route("/api/assignment_llm", methods=["POST"])
def llm_call():
    data = request.json
    user_prompt = data.get("prompt", "")
    
    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key=os.getenv("OPENROUTER_API_KEY")
    )

    system_prompt = '''You are an AI assistant whose job is to help students understand how to complete homework problems. 
            You are strictly prohibited from giving answers to the question. You will take both the question that the student 
            is working on, and their input query to assist them in completing the problem. You may use markdown in your response, 
            but do not use LaTeX or any other formatting tools.'''

    completion = client.chat.completions.create(
        model="openai/gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": system_prompt
            },
            {
                "role": "user",
                "content": user_prompt
            }
        ]
    )
    return jsonify({"message": completion.choices[0].message.content})