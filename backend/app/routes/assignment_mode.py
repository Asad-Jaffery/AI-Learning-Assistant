from openai import OpenAI
import os
from flask import Blueprint, jsonify, request


assignment_llm = Blueprint("assignment_llm", __name__)


@assignment_llm.route("/api/assignment_llm", methods=["POST"])
def llm_call():
    data = request.json
    user_prompt = data.get("prompt", "say 'this is the assignment mode'")
    client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key= os.getenv("OPENROUTER_API_KEY")
    )

    completion = client.chat.completions.create(
    model="openai/gpt-4o-mini",
    messages=[
        {
        "role": "user",
        "content": user_prompt
        }
    ])
    return jsonify ({ "message": completion.choices[0].message.content})



