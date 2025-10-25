from openai import OpenAI
import os
from flask import Blueprint, jsonify, request


study_mode_llm = Blueprint("study_mode_llm", __name__)

@study_mode_llm.route("/api/study_llm", methods=["POST"])
def llm_call():
    data = request.json
    user_prompt = data.get("prompt", "identify what your role is")
    system_prompt = ''' You are an AI assistant who is tasked with helping a student understant concepts. 
            Explain all concepts as if it was to an 8th grader.'''

    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key=os.getenv("OPENROUTER_API_KEY")
    )

    completion = client.chat.completions.create(
        model="openai/gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}]
    )

    return jsonify({"message": completion.choices[0].message.content})
